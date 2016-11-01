
loaction=new Array();
location[0]=["基隆","三坑","八堵","七堵","百福","五堵","汐止","汐科","南港","松山","台北","萬華","板橋","浮洲","樹林","南樹林","山佳","鶯歌"];
location[1]=["桃園","內壢","中壢","埔心","楊梅","福岡"];
location[2]=["北湖","湖口","新豐","竹北","北新竹","新竹","三姓橋","香山"];
location[3]=["崎頂","竹南","造橋","豐富","苗栗","南勢","銅鑼","三義"]
location[4]=["泰安","后里","豐原","潭子","太原","台中","大慶","烏日","新烏日","成功"];
location[5]=["彰化","花壇","大村","員林","永靖","社頭","田中","二水"];
location[6]=["林內","石榴","斗六","斗南","石龜"];
location[7]=["大林","民雄","嘉北","嘉義","水上","南靖"];
location[8]=["後壁","新營","柳營","林鳳營","隆田","拔林","善化","南科","新市","永康","大橋","台南","保安","仁德","中洲"];
location[9]=["大湖","路竹","岡山","橋頭","楠梓","新左營","左營","高雄","鳳山","後庄","九曲堂"];
location[10]=["六塊厝","屏東"];

var Data=[];
Data.push({name:'基隆',km:0.0,sid:1001});
Data.push({name:'三坑',km:1.3,sid:1029});
Data.push({name:'八堵',km:3.7,sid:1002});
Data.push({name:'七堵',km:6.0,sid:1003});
Data.push({name:'百福',km:8.7,sid:1030});
Data.push({name:'五堵',km:11.7,sid:1004});
Data.push({name:'汐止',km:13.1,sid:1005});
Data.push({name:'汐科',km:14.6,sid:1031});
Data.push({name:'南港',km:19.1,sid:1006});
Data.push({name:'松山',km:21.9,sid:1007});
Data.push({name:'台北',km:28.3,sid:1008});
Data.push({name:'萬華',km:31.1,sid:1009});
Data.push({name:'板橋',km:35.5,sid:1011});
Data.push({name:'浮洲',km:38.0,sid:1032});
Data.push({name:'樹林',km:40.9,sid:1012});
Data.push({name:'南樹林',km:42.9,sid:1034});
Data.push({name:'山佳',km:44.8,sid:1013});
Data.push({name:'鶯歌',km:49.2,sid:1014});
Data.push({name:'桃園',km:57.4,sid:1015});
Data.push({name:'內壢',km:63.3,sid:1016});
Data.push({name:'中壢',km:67.3,sid:1017});
Data.push({name:'埔心',km:73.1,sid:1018});
Data.push({name:'楊梅',km:77.1,sid:1019});
Data.push({name:'富岡',km:83.9,sid:1020});
Data.push({name:'北湖',km:87.1,sid:1033});
Data.push({name:'湖口',km:89.6,sid:1021});
Data.push({name:'新豐',km:95.8,sid:1022});
Data.push({name:'竹北',km:100.6,sid:1023});
Data.push({name:'北新竹',km:105.0,sid:1024});
Data.push({name:'新竹',km:106.4,sid:1025});
Data.push({name:'三姓橋',km:111.2,sid:1035});
Data.push({name:'香山',km:114.4,sid:1026});
Data.push({name:'崎頂',km:120.8,sid:1027});
Data.push({name:'竹南',km:125.4,sid:1028});
Data.push({name:'造橋',km:130.7,sid:1302});
Data.push({name:'豐富',km:137.1,sid:1304});
Data.push({name:'苗栗',km:140.6,sid:1305});
Data.push({name:'南勢',km:147.2,sid:1307});
Data.push({name:'銅鑼',km:151.4,sid:1308});
Data.push({name:'三義',km:158.8,sid:1310});
Data.push({name:'泰安',km:169.7,sid:1314});
Data.push({name:'后里',km:172.3,sid:1315});
Data.push({name:'豐原',km:179.1,sid:1317});
Data.push({name:'潭子',km:184.1,sid:1318});
Data.push({name:'太原',km:189.2,sid:1323});
Data.push({name:'台中',km:193.3,sid:1319});
Data.push({name:'大慶',km:197.5,sid:1322});
Data.push({name:'烏日',km:200.5,sid:1320});
Data.push({name:'新烏日',km:201.3,sid:1324});
Data.push({name:'成功',km:203.8,sid:1321});
Data.push({name:'彰化',km:210.9,sid:1120});
Data.push({name:'花壇',km:217.5,sid:1202});
Data.push({name:'大村',km:222.1,sid:1240});
Data.push({name:'員林',km:225.6,sid:1203});
Data.push({name:'永靖',km:229.1,sid:1204});
Data.push({name:'社頭',km:232.8,sid:1205});
Data.push({name:'田中',km:237.1,sid:1206});
Data.push({name:'二水',km:242.9,sid:1207});
Data.push({name:'林內',km:251.0,sid:1208});
Data.push({name:'石榴',km:255.8,sid:1209});
Data.push({name:'斗六',km:260.6,sid:1210});
Data.push({name:'斗南',km:268.2,sid:1211});
Data.push({name:'石龜',km:272.1,sid:1212});
Data.push({name:'大林',km:276.7,sid:1213});
Data.push({name:'民雄',km:282.5,sid:1214});
Data.push({name:'嘉北',km:289.2,sid:1241});
Data.push({name:'嘉義',km:291.8,sid:1215});
Data.push({name:'水上',km:298.4,sid:1217});
Data.push({name:'南靖',km:301.0,sid:1218});
Data.push({name:'後壁',km:307.0,sid:1219});
Data.push({name:'新營',km:314.7,sid:1220});
Data.push({name:'柳營',km:318.0,sid:1221});
Data.push({name:'林鳳營',km:321.9,sid:1222});
Data.push({name:'隆田',km:327.4,sid:1223});
Data.push({name:'拔林',km:329.6,sid:1224});
Data.push({name:'善化',km:334.2,sid:1225});
Data.push({name:'南科',km:337.1,sid:1244});
Data.push({name:'新市',km:341.8,sid:1226});
Data.push({name:'永康',km:346.8,sid:1227});
Data.push({name:'大橋',km:350.5,sid:1239});
Data.push({name:'台南',km:353.2,sid:1228});
Data.push({name:'保安',km:360.8,sid:1229});
Data.push({name:'仁德',km:362.2,sid:1243});
Data.push({name:'中洲',km:364.8,sid:1230});
Data.push({name:'大湖',km:367.7,sid:1231});
Data.push({name:'路竹',km:370.6,sid:1232});
Data.push({name:'岡山',km:378.4,sid:1233});
Data.push({name:'橋頭',km:382.0,sid:1234});
Data.push({name:'楠梓',km:386.2,sid:1235});
Data.push({name:'新左營',km:391.3,sid:1242});
Data.push({name:'左營',km:393.2,sid:1236});
Data.push({name:'高雄',km:399.8,sid:1238});
Data.push({name:'鳳山',km:405.6,sid:1402});
Data.push({name:'後庄',km:409.3,sid:1403});
Data.push({name:'九曲堂',km:413.6,sid:1404});
Data.push({name:'六塊厝',km:418.6,sid:1405});
Data.push({name:'屏東',km:420.8,sid:1406});
function renew(form,idx){
    if(form===0){
	for(var i=0;i<location[idx].length;i++){
		document.StartStation.Location.options[i]=new Option(location[idx][i],location[idx][i]);
	}
	document.StartStation.Location.length=location[idx].length;
    }
    else{
	for(var i=0;i<location[idx].length;i++){
		document.EndStation.Location.options[i]=new Option(location[idx][i],location[idx][i]);
	}
	document.EndStation.Location.length=location[idx].length;
    }
}

