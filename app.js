const fs = require('fs').promises;

const text = "this is a test";

fs.writeFile('node-message.txt', text).then(() => {
   console.log('wrote file');
})
