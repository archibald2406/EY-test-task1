const fs = require('fs');
const moment = require('moment');
const mysql  = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config);

execFileParsingAndImportToDB('1.txt'); // функция для выполнения задания

function execFileParsingAndImportToDB(fileName) {
  if (fs.existsSync(`../files/${fileName}`)) {
    let fileContent = readFileByFileName(fileName);
    const splitedFileArray = parseFileToArray(fileContent);
    insertDataFromArrayToDB(splitedFileArray);
  } else {
    console.log('File with such name does not exists.');
  }

  connection.end();
}

function readFileByFileName(fileName) {
  return fs.readFileSync(`../files/${fileName}`, err => {
    if (err) throw err;
  }).toString();
}

function parseFileToArray(fileContent) {
  let fileContentArray = fileContent.split('\n');
  let splitedFileArray = [];
  for (let item of fileContentArray) {
    item = item.slice(0, item.length - 2);
    let arrayObject = {
      dateOfRecording: item.split('||')[0],
      engCharString: item.split('||')[1],
      rusCharString: item.split('||')[2],
      evenNumber: item.split('||')[3],
      floatNumber: item.split('||')[4]
    };

    splitedFileArray.push(arrayObject);
  }
  return parseDatesFormat(splitedFileArray);
}

function parseDatesFormat(array) {
  for (const item of array) {
    let newDate = moment(item.dateOfRecording, 'DD.MM.YYYY').toDate();
    item.dateOfRecording = moment(newDate).format('YYYY-MM-DD');
  }
  return array;
}

function insertDataFromArrayToDB(splitedFileArray) {
  let numberOfInsertedRows = 0;
  let numberOfRemainingRows = splitedFileArray.length;

  for (const item of splitedFileArray) {
    let query = `insert into test_table(dateOfRecording, engCharString, rusCharString, evenNumber, floatNumber)
                 values('${item.dateOfRecording}', '${item.engCharString}', '${item.rusCharString}',
                 '${item.evenNumber}', '${item.floatNumber}');`;

    connection.query(query, null, () => {
      numberOfInsertedRows++;
      numberOfRemainingRows--;

      if (numberOfRemainingRows === 0) {
        console.log('All rows inserted.');
        return;
      }
      console.log(`${numberOfInsertedRows} row(s) inserted. ${numberOfRemainingRows} remaining`);
    });
  }
}