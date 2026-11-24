function getCookie(header, name) {
  if (typeof header !== 'string' || !header || typeof name !== 'string' || !name) {
    return null;
  }
  const pairs = header.split(';');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].trim();
    if (!pair) continue;
    const separatorIndex = pair.indexOf('=');
    if (separatorIndex === -1) continue;
    const cookieName = pair.slice(0, separatorIndex).trim();
    if (cookieName === name) {
      return pair.slice(separatorIndex + 1).trim();
    }
  }
  return null;
}
module.exports = { getCookie };