printjson(db.people.aggregate([
{
	$match: {
		sex: "Female",
		nationality: "Poland"
	}
},
{
	$unwind: {
		path: "$credit"
	}
},
{
	$group: {
		_id: "$credit.currency",
		avgBalance: {
			$avg: "$credit.balance"
		},
		totalBalance: {
			$sum: "$credit.balance"
		}
	}
}
]).toArray())