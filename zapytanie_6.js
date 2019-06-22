printjson(db.people.insert(
	{
	  	"sex":"Male",
	  	"first_name":"Michał"
	  	,"last_name":"Stefańczuk"
	  	,"job":"Business Analyst"
	  	,"email":"s19950@pjwstk.edu.pl",
	  	"location":
	  		{"city":"Warsaw",
	  		  "address":
	  		  	{"streetname":"Waryńskiego",
	  		  	  "streetnumber":"12"}
	  	},
	  	"description":"mów mi stefan",
	  	"height":"185.55",
	  	"weight":"86.23",
	  	"birth_date":"1994-02-23T12:00:00Z",
	  	"nationality":"Poland",
	  	"credit":
	  		[{
				"type" : "mastercard",
				"number" : "1234411670581739",
				"currency" : "PLN",
				"balance" : "9999999.36"
			}]}
))