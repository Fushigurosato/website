// Get the modal elements
var loginModal = document.getElementById('loginModal');
var signupModal = document.getElementById('signupModal');

// Get the <span> element that closes the modal
var loginClose = document.getElementsByClassName('close')[0];
var signupClose = document.getElementsByClassName('close')[1];

// When the user clicks the login link, open the modal
document.getElementById('login').onclick = function() {
    loginModal.style.display = 'block';
}

// When the user clicks the signup link, open the modal
document.getElementById('signup').onclick = function() {
    signupModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
loginClose.onclick = function() {
    loginModal.style.display = 'none';
}

signupClose.onclick = function() {
    signupModal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Here you can implement the login functionality
    console.log('Logging in with username: ' + username + ', password: ' + password);
    // For demo purposes, just close the modal
    loginModal.style.display = 'none';
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    // Here you can implement the signup functionality
    console.log('Signing up with username: ' + newUsername + ', password: ' + newPassword);
    // For demo purposes, just close the modal
    signupModal.style.display = 'none';
});
