var StatusModel=Backbone.Model.extend({
	validate:function(attrs, options){
		if(attrs.descritpion=="")
			return "Descritpion cannot be null";
	},
});

var StatusCollection=Backbone.Collection.extend({
	model:StatusModel
});
