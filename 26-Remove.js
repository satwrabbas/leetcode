var removeDuplicates = function(nums) {
    let ma = new Map, k = 0 , arr =[];
    for(let i = 0 ; i< nums.length ; i++){
        if(ma.has(nums[i])){
            k++;
        }else{
            ma.set(nums[i],);
            arr.push(nums[i]);
        }
    }
    for(let i = k ; i >0; i--){
        arr.push('_')
    }
    return (`${k}, nums = [${arr}] `);
};

let nums = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums));