var TD=Backbone.View.extend({
	tagName:'td',
	render:function(val){
		this.$el.html(val)
		return this;
	},
});

var TR=Backbone.View.extend({
	tagName:'tr',
	initialize:function(options){
		this.coll=options.coll;
	},
	render:function(){
		var hour="",minute="";
		_.map(this.model.attributes, function (value, key) {
    		var td=new TD();
    		if(key=='date'){
    			this.$el.append(td.render(this.coll.datecollection.get(value).get('title')).el);
    		}
    		
    		else if(key=='project'){
    			this.$el.append(td.render(this.coll.projectcollection.get(value).get('title')).el);
    		}
    		
    		else if(key=='activity'){
    			this.$el.append(td.render(this.coll.activitycollection.get(value).get('title')).el);
    		}
    		
    		else if(key=='minute'){
    			minute=this.coll.minutescollection.get(value).get('title')
    		}

    		else if(key=='hour'){
    			hour=this.coll.hourscollection.get(value).get('title');
    			this.$el.append(td.render(hour+":"+minute).el);
    		}
    		
    		else if(key=='descritpion'){
    			this.$el.append(td.render(value).el);
    		}
    		
		},this);
		return this;
	},
});

var TABLE=Backbone.View.extend({
	tagName:'table',
	className: "table table-hover",
	initialize:function(options){
		this.options=options;
		this.listenTo( this.collection, 'add', function(){ this.render(); });
	},
	allRender:function(){
		this.$el.empty();
		this.collection.each(function(mod) {
			var tr=new TR({model:mod,coll:this.options.allSelectCollection});
			this.$el.append(tr.render().el);
		},this);
		return this;
	},
	render:function(){
		console.log("click")
		this.allRender();
	},
});

var FORM=Backbone.View.extend({
	tagName:'form',
	events:{
		'submit':'onSubmit',
		'click button': 'onSubmit'
	},
	initialize:function(options){
		this.datecollection     = options.allSelectCollection.allSelectCollection.datecollection;
		this.projectcollection  = options.allSelectCollection.allSelectCollection.projectcollection;
		this.activitycollection = options.allSelectCollection.allSelectCollection.activitycollection;
		this.minutescollection  = options.allSelectCollection.allSelectCollection.minutescollection;
		this.hourscollection    = options.allSelectCollection.allSelectCollection.hourscollection;
	},
	render:function(){
		// console.log("render call")
		var div=new Div();
		this.$el.append(div.render('date_div').el);
		var label=new Label();
		div.render().$el.append(label.render('Date:').el)
		var date=new Select({collection:this.datecollection});
		div.render().$el.append(date.render().el);
		this.date=date;

		div=new Div();
		this.$el.append(div.render('project_div').el);
		label=new Label();
		div.render().$el.append(label.render('Project:').el)
		var project=new Select({collection:this.projectcollection});
		div.render().$el.append(project.render().el);
		this.project=project;

		div=new Div();
		this.$el.append(div.render('activity_div').el);
		label=new Label();
		div.render().$el.append(label.render('Activity:').el)
		var activity=new Select({collection:this.activitycollection});
		div.render().$el.append(activity.render().el);
		this.activity=activity;

		div=new Div();
		this.$el.append(div.render('hour_div').el);
		label=new Label();
		div.render().$el.append(label.render('Time Spent').el)
		var hour=new Select({collection:this.hourscollection});
		div.render().$el.append(hour.render().el);
		this.hour=hour;

		div=new Div();
		this.$el.append(div.render('minute_div').el);
		label=new Label();
		div.render().$el.append(label.render('(hour:minute)').el)
		var minute=new Select({collection:this.minutescollection});
		div.render().$el.append(minute.render().el);
		this.minute=minute;
		this.$el.append("<br><br>")

		label=new Label();
		this.$el.append(label.render('Activity Descritpion:').el)
		this.$el.append("<br>")
		var textArea=new TextArea();
		this.$el.append(textArea.render().el)
		this.textArea=textArea;

		this.$el.append("<br><br>")
		this.$el.append("<center><button type='button' class='btn btn-primary'>Save</button></center>");

		return this;
	},
	onSubmit:function(e){
		e.preventDefault();
		var mod=new  StatusModel({'id':Date.now(),'date':this.date.getId(),'project':this.project.getId(),
					'activity':this.activity.getId(),'minute':this.minute.getId(),'hour':this.hour.getId(),
					'descritpion':this.textArea.$el.val()
				});
		this.collection.add(mod);	
	}
});


var App=Backbone.View.extend({
	el:'#from_status',
	initialize:function(options){
		this.options=options;
	},
	render:function(){
		var form=new FORM({collection:this.collection,allSelectCollection:this.options});
		this.$el.append(form.render().el);
	}
});

var TableSetup=Backbone.View.extend({
	el:'#history',
	initialize:function(options){
		this.options=options;
	},
	render:function(){
		var table=new TABLE({collection:this.collection,allSelectCollection:this.options.allSelectCollection});
		this.$el.append(table.allRender().el);
	},
});