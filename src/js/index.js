const container = document.querySelector('.container');
const dicesContainer = document.createElement('div');
const button = document.createElement('button');
const dices = [];

function insertDicesContainer() {
	dicesContainer.classList.add('dicesContainer');
	container.appendChild(dicesContainer);
}

function insertButton() {
	button.classList.add('throwButton');
	button.textContent = 'Throw Dice';
	container.appendChild(button);

	button.addEventListener('click', () => {
		dices.forEach((dice) => {
			dice.textContent = `${Math.round(Math.random() * 5 + 1)}`;
		});
	});
}

function insertDices(numberDices) {
	for (let i = 0; i < numberDices; ++i) {
		const dice = document.createElement('div');
		dices.push(dice);
		dice.classList.add('dice', `dice-${i}`);
		dicesContainer.appendChild(dice);
	}
}

(() => {
	insertDicesContainer();
	insertButton();
	insertDices(2);
})();
