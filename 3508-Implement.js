
var Router = function(memoryLimit) {
    this.memoryLimit = memoryLimit;
    this.n = 0;
    let map = new Map() , ma = new Map(), packetId ;
    this.map = map;
    this.packetId = packetId;
    this.ma = ma;
};


Router.prototype.addPacket = function(source, destination, timestamp) {    
    this.packetId = source  + destination *1000 + timestamp*1000000;
    if (this.map.has(this.packetId)){
        return false;
    }
    
    if (this.n < this.memoryLimit){
        this.map.set( this.packetId,[source, destination, timestamp] );
        this.n++;
        return true;
    }else  {
        let first = this.map.keys().next().value;
        this.map.delete(first);
        this.map.set( this.packetId,[source, destination, timestamp] );
        return true;
    }

};

Router.prototype.forwardPacket = function() {
    if (this.n === 0) return [];
    let first =  this.map.keys().next().value;
    let packetData = this.map.get(first);
    this.map.delete(first);

    this.n--;
    return packetData;
};

Router.prototype.getCount = function(destination, startTime, endTime) {
    let count = 0;
    this.map.forEach((value, key) => {
        if (value[1] === destination && value[2] >= startTime && value[2] <= endTime){
            count++;
        }
    });
    return count;
};