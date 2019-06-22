db.people.find({
weight: {$exists:true}}).forEach(function(obj) { 
    obj.weight = parseFloat(obj.weight);
    db.people.save(obj);
});
db.people.find({
height: {$exists:true}}).forEach(function(obj) { 
    obj.height = parseFloat(obj.height);
    db.people.save(obj);
});
db.people.find({
birth_date: {$exists:true}}).forEach(function(obj) { 
    obj.birth_date = new Date(obj.birth_date);
    db.people.save(obj);
});
db.people.find({
"credit.balance": {$exists:true}}).forEach(function(obj) {
    obj.credit.forEach(function(obj2){
	obj2.balance = parseFloat(obj2.balance);
	db.people.save(obj);
	});
});


