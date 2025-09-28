// هي المسالة رح تكون تدريب على المابات maps
var canBeTypedWords = function(text, brokenLetters) {
    let ma = new Map, n = 0;
    for(let i= 0;i< brokenLetters.length; i++){
        ma.set(brokenLetters[i], 0);
    }
    for(let i =0 , j = 0; i< text.length;i++){
        if(ma.has(text[i])){
            j =1;
        }
        
        if(text[i] === ' '|| i === text.length-1){
            if(j === 0)
                n++;
        j = 0;
        }
    }
    return n;
};

let text = "leet code", brokenLetters = "lt";

console.log(canBeTypedWords(text , brokenLetters))