async function handleAsyncFunction() {
  try {
    const res = await asyncFunction();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

handleAsyncFunction();