let loginCheckbox = document.getElementById("show-password");
let passwordInput = document.getElementById("password");
let usernameInput = document.getElementById("username");

loginCheckbox.addEventListener("change", function() {
   if (this.checked) {
      passwordInput.type = "text";
   }
   else {
      passwordInput.type = "password";
   }
})

passwordInput.addEventListener("blur", function(event) {
   if (passwordInput.value.length > 0) {
      passwordInput.className = "input-text-focus input"
   }
   else {
      passwordInput.className = "input-text input";
   }
})

usernameInput.addEventListener("blur", function(event) {
   if (usernameInput.value.length > 0) {
      usernameInput.className = "input-text-focus input"
   }
   else {
      usernameInput.className = "input-text input";
   }
})