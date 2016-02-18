function findLongestWord(str) {
  var temp=str.split(" ");
  var res=0;
  for(var i=0;i<temp.length;i++){
    res=Math.max(temp[i].length,res);
  }
  return res;
}