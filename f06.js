function countWords(inputWords) {

return inputWords.reduce(function(arr, cur) {
	if(arr[cur] === undefined)
		arr[cur] = 0;
	arr[cur] = ++arr[cur];
	return arr
	}, {});
}
    
module.exports = countWords
