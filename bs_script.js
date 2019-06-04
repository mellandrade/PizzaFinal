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

//DOUGH SELECTION
var handtossed = {small: "$9.99", medium: "$12.99", large: "$14.99"};
var thincrust = {medium: "$11.99", large: "$13.99"};
var nystyle = {large: "$16.99", xlarge: "$19.99"};
var glutenfree = {small: "10.99"};

// DELIVERY & BILLING SECTION VALIDATION
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