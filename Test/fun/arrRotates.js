function rotate(nums, k) {
    for(let i = 0;i<k;i++) {
        nums.unshift(nums.pop())
    }
    return nums;
};
rotate([1,2,3,4,5,6,7],3);


function rotate(arr, rotations){
    for(let i = 0; i< rotations ; i++){
        let element = arr.pop();
        console.log("POP",arr);
        arr.unshift(element);
        console.log("UNSHIFT",arr);
    }
    return arr;
}

rotate([1,2,3,4,5,6,7,8,9],2);