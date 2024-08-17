document.addEventListener("DOMContentLoaded", function() {
    var userdata = JSON.parse(localStorage.getItem("userarr")) || [];

    document.querySelector("#signUpButton").addEventListener("click", signUpFunc);

    function signUpFunc() {
        var name = document.querySelector("#signUpName").value;
        var mob = document.querySelector("#signUpPhone").value;
        var mail = document.querySelector("#signUpEmail").value;
        var password = document.querySelector("#signUpPassword").value;

        if (name === "" || mob === "" || mail === "" || password === "") {
            alert("Fill in the empty fields");
        } else {
            var emailExists = userdata.some(function(user) {
                return user.mail === mail;
            });

            var phoneExists = userdata.some(function(user) {
                return user.mob === mob;
            });

            if (emailExists) {
                alert("Email already exists. Please use a different email.");
            } else if (phoneExists) {
                alert("Phone number already exists. Please use a different phone number.");
            } else {
                var userobj = {
                    name: name,
                    mob: mob,
                    mail: mail,
                    password: password
                };

                userdata.push(userobj);
                localStorage.setItem("userarr", JSON.stringify(userdata));
                alert("Signed up successfully");

                // Clear input fields
                document.querySelector("#signUpName").value = "";
                document.querySelector("#signUpPhone").value = "";
                document.querySelector("#signUpEmail").value = "";
                document.querySelector("#signUpPassword").value = "";

                window.location.href = "./Login.html";
            }
        }
    }

    document.getElementById('logIn').addEventListener('click', function() {
        window.location.href = "./Login.html";
    });

    document.getElementById('landingPage').addEventListener('click', function(){
        window.location.href = "../Landingpage/index.html";
    });
});