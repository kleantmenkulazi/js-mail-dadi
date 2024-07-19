
const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log('userNumber', userNumber, typeof userNumber);

const pcNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log('pcNumber', pcNumber, typeof pcNumber);


if (userNumber > pcNumber) {
    alert('Hai vinto');
}
else if (userNumber < pcNumber) {
    alert('Hai perso');
}
else {
    alert('Pareggio');
}