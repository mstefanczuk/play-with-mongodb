printjson(db.people.aggregate([
{
	$project: {
		nationality: "$nationality",
		bmi: {$divide: ["$weight", {$pow: ["$height", 2]}]}
	}
},
{
	$group: {
		_id: "$nationality",
		avgBMI: {$avg: "$bmi"},
		maxBMI: {$max: "$bmi"},
		minBMI: {$min: "$bmi"}
	}
}
]).toArray())