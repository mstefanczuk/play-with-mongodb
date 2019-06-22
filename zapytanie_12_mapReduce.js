let mapFunction = function() {
	for (let i = 0; i < this.credit.length; i++) {
		emit(this.credit[i].currency,  this.credit[i].balance);
	}
};

let reduceFunction = function(key, values) {
	return Array.sum(values);
};

printjson(db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: {inline: 1}}
));