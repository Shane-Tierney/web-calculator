function calculate() {
    var numOne = document.getElementById('firstNum').value
    var numTwo = document.getElementById('secondNum').value
    var oper = document.getElementById('operator').value
    var answerElement = document.getElementById('answer')

    console.log(oper)
    if (oper === 'addition'){
        var addAns = Number(numOne) + Number(numTwo)
        answerElement.innerHTML = addAns
    } else if (oper === 'subtraction') {
        var subAns = Number(numOne) - Number(numTwo)
        answerElement.innerHTML = subAns
    } else if (oper === 'multiplication') {
        var multAns = Number(numOne) * Number(numTwo)
        answerElement.innerHTML = multAns
    } else if (oper === 'division') {
        var divAns = Number(numOne) / Number(numTwo)
        answerElement.innerHTML = divAns
    }
    
    
}


