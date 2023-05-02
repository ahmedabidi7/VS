function maxMinAvg(arr) {
    //your code here 
    var max
    max=arr[0]
    var min
    min=arr[0]
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]>max)
        max=arr[i]
    }
    
    for (var i2 = 0; i2 < arr.length; i2++) {
        if (arr[i2]<min)
        min=arr[i2]
    }
    
    var avg
    var sum
    sum=0
    for (var i3 = 0; i3 < arr.length; i3++) {
        
        sum=sum+arr[i3];
        }
        avg=sum/arr.length;
    
    var arrnew=[]
    arrnew.push(max)
    arrnew.push(min)
    arrnew.push(avg)
    return arrnew; 
}