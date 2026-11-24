const bookId = Number(rawId);
    const book = books.find((b) => b.id === bookId);
    if (!/^\d+$/.test(rawId)) {
      return sendJson(res, 400, { error: "Invalid book ID" });
    }
  if (method === "GET" && pathname.startsWith("/books/")) {
    const rawId = pathname.slice("/books/".length);
    if (!rawId || rawId.includes("/")) {
      return sendJson(res, 404, { error: "Route not found" });
    }
  if (method === "GET" && pathname === "/books") {
    return sendJson(res, 200, books);
  }
  // GET /books/:id -> return book by ID
    if (!book) {
      return sendJson(res, 404, { error: "Book not found" });
    }
    return sendJson(res, 200, book);
  }
  // Any other unsupported route
  return sendJson(res, 404, { error: "Route not found" });
});
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});