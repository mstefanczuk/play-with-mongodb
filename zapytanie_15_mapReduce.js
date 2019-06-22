let mapFunction = function() {
	if (this.nationality === "Poland" && this.sex === "Female") {
		for (let i = 0; i < this.credit.length; i++) {
			emit(this.credit[i].currency,  {balanceArray: [this.credit[i].balance]});
		}
	}
};

let reduceFunction = function(key, values) {
	let balanceArray = [];
	
	for (let i = 0; i < values.length; i++) {
		balanceArray = balanceArray.concat(values[i].balanceArray);
	}
	
	return {balanceArray: balanceArray};
};

let finalizeFunction = function(key, reducedValue) {
	let sum = Array.sum(reducedValue.balanceArray);
	let avg = sum / reducedValue.balanceArray.length;
	return {avg: avg, sum: sum};
}

printjson(db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: {inline: 1},
	 finalize: finalizeFunction}
));