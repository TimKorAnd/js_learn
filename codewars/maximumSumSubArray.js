var maxSequence = function(arr){
    // ...
    const subArr = []
    let subArrCounter = 0
    let sum

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = arr[i]
            subArr.push(sum)
            while (i < arr.length-1 && sum + arr[i + 1] > 0 ) { // in this case have a sense go forward
                if (sum > sum + arr[i + 1] && subArr.every(s => s < sum)){
                    subArr.push(sum)
                }
                sum += arr[++i]
                subArr.push(sum)

            }
        }
    }
    console.log(subArr);
    return isFinite(Math.max(...subArr)) ? Math.max(...subArr) : 0
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([]));
