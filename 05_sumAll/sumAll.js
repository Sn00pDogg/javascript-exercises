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

    if (typeof num1 === "array" || typeof num2 === "array"){
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

// Do not edit below this line
module.exports = sumAll;
