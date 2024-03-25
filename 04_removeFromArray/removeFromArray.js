const removeFromArray = function(array1,...args){
    let fullArray = [];
    fullArray = array1.concat(args).sort();
    
    for (let i = 0; i < fullArray.length; i++){
      if (fullArray[i] === fullArray[i+1]){
        fullArray.splice(i, 1);
      }
    }
    return fullArray;
}  

// Do not edit below this line
module.exports = removeFromArray;

/*

//v3+v4
const removeFromArray = function(...args){
  let order = args.flat();
  return [...new Set(order)];
}  
 
console.log("output:");
console.log(removeFromArray([1,2,3,4], 3,2,4));


  let fullArray = array1.concat(...args);
  return [...new Set(fullArray)];
  }

console.log(removeFromArray.length);
console.log(removeFromArray([1, 2, 3, ], 2, 4, "hey"));

//v2 - loops the splice function - doesnt work for unkown qty of arguments tho
  for (let i = removeFromArray.length; i >= 2; i--){
    let index = array.indexOf(num);
    array.splice(index, 1);
  }
  return array;

//v1
  let index = array.indexOf(num);
  array.splice(index, 1);
  return array;







//05_sumAll
const sumAll = function (num1, num2){
    let order = [];
    let arrPlaces = Math.abs(num1-num2)-1;
    let lowNum;
    let highNum;
    let sum = 0;

    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR";
    }
    
    //sets lowNum + highNum vars
    //sort puts lower value at [0]
    if (num1 < num2){
        lowNum = num1;
        highNum = num2;
        order[0] = num1;
    } else {
        order[0] = num2;
        lowNum = num2;
        highNum = num1;
    }
  
    //adds as many numbers bw num1 + num2 to the end
    for (let i = 0; i < arrPlaces; i++){
        order.push(0);
        order[i + 1] = order[i] + 1;
    }
    order[order.length]= highNum;
  
    for (let j = 0; j < order.length; j++){
        sum += order[j];     
    }
 
    return "the sum of:\n" + order.join(" + ") + " = " + sum;
    }

console.log(sumAll(6,12));


//05_sumAll ALT?
const sumAll = function (num1, num2){
    let order = [];
    let arrPlaces = Math.abs(num1-num2)-1;
    let lowNum;
    let highNum;
    let sum = 0;

    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR";
    }
    
    //sets lowNum + highNum vars
    //sort puts lower value at [0]
    if (num1 < num2){
        lowNum = num1;
        highNum = num2;
        order[0] = num1;
    } else {
        order[0] = num2;
        lowNum = num2;
        highNum = num1;
    }
  
    //adds as many numbers bw num1 + num2 to the end
    for (let i = 0; i < arrPlaces; i++){
        order.push(0);
        order[i + 1] = order[i] + 1;
    }
    order[order.length]= highNum;
  
    for (let j = 0; j < order.length; j++){
        sum += order[j];     
    }
 
    return "the sum of:\n" + order.join(" + ") + " = " + sum;
    }

console.log(sumAll(6,12));

*/ 