function areThereDuplicates(...args) {
  args.sort();

  let i = 0;

  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) return true;
    else i++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 1, 11));
