function swap(arr) {
    //your code here 
    var x
    x=arr[0]
    arr[0]=arr[arr.length-1]
    arr[arr.length-1]=x
    
    var arrnew=arr
    return arrnew; 
}