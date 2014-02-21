var path=require('path');

exports.getRenderer=function(builder){
	var jobdata=require('../data/jobs.js');
	var jobs=jobdata.jobs, teams=jobdata.teams;
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
				teams:teams
			};
			if(teams[base]){
				//記事がある
				var c=currentState.clone();
				local.team=teams[base]
				local.teamKey=base;
				c.addMiddleTemplate("../../templates/team.jade",function(err){
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
