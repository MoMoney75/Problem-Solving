// add whatever parameters you deem necessary
function frequencyCounter(num){
    let obj = {};

    for(let x of num){
        obj[x] = (obj[x]+1) || 1;
    }
    return obj;
}

function sameFrequency(num1,num2) {
if(num1.toString().length !== num2.toString().length) return false;

let num1Count = frequencyCounter(num1);
let num2Count = frequencyCounter(num2);

for(let key of Object.keys(num1Count)){
    if(num1Count[key] !== num2Count[key]) {
        return false;
        }
    }
    return true;
}
