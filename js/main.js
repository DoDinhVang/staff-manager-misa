var dropbtn = document.getElementById("dropbtn");
var myDropdown = document.getElementById("myDropdown");
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
      if (event.target.tagName === "LI") {
        if (event.target.getAttribute("value")) {
          dropbtn.innerHTML = event.target.getAttribute("value");
        } else {
          dropbtn.innerHTML = "";
        }
      }
    }
  }
};
dropbtn.addEventListener("click", myFunction);
