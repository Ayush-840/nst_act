const bookId = Number(rawId);
    const book = books.find((b) => b.id === bookId);
    if (!book) {
      return sendJson(res, 404, { error: "Book not found" });
    }
    return sendJson(res, 200, book);
  }
  // 3. Any other unsupported route or method
  return sendJson(res, 404, { error: "Route not found" });
});
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});