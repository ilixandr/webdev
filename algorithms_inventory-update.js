function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i][1] == arr1[j][1]) {
                arr1[j][0] += arr2[i][0];
                found = true;
            }
        }
        if (!found) {
            console.log('Adding element ' + arr2[i]);
            arr1.push(arr2[i]);
        }
    }
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//updateInventory(curInv, newInv);
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
