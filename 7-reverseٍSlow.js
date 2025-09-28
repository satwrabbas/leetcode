var reverse = function(x) {
let arr=0 , n =1;
if(x ===0)
    return 0;
while(x!==0){
    arr*=100;
    arr+= x%(10**n);
    x= x- x%(10**n);
    n++;
}
while(arr%10===0){
    arr/=10;
}
if (arr<(2**31)*-1||arr>2**31-1){
        return 0
    }
return arr;
};