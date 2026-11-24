function loadResource(resourceId) {
  return new Promise((resolve, reject) => {
    if (typeof resourceId !== "number" || Number.isNaN(resourceId)) {
      reject("Invalid resource ID");
      return;
    }

    const id = Math.floor(resourceId);

    if (id < 1 || id > 1000) {
      reject("Invalid resource ID");
      return;
    }

    setTimeout(() => {
      resolve("Resource loaded successfully");
    }, 2000);
  });
}