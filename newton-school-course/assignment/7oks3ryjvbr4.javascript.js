fs.writeFile(filePath, "Hello from Node.js!", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("Message written successfully to chat.txt");
});