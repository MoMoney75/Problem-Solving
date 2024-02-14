// add whatever parameters you deem necessary
function separatePositive(arr) {
    //positive > 0; negative < 0;
    let pointer = 0;
    //loop through array
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            [arr[i], arr[pointer]] = [arr[pointer], arr[i]]
            pointer++
        }
    }
    return arr;
}
