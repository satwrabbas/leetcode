var maxFrequencyElements = function(nums) {
    const freqMap = new Map();
    let maxFreq = 0;
    let total = 0;
    for (const num of nums) {
        const currentFreq = (freqMap.get(num) || 0) + 1;
        freqMap.set(num, currentFreq);
        if (currentFreq > maxFreq) {
            maxFreq = currentFreq;
            total = maxFreq;
        } else if (currentFreq === maxFreq) {
            total += maxFreq;
        }
    }
    
    return total;
};