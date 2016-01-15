var projectModel=Backbone.Model.extend({
	defaults:{
		'id':1,
		'title':'N/A'
	}
});

var projectCollection=Backbone.Collection.extend({
	model:projectModel
});