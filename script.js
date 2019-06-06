/*eslint-env browser*/
function multiFunc() {
    "use strict";
    validate();
    clicked ();
    myFunction ();
   
}

//PART 1

//ADDRESS TYPE DROPDOWN FUNCTION
function showfield(name) {
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
        dotpos = e.lastIndexOf('.');
     //  letters = /^[A-Za-z]+$/
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
    if (infoForm.state1.value === "" || document.orderForm.state.value.length !== 2) {
        window.alert("Please provide a state.");
        isValid = false;
    }
    if (infoForm.zip1.value === "" || document.orderForm.zip.value.length !== 5) {
        window.alert("Please provide a zip code.");
        isValid = false;
    }
    if (infoForm.phone.value === "" || isNaN(document.orderForm.phone.value) || document.orderForm.phone.value.length !== 10) {
        window.alert("Please provide a phone number. (no dashes)");
        isValid = false;
    }
    if (infoForm.email.value === "" && atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length) {
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
var sizePrices = new Array();
sizePrices["HTSmall"]= 9.99;
sizePrices["HTMedium"]= 12.99;
sizePrices["HTLarge"]= 14.99;
sizePrices["TCMedium"]= 11.99;
sizePrices["TCLarge"]= 13.99;
sizePrices["NYLarge"]= 16.99;
sizePrices["NYXLarge"]= 19.99;
sizePrices["GFSmall"]= 10.99;

function getSizePrice() {
    var totalSizePrice = 0;
    var orderTally = document.getElementById("cart");
    var selectedSize = orderTally.elements["size"];
    totalSizePrice = sizePrices[selectedSize.value];
    return totalSizePrice;
}

var cheesePrices = new Array();
cheesePrices["light"]= 0;
cheesePrices["normal"]= 0;
cheesePrices["extra"]= 2.99;
cheesePrices["double"]= 3.99;

function getCheesePrice() {
    var totalCheesePrice = 0;
    var orderTally = document.getElementById("cart");
    var selectedCheese = orderTally.elements["cheese"];
    totalCheesePrice = cheesePrices[selectedCheese.value];
    return totalCheesePrice;
    window.document.getElementById("cheesePrice").innerHTML = "$" + totalCheesePrice;
}

var saucePrices = new Array();
saucePrices["regular"]= 0;
saucePrices["hearty"]= 0.99;
saucePrices["bbq"]= 1.99;

function getSaucePrice() {
    var totalSaucePrice = 0;
    var orderTally = document.getElementById("cart");
    var selectedSauce = orderTally.elements["sauce"];
    totalSaucePrice = saucePrices[selectedSauce.value];
    return totalSaucePrice;
    window.document.getElementById("saucePrice").innerHTML = "$" + totalSaucePrice;
}

function toppingsPrice() {
    var toppingPrice = 0;
    var orderTally = document.getElementById("cart");
    var addToppings = orderTally.elements["toppings"];
    if (addToppings.checked === true) {
        toppingPrice = 0.99;
    }
    return toppingPrice;
    window.document.getElementById("toppingPrice").innerHTML = "$" + toppingPrice;    
}

function tallyTotal() {
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
//OPEN FORM - NOT WORKING
function myFunction() {
    var x = document.getElementById("billing");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
}

//FINISHED BUTTON - NEED TO ADD FORM OPENING FOR BILLING 
function clicked() {
    "use strict";
    if (confirm("Select OK if you're ready to submit your order.")) {   window.document.getElementById("billings").style.display="block";
    } else {
        window.document("You selected Cancel. Please make edits to your order."); 
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