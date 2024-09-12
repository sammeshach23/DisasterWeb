const disasterData = {
    earthquake: {
        questions: [
            {
                question: "What is the first thing you should do when you feel an earthquake?",
                image: "images/Que 1.png", // Updated image path
                options: [
                    { text: "Run outside", image: "images/Q1)Ans1.png", isCorrect: false },
                    { text: "Drop, Cover, and Hold On", image: "images/Q1)Ans2.png", isCorrect: true },
                    { text: "Stand in a doorway", image: "images/Q1)Ans3.png", isCorrect: false },
                    { text: "Call emergency services", image: "images/Q1)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "Where is the safest place to be during an earthquake if you are indoors?",
                image: "images/Que 2.png", // Updated image path
                options: [
                    { text: "Under a sturdy piece of furniture", image: "images/Q2)Ans1.png", isCorrect: true },
                    { text: "Next to an exterior wall", image: "images/Q2)Ans2.png", isCorrect: false },
                    { text: "In a basement", image: "images/Q2)Ans3.png", isCorrect: false },
                    { text: "Near a window", image: "images/Q2)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you have in an earthquake emergency kit?",
                image: "images/Que 3.png", // Updated image path
                options: [
                    { text: "Bottled water", image: "images/Q3)Ans1.png", isCorrect: false },
                    { text: "Flashlight with extra batteries", image: "images/Q3)Ans2.png", isCorrect: false },
                    { text: "Non-perishable food", image: "images/Q3)Ans3.png", isCorrect: false },
                    { text: "All of the above", image: "images/Q3)Ans4.png", isCorrect: true }
                ]
            },
            {
                question: "What should you do if you are in a vehicle during an earthquake?",
                image: "images/Que 4.png", // Updated image path
                options: [
                    { text: "Pull over and stop", image: "images/Q4)Ans1.png", isCorrect: true },
                    { text: "Speed up to get away", image: "images/Q4)Ans2.png", isCorrect: false },
                    { text: "Stop under a bridge", image: "images/Q4)Ans3.png", isCorrect: false },
                    { text: "Keep driving slowly", image: "images/Q4)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "After an earthquake, what should you check first?",
                image: "images/Que 5.png", // Updated image path
                options: [
                    { text: "Injuries", image: "images/Q5)Ans1.png", isCorrect: false },
                    { text: "Gas leaks", image: "images/Q5)Ans2.png", isCorrect: false },
                    { text: "Structural damage", image: "images/Q5)Ans3.png", isCorrect: false },
                    { text: "All of the above", image: "images/Q5)Ans4.png", isCorrect: true }
                ]
            }
        ],
        precautions: "Move to higher ground, avoid walking or driving through floodwaters, and listen to emergency broadcasts.",
        emergencyContact: "🚨 Emergency Contact : 112"
    },
    flood: {
        questions: [
            {
                question: "What is the first action you should take when you are warned of a flood?",
                image: "images/FloodQue1.png", // Updated image path
                options: [
                    { text: "Evacuate to higher ground", image: "images/FloodQ1)Ans1.png", isCorrect: true },
                    { text: "Stay in your home", image: "images/FloodQ1)Ans2.png", isCorrect: false },
                    { text: "Move to a lower floor", image: "images/FloodQ1)Ans3.png", isCorrect: false },
                    { text: "Drive through water", image: "images/FloodQ1)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you avoid doing during a flood?",
                image: "images/FloodQue2.png", // Updated image path
                options: [
                    { text: "Walking through floodwaters", image: "images/FloodQ2)Ans1.png", isCorrect: true },
                    { text: "Listening to emergency alerts", image: "images/FloodQ2)Ans2.png", isCorrect: false },
                    { text: "Stocking up on supplies", image: "images/FloodQ2)Ans3.png", isCorrect: false },
                    { text: "Moving to higher ground", image: "images/FloodQ2)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you include in your emergency flood kit?",
                image: "images/FloodQue3.png", // Updated image path
                options: [
                    { text: "First aid supplies", image: "images/FloodQ3)Ans1.png", isCorrect: false },
                    { text: "Portable phone charger", image: "images/FloodQ3)Ans2.png", isCorrect: false },
                    { text: "Flashlight and batteries", image: "images/FloodQ3)Ans3.png", isCorrect: false },
                    { text: "All of the above", image: "images/FloodQ3)Ans4.png", isCorrect: true }
                ]
            },
            {
                question: "If you are in a car during a flood, what should you do?",
                image: "images/FloodQue4.png", // Updated image path
                options: [
                    { text: "Turn around and drive to higher ground", image: "images/FloodQ4)Ans1.png", isCorrect: true },
                    { text: "Drive through the water", image: "images/FloodQ4)Ans2.png", isCorrect: false },
                    { text: "Stop in the middle of the road", image: "images/FloodQ4)Ans3.png", isCorrect: false },
                    { text: "Park on a bridge", image: "images/FloodQ4)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you do after a flood?",
                image: "images/FloodQue5.png", // Updated image path
                options: [
                    { text: "Avoid drinking tap water until it's confirmed safe", image: "images/FloodQ5)Ans1.png", isCorrect: true },
                    { text: "Go back to your home immediately", image: "images/FloodQ5)Ans2.png", isCorrect: false },
                    { text: "Ignore any signs of damage", image: "images/FloodQ5)Ans3.png", isCorrect: false },
                    { text: "Contact emergency services for updates", image: "images/FloodQ5)Ans4.png", isCorrect: false }
                ]
            }
        ],
        precautions: "Move to higher ground, avoid walking or driving through floodwaters, and listen to emergency broadcasts.",
        emergencyContact: "🚨 Emergency Contact: 112"
    },
    drought: {
        questions: [
            {
                question: "What is the most important action to take during a drought?",
                image: "images/DroughtQue1.png", // Updated image path
                options: [
                    { text: "Conserve water", image: "images/DroughtQ1)Ans1.png", isCorrect: true },
                    { text: "Increase water usage", image: "images/DroughtQ1)Ans2.png", isCorrect: false },
                    { text: "Ignore water restrictions", image: "images/DroughtQ1)Ans3.png", isCorrect: false },
                    { text: "Water your garden more often", image: "images/DroughtQ1)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What is a common sign of drought?",
                image: "images/DroughtQue2.png", // Updated image path
                options: [
                    { text: "Cracked soil", image: "images/DroughtQ2)Ans1.png", isCorrect: true },
                    { text: "Flooded fields", image: "images/DroughtQ2)Ans2.png", isCorrect: false },
                    { text: "High humidity levels", image: "images/DroughtQ2)Ans3.png", isCorrect: false },
                    { text: "Heavy rainfall", image: "images/DroughtQ2)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "Which of the following should you do to save water during a drought?",
                image: "images/DroughtQue3.png", // Updated image path
                options: [
                    { text: "Fix leaky faucets", image: "images/DroughtQ3)Ans1.png", isCorrect: true },
                    { text: "Water lawns in the middle of the day", image: "images/DroughtQ3)Ans2.png", isCorrect: false },
                    { text: "Take longer showers", image: "images/DroughtQ3)Ans3.png", isCorrect: false },
                    { text: "Fill swimming pools more frequently", image: "images/DroughtQ3)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you avoid doing during a drought?",
                image: "images/DroughtQue4.png", // Updated image path
                options: [
                    { text: "Using excessive water for non-essential purposes", image: "images/DroughtQ4)Ans1.png", isCorrect: true },
                    { text: "Collecting rainwater", image: "images/DroughtQ4)Ans2.png", isCorrect: false },
                    { text: "Watering plants early in the morning", image: "images/DroughtQ4)Ans3.png", isCorrect: false },
                    { text: "Using drought-resistant plants", image: "images/DroughtQ4)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What is an effective way to help during a drought?",
                image: "images/DroughtQue5.png", // Updated image path
                options: [
                    { text: "Reduce water usage in daily activities", image: "images/DroughtQ5)Ans1.png", isCorrect: true },
                    { text: "Increase water usage", image: "images/DroughtQ5)Ans2.png", isCorrect: false },
                    { text: "Disregard water conservation tips", image: "images/DroughtQ5)Ans3.png", isCorrect: false },
                    { text: "Ignore local water restrictions", image: "images/DroughtQ5)Ans4.png", isCorrect: false }
                ]
            }
        ],
        precautions: "Conserve water, use it efficiently, and follow local water use regulations.",
        emergencyContact: "🚨 Emergency Contact: 112"
    },
    cyclone: {
        questions: [
            {
                question: "What is the first action you should take when a cyclone warning is issued?",
                image: "images/CycloneQue1.png", // Updated image path
                options: [
                    { text: "Seek shelter in a sturdy building", image: "images/CycloneQ1)Ans1.png", isCorrect: true },
                    { text: "Go outside to assess the damage", image: "images/CycloneQ1)Ans2.png", isCorrect: false },
                    { text: "Continue with your daily activities", image: "images/CycloneQ1)Ans3.png", isCorrect: false },
                    { text: "Move to a coastal area", image: "images/CycloneQ1)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "Where should you stay during a cyclone if you are indoors?",
                image: "images/CycloneQue2.png", // Updated image path
                options: [
                    { text: "In a small, windowless interior room", image: "images/CycloneQ2)Ans1.png", isCorrect: true },
                    { text: "Near a window to observe the storm", image: "images/CycloneQ2)Ans2.png", isCorrect: false },
                    { text: "On a balcony", image: "images/CycloneQ2)Ans3.png", isCorrect: false },
                    { text: "In the attic", image: "images/CycloneQ2)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What items should you include in your cyclone emergency kit?",
                image: "images/CycloneQue3.png", // Updated image path
                options: [
                    { text: "Battery-operated radio", image: "images/CycloneQ3)Ans1.png", isCorrect: false },
                    { text: "Non-perishable food", image: "images/CycloneQ3)Ans2.png", isCorrect: false },
                    { text: "Water and medications", image: "images/CycloneQ3)Ans3.png", isCorrect: false },
                    { text: "All of the above", image: "images/CycloneQ3)Ans4.png", isCorrect: true }
                ]
            },
            {
                question: "If you are in a vehicle during a cyclone, what should you do?",
                image: "images/CycloneQue4.png", // Updated image path
                options: [
                    { text: "Find shelter immediately and stay inside", image: "images/CycloneQ4)Ans1.png", isCorrect: true },
                    { text: "Continue driving to avoid the cyclone", image: "images/CycloneQ4)Ans2.png", isCorrect: false },
                    { text: "Pull over and wait on the roadside", image: "images/CycloneQ4)Ans3.png", isCorrect: false },
                    { text: "Park under a tree", image: "images/CycloneQ4)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you do immediately after a cyclone passes?",
                image: "images/CycloneQue5.png", // Updated image path
                options: [
                    { text: "Avoid downed power lines and inspect your home for damage", image: "images/CycloneQ5)Ans1.png", isCorrect: true },
                    { text: "Go outside to survey the damage", image: "images/CycloneQ5)Ans2.png", isCorrect: false },
                    { text: "Assume it's safe to travel without checking road conditions", image: "images/CycloneQ5)Ans3.png", isCorrect: false },
                    { text: "Immediately start cleaning up debris", image: "images/CycloneQ5)Ans4.png", isCorrect: false }
                ]
            }
        ],
        precautions: "Seek shelter in a sturdy building, stay away from windows, and listen to emergency alerts for updates.",
        emergencyContact: "🚨 Emergency Contact: 112"
    },
    landslide: {
        questions: [
            {
                question: "What is the primary sign that a landslide may occur in your area?",
                image: "images/LandslideQue1.png", // Updated image path
                options: [
                    { text: "Cracks appearing on slopes or foundations", image: "images/LandslideQ1)Ans1.png", isCorrect: true },
                    { text: "Sudden drop in temperature", image: "images/LandslideQ1)Ans2.png", isCorrect: false },
                    { text: "Clear and sunny weather", image: "images/LandslideQ1)Ans3.png", isCorrect: false },
                    { text: "Increase in bird activity", image: "images/LandslideQ1)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you do first if you suspect a landslide is about to occur?",
                image: "images/LandslideQue2.png", // Updated image path
                options: [
                    { text: "Evacuate to a safe area away from the slope", image: "images/LandslideQ2)Ans1.png", isCorrect: true },
                    { text: "Stay inside and close all windows", image: "images/LandslideQ2)Ans2.png", isCorrect: false },
                    { text: "Try to stabilize the slope yourself", image: "images/LandslideQ2)Ans3.png", isCorrect: false },
                    { text: "Ignore it and continue with your activities", image: "images/LandslideQ2)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "During a landslide, where is the safest place to be?",
                image: "images/LandslideQue3.png", // Updated image path
                options: [
                    { text: "Indoors near a window", image: "images/LandslideQ3)Ans1.png", isCorrect: false },
                    { text: "On a bridge overlooking the area", image: "images/LandslideQ3)Ans2.png", isCorrect: false },
                    { text: "Out of the path and at higher ground", image: "images/LandslideQ3)Ans3.png", isCorrect: true },
                    { text: "Driving alongside the slope", image: "images/LandslideQ3)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What items should you include in a landslide emergency kit?",
                image: "images/LandslideQue4.png", // Updated image path
                options: [
                    { text: "Battery-powered radio", image: "images/LandslideQ4)Ans1.png", isCorrect: false },
                    { text: "First aid supplies", image: "images/LandslideQ4)Ans2.png", isCorrect: false },
                    { text: "Non-perishable food and water", image: "images/LandslideQ4)Ans3.png", isCorrect: false },
                    { text: "All of the above", image: "images/LandslideQ4)Ans4.png", isCorrect: true }
                ]
            },
            {
                question: "What should you do after a landslide has occurred?",
                image: "images/LandslideQue5.png", // Updated image path
                options: [
                    { text: "Stay away from the affected area due to potential additional slides", image: "images/LandslideQ5)Ans1.png", isCorrect: true },
                    { text: "Return immediately to assess property damage", image: "images/LandslideQ5)Ans2.png", isCorrect: false },
                    { text: "Ignore emergency officials' instructions", image: "images/LandslideQ5)Ans3.png", isCorrect: false },
                    { text: "Walk over loose debris to search for belongings", image: "images/LandslideQ5)Ans4.png", isCorrect: false }
                ]
            }
        ],
        precautions: "Stay alert during heavy rainfall, avoid building near steep slopes, and have an evacuation plan in place.",
        emergencyContact: "🚨 Emergency Contact: 112"
    },

    avalanche: {
        questions: [
            {
                question: "What is the first thing you should do if you see an avalanche coming?",
                image: "images/AvalancheQue1.png", // Updated image path
                options: [
                    { text: "Move to the side", image: "images/AvalancheQ1)Ans1.png", isCorrect: true },
                    { text: "Stay where you are", image: "images/AvalancheQ1)Ans2.png", isCorrect: false },
                    { text: "Lie flat on the ground", image: "images/AvalancheQ1)Ans3.png", isCorrect: false },
                    { text: "Run downhill", image: "images/AvalancheQ1)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you avoid doing when caught in an avalanche?",
                image: "images/AvalancheQue2.png", // Updated image path
                options: [
                    { text: "Panicking", image: "images/AvalancheQ2)Ans1.png", isCorrect: true },
                    { text: "Trying to stay on the surface", image: "images/AvalancheQ2)Ans2.png", isCorrect: false },
                    { text: "Swimming motion to stay on top", image: "images/AvalancheQ2)Ans3.png", isCorrect: false },
                    { text: "Covering your mouth", image: "images/AvalancheQ2)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you include in your avalanche survival kit?",
                image: "images/AvalancheQue3.png", // Updated image path
                options: [
                    { text: "Avalanche beacon", image: "images/AvalancheQ3)Ans1.png", isCorrect: false },
                    { text: "Shovel", image: "images/AvalancheQ3)Ans2.png", isCorrect: false },
                    { text: "Probe", image: "images/AvalancheQ3)Ans3.png", isCorrect: false },
                    { text: "All of the above", image: "images/AvalancheQ3)Ans4.png", isCorrect: true }
                ]
            },
            {
                question: "What should you do if you are buried in an avalanche?",
                image: "images/AvalancheQue4.png", // Updated image path
                options: [
                    { text: "Create an air pocket around your mouth", image: "images/AvalancheQ4)Ans1.png", isCorrect: true },
                    { text: "Stay completely still", image: "images/AvalancheQ4)Ans2.png", isCorrect: false },
                    { text: "Try to dig yourself out immediately", image: "images/AvalancheQ4)Ans3.png", isCorrect: false },
                    { text: "Scream for help", image: "images/AvalancheQ4)Ans4.png", isCorrect: false }
                ]
            },
            {
                question: "What should you do after surviving an avalanche?",
                image: "images/AvalancheQue5.png", // Updated image path
                options: [
                    { text: "Check yourself and others for injuries", image: "images/AvalancheQ5)Ans1.png", isCorrect: true },
                    { text: "Leave the area immediately", image: "images/AvalancheQ5)Ans2.png", isCorrect :false },
                    { text: "Wait for rescue without moving", image: "images/AvalancheQ5)Ans3.png", isCorrect :false },
                    { text: "Ignore the situation", image: "images/AvalancheQ5)Ans4.png", isCorrect :false }
                ]
            }
        ],
        precautions: "Avoid avalanche-prone areas, carry proper equipment, and always be aware of your surroundings.",
        emergencyContact: "🚨 Emergency Contact: 112"
    },
    
    
    
    
    
    // Add other disaster types similarly
};

// Track the current question index
let currentQuestionIndex = 0;

function startQuiz(disasterType) {
    localStorage.setItem('selectedDisaster', disasterType);
    window.location.href = 'quiz.html';
}

function loadQuestion(index) {
    const disasterType = localStorage.getItem('selectedDisaster');
    const disaster = disasterData[disasterType];
    const questionData = disaster.questions[index];
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = '';

    // Create question block
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-block';
    questionDiv.innerHTML = `
        <h4>Q${index + 1}. ${questionData.question}</h4>
        <img src="${questionData.image}" class="img-fluid mb-2">
    `;
    quizContent.appendChild(questionDiv);

    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';

    questionData.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => checkAnswer(i);
        optionDiv.innerHTML = `
            <img src="${option.image}" class="img-fluid">
            <p>${option.text}</p>
        `;
        optionsContainer.appendChild(optionDiv);
    });

    quizContent.appendChild(optionsContainer);
}

function checkAnswer(optionIndex) {
    const disasterType = localStorage.getItem('selectedDisaster');
    const disaster = disasterData[disasterType];
    const question = disaster.questions[currentQuestionIndex];
    const selectedOption = question.options[optionIndex];

    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.remove('correct', 'incorrect');
        if (i === optionIndex) {
            option.classList.add(selectedOption.isCorrect ? 'correct' : 'incorrect');
        }
        if (question.options[i].isCorrect) {
            options[i].classList.add('correct');
        }
    });

    // Delay before moving to the next question
    setTimeout(() => {
        if (currentQuestionIndex < disaster.questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            showPrecautions();
        }
    }, 1500);
}

function showPrecautions() {
    window.location.href = 'precautions.html';
}

function loadPrecautions() {
    const disasterType = localStorage.getItem('selectedDisaster');
    const disaster = disasterData[disasterType];
    
    document.getElementById('precautions-title').textContent = `${disasterType.charAt(0).toUpperCase() + disasterType.slice(1)} Precautions`;
    document.getElementById('precautions-content').textContent = disaster.precautions;
    document.getElementById('emergency-contact').textContent = disaster.emergencyContact;
}

window.onload = function() {
    if (window.location.pathname.includes('quiz.html')) {
        loadQuestion(currentQuestionIndex);
    } else if (window.location.pathname.includes('precautions.html')) {
        loadPrecautions();
    }
};
