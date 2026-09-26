function processNumbers(numbers, callback) {
    const result = [];

    for (let num of numbers) {
        // If odd and <= 10, stop processing further numbers
        if (num % 2 !== 0 && num <= 10) {
            break;
        }

        // If odd and > 10, skip this number
        if (num % 2 !== 0 && num > 10) {
            continue;
        }

        // For valid numbers (even numbers), apply the callback and store the result
        result.push(callback(num));
    }

    return result;
}