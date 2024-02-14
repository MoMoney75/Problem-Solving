// add whatever parameters you deem necessary
function averagePair(arr,value) {
    // average pairs = ([num + num])/2
    let left = 0;
    let right = arr.length-1;

    while(left < right){
    let average = (arr[left] + arr[right])/2
    if(average === value) return true;

    
    if(average > value){
        right--
    }
    else if(average < value){
        left++
    }
}
    return false;
}

//    t           t
//  l       v                r
//([1,2,3,4,5,6,7,8,9,10,11,12], 5)