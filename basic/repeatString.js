function repeat(str, num) {
  var res="";
  if(num <= 0)
    return res;
  for(var i=0;i<num;i++){
    res+=str;
  }
  return res;
}