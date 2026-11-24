if (req.method === "GET" && match) {
    const id = Number(match[1]);
    if (!Number.isInteger(id)) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Invalid book ID" }));
      return;
    }
    const book = books.find((b) => b.id === id);
    if (!book) {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Book not found" }));
      return;
    }
    res.writeHead(200);
    res.end(JSON.stringify(book));
    return;
  }
  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));
  const match = pathname.match(/^\/books\/([^/]+)$/);
  }
    return;
    res.end(JSON.stringify(books));
    res.writeHead(200);
  if (req.method === "GET" && pathname === "/books") {
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
module.exports = { server };