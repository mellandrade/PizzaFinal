/*eslint-env browser*/
function multiFunc() {
    "use strict";
    validate();
    toggleClick();
    myFunction();
}

//PART 1
function myFunction() {
    "use strict";
    document.getElementById("infoForm").submit();
    document.getElementById("orderForm").submit();
    document.getElementById("paymentForm").submit();
}

//ADDRESS TYPE DROPDOWN FUNCTION
function showField(name) {
    "use strict";
    if (name === "other") {
        document.getElementById("div1").innerHTML = 'Other <input type="text" name="other" placeholder="Explain" />';
    } else { document.getElementById("div1").innerHTML = "";
           }
}

// DELIVERY INFO & BILLING/PAYMENT SECTION - VALIDATION
function validate() {
    "use strict";
    var isValid = true,
        infoForm = document.getElementById('infoForm'),
        orderForm = document.getElementById('orderForm'),
        e = document.getElementById('email').value,
        atpos = e.indexOf('@'),
        dotpos = e.lastIndexOf('.'),
        numeric = /^[0-9]+$/;
    if (infoForm.firstName1.value === "") {
        window.alert("Please provide your first name.");
        isValid = false;
    }
    if (infoForm.lastName1.value === "") {
        window.alert("Please provide your last name.");
        isValid = false;
    }
    if (infoForm.addressType.value === "") {
        window.alert("Please select an address type.");
        isValid = false;
    }
    if (infoForm.street1.value === "") {
        window.alert("Please provide a street address.");
        isValid = false;
    }
    if (infoForm.city1.value === "") {
        window.alert("Please provide a city.");
        isValid = false;
    }
    if (infoForm.state1.value === "" || document.infoForm.state.value.length !== 2) {
        window.alert("Please provide a state.");
        isValid = false;
    }
    if (infoForm.zip1.value === "" || document.infoForm.zip.value.length !== 5) {
        window.alert("Please provide a zip code.");
        isValid = false;
    }
    if (infoForm.phone.value === "" || isNaN(document.infoForm.phone.value) || document.infoForm.phone.value.length !== 10) {
        window.alert("Please provide a phone number. (no dashes)");
        isValid = false;
    }
    if (infoForm.email.value === "" && atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length) {
        window.alert("Please provide an email. (you@example.com)");
        isValid = false;
    }
    if ((orderForm.dough[0].checked === false) && (orderForm.dough[1].checked === false) && (orderForm.dough[2].checked === false) && (orderForm.dough[3].checked === false)) {
        window.alert("Please select a dough.");
        isValid = false;
    }
    if (orderForm.size.value === "") {
        window.alert("Please select your size.");
        isValid = false;
    }
    //show billing information code here document.open?
    if (isValid) {        document.getElementById('paymentForm').style.display = 'block';
        return false;
                 }
}

//DOUGH SELECTION
/*function selectSize() {
    var s = document.getElementById("selectDough").value;
    if ()
}

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

// CALCULATIONS
var sizePrices = {
    "HTSmall": 9.99,
    "HTMedium": 12.99,
    "HTLarge": 14.99,
    "TCMedium": 11.99,
    "TCLarge": 13.99,
    "NYLarge": 16.99,
    "NYXLarge": 19.99,
    "GFSmall": 10.99
};

function getSizePrice() {
    "use strict";
    var totalSizePrice, orderTally = document.getElementById("cart"), selectedSize = orderTally.elements["size"];
    totalSizePrice = sizePrices[selectedSize.value];
    return totalSizePrice;
}

var cheesePrices = {
    "light": 0,
    "normal": 0,
    "extra": 2.99,
    "double": 3.99
};

function getCheesePrice() {
    "use strict";
    var totalCheesePrice, orderTally = document.getElementById("cart"), selectedCheese = orderTally.elements["cheese"];
    totalCheesePrice = cheesePrices[selectedCheese.value];
    return totalCheesePrice;
    document.getElementById("cheesePrice").innerHTML = "$" + totalCheesePrice;
}

var saucePrices = {
    "regular": 0,
    "hearty": 0.99,
    "bbq": 1.99
};

function getSaucePrice() {
    "use strict";
    var totalSaucePrice, orderTally = document.getElementById("cart"), selectedSauce = orderTally.elements["sauce"];
    totalSaucePrice = saucePrices[selectedSauce.value];
    return totalSaucePrice;
    window.document.getElementById("saucePrice").innerHTML = "$" + totalSaucePrice;
}

function toppingsPrice() {
    "use strict";
    var toppingPrice, orderTally = document.getElementById("cart"), addToppings = orderTally.elements["toppings"];
    if (addToppings.checked === true) {
        toppingPrice = 0.99;
    }
    return toppingPrice;
    window.document.getElementById("toppingPrice").innerHTML = "$" + toppingPrice;
}

function calcTotal() {
    "use strict";
    var orderTotal = getSizePrice() + getCheesePrice() + getSaucePrice() + toppingsPrice();
    window.document.getElementById("totalOrder").innerHTML = "Total $" + orderTotal;
}

//BILLING INFO
function pullInfo() {
    "use strict";
    if (document.getElementById("same-address").checked) {
        document.getElementById("firstName1").value = document.getElementById("firstName2").value;
        document.getElementById("lastName1").value = document.getElementById("lastName2").value;
        document.getElementById("street1").value = document.getElementById("street2").value;
        document.getElementById("apt1").value = document.getElementById("apt2").value;
        document.getElementById("city1").value = document.getElementById("city2").value;
        document.getElementById("state1").value = document.getElementById("state2").value;
        document.getElementById("zip1").value = document.getElementById("zip2").value;
    } else {
        document.getElementById("firstName2").value = "";
        document.getElementById("lastName2").value = "";
        document.getElementById("street2").value = "";
        document.getElementById("apt2").value = "";
        document.getElementById("city2").value = "";
        document.getElementById("state2").value = "";
        document.getElementById("zip2").value = "";
    }
}

function validate() {
    "use strict";
    var isValid = true,
        paymentForm = document.getElementById('paymentForm');
    if (paymentForm.firstName2.value === "") {
        window.alert("Please provide your first name.");
        isValid = false;
    }
    if (paymentForm.lastName2.value === "") {
        window.alert("Please provide your last name.");
        isValid = false;
    }
    if (paymentForm.street2.value === "") {
        window.alert("Please provide a street address.");
        isValid = false;
    }
    if (paymentForm.city2.value === "") {
        window.alert("Please provide a city.");
        isValid = false;
    }
    if (paymentForm.state2.value === "" || document.paymentForm.state.value.length !== 2) {
        window.alert("Please provide a state.");
        isValid = false;
    }
    if (paymentForm.zip2.value === "" || document.paymentForm.zip.value.length !== 5) {
        window.alert("Please provide a zip code.");
        isValid = false;
    }
}

//OPEN FORM - NOT WORKING
function myFunction() {
    "use strict";
    var x = document.getElementById("billing");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

//FINISHED BUTTON - NEED TO ADD FORM OPENING FOR BILLING 
function toggleClick() {
    "use strict";
    window.document.getElementById("paymentForm").style.display = "none";
    if (confirm("Select OK if you're ready to submit your order.")) {   window.document.getElementById("paymentForm").style.display = "block";
            } else {window.document("You selected Cancel. Please make edits to your order.");
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
        } else {sum += curDigit;
               }
        var doubleUp = !doubleUp;
    }
    return (sum % 10) === 0 ? true : false;
}