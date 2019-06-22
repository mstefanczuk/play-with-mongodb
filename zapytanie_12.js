printjson(db.people.aggregate([
{
	$unwind: {
		path: "$credit"
	}
},
{
	$group: {
		_id: "$credit.currency",
		totalBalance: {
			$sum: "$credit.balance"
		}
	}
}
]).toArray())