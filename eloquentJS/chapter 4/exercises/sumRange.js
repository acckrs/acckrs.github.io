function sum(rangeArr) {
    sum = 0;
    for (var i = 0; i < rangeArr.length; i++) {
        sum += rangeArr[i];
    }
    return sum;
}

function range(start, end, step) {
    var rangeArr = [],
        index = 0;
    if (!step) {
        if (start <= end) {
            for (var i = start; i <= end; i++) {
                rangeArr[index] = i;
                index++;
            }
        } else {
            for (var i = start; i >= end; i--) {
                rangeArr[index] = i;
                index++;
            }
        }
    } else {
        if (start <= end) {
            if (step < 0) {
                for (var i = start; i <= end; i -= step) {
                    rangeArr[index] = i;
                    index++;
                }
            } else {
                for (var i = start; i <= end; i -= step) {
                    rangeArr[index] = i;
                    index++;
                }
            }
        } else {
            if (step < 0) {
                for (var i = start; i >= end; i += step) {
                    rangeArr[index] = i;
                    index++;
                }
            } else {
                for (var i = start; i >= end; i -= step) {
                    rangeArr[index] = i;
                    index++;
                }
            }
        }
    }


    return rangeArr;
}

console.log(sum(range(2, 4, -1)));