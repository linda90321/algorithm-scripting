function palindrome(str) {
  str=str.toLowerCase();
  var i=0;
  var j=str.length-1;
  
  while(i<j){
    while(!helper(str.charAt(i)) && i<j){
      i++;
    } 
    while(!helper(str.charAt(j)) && i<j){
      j--;
    }
    
    if(str.charAt(i) === str.charAt(j)){
      i++;
      j--;
    }else
      return false;
  }
  return true;
}

function helper(c){
  if((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'))
    return true;
  else
    return false;
}
