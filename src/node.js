function placeOrder(orderno) {
    console.log("Order Placed for Order No: " + orderno);
}

cookandDeliver(function () {
    console.log('delivering order', orderno);
})

function cookandDeliver(callback) {
    // console.log('cooking order', orderno);
    // callback();
    setTimeout(callback, 5000);
}


for (let i = 0; i < 10; i++) {
    placeOrder(i);
}