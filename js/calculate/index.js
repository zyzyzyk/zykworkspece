let stratigies = {
    'S':function(salary) {
        return salary*5;
    },
    'A': function(salary) {
        return salary*3;
    },
    'B': function(salary) {
        return salary*2;
    },
    'C': function(salary) {
        return salary*1;
    },
}

function calculate(level,salary) {
    return stratigies[level](salary);
    // const arr = {
    //     'S':5,
    //     'A':3,
    //     'B':2,
    //     'C':1,
    //     'D':0
    // }
    // return arr[level]*salary;
}
console.log(calculate('s',10000))