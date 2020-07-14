$(document).ready(function() {
  //getting HTML elements from signup.html
  let signUpForm = $("#signup-form");
  let emailInput = $("#newEmail");
  let usernameInput = $("#newUser");
  let passwordInput = $("newPassword");

  signUpForm.on("submit", function(event) {
      event.preventDefault();
      let userData = {
          email: emailInput.val(),
          username: usernameInput.val(),
          password: passwordInput.val()
      };

      //validates fields are not blank
      if (!userData.email || !userData.username || !userData.password) {
      return;
      }

      //signs up user and clears form
      signUpUser(userData.email, userData.username, userData.password);
      emailInput.val("");
      usernameInput.val("");
      passwordInput.val("");
  });

  //post to user/signup route and redirect to member page
  function signUpUser(email, username, password) {
      $.post("api/user/signup", {
          email: email,
          username: username,
          password: password
      })
      .then(function() {
          console.log("Created ")
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});