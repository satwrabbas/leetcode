
var criticalConnections = function(n, connections) {
    let map = new Map();
    connections.forEach(element => {
        if(map.has(element[0])){
            map.set(element[0] , 0  );
        }else{
            map.set(element[0] , element  );
        }

        if(map.has(element[1])){
            map.set(element[1] , 0  );
        }else{
            map.set(element[1] , element  );
        }
    });
    let arr = [];
    map.forEach((value, key) => {
        if(value !== 0 && value !== arr[0]){   
            arr.push(value);
        }});
    return arr;
};

let n = 4, connections = [[0,1],[1,2],[2,0],[1,3]];

console.log(criticalConnections(n, connections));