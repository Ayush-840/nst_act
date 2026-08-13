// you dont need to take input
// add code here

for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i).trimEnd());
}
for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i).trimEnd());
}