function runNTimes(fn, n) {
  for (let i = 0; i < n; i++) {
    const result = fn();
    console.log(JSON.stringify(result));
  }
}