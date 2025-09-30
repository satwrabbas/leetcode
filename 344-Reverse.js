/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // دالة مساعدة للقيام بالعملية العودية
    function recursiveReverse(index, currentString) {
        // الحالة الأساسية: عندما نصل إلى نهاية السلسلة
        if (index >= s.length) {
            return "";
        }
        
        // الخطوة العودية: استدعاء الدالة للبقية ووضع الحرف الحالي في النهاية
        const reversedSubstring = recursiveReverse(index + 1, currentString);
        return reversedSubstring + s[index];
    }
    
    const reversed = recursiveReverse(0, "");
    
    // LeetCode يطلب تعديل المصفوفة الأصلية
    for (let i = 0; i < s.length; i++) {
        s[i] = reversed[i];
    }
};
let s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]
console.log(reverseString(s));
