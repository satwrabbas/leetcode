var abce = function(m, n, s){
    let obb = {};
    obb[s[n]] = n;
    for (m , n ; m< n ; m++ ,n--){
        if(i === j){
            return;
    }
}

var longestPalindrome = function(s) {
    let ob = {} , p = s[0];
    for(let i = 0 ; i< s.length ; i++ ){
        if(ob[s[i]]<i &&i- ob[s[i]]< p.length ){
            abce(ob[s[i]], i , s);
            continue;
        }
            
        ob[s[i]] = i;
    }
    console.log(ob);
};

let s = "babad";

longestPalindrome(s)