function rotate(nums, k) {
    for(let i = 0;i<k;i++) {
        nums.unshift(nums.pop())
    }
    return nums;
};
rotate([1,2,3,4,5,6,7],3);