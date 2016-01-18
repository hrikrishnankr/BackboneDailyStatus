var Div=Backbone.View.extend({
	render:function(className){
		this.$el.addClass(className);
		return this;
	}
});