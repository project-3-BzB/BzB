$(document).ready(function() {
  //getting HTML elements from login.html
    let loginForm = $("#login-form");
    let usernameInput = $("#username");
    let passwordInput = $("#password");

    //validates fields are not blank
    loginForm.on("submit", function(event) {
        event.preventDefault();
        let userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password) {
        return;
        }

        //logs in user and clears form
        loginUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    //post to user/login route and redirect to homepage
    function loginUser(username, password) {
        $.post("api/user/login", {
            username: username,
            password: password
        })
        .then(function() {
            console.log("Success!")
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});
