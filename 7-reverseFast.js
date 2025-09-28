var reverse = function(x) {
let arr ="";    
if(x<0)
    arr='-'
x  = x.toString();
for(let i = x.length-1 ; i>-1; i--){
    arr+=x[i];
}
arr = parseFloat(arr)
if (arr<(2**31)*-1||arr>2**31-1){
        return 0
    }
return arr;
};