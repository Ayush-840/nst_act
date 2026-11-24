async function handleAsyncFunction() {
  try {
    const response = await asyncFunction();
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

handleAsyncFunction();