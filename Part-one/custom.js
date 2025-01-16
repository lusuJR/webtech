
        function validate() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Reset error messages
            document.getElementById("username_error").innerHTML = "";
            document.getElementById("password_error").innerHTML = "";

            // Validate username
            if (username == '') {
                document.getElementById("username_error").style.color = 'red';
                document.getElementById("username_error").innerHTML = "* Username is required";
            }

            // Validate password
            if (password == '') {
                document.getElementById("password_error").style.color = 'red';
                document.getElementById("password_error").innerHTML = "* Password is required";
            }

            // If both fields are filled, display welcome message
            if (username != '' && password != '') {
                document.getElementById("welcome_message").innerHTML = "Welcome " + username;
            }
        }
    