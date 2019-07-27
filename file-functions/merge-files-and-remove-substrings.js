const fs = require('fs');

function readDirAndExecMerging(stringToRemove) {
  const files = fs.readdirSync('files', err => {
    if (err) throw err;
  });

  if (fs.existsSync(`merged-files/common-file.txt`)) {
    fs.unlinkSync(`merged-files/common-file.txt`, err => {
      if (err) throw err;
    });
  }

  if (files.length) {
    let removedSubstrNumber = mergeFiles(files, stringToRemove);
    console.log(`All files merged. Found and removed ${removedSubstrNumber} substrings.`);
  } else {
    console.log(`Directory './files' is empty.\n`);
  }
}

function mergeFiles(files, stringToRemove) {
  let removedSubstrNumber = 0;

  for (const fileName of files) {
    if (stringToRemove) {
      removedSubstrNumber += removeSubString(fileName, stringToRemove);
    }

    let fileContent = fs.readFileSync(`files/${fileName}`, err => {
      if (err) throw err;
    }).toString();

    fileContent += '\n';

    fs.appendFileSync(`merged-files/common-file.txt`,
      fileContent,
      err => {
        if (err) throw err;
      });
  }
  return removedSubstrNumber;
}

function removeSubString(fileName, stringToRemove) {
  let removedSubstrNumber = 0;

  if (stringToRemove === '') return;

  let fileContent = fs.readFileSync(`files/${fileName}`, err => {
    if (err) throw err;
  }).toString();

  let position = 0;
  while (true) {
    position = fileContent.indexOf(stringToRemove, position);
    if (position === -1) break;
    fileContent = fileContent.replace(stringToRemove, '');
    removedSubstrNumber++;
  }

  fs.writeFileSync(`files/${fileName}`,
    fileContent,
    err => {
      if (err) throw err;
  });
  return removedSubstrNumber;
}

module.exports = { readDirAndExecMerging };