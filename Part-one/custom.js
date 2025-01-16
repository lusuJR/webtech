function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Reset error messages
    document.getElementById("username_error").innerHTML = "";
    document.getElementById("password_error").innerHTML = "";

    // Validate username and password
    if (username == '') {
        document.getElementById("username_error").style.color = 'red';
        document.getElementById("username_error").innerHTML = "* Username is required";
    }

    if (password == '') {
        document.getElementById("password_error").style.color = 'red';
        document.getElementById("password_error").innerHTML = "* Password is required";
    }

    // If both fields are filled, redirect to the welcome page
    if (username != '' && password != '') {
        // Redirect to the welcome page, passing the username as a query parameter
        window.location.href = 'welcome.html?username=' + encodeURIComponent(username);
    }
}
    

// Function to retrieve query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Display welcome message with the username
window.onload = function() {
    var username = getQueryParam('username');
    if (username) {
        document.getElementById("welcome_message").innerHTML = "Welcome, " + username + "!";
    } else {
        document.getElementById("welcome_message").innerHTML = "Welcome, Guest!";
    }
};