/*eslint-env browser*/

function myFunction() {
    "use strict";
    window.document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    "use strict";
    if (!event.target.matches('.dropbtn')) {
        var i, dropdowns = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}