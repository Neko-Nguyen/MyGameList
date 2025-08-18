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
      passwordInput.className = "text-input-focus"
   }
   else {
      passwordInput.className = "text-input";
   }
})

usernameInput.addEventListener("blur", function(event) {
   if (usernameInput.value.length > 0) {
      usernameInput.className = "text-input-focus"
   }
   else {
      usernameInput.className = "text-input";
   }
})