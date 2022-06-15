let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

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