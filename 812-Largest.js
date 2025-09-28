const farther = function(point , arr){
 let x , y ,m=0,arrr=[];
 arr.forEach(element => {
  x = point[0]-element[0];
  y = point[1]-element[1];
  if(x<0)x= x*(-1);
  if(y<0)y= y*(-1);

  if(m< x+y){
    m=x+y;
    arrr=[m,element];
  }})
  console.log(arrr)
 return ('hii');
};




var largestTriangleArea = function(points) {
    points.forEach(m => {
     farther(m,points)
    });
};

let points = [[4,6],[6,5],[3,1]];

console.log(largestTriangleArea(points))