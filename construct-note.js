// add whatever parameters you deem necessary
function frequencyCounter(str){
 let obj = new Map();

 for(let char of str){
    obj.set(char, (obj.get(char) || 0) + 1)
 }
 return obj
}

function constructNote(message,letters) {
    //can be built: message contains letters only;
    if(letters.length < message.length) return false;
    
    let lettersCount = frequencyCounter(letters);
    let messageCount = frequencyCounter(message);

    if(lettersCount.size < messageCount.size) return false;

    for(let [char, count] of messageCount){
        if(!lettersCount.has(char) || lettersCount.get(char) < count){
            return false;
        }
    }

    return true;
}
