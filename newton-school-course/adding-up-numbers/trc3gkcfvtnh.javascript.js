// Your code here
function addNumbers(...args) {
    return args.reduce((sum, num) => sum + Number(num), 0);
}