var maxFrequencyElements = function(nums) {
    let map = new Map(), maxFreq = 0 , repeat = 0;
    for(let i = 0 ; i< nums.length ; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1);
        }else{
            map.set(nums[i], map.get(nums[i]) + 1);
            
        }
        let value = map.get(nums[i]);
        let j = 0;
        if(value > maxFreq){
            maxFreq = value;
            repeat = 1;
            j = 1;
        }
        if (value === maxFreq&&j ===0 ){
            repeat++;
        }
    }
    return repeat * maxFreq;
};

let nums = [1,1,2,2,3,3,3];

console.log(maxFrequencyElements(nums));