const cookieHeader = req.headers.cookie;
  const sid = getCookie(cookieHeader, 'sid');
    }
    return null;
}
app.get("/visits", (req, res) => {
        if (cookieName === name) {
            return cookieValue;
        }
  if (sid && sessions[sid]) {
    sessions[sid].count += 1;
    return res.status(200).json({ count: sessions[sid].count });
  }
  const newSid = crypto.randomUUID();
  sessions[newSid] = { count: 1 };
  res.setHeader('Set-Cookie', `sid=${newSid}`);
  return res.status(200).json({ count: 1 });
    return res.status(501).json({
        error: "Not implemented"
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});