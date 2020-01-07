function primeFactors(n){
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    let res = [];
    //your code here
    const pn = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    let i = 0;
    (function recursive(n,i){
        let exp = Math.floor(getBaseLog(pn[i],n))
        //let chunk = Math.pow(pn[i], exp)
        let chunk = pn[i] ** exp
        let nextMultiplier =  n / chunk

       //console.log('n : '+ n +'; pn['+i+'] : '+pn[i]+'; exp : '+ exp + '; chunk : ' + chunk + '; diff : '+diff)

        if ( chunk === n) {
            console.log(`chunk ${chunk} === n ${n}`)
            res.push({'pn':pn[i], 'exp': exp})
            return chunk; // TODO what return?
        }

       // while (exp > 0 && diff <  n / pn[i+1] && chunk * recursive(diff,i+1) !== n){

            while ( nextMultiplier % 1 && nextMultiplier < pn[i + 1] && exp > 1) {
                exp--
                chunk = pn[i] ** exp
                nextMultiplier = n / chunk
                //console.log('pn[i] : ',pn[i])
            }
        while(exp > 0 && n !== chunk * recursive(nextMultiplier,i+1)){
             exp--
            chunk = pn[i] ** exp
            nextMultiplier = n / chunk
        }

        //console.log('life after while');
        if (exp > 0) {
            res.push({'pn': pn[i], 'exp': exp})
            //return chunk//pn[i] ** exp
        } else {
            console.log(` inside else pn: ${pn[i]}, exp: ${exp})`);
        }
        return chunk
    })(n,0)

    return res;
}

console.log(primeFactors(2*2*3*5));
//console.log(primeFactors(86240));
