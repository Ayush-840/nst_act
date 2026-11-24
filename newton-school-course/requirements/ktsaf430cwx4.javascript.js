function getCookie(header, name) {
  if (typeof header !== "string" || header.length === 0 || typeof name !== "string") {
    return null;
  }
  const parts = header.split(";");
  for (const part of parts) {
    const eqIndex = part.indexOf("=");
    if (eqIndex === -1) {
      continue; // Ignore malformed/invalid entries without '='
    }
    const rawKey = part.slice(0, eqIndex).trim();
    if (rawKey !== name) {
      continue; // Exact, case-sensitive match; avoids Object.prototype collisions
    }
    // Preserve '=' inside values and quoted/encoded characters; trim only surrounding whitespace
    return part.slice(eqIndex + 1).trim();
  }
  return null;
}