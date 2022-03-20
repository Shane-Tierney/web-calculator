function calculate() {
    var numOne = document.getElementById('firstNum').value
    var numTwo = document.getElementById('secondNum').value
    var answer = Number(numOne) + Number(numTwo)

    document.getElementById('answer').innerHTML = answer
}


