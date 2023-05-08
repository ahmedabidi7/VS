function reverse(arr) {
    var start = 0;
    var end = arr.length - 1;
    var temp;
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

console.log  (reverse(["a", "b", "c", "d", "e"]));

