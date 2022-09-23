const arr1 = [true, false, true, true]

function countTrue(arr) {
    numOfTrues = arr.filter(value => value === true).length;
    console.log(numOfTrues)
}

countTrue([true, false, true, true]);
