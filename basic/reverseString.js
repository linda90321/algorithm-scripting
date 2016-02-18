var res="";
function reverseString(str) {
  var temp=str.split("");
  temp.reverse();
  res=temp.join("");
  return res;
}