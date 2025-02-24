function discount(amount) {
    if (amount>= 1000) {
        return amount * 0.8
    }else{
        return amount;
    }
    
}
console.log(discount(2000))