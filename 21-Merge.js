var mergeTwoLists = function(list1, list2) {
    let i =0 , arr  = [];
    for(let u = 0 ;u < list1.length;){
        if(list1[u]>list2[i]){
            arr.push(list2[i])
            i++;
        } else{
            arr.push(list1[u])
            u++
        }
    }
    if(i<list2.length){
        for(;i<list2.length;i++)
            arr.push(list2[i])
    }
    return arr;
};

let  list1 = [1,2,4], list2 = [1,3,4];
//Output [1,1,2,3,4,4]
console.log(mergeTwoLists(list1 ,list2));