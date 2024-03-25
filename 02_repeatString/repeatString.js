const repeatString = function(string, num){
    let i = 0;
    let fullString="";
    if (num < 0){
        return "ERROR";
    } else if (num === 0){
        return fullString;
    } else {
        do {
            fullString += string;
            i++;
        } while (i < num);
        return fullString;
    }
};

// Do not edit below this line
module.exports = repeatString;
