function getInstructionsFromSignal(color) {
  switch (color) {
    case "Red":
      return "Stop";
    case "Yellow":
      return "Ready";
    case "Green":
      return "Go";
    default:
      return "Invalid Color";
  }
}