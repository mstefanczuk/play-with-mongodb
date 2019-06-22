let mapFunction = function() {
	emit(this.job,  1);
};

let reduceFunction = function(key, values) {
	return key;
};

printjson(db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: {inline: 1}}
));