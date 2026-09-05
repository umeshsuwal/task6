const { spawn } = require('child_process');

const child = spawn('ls', ['-la']);

child.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
