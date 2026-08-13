// you dont need to take input
// add code here

// Top half (including middle row)
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(2 * i - 1));
}

// Bottom half
for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}