const buildArrayFromString = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}

/* 
Heap's method implementation:
http://homepage.math.uiowa.edu/~goodman/22m150.dir/2007/Permutation%20Generation%20Methods.pdf 
*/
const permute = (arr) => {
	Array.prototype.swap = function (index, otherIndex) {
		let valueAtIndex = this[index];
		this[index] = this[otherIndex];
		this[otherIndex] = valueAtIndex;
	}
	let result = [arr.slice()];
  let length = arr.length;
	for (let i = 1, heap = new Array(length).fill(0); i < length;) {
		if (heap[i] < i) {
			arr.swap(i, i % 2 && heap[i]);
			result.push(arr.slice());
			heap[i]++;
			i = 1;
		} else {
			heap[i] = 0;
			i++;
		}
  }
	return result;
}

const checkIfAllElemsAreEqual = (str) => {
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[0]) {
      return false;
    }
  }
  return true;
}

const permAlone = (str) => {
  if (str.length === 1) {
    return 1;
  }
  if (checkIfAllElemsAreEqual(str)) {
    return 0;
  }
  let arr = buildArrayFromString(str);
  let permutations = permute(arr);
  let counter = 0;
  for (let i = 0; i < permutations.length; i++) {
    let thereAreDoubles = false;
    for (let j = 0; j < permutations[i].length - 1; j++) {
      if (permutations[i][j] === permutations[i][j+1]) {
        thereAreDoubles = true;
      }
    }
    if (!thereAreDoubles) {
      counter++;
    }
  }
  return counter;
}

permAlone('aab');
