function calculateSum(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            sum += nums[i];
        }
    }

    return sum;
}