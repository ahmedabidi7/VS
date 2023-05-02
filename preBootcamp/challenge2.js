function sum_even_numbers(){
    var sum = 0;
    //your code here 
    for (var i = 1; i <= 1000; i++) {
        if (i%2==0){
            console.log(i);
            sum=sum+i;
        }
        
    }
    return sum; 
}