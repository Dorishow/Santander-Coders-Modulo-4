const calculadora = (() => {
    let calc = {n1: false, operator: false, n2: false}
    let history = []

    const resetCalc = () => calc = {n1: false, operator: false, n2: false}

    const isNumber = data => typeof data == 'number'

    const isString = data => typeof data == 'string'

    const addToHistory = (data) => history = [...history, data]

    const list = () => {console.table(history)}

    const reset = () => {history = []}
    

    const enter = data =>{
        if(isNumber(data)){
            if(!calc.n1) return calc.n1 = data
            if(!calc.n2) return calc.n2 = data
        }
        else if(isString(data)){
            if(!calc.operator) return calc.operator = data
        } 
        else{console.log('invalid data Type')}
    } 


    function getResultOf({n1, operator, n2}){
        const result = `${n1} ${operator} ${n2} = ${calculate(calc)}`
        console.log(result)
        return result
    }


    const equals = () => {
        const {n1, operator, n2} = calc
        if(n1 && operator && n2){
            const result = getResultOf(calc)
            addToHistory(result)
            resetCalc()
        } else{
            console.log('Please type number 1, operator and number 2 before request the resolution')
        }
    }

    const calculate = ({n1, operator, n2}) => {
        if(operator == '+') return n1 + n2
        if(operator == '-') return n1 - n2
        if(operator == '*') return n1 * n2
        if(operator == '/') return n1 / n2
        if(operator === '^') return Math.pow(n1, n2)
        else return 'operator inválido'
    }

    return {enter, equals, list, reset}
})()

calculadora.enter(5)
calculadora.enter('+')
calculadora.enter(1)
calculadora.equals()

calculadora.enter(2)
calculadora.enter('-')
calculadora.enter(1)
calculadora.equals()

calculadora.enter(2)
calculadora.enter('^')
calculadora.enter(3)
calculadora.equals()

calculadora.enter(3)
calculadora.enter('^')
calculadora.enter(2)
calculadora.equals()

calculadora.enter(5)
calculadora.enter('*')
calculadora.enter(2)
calculadora.equals()

calculadora.enter(5)
calculadora.enter('/')
calculadora.enter(2)
calculadora.equals()

calculadora.list()

calculadora.reset()

calculadora.list()
