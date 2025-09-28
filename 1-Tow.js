

function twoSum(nums, target) {
    let mapNum =  new Map();
    for(let i = 0; i< nums.length; i++){
        let m = target - nums[i];

        
        if(mapNum.has(m)&& i ){
            let arr = [mapNum.get(m) , i ];
            return(arr)
        }
            mapNum.set(nums[i] , i)
    }
};
let nums = [3,2,4], target = 6;
console.log(`${twoSum(nums , target)}`);