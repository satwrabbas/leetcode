var isPalindrome = function(x) {
    let m = x.toString();
    let n = m.length -1;
    
    for(let i = 0 ; i < n ; i++)
    {
        if(m[i] !== m[n])
            return false;
        n--;
        
    }
    return true;
};

let x = 55155 ;
console.log(isPalindrome(x))