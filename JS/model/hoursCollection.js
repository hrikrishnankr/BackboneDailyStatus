var hoursModel=Backbone.Model.extend({
	defaults:{
		'id':1,
		'title':'08'
	}
});

var hoursCollection=Backbone.Collection.extend({
	model:hoursModel
});