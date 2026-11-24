function createAccess(role) {
  return function (onAllowed, onDenied) {
    if (role === "admin") {
      if (typeof onAllowed === "function") {
        return onAllowed();
      }
    } else {
      if (typeof onDenied === "function") {
        return onDenied();
      }
    }
  };
}