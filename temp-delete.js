const fs = require('fs');
const path = './src/app/favicon.ico';
if(fs.existsSync(path)) { 
  fs.unlinkSync(path); 
  console.log('deleted'); 
} else { 
  console.log('not found'); 
}
