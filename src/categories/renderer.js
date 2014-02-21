var path=require('path');

exports.getRenderer=function(builder){
	var jobdata=require('../data/jobs.js');
	var jobs=jobdata.jobs, categories=jobdata.categories;
	return {
		render:function(filepath,currentState,callback){
			var ext=path.extname(filepath);
			// jade以外は無視
			if(ext!==".jade"){
				callback();
				return;
			}
			var base=path.basename(filepath,".jade");
			var local={
				jobs:jobs,
				categories:categories
			};
			if(categories[base]){
				//記事がある
				var c=currentState.clone();
				local.category=categories[base]
				local.categoryKey=base;
				c.addMiddleTemplate("../../templates/category.jade",function(err){
					if(err)throw err;
					builder.renderFile(filepath,base+".html",c,local,callback);
				});
			}else{
				//他はそのまま
				builder.renderFile(filepath,base+".html",currentState,local,callback);
			}
		}
	}
};
