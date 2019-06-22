let mapFunction = function() {
	let bmi = this.weight/(this.height*this.height);
    emit(this.nationality, {bmiArray: [bmi]})
};

let reduceFunction = function(key, values) {
	let bmiArray = [];
	
	for (let i = 0; i < values.length; i++) {
		bmiArray = bmiArray.concat(values[i].bmiArray);
	}
	
	return {bmiArray: bmiArray};
};

let finalizeFunction = function(key, reducedValue) {
	let bmiSum = Array.sum(reducedValue.bmiArray);
	let bmiAvg = bmiSum / reducedValue.bmiArray.length;
	let bmiMin = Math.min(...reducedValue.bmiArray);
	let bmiMax = Math.max(...reducedValue.bmiArray);
	return {bmiAvg: bmiAvg, minBmi: bmiMin, bmiMax: bmiMax};
}

printjson(db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: {inline: 1},
	 finalize: finalizeFunction}
));