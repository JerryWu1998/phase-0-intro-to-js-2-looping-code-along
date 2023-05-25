// Code your solutions in this file
function writeCards(name, gift) {
  const array = [];
  for (let n in name) {
    array.push(`Thank you, ${name[n]}, for the wonderful ${gift} gift!`);
  }
  return array;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}