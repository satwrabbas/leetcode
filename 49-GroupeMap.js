var groupAnagrams = function(strs) {
    let m1 = new Map ;
    for(let  i = 0 ; i< strs.length; i++){
        const n = strs[i].split('').sort().join('');
        if(m1.has(n)){
            let m2 = m1.get(n)
           m2 .push(strs[i]);
        }else{
            m1.set(n,[strs[i]]);
        }
    }
    let arr = [];
    m1.forEach(m => arr.push(m));
    return arr;
};

let strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs))