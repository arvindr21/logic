function twoSum(arr, sum) {
	var numMap = {};
	var sumArr = [];

	arr.forEach(num => {
		numMap[num] = numMap[num] + 1 || 1;
	});

    for(let num in numMap){
    	num = parseInt(num);
    	let compl = sum - num;
    	if(numMap[compl]){
    		sumArr.push([num, compl]);
    	}
    }

    return sumArr;
}

module.exports = twoSum;