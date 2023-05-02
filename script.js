
var navbar = document.querySelector(".navbar"); // Select the navbar element
var toggleBtn = document.getElementById("menu-icon"); // Select the toggle button

toggleBtn.addEventListener("click", function() {
  if (navbar.style.display === "none" || navbar.style.visibility === "hidden") {
    navbar.style.display = "flex"; // or navbar.style.visibility = "visible";
  } else {
    navbar.style.display = "none"; // or navbar.style.visibility = "hidden";
  }
});