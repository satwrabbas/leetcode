var romanToInt = function(s) {
    let sum = 0 ;
    for (let i = 0 ; i < s.length ; i++){
        if(s[i]==='I'){
            sum+=1;
            continue;
        }
        if(s[i]==='V'){
            sum+=5;
            continue;
        }
        if (s[i]==='X'){
            sum+=10;
            continue;
        }
        if (s[i]==='L'){
            sum+=50;
            continue;
        }
        if (s[i]==='C'){
            sum+=100;
            continue;
        }
        if (s[i]==='D'){
            sum+=500;
            continue;
        }
        if (s[i]==='M'){
            sum+=1000;
        }
    }
    return(sum);
};

let m = "iii";
romanToInt(m);