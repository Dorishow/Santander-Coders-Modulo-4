const calculadora = (() => {
    let calculo = {n1: 0, operador: '', n2: 0}
    let history = []

    const resetCalc = () => calculo = {n1: 0, operador: '', n2: 0}
    
    const enter = data =>{
        const {n1, operador, n2} = calculo

        if(typeof data == 'number'){
            if(!n1) return calculo.n1 = data
            if(!n2) return calculo.n2 = data
        }
        else if(typeof data == 'string'){
            if(!operador) return calculo.operador = data
        } 
        
    } 

    const addToHistory = (data) =>{
        history = [...history, data]
    }

    const equals = () => {
        const {n1, operador, n2} = calculo
        if(n1 && operador && n2){
            const resultado = (`${n1} ${operador} ${n2} = ${calculate(calculo)}`)
            console.log(resultado)
            addToHistory(resultado)
            resetCalc()
        } else{
            console.log('Please type number 1, operator and number 2 before request the resolution')
        }
    }

    const calculate = ({n1, operador, n2}) => {
        if(operador == '+') return n1 + n2
        if(operador == '-') return n1 - n2
        if(operador == '*') return n1 * n2
        if(operador == '/') return n1 / n2
    }

    const list = () => {console.log(history)}
    const reset = () => {history = []}

    return {enter, equals, list, reset}
})()