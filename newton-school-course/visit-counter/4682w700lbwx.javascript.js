const name = part.slice(0, eqIndex).trim();
    if (name === "sid") {
      const value = part.slice(eqIndex + 1).trim();
      return value || null;
    }
  }
  return null;
}
app.get("/visits", (req, res) => {
  const sid = getSessionId(req.headers.cookie);
  if (sid && Object.prototype.hasOwnProperty.call(sessions, sid)) {
    sessions[sid].count += 1;
    return res.status(200).json({ count: sessions[sid].count });
  }
  const newSid = crypto.randomUUID();
  sessions[newSid] = { count: 1 };
  res.cookie("sid", newSid, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  return res.status(200).json({ count: 1 });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});