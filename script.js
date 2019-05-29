/*eslint-env browser*/

function myFunction() {
    "use strict";
    window.document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    "use strict";
    if (!event.target.matches('.dropbtn')) {
        var i, dropdowns = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdowns.length; i += 1) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
function showField(name) {
    "use strict";
    if (name === "Other")document.getElementById("textbox").innerHTML = "Other: <input type="text" name="other"/>";
    else document.getElementById("textbox").innerHTML="";
}