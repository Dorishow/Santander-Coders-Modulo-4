const calculadora = (() =>{
    
    let calc = {n1: 0, operator: '', n2: 0}
    let EnterController = 'n1'
    let history = []

    const isNumber = (n) => typeof n == 'number'
    const isString = (n) => typeof n == 'string'

    const isFirstNumber = (EnterController) => EnterController === 'n1'
    const isOperator = (EnterController) => EnterController === 'operator'
    const isSecondNumber = (EnterController) => EnterController === 'n2'

    const setToCalculator = (prop, data) => calc = {...calc, [prop]: data}
    const nextEnterWillBe = (value) => EnterController = value

    function enter(data){
        if(isNumber(data)){
            if(isFirstNumber(EnterController)){
                setToCalculator('n1', data)
                nextEnterWillBe('operator')
            }
            else if(isSecondNumber(EnterController)){
                setToCalculator('n2', data)
            }
            else{
                setToCalculator('n1', data)
                nextEnterWillBe('operator')
            }
        }
        else if(isString(data)){
            if(isOperator(EnterController)){
                setToCalculator('operator', data)
                nextEnterWillBe('n2')
            }
            else{nextEnterWillBe('n1')}
        }
    }
    
    function equals(){
        if(EnterController === 'n2'){
            history = [...history, {...calc, result: calculate(calc)}]
            nextEnterWillBe('n1')
            return (calculate(calc))
        }
        else{
            nextEnterWillBe('n1')
            return alert('A ordem de entrada deve ser => Número 1 => Operador => Número 2')
        }
    }

    const list = () => history.forEach(
        ({n1, operator, n2, result}) => console.log(`${n1} ${operator} ${n2} = ${result}`)
    )

    const reset = () => history = []
    
    function calculate({n1, operator, n2}){
        if(operator === '+') return n1 + n2
        if(operator === '-') return n1 - n2
        if(operator === '*') return n1 * n2
        if(operator === '/') return n1 / n2
        else return 'operator inválido'
    }
    
    return {
        enter, equals, list, reset
    }

})()

    // calculadora.enter(5)
    // calculadora.enter('+')
    // calculadora.enter(1)
    // calculadora.equals()

    // calculadora.enter(2)
    // calculadora.enter('-')
    // calculadora.enter(1)
    // calculadora.equals()

    // calculadora.enter(5)
    // calculadora.enter('*')
    // calculadora.enter(2)
    // calculadora.equals()

    // calculadora.enter(5)
    // calculadora.enter('/')
    // calculadora.enter(2)
    // calculadora.equals()

    // calculadora.list()

    // calculadora.reset()
    
    // calculadora.list()