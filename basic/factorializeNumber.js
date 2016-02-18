function factorialize(num) {
  if(num === 1 || num === 0)
    return 1;
  num *= factorialize(num-1);
  
  return num;
}
