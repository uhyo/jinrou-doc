var path=require('path');

exports.getRenderer=function(builder){
	var jobdata=require('../data/jobs.js');
	var jobs=jobdata.jobs;
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
				jobs:jobs
			};
			if(jobs[base]){
				//記事がある
				var c=currentState.clone();
				local.job=jobs[base];
				c.addMiddleTemplate("../../templates/job.jade",function(err){
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
