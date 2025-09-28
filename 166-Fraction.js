var fractionToDecimal = function(numerator, denominator) {
    let m = numerator/denominator , n,mm=0, nn='';
    m = m.toString();
    for(let i = 0 ; i< m.length;i++){
     if(m[i]==='.'){
      if(m.length-i>10){
       n =  m.slice(0, i);
       for(let ii = i+2 ; ii<m.length;ii++){
        if(ii===m.length-1){
         mm++;
         ii=i+3;
         nn+=m[i+mm];
        }
        if(m[i+1+mm] === m[ii]&&m[ii]!==m[ii-1]){
         return(`${n}.${nn}(${m.slice(i+1+mm,ii)})`)
        }
       }
      }

     }
      
    }
    return m ;
};
let numerator = 4, denominator = 333;
//Output: "0.5"
console.log(fractionToDecimal(numerator,denominator))