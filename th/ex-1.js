const moveZeroes = function (nums) {
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i]
      nums[i] = nums[left]
      nums[left] = temp
      left++
    }
  }

  return (nums)
};

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]