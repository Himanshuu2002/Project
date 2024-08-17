// Check if the user is not logged in
document.addEventListener("DOMContentLoaded", function() {
    var loggedInUser = getCookie("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "./Login.html"; // Redirect to login page
    }
});

// Get cookie function
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

// Logout function
document.getElementById("logoutLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    eraseCookie("loggedInUser");
    window.location.href = "./Login.html";
});

// Delete cookie function
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/'; // added path=/
}
