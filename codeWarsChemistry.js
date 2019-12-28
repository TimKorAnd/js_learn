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
        while (  i < formula.length && typeof +formula[i] === 'number' ) {
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
