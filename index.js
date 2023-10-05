let computerNumber
let userNumbers = []

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers() {
    let userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)

    document.getElementById('guesses').innerHTML = userNumbers
    document.getElementById('attempts').innerHTML = userNumbers.length


    if (userNumbers.length < 10) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'muito alto'
            document.getElementById('inputBox').value = ''
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'muito baixo'
            document.getElementById('inputBox').value = ''

        }
        else {
            document.getElementById('textOutput').innerHTML = 'acertou, PARABENS'
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

        }

    } else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu! o número era ' + computerNumber;
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

    }


    let botaoRecarregar = document.getElementById('newGameButton');
    botaoRecarregar.addEventListener('click', function () {
        location.reload();
    });

}