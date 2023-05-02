1,3,5,7,9
4,7,10,13
10
codingdojo
19
19,18,17,16,15,14
10,10,10,10,10,10
//8
function sum_odd(){
    var sum = 0;
    //your code here
    for (var i = 6; i <= 128; i++) {
         if (i%2!=0){
         
             sum=sum+i;
         }
         
     }
     
    return sum; 
 }
 //9
 function rangeOfAnArray(){
	var array = [9, 3, -3, -9, 11, -6, 5, 10, -9, 1];
	var smallest = array[0];
	var largest = array[0];
	//your code here
	
	
    for (var i = 0; i < array.length; i++) {
        if (array[i]>largest)
        largest=array[i]
    }
    
    for (var i2 = 0; i2 < array.length; i2++) {
        if (array[i2]<smallest)
        smallest=array[i2]
    }
    
	
	return largest - smallest; 
}
//10
function countGreaterThanX(){
	var array = [13, 15, -18, 29, 3, -4, -9, -10, 3, -7];
	var x = 14;
	var count = 0;
	//your code here
	
	for (var i = 0; i < array.length; i++) {
        if (array[i]>x)
        count++
    }
	
	return count; 
}