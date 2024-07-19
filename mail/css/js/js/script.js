

const userEmail = prompt('Inserisci la tua email:');
console.log('userMail', userEmail, typeof userEmail)


const users = [
    'a@a.a',
    'b@b.b',
    'c@c.c',
    'd@d.d'
];

console.log('users', users, typeof users)
console.log('users.lenght', users.length, typeof users.length);


let found = false;

for (let i = 0; i < users.length; i++) {
    console.log('users[i]', users[i], typeof users[i]);

    if(users[i] == userEmail) {
        found = true;
    }
}
console.log(found);

if (found){
    alert('Sì, puoi entrare');
}
else{
    alert('No, non puoi entrare');
}