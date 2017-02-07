function reverseArray(arr) {
    revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    return revArr;
}
console.log(reverseArray(["A", "B", "C"]));