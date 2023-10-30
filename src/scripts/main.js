const currentInput = document.querySelector(".currentInput");
const answerScreen = document.querySelector(".answerScreen");
const eraseButton = document.querySelector("#erase");
const clearButton = document.querySelector("#clear");
const evaluate = document.querySelector("#evaluate");

const buttons = document.querySelectorAll("button");
const history = [];

let realTimeScreenValue = "";

clearButton.addEventListener("click", () => {
  realTimeScreenValue = "";
  answerScreen.innerHTML = 0;
  currentInput.className = "currentInput";
  answerScreen.className = "answerScreen";
  answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

function addToHistory(expression, result) {
  history.push({ expression, result });
  const historyList = document.getElementById("historyList");
  const listItem = document.createElement("li");
  listItem.textContent = `${expression} = ${result}`;
  historyList.appendChild(listItem);

  const historySection = document.getElementById("history");
  if (history.length > 0) {
    historySection.style.display = "block";
  } else {
    historySection.style.display = "none";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.id.match("erase")) {
      realTimeScreenValue += button.value;
      currentInput.innerHTML = realTimeScreenValue;
    }

    if (button.id.match("erase")) {
      realTimeScreenValue = realTimeScreenValue.slice(0, -1);
      currentInput.innerHTML = realTimeScreenValue;
    }

    if (button.id.match("evaluate")) {
      currentInput.className = "answerScreen";
      answerScreen.className = "currentInput";
      answerScreen.style.color = "white";

      if (realTimeScreenValue) {
        const result = eval(realTimeScreenValue);
        answerScreen.innerHTML = result;
        addToHistory(realTimeScreenValue, result);
      } else {
        answerScreen.innerHTML = 0;
      }
    }
  });
});
