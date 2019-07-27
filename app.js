const readline = require('readline');

const {createAndFillFiles} = require('./file-functions/create-and-fill-files');
const {readDirAndExecMerging} = require('./file-functions/merge-files-and-remove-substrings');

const readln = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `Select an action:
1) Create and fill 100 files by 100 000 rows.
2) Merge files with removing substring.
3) Exit.\n`;

showMainMenu();

function showMainMenu() {
  readln.question(menu, answer => {
    switch (answer) {
      case '1':
        createAndFillFiles();
        showMainMenu();
        break;
      case '2':
        mergeFiles();
        showMainMenu();
        break;
      case '3':
        console.log('See you later...');
        process.exit();
        break;
      default:
        console.log('\nPlease, enter number from 1 to 3\n');
        showMainMenu();
    }
  });
}

function mergeFiles() {
  readln.question('Input substring to remove: ', answer => {
    readDirAndExecMerging(answer);
    showMainMenu();
  });
}
