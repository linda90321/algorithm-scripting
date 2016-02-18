function titleCase(str) {
  var res="";
  var temp=str.split(" ");
  for(var i=0;i<temp.length;i++){
    res += (temp[i].slice(0,1)).toUpperCase();
    res += (temp[i].slice(1)).toLowerCase();
/*    for(var j=0;j<temp[i].length;j++){ 
    if(j === 0){
    res += (temp[i].charAt(0)+"").toUpperCase();
    }else
     res += (temp[i].charAt(j)+"").toLowerCase();
    }
 */
    if(i !== temp.length-1)
    res+=" ";
  }
  return res;
}