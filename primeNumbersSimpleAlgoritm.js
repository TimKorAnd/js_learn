function primeFactors(n){
    //const pn = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    // function* getPrime() {
    //     yield 2
    //     for (let num = 3; num < 2 ** 31 - 1; num++) {
    //         let check = true;
    //         for (let d = 2; num >= d * d; d++) {
    //             // если разделилось нацело, то составное
    //             if (num % d === 0)
    //                 check = false;
    //         }
    //         // если нет нетривиальных делителей, то простое
    //         if (check) yield num;
    //     }
    // }

    function* getPrime() {
        for (let i = 2; i < 10e10; i++)
            yield i
    }

    let i = 0;
    let res = ''
    let count = 0;
    let pm = getPrime();
    while (n > 1){
        let numPM = pm.next()
        count = 0;
        while (n >= 0 && !(n % numPM.value)){
            n /= numPM.value
            count++
        }
        if (count){
            if (count === 1) {
                res = res.concat(`(${numPM.value})`)
            } else
                    res = res.concat(`(${numPM.value}**${count})`)
        }
        i++
    }
    return res
}

console.log(primeFactors(2*2*2*3*7*5*5));
