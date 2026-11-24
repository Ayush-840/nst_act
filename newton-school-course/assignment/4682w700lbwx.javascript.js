const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3000;
const sessions = {};
function getCookie(header, name) {
    if (!header) {
        return null;
    }
    const cookies = header.split(";");
    for (const cookie of cookies) {
        const trimmedCookie = cookie.trim();
        const separatorIndex = trimmedCookie.indexOf("=");
        if (separatorIndex === -1) {
            continue;
        }
        const cookieName = trimmedCookie.slice(0, separatorIndex);
        const cookieValue = trimmedCookie.slice(separatorIndex + 1);
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}
app.get("/visits", (req, res) => {
    // Write your code here
    return res.status(501).json({