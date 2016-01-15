var activityModel=Backbone.Model.extend({
	defaults:{
		'id':1,
		'title':'coding'
	}
});

var activityCollection=Backbone.Collection.extend({
	model:activityModel
});