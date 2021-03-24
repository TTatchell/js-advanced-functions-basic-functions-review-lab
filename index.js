function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

////////////////////////////////////////////////////////////////////////////////////////////
function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

////////////////////////////////////////////////////////////////////////////////////////////
function wrapAdjective(char="*", param) {
    return function (param='special') {
        return `You are ${char}${param}${char}!`;
    }
}
//let encouragingPromptFunction = wrapAdjective('!!!')
//console.log(wrapAdjective("%")("a dedicated programmer"))

////////////////////////////////////////////////////////////////////////////////////////////
const Calculator = {
    add(a, b) {return a + b;},

    subtract(a ,b) {return a - b;},

    multiply(a, b) {return a * b;},

    divide (a, b) {return a / b;}
}

////////////////////////////////////////////////////////////////////////////////////////////

function actionApplyer(int, array) {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            int = array[i](int);
            console.log(int)   
        }
        return int;
    }
    else {
        return int; 
    }
}