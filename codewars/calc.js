var calc = function (expression) {
    class Expression {
        //nonTerminalExpressionTest = /[+\-*\/]/g;
        /*constructor (someExpr){
            if (someExpr.match(/[+\-*\/]/) ){
                this.value = this.parseExpressionToLeftRightByOperator(someExpr, '+')

            } else {
                this.value = +someExpr
            }
        }*/
        constructor (someExpr){
            if (someExpr.match(/\+/) ){
                this.value = new OperatorAction(this.parseExpressionToLeftRightByOperator(someExpr, '+')).value

            } else {
                this.value = +someExpr
            }
        }

        parseExpressionToLeftRightByOperator(someExpr, operator) {
            let l, r;
            let operatorPosition = someExpr.indexOf(operator)
           // console.log(operatorPosition);
            /*l = new Expression(someExpr.slice(0,operatorPosition))
            r = new Expression(someExpr.slice(operatorPosition+1))*/
            l = someExpr.slice(0,operatorPosition)
            r = someExpr.slice(operatorPosition+1)
            return {l , r, operator}
        }
    }

    class OperatorAction {
        constructor ({l, r, operator}){
            this.l = new Expression(l)
            this.r = new Expression(r)
            switch (operator) {
                case '+': {
                    this.value = this.l.value + this.r.value
                    break
                }
                case '-': {
                    this.value = this.l.value - this.r.value
                    break
                }
                case '*': {
                    this.value = this.l.value * this.r.value
                    break
                }
                case '/': {
                    this.value = this.l.value / this.r.value
                    break
                }
            }

        }

        evaluate(l, r) {
            return this.l + this.r
        }
    }
    // evaluate `expression` and return result
    expression = expression.replace(/\s/g,'')
   // const isplus






    return new Expression(expression)

}

console.log(calc(' 1 + 2 +3+94'));
