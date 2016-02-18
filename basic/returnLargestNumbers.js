function largestOfFour(arr) {
  var res=[];
  for(var i=0;i<arr.length;i++){
    res[i]=arr[i][0];
    for(var j=0;j<arr[i].length;j++){ 
      res[i]=Math.max(arr[i][j],res[i]);
    }
  }
  return res;
}