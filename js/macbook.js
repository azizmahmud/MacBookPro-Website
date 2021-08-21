

// Extra item  cost function 

function updateExtraItem(inputId, cost) {

    const item = document.getElementById(inputId);
    item.innerText = cost;
    console.log(item.innerText)

    totalCost()

}




// Handale Button for Memory

document.getElementById("8gb-memory-cost").addEventListener('click', function () {

    updateExtraItem("extra-memory-price", 0);

});

document.getElementById("16gb-memory-cost").addEventListener('click', function () {

    updateExtraItem("extra-memory-price", 180);

});

// Handale Button for SSD Storage

document.getElementById('256-ssd-storage').addEventListener("click", function () {

    updateExtraItem("extra-storage-price", 0);

});

document.getElementById('512-ssd-storage').addEventListener("click", function () {

    updateExtraItem("extra-storage-price", 100);

});

document.getElementById('1TB-ssd-storage').addEventListener("click", function () {

    updateExtraItem("extra-storage-price", 180);

});


// Handale Button for Delivery fee

document.getElementById("free-delivery").addEventListener('click', function () {

    updateExtraItem("delivey-charge", 0);


});

document.getElementById("fast-delivery").addEventListener('click', function () {

    updateExtraItem("delivey-charge", 20);

});



// convert price field inner text into integer value 

function getIntegerValue(priceFieldId) {

    const priceText = document.getElementById(priceFieldId).innerText;
    const price = parseInt(priceText);
    return price;

}


// calculate Total  Cost

function totalCost() {

    // regular price of macbook
    const regularPrice = getIntegerValue("regular-price");

    // Extra Memory Price
    const extraMemoryPrice = getIntegerValue("extra-memory-price");

    // Extra Storage Price
    const extraStoragePrice = getIntegerValue("extra-storage-price");

    // Delivey fee 
    const deliveryCharge = getIntegerValue("delivey-charge");


    // Calculate total cost
    const totalPriceField = document.getElementById('total-cost');
    const totalPrice = extraMemoryPrice + extraStoragePrice + deliveryCharge + regularPrice;
    totalPriceField.innerText = totalPrice;

    // Update Footer Total Price
    const footerTotal = document.getElementById('total-price');
    footerTotal.innerText = totalPrice;

    return totalPrice;
}




// Handale Promo Code by Event Handelar


document.getElementById('promo-button').addEventListener('click', function () {


    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const promoCode = 'stevekaku';
    const footerTotalPrice = document.getElementById("total-price");
    if (promoInputValue.toLowerCase() == promoCode.toLowerCase()) {
        const total = totalCost();
        const discountAmount = total * 0.20;
        const totalPrice = total - discountAmount;
        footerTotalPrice.innerText = totalPrice;
        promoInput.value = "";



    }
    else {
        alert("Wrong Cupon Code. Please Try Again!")
    }
})