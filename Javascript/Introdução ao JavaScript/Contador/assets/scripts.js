let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const SOMA_BTN = document.getElementById('mais');
const SUB_BTN = document.getElementById('menos');

function increment() {
	if(count < 50) {
		count++;
		if(count >= 0) CURRENT_NUMBER.style.color = 'black';
		CURRENT_NUMBER.innerHTML = count;
	};
};

function decrement() {
	if(count > -50) {
		count--;
		if(count < 0) CURRENT_NUMBER.style.color = 'red';
		CURRENT_NUMBER.innerHTML = count;
	};
};

SOMA_BTN.addEventListener('click', increment);
SUB_BTN.addEventListener('click', decrement);