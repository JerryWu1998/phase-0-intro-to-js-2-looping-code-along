// Code your solutions in this file
function writeCards(names, name) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${name} gift!`)
    }
    return messages;
}

function countDown(n) {
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}