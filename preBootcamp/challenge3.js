function sum_odd_5000() {
    var sum = 0;
    //your code here 
    for (var i = 1; i <= 5000; i++) {
        if (i%2!=0){
            console.log(i);
            sum=sum+i;
        }
        
    }
    return sum; 
}