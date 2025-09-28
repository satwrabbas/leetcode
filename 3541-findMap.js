var maxFreqSum = function(s) {
    // الخطوة الأولى: حساب تكرار كل حرف
    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    let maxVowelFreq = 0;
    let maxConsonantFreq = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // الخطوة الثانية: إيجاد أقصى تكرار للحروف المتحركة والساكنة
    for (const [char, freq] of freqMap.entries()) {
        if (vowels.has(char)) {
            if (freq > maxVowelFreq) {
                maxVowelFreq = freq;
            }
        } else {
            if (freq > maxConsonantFreq) {
                maxConsonantFreq = freq;
            }
        }
    }

    return maxVowelFreq + maxConsonantFreq;
};