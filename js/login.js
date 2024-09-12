// login.js

// Reference to the login form
const loginForm = document.getElementById('loginForm');

// Add a submit event listener to handle the login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Firebase authentication method to sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successfully signed in
      const user = userCredential.user;
      console.log('User signed in:', user);

      // Redirect to a protected page or display a success message
      alert('Login successful!');
      window.location.href = 'index.html'; // Change to your protected page
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during login:', errorCode, errorMessage);

      // Show an alert or error message to the user
      alert('Login failed: ' + errorMessage);
    });
});
