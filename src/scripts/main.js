// const buttonValues = ['/','%','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.']

// const renderButtons = (buttonValues) => {
//     buttonValues.forEach(buttonValue => {
//         const button = document.createElement('button')
//         button.value = buttonValue
//         button.className = 'fun_btn'
//         button.type = 'button'
//         button.innerHTML = buttonValue
//         document.querySelector('.keypad-btns').appendChild(button)
//     });
// }
// renderButtons(buttonValues)

const currentInput = document.querySelector('.currentInput')
const answerScreen = document.querySelector('.answerScreen')
const eraseButton = document.querySelector('#erase')
const clearButton = document.querySelector('#clear')
const evaluate = document.querySelector('#evaluate')

const buttons = document.querySelectorAll('button')

let realTimeScreenValue = []

clearButton.addEventListener("click", () => {
    realTimeScreenValue = ['']
    answerScreen.innerHTML = 0
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen'
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)"
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!button.id.match('erase')) {
            realTimeScreenValue.push(button.value)
            currentInput.innerHTML = realTimeScreenValue.join('')

            if (button.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
            }

        }

        if (btn.id.match('erase')) {
            realTimeScreenValue.pop()
            currentInput.innerHTML = realTimeScreenValue.join('')
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
        }

        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen'
            answerScreen.className = 'currentInput'
            answerScreen.style.color = "white"
        }

        if (typeof eval(realTimeScreenValue.join('')) === 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})