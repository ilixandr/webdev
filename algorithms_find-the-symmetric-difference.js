const sym = (...args) => {
  return args.reduce((previous, current) => {
    if (previous.length === 0) {
      return current;
    } else {
      let result1 = previous.filter(x => !current.includes(x));
      let result2 = current.filter(x => !previous.includes(x));
      return [...new Set(result1.concat(result2).sort((a, b) => a >= b))];
    }
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);
