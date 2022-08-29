// const { response } = require("express");

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-li').value.trim();
  const password = document.querySelector('#password-li').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/judgemystuff/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/judgemystuff/profile-page'); // TODO: why not profile page? 
    } else {
      const err = await response.json();
      // Added text inside our DOM login page, if user not found
      const notUser = document.querySelector('#not-user');
      const message = document.createTextNode(err.message);

      notUser.appendChild(message);
    }  
  }
};


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

//MARK ADDED CODE TO SEE IF I CAN GET THE LOGIN TO WORK  

const signupHandler = async (event) => {
  event.preventDefault();
  const signUpName = document.getElementById('si-username-li');
  const email = document.getElementById('si-email-li');
  const city = document.getElementById('si-city-li');
  const password = document.getElementById('si-password-li');

  if (signUpName && email && city && password) {
    const response = await fetch('/judgemystuff/signup', {
      method: 'POST',
      body: JSON.stringify({ signUpName, email, city, password }),
    });
  }

}


document.getElementById('signup-form').addEventListener('submit', signUpHandler);