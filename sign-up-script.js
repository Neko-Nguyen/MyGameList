let loginCheckbox = document.getElementById("show-password");
let passwordInput = document.getElementById("password");

loginCheckbox.addEventListener("change", function() {
   if (this.checked) {
      passwordInput.type = "text";
   }
   else {
      passwordInput.type = "password";
   }
})