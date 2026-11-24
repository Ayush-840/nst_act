async function solve(userName, ms) {
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userName);
      }, ms);
    });
  }

  async function getNameAfterDelay() {
    const result = await delay(ms);
    return result;
  }

  const finalName = await getNameAfterDelay();
  console.log(finalName);
}