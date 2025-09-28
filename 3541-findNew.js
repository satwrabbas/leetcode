var maxFreqSum = function(s) {
    // إنشاء مصفوفة لتخزين تكرار كل حرف من 'a' إلى 'z'
    const freqs = new Array(26).fill(0);
    const a_charCode = 'a'.charCodeAt(0);
    
    let maxVowelFreq = 0;
    let maxConsonantFreq = 0;

    // المرور على السلسلة مرة واحدة فبيقط
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        const charIndex = charCode - a_charCode;
        
        // زيادة عداد الحرف والحصول على التكرار الجديد
        const newFreq = ++freqs[charIndex];

        // التحقق إذا كان الحرف متحركًا وتحديث القيمة القصوى
        if (charCode === 97 /*a*/ || charCode === 101 /*e*/ || charCode === 105 /*i*/ || charCode === 111 /*o*/ || charCode === 117 /*u*/) {
            if (newFreq > maxVowelFreq) {
                maxVowelFreq = newFreq;
            }
        } else { // إذا كان الحرف ساكنًا
            if (newFreq > maxConsonantFreq) {
                maxConsonantFreq = newFreq;
            }
        }
    }

    return maxVowelFreq + maxConsonantFreq;
};