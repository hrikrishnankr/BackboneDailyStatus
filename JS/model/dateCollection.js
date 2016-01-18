var dateModel=Backbone.Model.extend({
	defaults:{
		'id':1,
		'title':'01/01/2016'
	}
});

var dateCollection=Backbone.Collection.extend({
	model:dateModel
});