function update(increase, id)
{
    
    if(id == `phone-number` || id == `phone-minus`)
    {
        let quantity = document.getElementById(`phone`);
        let prevQuantityString =quantity.value;
    let prevQuantityInt = parseInt(prevQuantityString);
    let newQuantity;
    if(increase === true)
    {
        newQuantity = prevQuantityInt+1;
    }
    else{
        newQuantity = prevQuantityInt - 1;
        if(newQuantity<0)
        {
            newQuantity+=Math.abs(newQuantity);
        }
    }
    quantity.value = newQuantity;
    return newQuantity;
    }
    else{
        let quantity = document.getElementById(`case`);
        let prevQuantityString =quantity.value;
    let prevQuantityInt = parseInt(prevQuantityString);
    let newQuantity;
    if(increase === true)
    {
        newQuantity = prevQuantityInt+1;
    }
    else{
        newQuantity = prevQuantityInt - 1;
        if(newQuantity<0)
        {
            newQuantity+=Math.abs(newQuantity);
        }
    }
    quantity.value = newQuantity;
    return newQuantity;
    }
    
}

function price(newQuantity, id)
{
    if(id == `phone-number` || id == `phone-minus`)
    {
        let prevPrice=document.getElementById(`phone-price`);
    // prevPhonePriceInt =parseInt(prevPhonePrice.innerText);
    let newPrice =(newQuantity * 1219);
    prevPrice.innerText = newPrice;

    return newPrice;
    }
    else{
        let prevPrice=document.getElementById(`case-price`);
    // prevPhonePriceInt =parseInt(prevPhonePrice.innerText);
    let newPrice =(newQuantity * 59);
    prevPrice.innerText = newPrice;

    return newPrice;
    }
}

// function totalPrice(element)
// {
//     if(element == `phone-number`)
//     {
//         let newQuantity =update(true, `phone-number`);
//         let phonePrice=price(newQuantity, `phone-number`);
//         let subTotal=(document.getElementById(`sub-total`));
//         subTotal.innerText=phonePrice;
//     }
//     else if(element == `phone-minus`)
//     {
//         let newQuantity =update(false, `phone-minus`);
//         let phonePrice=price(newQuantity, `phone-number`);
//         let subTotal=(document.getElementById(`sub-total`));
//         subTotal.innerText=phonePrice;
//     }
//     else if(element == `case-number`)
//     {
//         let newCase =update(true, `case-number`);
//         let casep=price(newCase, `case-number`);
//         let subTotal=(document.getElementById(`sub-total`));
//         subTotalstring =subTotal.innerText;
//         let subTotalInt =parseInt(subTotalstring)+casep;
//         subTotal.innerText=subTotalInt;
//     }
// }

// phone calculator
document.getElementById(`phone-number`).addEventListener(`click`,function(){
    let newQuantity =update(true, `phone-number`);
    let phonePrice=price(newQuantity, `phone-number`);

    let casePrice = parseInt(document.getElementById(`case-price`).innerText);
    let SubTotal = document.getElementById(`sub-total`);
    let total = phonePrice + casePrice;
    SubTotal.innerText =total;

    let final = document.getElementById(`total`);
    final.innerText =total;
})

document.getElementById(`phone-minus`).addEventListener(`click`, function(){
    let newQuantity =update(false, `phone-minus`);
    let phonePrice=price(newQuantity, `phone-minus`);

    let casePrice = parseInt(document.getElementById(`case-price`).innerText);
    let SubTotal = document.getElementById(`sub-total`);
    let total = phonePrice + casePrice;
    SubTotal.innerText =total;

    let final = document.getElementById(`total`);
    final.innerText =total;
})

// case calculator
document.getElementById(`case-number`).addEventListener(`click`,function(){
    let newCase =update(true, `case-number`);    
    let casep=price(newCase, `case-number`);

    let pPrice = parseInt(document.getElementById(`phone-price`).innerText);
    let SubTotal = document.getElementById(`sub-total`);
    let total = pPrice + casep;
    SubTotal.innerText =total;

    let final = document.getElementById(`total`);
    final.innerText =total;
})
document.getElementById(`case-minus`).addEventListener(`click`,function(){
    let newCase =update(false, `case-minus`);
    let casep=price(newCase, `case-minus`);

    let pPrice = parseInt(document.getElementById(`phone-price`).innerText);
    let SubTotal = document.getElementById(`sub-total`);
    let total = pPrice + casep;
    SubTotal.innerText =total;

    let final = document.getElementById(`total`);
    final.innerText =total;
})