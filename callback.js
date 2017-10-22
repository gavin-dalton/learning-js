function placeOrder(customerName, orderNumber) {
    console.log("Customer " + customerName + " order number: ", orderNumber);
    cookFood(function () {
        console.log("Order " + orderNumber + " for customer " + customerName + " is ready");
    });

}

// Cook food function
function cookFood(callBack) {
    setTimeout(callBack, 5000);
}

var customers = [
    "John",
    "Charly",
    "Tom"
]

for (var x = 0; x < customers.length; x++) {
    placeOrder(customers[x], ((x * 10) + 10));
}
