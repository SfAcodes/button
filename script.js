const button = document.getElementById("changeColorButton");

button.addEventListener("click", function() {
  const body = document.getElementsByTagName("body")[0];
  body.classList.toggle("darkMode");
});