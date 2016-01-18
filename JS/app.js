var datecollection=new dateCollection([{
	'id':1,
	'title':'10/01/2016'
},{
	'id':2,
	'title':'09/01/2016'
},{
	'id':3,
	'title':'08/01/2016'
},{
	'id':4,
	'title':'07/01/2016'
}]);

var projectcollection=new projectCollection([{
	'id':1,
	'title':'N/A'
},{
	'id':2,
	'title':'Savi'
},{
	'id':3,
	'title':'Pen Q'
},{
	'id':4,
	'title':'Qburst Internal Project'
}]);

var activitycollection=new activityCollection([{
	'id':1,
	'title':'Coding'
},{
	'id':2,
	'title':'Training'
}]);

var minutescollection=new minutesCollection([{
	'id':1,
	'title':'45'
},{
	'id':2,
	'title':'30'
},{
	'id':3,
	'title':'15'
},{
	'id':4,
	'title':'00'
}]);

var hourscollection=new hoursCollection([{
	'id':1,
	'title':'9'
},{
	'id':2,
	'title':'8'
},{
	'id':3,
	'title':'7'
},{
	'id':4,
	'title':'6'
},]);

var collection=new StatusCollection([{
	'id':1,
	'date':1,
	'project':1,
	'activity':1,
	'minute':4,
	'hour':2,
	'descritpion':'Work Done.'	
},{
	'id':2,
	'date':2,
	'project':2,
	'activity':1,
	'minute':4,
	'hour':2,
	'descritpion':'Work Completed'	
}]);

var formStatus=new App({
	collection:collection,
	allSelectCollection:{
		datecollection:datecollection,
		projectcollection:projectcollection,
		activitycollection:activitycollection,
		minutescollection:minutescollection,
		hourscollection:hourscollection,
	}
});
formStatus.render();

var tableSetup=new TableSetup({
	collection:collection,
	allSelectCollection:{
		datecollection:datecollection,
		projectcollection:projectcollection,
		activitycollection:activitycollection,
		minutescollection:minutescollection,
		hourscollection:hourscollection,
	}
});
tableSetup.render();