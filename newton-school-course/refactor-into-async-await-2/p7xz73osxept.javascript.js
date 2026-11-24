async function handleAsync() {
  try {
    await asyncFunction();
  } catch (err) {
    console.log(err);
  }
}

handleAsync();