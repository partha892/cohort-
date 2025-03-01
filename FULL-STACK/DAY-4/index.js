const fs = require('fs');
const fs2 = require('fs/promises');

fs2.readFile('./hello.txt', 'utf-8')
  .then((content) => fs2.writeFile('backup.txt', content))
  .then(() => fs2.unlink('hello.txt')) // Delete index.txt
  .then(() => console.log('Backup created and index.txt deleted.'))
  .catch((err) => console.error('Error:', err));
