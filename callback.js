function placeOrder(customerName, orderNumber) {
    console.log("Customer " + customerName + " order number: ", orderNumber);
    cookFood(function () {
        console.log("Order " + orderNumber + " for customer " + customerName + " is ready");
    });

}

// Cook food function
function cookFood(callBack) {
    var rnd = Math.random() * (1000 * 10);
    console.log('ETA: ' + rnd.toFixed(0) + ' miliseconds');
    setTimeout(callBack, rnd.toFixed(0));
}

var customers = [
    "John",
    "Charly",
    "Tom"
]

for (var x = 0; x < customers.length; x++) {
    placeOrder(customers[x], ((x * 10) + 10));
}
