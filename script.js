/*eslint-env browser*/

//PART 1 - VALIDATION
function validate() {
    "use strict";
    if(document.orderForm.firstName.value == "") {
        window.alert("Please provide your first name.");
        document.orderForm.firstName.focus();
        return false;
    }
    if(document.orderForm.lastName.value == "") {
        window.alert("Please provide your last name.");
        document.orderForm.lastName.focus();
        return false;
    }
    if(document.orderForm.addressType.value == "") {
        window.alert("Please select an address type.");
        document.orderForm.addressType.focus();
        return false;
    }
    if(document.orderForm.street.value == "") {
        window.alert("Please provide a street address.");
        document.orderForm.street.focus();
        return false;
    }
    if(document.orderForm.city.value == "") {
        window.alert("Please provide a city.");
        document.orderForm.city.focus();
        return false;
    }
    if(document.orderForm.state.value == "" || isNaN( document.orderForm.state.value ) || document.orderForm.state.value.length != 2 ) {
        window.alert("Please provide a state.");
        document.orderForm.state.focus();
        return false;
    }
    if(document.orderForm.zip.value == "" || isNaN(
    document.orderForm.zip.value ) || document.orderForm.zip.value.length != 5 ) {
        window.alert("Please provide a zip code.");
        document.orderForm.zip.focus();
        return false;
    }
    if(document.orderForm.phone.value == "" || isNaN(
    document.orderForm.phone.value ) || document.orderForm.phone.value.length != 10 ) {
        window.alert("Please provide a phone number.");
        document.orderForm.phone.focus();
        return false;
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(orderForm.email.value)) {
        window.alert("Please provide an email.");
        document.orderForm.email.focus();
        return false;
    }
}

//ADDRESS TYPE DROPDOWN FUNCTION
$('.dropdown-toggle').dropdown()

function DropDownChanged(oDDL) {
    "use strict";
    var oTextbox = oDDL.form.elements["other"];
    if (oTextbox) {
        oTextbox.style.display = (oDDL.value == "") ? "" : "none";
        if (oDDL.value == "")
            oTextbox.focus();
    }
}

function FormSubmit(oForm) {
    var oHidden = oForm.elements["address"];
    var oDDL = oForm.elements["addressType"];
    var oTextbox = oForm.elements["other"];
    if (oHidden && oDDL && oTextbox)
        oHidden.value = (oDDL.value == "") ? oTextbox.value : oDDL.value;
}

/*  TESTS
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
*/