exports.getRenderer=function(builder){
	var jobs=require('./data/jobs');
	var pageTable={
		"身代わりくん":"/scapegoat.html",
		"死因一覧":"/found.html",
		"設定":"/options.html",
		"蘇生":"/revive.html",
		"勝利判定":"/judge.html",
		"闇鍋":"/yaminabe.html",
		"役職一覧":"/jobs/index.html",
		"陣営一覧":"/teams/index.html",
		"系統一覧":"/categories/index.html",
		"サブ役職一覧":"/subs/index.html"
	};
	//役職名
	var js=jobs.jobs, teams=jobs.teams, categories=jobs.categories, subs=jobs.subs;
	for(var job in js){
		pageTable[js[job].name]="/jobs/"+job+".html";
	}
	for(var t in teams){
		pageTable[teams[t]]="/teams/"+t+".html";
	}
	for(var c in categories){
		pageTable[categories[c]]="/categories/"+c+".html";
	}
	for(var s in subs){
		pageTable[subs[s].name]="/subs/"+s+".html";
	}
	var repl=function(str,name,to){
		if(!name)name=to;
		if(pageTable[to]==null){
			console.warn("Not found!!",str);
		}
		return "<a href='"+pageTable[to]+"'>"+name+"</a>";
	};
	return {
		afterRender:function(content){
			return content.replace(/\[\[(?:([^\]]+?)\|)?([^\]]+?)\]\]/g,repl);
		}
	}
};
