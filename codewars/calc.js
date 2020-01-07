var calc = function (expression) {
    class Expression {
        value = ''
        constructor (someExpr){
            if (typeof +someExpr === "number"){
                this.value = +someExpr
            } else {
                this.value = this.parseExpr(someExpr)
            }
        }

        parseExpr(someExpr) {
            let l, r;
            let operatorPosition = someExpr.indexOf('+')
            console.log(operatorPosition);
            l = someExpr.substr()
            return ""
        }
    }

    class Plus {
        l = ''
        r = ''
        constructor (l, r){
            this.l = new Expression(l)
            this.r = new Expression(r)
        }

        evaluate(l, r) {
            return this.l + this.r
        }
    }
    // evaluate `expression` and return result
    expression = expression.replace(/\s/g,'')
   // const isplus






    return expression

}

console.log(calc(' 1 + 2    *   (3 / 4    )    '));
