<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Active Timer Challenge</title>
</head>
<body>
  <h1>Active Timer Check</h1>
  <p id="status"></p>
  <script>
    window.addEventListener("DOMContentLoaded", async () => {
      const isActive = confirm("Are you still active?");
      if (isActive) {
        try {
          const response = await fetch("/active");
          const message = await response.text();
          document.getElementById("status").textContent =
            `${response.status}: ${message}`;
        } catch (err) {
          document.getElementById("status").textContent =
            "Error checking active status";
        }
      }
    });
  </script>
</body>
</html>