var path=require('path');

exports.getRenderer=function(builder){
	var jobdata=require('../data/jobs.js');
	var jobs=jobdata.jobs, subs=jobdata.subs;
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
				subs:subs
			};
			if(subs[base]){
				//記事がある
				var c=currentState.clone();
				local.sub=subs[base]
				local.subKey=base;
				c.addMiddleTemplate("../../templates/sub.jade",function(err){
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
