var path=require('path');

exports.getRenderer=function(builder){
	var jobdata=require('../data/jobs.js');
	var jobs=jobdata.jobs;
    var urlTable={"うそつき人狼":"http://jinraw.com/usotsuki","月夜の人狼":"http://rakurakutei.fool.jp/moon_wolf"};
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
                urlTable:urlTable
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
