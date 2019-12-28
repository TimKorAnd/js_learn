function parseMolecule(formula) {

    let multipliers = []
    let i = 0; //global index variable
    let multiplierCounter = 0;
    formula = formula.replace(/[[{]/g, '(').replace(/[\]}]/g, ')')

    function getChemElement(){
        let strMultiple = ''
        while (  i < formula.length && +(formula[i]).match(/\d/) !== 0 ) {
            strMultiple += formula[i++]
        }
        return strMultiple;
    }

    function getMultiplier(){
        let bracketBalance = formula[i] === '(' ? 1 : 0;
        let startIndex = i;
        while ( i++ < formula.length && bracketBalance !== 0 ) {
            if ( formula[i]  === ')' ){
                bracketBalance++
            }
            if ( formula[i]  === '(' ){
                bracketBalance--
            }

        }
        recalcMultiplier(){
            multipliers.foreach(m => {

            })
        }
    }

    for (i = 0; i < formula.length; i++) {
        if (formula[i] === '('){
            multiplierCounter++
            multipliers.push({[getChemElement()] : getMultiplier()})
        }
    }
}

console.log(parseMolecule('([][]{[()]})'));