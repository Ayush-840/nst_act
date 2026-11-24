function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 75 && score <= 89) {
    console.log("B");
  } else if (score >= 60 && score <= 74) {
    console.log("C");
  } else {
    console.log("D");
  }
}