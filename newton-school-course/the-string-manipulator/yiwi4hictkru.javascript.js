// HOF - DO NOT MODIFY
function stringProcessor(str, callback) {
  return callback(str);
}

// Callback 1: Converts string to ALL UPPERCASE
function toUpper(str) {
  return str.toUpperCase();
}

// Callback 2: Appends an exclamation mark (!) at the end
function exclaim(str) {
  return str + "!";
}