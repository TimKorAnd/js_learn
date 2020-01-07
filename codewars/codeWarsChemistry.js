function getMultiplierAfterBrackets(formula, i){
    let bracketBalance = 1;
    let startIndex = i;
    while ( bracketBalance !== 0 ) {
        i++;

        if ( formula[i]  === ')' ){
            bracketBalance--
        }
        if ( formula[i]  === '(' ){
            bracketBalance++
        }
    }
    let res = (formula.substr(i + 1, formula.length - i).match(/^\d+/))
    return [i, res === null ? 1 : res[0]]
}

formula = '(C5H5)Fe(CO)2CH3'
formula = formula.replace(/[[{]/g, '(').replace(/[\]}]/g, ')')

// brackets processing
//let openBrackets = [...(formula.matchAll(/\(/g))]
let openBrackets = []//[...(formula.matchAll(/\(/g))]
let t
reg1 = /\(/g;
while (t = reg1.exec(formula)){
    openBrackets.push(t)
}

openBrackets.forEach( bracket => {
    [bracket.endIndex, bracket.multiplier] = getMultiplierAfterBrackets(formula, bracket.index)
    console.log(bracket);
})

//let res = [...(formula.matchAll(/[A-Z][a-z]*\d*/g))]
let res = []//[...(formula.matchAll(/[A-Z][a-z]*\d*/g))]
reg1 = /[A-Z][a-z]*\d*/g;
while (t = reg1.exec(formula)){
    res.push(t)
}


res.forEach( el => {
    el.mol = +el[0].match(/\d*$/g)[0] || 1               // mol evaluated
    //console.log(openBrackets);
    openBrackets.forEach( bracket => {
        //console.log('inRange', el.index);
        if (el.index > bracket.index && el.index < bracket.endIndex) {
            //console.log('inRange');
            el.mol *= bracket.multiplier
        }
    })

    el[0] = el[0].replace(/\d*/g,'')    // pure matter
    //console.log(el)
})

const answer = {}
res.forEach(el => {
    answer[el[0]] = answer[el[0]] + el.mol || el.mol
})
console.log(answer);





/*
function parseMolecule(formula) {
    // do your science here
    const resultMap = {};
    const openBracket = '([{'
    const brackets = {'(':')', '[':']','{':'}'}
    let i = 0;
    for( i = 0; i < formula.length; i++ ){
        if (openBracket.includes(formula[i])){
            openBrackets(formula, i)
        }
    }


    function openBrackets(formula, i){
        let openBracketNum = 1;
        let closeBracketNum = 0;
        let startBracketIndex  = i;
        let startBracket  = formula[i];
        let closeBracket  = brackets[startBracket];
        i++;
        //find appropriate bracket
        while (formula[i] !== closeBracket && openBracketNum !== closeBracketNum){

            if (openBracket.includes(formula[i])){
                openBrackets(formula, i)
            }
            closeBracketNum += (formula[i] === startBracket)
            i++
        }
        //readMultiple(i){
        let multiple = 1;
        let strMultiple =''
        while (  i < formula.length && +(formula[i]).match(/\d/) !== 0  ) {
            strMultiple += formula[i]
            multiple = +strMultiple || multiple;
            i++
        }
        //}(i)
        //convert to Map
        let openFormula = formula.substr(startBracketIndex, i)
        console.log(openFormula);
        console.log(formula);

    }

}
parseMolecule("K4[ON(SO3)2]2")
*/
