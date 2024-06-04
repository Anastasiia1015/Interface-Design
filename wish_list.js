document.getElementById('login-button').addEventListener('click', function() {
    var loginBox = document.getElementById('login-box');
    if (loginBox.style.display === 'none' || loginBox.style.display === '') {
        loginBox.style.display = 'block';
    } else {
        loginBox.style.display = 'none';
    }
});

document.getElementById('submit-login').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var loginBox = document.getElementById('login-box');
    loginBox.style.display = 'none';
});
document.getElementById('account-button').addEventListener('click', function() {
    var accountBox = document.getElementById('account-box');
    if (accountBox.style.display === 'none' || accountBox.style.display === '') {
        accountBox.style.display = 'block';
    } else {
        accountBox.style.display = 'none';
    }
});

document.getElementById('submit-account').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var accountBox = document.getElementById('account-box');
    accountBox.style.display = 'none';
});