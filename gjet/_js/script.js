const artContainer = document.getElementById("art");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generateRandomArt);

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

function generateRandomArt() {
  artContainer.innerHTML = '';

  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = generateRandomColor();
    artContainer.appendChild(square);
  }
}

generateRandomArt();
function rotateClockHands() {
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
  
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDeg = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, 0.5 degrees per minute
    const minuteDeg = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
    const secondDeg = seconds * 6; // 6 degrees per second
  
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
  }
  
  setInterval(rotateClockHands, 1000);
  rotateClockHands(); // Initial call to prevent delay

  const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <span class="delete-button">Delete</span>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
  }
});

const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const convertedAmountInput = document.getElementById("convertedAmount");

const exchangeRates = {
  usd: {
    eur: 0.85,
    gbp: 0.72,
  },
  eur: {
    usd: 1.18,
    gbp: 0.86,
  },
  gbp: {
    usd: 1.39,
    eur: 1.16,
  },
};

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  if (fromCurrency === toCurrency) {
    convertedAmountInput.value = amount.toFixed(2);
  } else {
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;
    convertedAmountInput.value = convertedAmount.toFixed(2);
  }
});

  
