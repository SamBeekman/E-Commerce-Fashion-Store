const subtotalAddends = document.getElementsByClassName('qtyPriceMult')
const subTotalEL = document.getElementById('subTot')

let getSubtotal = () => {
    let subtotal = 0;
        for (let i = 0; i < subtotalAddends.length; i++) {
            subtotal = subtotal + parseInt(subtotalAddends[i].innerHTML);
        }
    subTotalEL.innerHTML = "$" + subtotal;
};

getSubtotal()