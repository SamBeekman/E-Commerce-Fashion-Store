const shippingEL = document.getElementById('shipping')
const totalEL = document.getElementById('total')

let getShippingTotal = () => {
    let subtotal = parseInt(subTotalEL.innerHTML.slice(1))
    if (subtotal > 100) {
        console.log(true);
        shippingEL.innerHTML = "$40";
        totalEL.innerHTML = "$" + (subtotal + 40);
    } else {
        shippingEL.innerHTML = "FREE";
        totalEL.innerHTML = "$" + subtotal;
    }
};

getShippingTotal()