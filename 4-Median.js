var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    let n1 = 0 , n2 = 0 , n = 0 , b = 0;
    
    for(let i = 0 ; i< nums1.length +nums2.length ;i++){
        b++;
        if((nums1[n1]<nums2[n2] && n1<nums1.length)|| n2 ===nums2.length){
            arr.push(nums1[n1]);
            n1++;
            continue;
        }
        if((nums2[n2]<= nums1[n1]&& n2<nums2.length) || n1 ===nums1.length){
            arr.push(nums2[n2]);
            n2++;
        }
    }
    let num;
    if (b % 2 ===0){
        num = (arr[b/2] + arr[b/2-1])/2;}
    else{
        num = (arr[b/2-0.5])}

    num = num.toFixed(5);
    
    return parseFloat(num);
};  

let nums1 = [1,3], nums2 = [2,3 ];

console.log(findMedianSortedArrays(nums1 , nums2))