// add whatever parameters you deem necessary

function twoArrayObject(keys, values) {
    return keys.reduce((obj, cur, idx) => {
      obj[cur] = idx < values.length ? values[idx] : null;
      return obj;
    }, {});
  }

// function twoArrayObject(arr1,arr2) {
// let obj = {}
// for(let key of arr1){
// Object.keys(obj) = key
// }
// for(let i = 0; i < arr2.length;i++){
//     obj[key] = arr2[i]
// }
// return obj;
// }
// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}s