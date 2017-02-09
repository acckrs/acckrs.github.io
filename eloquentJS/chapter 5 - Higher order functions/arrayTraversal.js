function logEach(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}




var testArr = [1, 2, 3, 4, 5],
    sum = 0;
var testObj = {
    prop1: "value1",
    props2: {
        prop2: "value2",
        prop3: "value3"
    }
};



forEach(testArr, console.log);
forEach(testArr, function(number) {
    sum += number;
});
console.log(sum);