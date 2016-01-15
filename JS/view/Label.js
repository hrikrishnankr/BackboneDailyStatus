var Label = Backbone.View.extend({
	tagName:'label',
	render:function(name){
		this.$el.html(name);
		return this;
	}
});