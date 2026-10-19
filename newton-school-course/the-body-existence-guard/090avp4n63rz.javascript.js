// TODO: Fix this middleware so the app doesn't freeze.
// It should log a message AND pass control to the next handler.
function loggingMiddleware(req, res, next) {
  console.log("A request hit the server!");
  // Something is missing here, the app freezes without it.
}
  next()
module.exports = loggingMiddleware;