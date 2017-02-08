//pretvori niz u listu
function arrayToList(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        };
    }
    return list;
};

//pretvori listu u niz
function listToArray(list) {
    var arr = [];
    for(var node=list;node;node=node.rest){
        arr.push(node.value);
    }
    return arr;
}

//dodaj element u listu
function prepend(element,list){
    var newArr=listToArray(list).unshift(element);
    return newArr;
}



var list = {
    "value": 1,
    "rest": {
        "value": 2,
        "rest": {
            "value": 3,
            "rest": null
        }
    }
};
console.log(prepend(4,list));

var testArr = [10, 20, 30];
console.log(arrayToList(testArr));
console.log(listToArray(arrayToList(testArr)));