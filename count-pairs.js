
function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
}




// function countPairs(arr,val) {
//     let pairs = 0;
//     let left = 0;
//     let right = left+1

//     while(left < right){
//         if(sum === val){
//             pairs++
//         }  
        
    
//     for(let i =0; i < arr.length;i++){
//         let sum = arr[left] + arr[right]
          
//         }
//     }
//         return pairs;
// }
