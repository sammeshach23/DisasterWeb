// Initialize Firebase Auth and Firestore
const auth = firebase.auth();

// Authenticate User
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, proceed to fetch data
        fetchVolunteerData();
    } else {
        // User is not signed in, handle accordingly
        alert('You must be signed in to view this page.');
        window.location.href = 'login.html'; // Redirect to login page if needed
    }
});

// Fetch references to the state and city dropdowns and volunteer container
const stateDropdown = document.getElementById('state');
const cityDropdown = document.getElementById('city');
const volunteerContainer = document.getElementById('volunteerContainer');
const applyFilterButton = document.getElementById('applyFilter');

let allVolunteers = [];
let states = new Set();
let cities = new Set();

// Fetch all volunteer data and dynamically populate filter options
function fetchVolunteerData() {
    db.collection('volunteers').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            allVolunteers.push(data);
            states.add(data.state);
            cities.add(data.city);
        });

        populateFilterOptions(states, cities);
    }).catch((error) => {
        console.error('Error fetching volunteer data:', error);
    });
}

// Populate filter dropdowns
function populateFilterOptions(states, cities) {
    stateDropdown.innerHTML = '<option value="">All States</option>';
    cityDropdown.innerHTML = '<option value="">All Cities</option>';

    states.forEach((state) => {
        stateDropdown.innerHTML += `<option value="${state}">${state}</option>`;
    });

    cities.forEach((city) => {
        cityDropdown.innerHTML += `<option value="${city}">${city}</option>`;
    });
}

// Display volunteers in the container
function displayVolunteers(volunteers) {
    volunteerContainer.innerHTML = '';

    if (volunteers.length === 0) {
        volunteerContainer.innerHTML = '<p>No volunteers found.</p>';
        return;
    }

    volunteers.forEach((volunteer) => {
        const volunteerCard = `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${volunteer.full_name}</h5>
                        <p class="card-text"><strong>Phone:</strong> ${volunteer.phone_number}</p>
                        <p class="card-text"><strong>Shift:</strong> ${volunteer.availability}</p>
                        <p class="card-text"><strong>State:</strong> ${volunteer.state}</p>
                        <p class="card-text"><strong>City:</strong> ${volunteer.city}</p>
                    </div>
                </div>
            </div>
        `;
        volunteerContainer.innerHTML += volunteerCard;
    });
}

// Filter volunteers based on selected criteria
function filterVolunteers() {
    const selectedState = stateDropdown.value;
    const selectedCity = cityDropdown.value;

    let filteredVolunteers = allVolunteers;

    if (selectedState) {
        filteredVolunteers = filteredVolunteers.filter(volunteer => volunteer.state === selectedState);
    }

    if (selectedCity) {
        filteredVolunteers = filteredVolunteers.filter(volunteer => volunteer.city === selectedCity);
    }

    displayVolunteers(filteredVolunteers);
}

// Event listener for the filter button
applyFilterButton.addEventListener('click', filterVolunteers);