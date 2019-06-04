/*eslint-env browser*/

//PART 1

//ADDRESS TYPE DROPDOWN FUNCTION
function showfield(name) {
    "use strict";
    if (name === "other") {
        document.getElementById("div1").innerHTML = 'Other <input type="text" name="other" placeholder="Explain" />';
    } else { document.getElementById("div1").innerHTML = "";
           }
}

// VALIDATION
function validate() {
    "use strict";
    if (document.orderForm.firstName.value === "") {
        window.alert("Please provide your first name.");
        document.orderForm.firstName.focus();
        return false;
    }
    if (document.orderForm.lastName.value === "") {
        window.alert("Please provide your last name.");
        document.orderForm.lastName.focus();
        return false;
    }
    if (document.orderForm.addressType.value === "") {
        window.alert("Please select an address type.");
        document.orderForm.addressType.focus();
        return false;
    }
    if (document.orderForm.street.value === "") {
        window.alert("Please provide a street address.");
        document.orderForm.street.focus();
        return false;
    }
    if (document.orderForm.city.value === "") {
        window.alert("Please provide a city.");
        document.orderForm.city.focus();
        return false;
    }
    if (document.orderForm.state.value === "" || isNaN(document.orderForm.state.value) || document.orderForm.state.value.length !== 2) {
        window.alert("Please provide a state.");
        document.orderForm.state.focus();
        return false;
    }
    if (document.orderForm.zip.value === "" || isNaN(document.orderForm.zip.value) || document.orderForm.zip.value.length !== 5) {
        window.alert("Please provide a zip code.");
        document.orderForm.zip.focus();
        return false;
    }
    if (document.orderForm.phone.value === "" || isNaN(document.orderForm.phone.value) || document.orderForm.phone.value.length !== 10) {
        window.alert("Please provide a phone number.");
        document.orderForm.phone.focus();
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(orderForm.email.value)) {
        window.alert("Please provide an email.");
        document.orderForm.email.focus();
        return false;
    }
}

//DOUGH SELECTION 
/*
var selectDough = {
    handtossed: ["Small: $9.99", "Medium: $12.99", "Large: $14.99"],
    thincrust: ["Medium: $11.99", "Large: $13.99"],
    nystyle: ["Large: $16.99", "X-Large: $19.99"],
    glutenfree: ["Small: $10.99"]
};
function changeDough(value) {
    "use strict";
    if (value.length === 0) {
        document.getElementsByClassId("size").innerHTML = "<option></option>";
        else {
        var doughOptions = "";
        for (sizeId in selectDough[value]) {
            doughOptions += "<option>" + selectDough[value][sizeId] + "</option>";
        }
        document.getElementById("size").innerHTML = doughOptions;
        }
    }
} */

// BILLING & PAYMENT SECTION
function validate() {
    "use strict";
    var isValid = true, orderForm = document.getElementById('orderForm');
    if (orderForm.firstName.value === "") {
        window.alert("Please provide your first name.");
        isValid = false;
    }
    if (orderForm.lastName.value === "") {
        window.alert("Please provide your last name.");
        isValid = false;
    }
    if (orderForm.addressType.value === "") {
        window.alert("Please select an address type.");
        isValid = false;
    }
    if (orderForm.street.value === "") {
        window.alert("Please provide a street address.");
        isValid = false;
    }
    if (orderForm.city.value === "") {
        window.alert("Please provide a city.");
        isValid = false;
    }
    if (orderForm.state.value === "" || isNaN(document.orderForm.state.value)) {
        window.alert("Please provide a state.");
        isValid = false;
    }
    if (orderForm.zip.value === "" || document.orderForm.zip.value.length == 5) {
        window.alert("Please provide a zip code.");
        isValid = false;
    }
    if (orderForm.phone.value === "" || isNaN(document.orderForm.phone.value) || document.orderForm.phone.value.length !== 10) {
        window.alert("Please provide a phone number. (no dashes)");
        isValid = false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(orderForm.email.value)) {
        window.alert("Please provide an email. (you@example.com)");
        isValid = false;
    }
    if (isValid) {        document.getElementById('paymentForm').style.display = 'block';
        return false;
                 }
}

//CREDIT CARD LUHN FORMULA
function lunhForm(num) {
    "use strict";
    var i, inputNum = num.toString(), sum = 0, doubleUp = false;
    for (i = inputNum.length - 1; i >= 0; i -= 1) {
        var curDigit = parseInt(inputNum.charAt(i));
        if (doubleUp) {
            if ((curDigit * 2) > 9) {
                sum += (curDigit * 2) - 9;
            } else { sum += curDigit * 2;
                   }
        } else {sum += curDigit;}
        var doubleUp =!doubleUp;
    }   return (sum % 10) == 0 ? true : false; 
}