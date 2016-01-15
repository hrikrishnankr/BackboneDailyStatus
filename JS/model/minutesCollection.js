var minutesModel=Backbone.Model.extend({
	defaults:{
		'id':1,
		'title':'00'
	}
});

var minutesCollection=Backbone.Collection.extend({
	model:minutesModel
});