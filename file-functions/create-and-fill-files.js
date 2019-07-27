const fs = require('fs');
const moment = require('moment');

function createAndFillFiles() {
  for (let i = 0; i < 100; i++) {
    const array = createStringArray();

    fs.writeFileSync(`files/${i + 1}.txt`,
      array.map(v => { return v }).join('\n'),
      err => {
      if (err) throw err;
    });

    console.log(`File ${i + 1} has been created.`);
  }
}

function createStringArray() {
  const stringArray = [];
  for (let i = 0; i < 100000; i++) {
    let fileString = '';
    const engCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const rusCharacters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчщщъыьэюя';
    const separator = '||';

    fileString = createDateString() + separator + createCharString(engCharacters) + separator +
      createCharString(rusCharacters) + separator + createEvenNumberString() + separator +
      createFloatNumberString() + separator;

    stringArray.push(fileString);
  }
  return stringArray;
}

function createDateString() {
  const currDate = new Date();
  const startDate = new Date().setFullYear(currDate.getFullYear() - 5);
  const date = new Date(+startDate + Math.random() * (currDate - startDate));
  return moment(date).format('DD.MM.YYYY');
}

function createCharString(characters) {
  let result = '';
  const charactersLength = characters.length;
  for (let j = 0; j < 10; j++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createEvenNumberString() {
  let randomEvenNumber;
  while (true) {
    randomEvenNumber = 1 + Math.floor(Math.random() * 100000000);
    if (randomEvenNumber % 2 === 0) return randomEvenNumber;
  }
}

function createFloatNumberString() {
  let randomFloatNumber;
  randomFloatNumber = 1 + Math.random() * 19;
  let rounder = Math.pow(10, 8);
  return (Math.round(randomFloatNumber * rounder) / rounder).toString();
}

module.exports = { createAndFillFiles };