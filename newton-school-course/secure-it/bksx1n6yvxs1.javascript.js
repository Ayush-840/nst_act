// ─── 2 ───
async function runUntilRejection() {
  while (true) {
    try {
      const message = await asyncOperation();
      console.log(message);
    } catch (error) {
      console.log(error);
      break;
    }
  }
}

runUntilRejection();

// ─── 3 ───
2