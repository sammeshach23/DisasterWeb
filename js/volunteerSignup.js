document.addEventListener("DOMContentLoaded", function () {
  // Initialize Firebase Authentication and Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Event listener for the signup form submission
  document.getElementById('volunteerSignupForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const fullName = document.getElementById('full_name').value;
      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('phone_number').value;
      const address = document.getElementById('address').value;
      const city = document.getElementById('city').value;
      const state = document.getElementById('state').value;
      const pincode = document.getElementById('pincode').value;
      const skills = document.getElementById('skills').value;
      const availability = document.getElementById('availability').value;
      const experience = document.getElementById('experience').value;
      const interests = document.getElementById('interests').value;
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

              // Save the volunteer information in Firestore
              return db.collection("volunteers").doc(user.uid).set({
                  full_name: fullName,
                  email: email,
                  phone_number: phoneNumber,
                  address: address,
                  city: city,
                  state: state,
                  pincode: pincode,
                  skills: skills,
                  availability: availability,
                  experience: experience,
                  interests: interests,
                  uid: user.uid // Store the user's UID
              });
          })
          .then(() => {
              alert('Signup successful! Thank you for volunteering.');
              window.location.href = 'login.html'; // Redirect to the login page after signup
          })
          .catch((error) => {
              console.error('Error during signup:', error.message);
              alert('Error during signup: ' + error.message);
          });
  });
});