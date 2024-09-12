document.addEventListener("DOMContentLoaded", function() {
    // Initialize Firebase Authentication and Firestore
    const auth = firebase.auth();
    const db = firebase.firestore();

    // Event listener for the signup form submission
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
      
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
      
        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Create a new user with email and password using Firebase Authentication
        auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            // Save user data in Firestore
            return db.collection("users").add({
                uid: user.uid,
                first_name: firstName,
                last_name: lastName,
                email: email
            });
          })
          .then(() => {
            alert('Signup successful');
            window.location.href = 'login.html'; // Redirect to login page after signup
          })
          .catch(error => {
            console.error('Error during signup:', error.message);
            alert('Error during signup: ' + error.message);
          });
    });
});