for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " is PDC NID");
    } 
    else if (i % 3 === 0) {
        console.log(i + " is PDC");
    }
     else if (i % 5 === 0) {
        console.log(i + " is NID");
    } 
    else {
        console.log(i + " is neither PDC nor NID");
    }
}
