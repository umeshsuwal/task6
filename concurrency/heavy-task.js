const { parentPort } = require('worker_threads');

function slowFibonacci(n) {
  if (n <= 1) return n;
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

parentPort.on('message', (n) => {
  const result = slowFibonacci(n);
  parentPort.postMessage(result);
});