function count(){
	var 起點=document.StartStation.Location.value;
	var 終點=document.EndStation.Location.value;
	var 區間車=document.getElementById('區間車');
	var 莒光號=document.getElementById('莒光號');
	var 自強號=document.getElementById('自強號');
	var 區間電子=document.getElementById('區間電子');
	var 自強電子=document.getElementById('自強電子');
	var 更多=document.getElementById("viewmore");
	var 時刻表=document.getElementById("tratime");
	

	時刻表.style.display=更多.style.display;
	

	var idx_start=0;var idx_end=0;
	for(idx_start=0;;idx_start++){
		if(Data[idx_start].name===起點)break;
	}
	for(idx_end=0;;idx_end++){
		if(Data[idx_end].name===終點)break;
	}


	if(時刻表.style.display===''){
		時刻表.src="http://twtraffic.tra.gov.tw/twrail/SearchResult.aspx?searchtype=0&searchdate="+document.viewmore.date.value+"&fromstation="+Data[idx_start].sid+"&tostation="+Data[idx_end].sid+"&trainclass="+document.viewmore.trainclass.value+"&timetype="+document.viewmore.timetype.value+"&fromtime="+document.viewmore.FromTimeSelect.value+"&totime="+document.viewmore.ToTimeSelect.value;
		
	}

	var road=Math.abs(Data[idx_end].km-Data[idx_start].km);
	if(road<10)road=10;

	區間車.innerHTML=Math.round(road*1.46);
	莒光號.innerHTML=Math.round(road*1.75);
	自強號.innerHTML=Math.round(road*2.27);
	區間電子.innerHTML=Math.floor(Math.round(road*1.46)*0.9);
	自強電子.innerHTML=Math.floor(Math.round((road<=70?road:70)*1.46)*0.9+(road>70?road-70:0)*2.27);
}

function reset(){
	document.StartStation.Area.selectedIndex = 4;
	document.StartStation.Location.selectedIndex = 5;
	document.EndStation.Area.selectedIndex = 4;
	document.EndStation.Location.selectedIndex = 5;
	document.viewmore.FromTimeSelect.selectedIndex = 0;
	document.viewmore.ToTimeSelect.selectedIndex = 23;
}

function view(){
	var o=document.getElementById("viewmore");
	var o2=document.getElementById("More");
	var timeobj=new Date();
	var timestr;
	var 星期幾=["日","一","二","三","四","五","六"];
	if(o.style.display==="none"){
		o.style.display='';
		o2.value="較少設定";
		for(var i=0;i<45;i++){
			timestr=timeobj.getFullYear()+'/'+((timeobj.getMonth()+1)<10?'0':'')+(timeobj.getMonth()+1)+'/'+timeobj.getDate();
			document.viewmore.date.options[i]=new Option(timestr+'('+星期幾[timeobj.getDay()]+')',timestr);
			timeobj.setDate(timeobj.getDate() + 1);
		}
	}
	else{
		o.style.display='none';
		o2.value="更多設定";
	}
}
