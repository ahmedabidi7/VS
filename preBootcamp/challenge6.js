function findAvg(arr) {
    //your code here 
    var avg
    var sum
    sum=0
    for (var i = 0; i < arr.length; i++) {
        
        sum=sum+arr[i];
        }
        avg=sum/arr.length;
    
    
    return avg; 
}