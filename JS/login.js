document.addEventListener("DOMContentLoaded", function() {
    // Set cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Get cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Delete cookie
    function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    // Retrieve "loggedInUser" cookie value
    var loggedInUser = getCookie("loggedInUser");
    if (loggedInUser) {
        window.location.href = "./Index.html";
    }

    // Login function
    document.getElementById("signInButton").addEventListener("click", function() {
        var in_mob = document.querySelector("#signInPhone").value;
        var in_pass = document.querySelector("#signInPassword").value;

        if (in_mob === "" || in_pass === "") {
            alert("Enter mobile number and password to login.");
            return;
        }

        var found = false;
        var userdata = JSON.parse(localStorage.getItem("userarr")) || [];
        for (var a = 0; a < userdata.length; a++) {
            if (in_mob === userdata[a].mob && in_pass === userdata[a].password) {
                found = true;
                alert("Login successful");
                document.querySelector("#signInPhone").value = "";
                document.querySelector("#signInPassword").value = "";
                if (document.getElementById("rememberMe").checked) {
                    setCookie("loggedInUser", in_mob, 30); // Remember user for 30 days
                }
                window.location.href = "./Index.html";
                break;
            }
        }

        if (!found) {
            alert("Mobile number or password is incorrect. Please try again.");
            document.querySelector("#signInPassword").value = "";
        }
    });

    // Redirect to Signup Page
    document.getElementById('signUp').addEventListener('click', function() {
        window.location.href = "./SignUp.html";
    });
});
