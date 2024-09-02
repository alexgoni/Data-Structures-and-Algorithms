function checkTime(callback) {
  const startTime = performance.now();
  callback;
  const endTime = performance.now();

  console.log(`Time Elapsed: ${(endTime - startTime) / 1000} seconds`);
}

module.exports = checkTime;
