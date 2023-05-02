function greaterY(arr, Y) {
    //your code here 
    var count
    count=0
    for (var i = 0; i < arr.length; i++) {
        if (Y<arr[i]){
        
        count++;
        }
    }
    
    return count; 
}