const fact = (x) => {
  let f = 1;
  if (x === 0)
    return 1;
  else if (x === 1)
    return 1;
  else
    while (x) {
      f *= x;
      x--;
    }
  return f;
}
const identifyDouble = (x, str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === x)
            count++;
    }
    return count;
}

const permAlone = (str) => {
  let len = str.length;
  let total = fact(len);
  for (let i = 0; i < len; i++) {
       let dif = identifyDouble(str[i], str);
       if (dif - 1) {
           total -= fact(len - dif);
       }
  }
  return total;
}

permAlone('aab');
