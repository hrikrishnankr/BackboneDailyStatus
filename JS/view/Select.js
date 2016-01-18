var Option=Backbone.View.extend({
	tagName:'option',
	render:function(){
		this.$el.html(this.model.get('title'));
		this.$el.val(this.model.get('id'));
		return this;
	}
});

var Select=Backbone.View.extend({
	tagName:'select',
	className:'form-control',
	initialize:function(){
		this.id=1;
	},
	events:{
		'change':'onChange'
	},
	render:function(){
		this.collection.each(function(mod){
			var option=new Option({model:mod});
			this.$el.append(option.render().el);
		},this);
		return this;
	},
	onChange:function(){
		this.id=this.$el.val();
	},
	getId:function(){
		return this.id;
	}
});