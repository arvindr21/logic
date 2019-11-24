function binarySearch(numArr, key) {
	 // base case
    let midPos = numArr.length % 2 === 0 ? numArr.length / 2 : Math.floor(numArr.length / 2);
    let midVal = numArr[midPos];
    if (midVal === key) {
        return true;
    } else if(numArr.length === 1){
    	return false;
    }

    // else recursion
    else if (midVal > key) {
        return binarySearch(numArr.slice(0, midPos), key);
    } else if (midVal < key) {
        return binarySearch(numArr.slice(midPos), key)
    }

    return false;
}

module.exports = binarySearch;