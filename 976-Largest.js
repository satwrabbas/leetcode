var largestPerimeter = function(nums) {
    nums.sort((a, b) =>b-a );
      console.log(nums)
    for(let i =0 ;i<nums.length;i++){
      if(nums[i]<nums[i+1]+nums[i+2])
        return nums[i] +nums[i+1]+ nums[i+2]
    }
    return 0
};

let nums = [3, 6, 2, 4];

console.log(largestPerimeter(nums))

//   طريقة ترتيب جديدة لازم افهمها

var largestPerimeter = function(nums) {
    quickSort(nums, 0, nums.length - 1);

    const n = nums.length;
    let i = n - 1
    let j = n - 2
    let k = n - 3

    while( i >= 0 && j >= 0 && k >= 0){
        if(nums[k] + nums[j] > nums[i]){
            return nums[k] + nums[j] + nums[i]
        }
        i--;
        j--;
        k--;
    }

    return 0;
};

function quickSort(nums, low = 0, high = nums.length - 1){
    if(low >= high){
        return;
    }
    let i = low;
    let j = high;
    const pivot = nums[low];

    while(i < j){
        while(nums[i] <= pivot && i < high){
           i++;
        }

        while(nums[j] > pivot && j > low){
            j--;
        }

        // both side violation
        if(i < j){
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    // Ordered, now swap first (pivot elemenet to it's right position)
    [nums[low], nums[j]] = [nums[j], nums[low]]

    // Ordered, now order other two parts
    quickSort(nums, low, j -1);
    quickSort(nums, j + 1, high)
}