// Add these functions to your script.js

function redirectToGoogleForm() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd8yQfyCSmjud65pervEw4xSTj_mXHwtT60c4HprOy8ob2QCg/viewform?usp=sf_link'; // Replace with your Google Form link
}

function showFundForm() {
    document.getElementById('fundForm').style.display = 'block';
    document.getElementById('donateForm').style.display = 'none';
}

// Add event listeners to your buttons

document.getElementById('foodDonationBtn').addEventListener('click', redirectToGoogleForm);
document.getElementById('fundDonationBtn').addEventListener('click', showFundForm);

// Add the submit event listener for the food donation form (if needed)
document.getElementById('foodForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contributing to our food donation drive!');
});

// You can add more logic for handling form submissions or interactions as needed.
