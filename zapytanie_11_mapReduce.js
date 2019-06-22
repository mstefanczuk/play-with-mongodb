let mapFunction = function() {
	emit(this.sex,  {count: 1, weight: this.weight, height: this.height});
};

let reduceFunction = function(key, values) {
	let result = {
		count: 0,
		weight: 0.0,
		height: 0.0
	}
	
	for (let i = 0; i < values.length; i++) {
		result.weight += values[i].weight;
		result.height += values[i].height;
		result.count += values[i].count;
	}
	
	return result;
};

let finalizeFunction = function(key, reducedValue) {
	return {avgWeight: reducedValue.weight/reducedValue.count, avgHeight: reducedValue.height/reducedValue.count};
}

printjson(db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: {inline: 1},
	 finalize: finalizeFunction}
));