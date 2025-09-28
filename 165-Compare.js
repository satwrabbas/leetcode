var compareVersion = function(version1, version2) {
    let first = 0 , second =0, ii = 0, uu=0;
    for(let i =  0, u =0; i<version1.length;i++){
        if(i==='.'||i===version1.length)
            ii=version1.splice(first,i-1);
        console.log(ii)
    }
};

let version1 = "1.0646846465", version2 = "1.0.0.0";

console.log(compareVersion(version1,version2));