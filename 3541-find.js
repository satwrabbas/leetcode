var maxFreqSum = function(s) {
    let obj = {} ,max =0  ,max2 = 0;
    for(let i = 0 ; i< s.length; i++){
        if(obj[s[i]]===undefined)
            obj[s[i]]=0;
        obj[s[i]] = obj[s[i]] +1;
    }
    for(let i = 0; i< s.length;i++){
        if(s[i]==='u' || s[i]==='a' ||s[i]==='e' || s[i]==='o' ||s[i]==='i'){
            if(obj[s[i]]>max)
                max = obj[s[i]];
        }else{
            if(obj[s[i]]>max2)
                max2 = obj[s[i]];
        }
    }
    return max2 + max;
};

let s = "successes";

console.log(maxFreqSum(s))