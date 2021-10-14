function updateProductNumber(isIncreasing, product, price){
    const productInput = document.getElementById(product +"-number");
    const productNumberText = productInput.value;
    let productNumber =parseInt(productNumberText);
    if(isIncreasing== true){
        productNumber = productNumber+1;
    }
    else{
        if(productNumber >0){
            productNumber = productNumber-1;
        }
    }
    productInput.value = productNumber;
    //update Case Total
    const productTotal = document.getElementById(product +"-price");
    productTotal.innerText = productNumber * price;
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product+ "-number").value;
    const productNumber = parseInt(productInput); 
    return productNumber;  
}
function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax= (subTotal/100)*10;
    const totalAmount = subTotal+ tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax.toFixed(2);
    document.getElementById("total-amount").innerText = totalAmount;
}
document.getElementById("phone-plus").addEventListener("click",function(){
    updateProductNumber(true, "phone", 1219);
});
document.getElementById("phone-minus").addEventListener("click",function(){
    updateProductNumber(false, "phone", 1219);
});
document.getElementById("case-plus").addEventListener("click",function(){
    updateProductNumber(true, "case", 59);
});
document.getElementById("case-minus").addEventListener("click",function(){
    updateProductNumber(false, "case", 59);
});