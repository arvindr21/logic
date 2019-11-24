function arrRevInPlace(arr){

	for (var i = 0; i < arr.length/2; i++) {
		var tmp1 = arr[i];
		var revItemIdx = arr.length - 1 - i;
		var tmp2 = arr[revItemIdx];
		
		arr[i] = tmp2;
		arr[revItemIdx] = tmp1;
		
	}

	return arr;
}

module.exports = arrRevInPlace;