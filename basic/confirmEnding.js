function end(str, target) {
  return str.substr(str.length - target.length, target.length)===target;
}
