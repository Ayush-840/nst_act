//create function expression here with exact same name as mentioned in the problem statement
const isPasswordValid = function (password) {
  if (typeof password !== "string") {
    return false;
  }

  const hasMinLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasLetter = /[A-Za-z]/.test(password);

  return hasMinLength && hasNumber && hasLetter;
};