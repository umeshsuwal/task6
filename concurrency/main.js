const path = require('path');
const { Worker } = require('worker_threads');

const start = Date.now();

const worker = new Worker(path.join(__dirname, 'heavy-task.js'));

worker.on('message', (result) => {
  console.log(`Result from worker: ${result} (took ${Date.now() - start}ms)`);
});

worker.postMessage(40);

console.log(`Main thread still free at ${Date.now() - start}ms — logged right after postMessage, not waiting on the worker`);

const interval = setInterval(() => {
  console.log(`Main thread heartbeat at ${Date.now() - start}ms`);
}, 200);

worker.on('message', () => clearInterval(interval));