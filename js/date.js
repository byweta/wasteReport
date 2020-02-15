//js日期比较(yyyy-mm-dd)
function compDate(start, end) {
	var arr = start.split("-");
	var starttime = new Date(arr[0], arr[1], arr[2]);
	var starttimes = starttime.getTime();

	var arrs = end.split("-");
	var endtime = new Date(arrs[0], arrs[1], arrs[2]);
	var endtimes = endtime.getTime();

	if (starttimes > endtimes) {
		return "-1";
	} else if (starttimes == endtimes) {
		return "0";
	} else if (starttimes < endtimes) {
		return "1";
	} else {
		return 'exception';
	}
}

//js时间比较(yyyy-mm-dd hh:mi:ss)
function compDateTime(beginTime, endTime) {
	var beginTimes = beginTime.substring(0, 10).split('-');
	var endTimes = endTime.substring(0, 10).split('-');

	beginTime = beginTimes[1] + '-' + beginTimes[2] + '-' + beginTimes[0] + ' ' + beginTime.substring(10, 19);
	endTime = endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);

	var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;
	if (a < 0) {
		return "-1";
	} else if (a > 0) {
		return "1";
	} else if (a == 0) {
		return "0";
	} else {
		return 'exception';
	}
}

// 时间戳格式化(毫秒数转化为指定格式)
function fmtTime(time, fmt) {
	//var date = new Date(parseInt(time)).toLocaleString().substr(0, 17);
	return new Date(parseInt(time)).Format(fmt);
}

// 时间格式化方法
Date.prototype.Format = function(fmt) {//author: meizz
	var o = {
		"M+" : this.getMonth() + 1, //月份
		"d+" : this.getDate(), //日
		"h+" : this.getHours(), //小时
		"m+" : this.getMinutes(), //分
		"s+" : this.getSeconds(), //秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), //季度
		"S" : this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt))
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
//获取当前时间
var days;
var hours;
var minutes;
var seconds;
function getData(data) {
	var d = new Date();
	var years = d.getFullYear();
	var month = d.getMonth() + 1;
	if (d.getDate() < 10) {
		days = '0' + d.getDate();
	} else {
		days = d.getDate();
	}
	if (d.getHours() < 10) {
		hours = '0' + d.getHours();
	} else {
		hours = d.getHours();
	}
	if (d.getMinutes() < 10) {
		minutes = '0' + d.getMinutes();
	} else {
		minutes = d.getMinutes();
	}
	if (d.getSeconds() < 10) {
		seconds = '0' + d.getSeconds();
	} else {
		seconds = d.getSeconds();
	}
	if (data == 'data') {
		return years + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
	} else if (data == 'data_time') {
		return years + "-" + month + "-" + days;
	} else if (data == 'month') {
		return years + "-" + month;
	} else if (data == 'year') {
		return years + "年" + month + "月" + days + "日";
	} else if (data == 'hour') {
		return hours + ":" + minutes;
	}
}

function fncurDateTime() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var day = d.getDay();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var ms = d.getMilliseconds();
	var curDateTime = year;
	if (month > 9)
		curDateTime = curDateTime + "" + month;
	else
		curDateTime = curDateTime + "0" + month;
	if (date > 9)
		curDateTime = curDateTime + "" + date;
	else
		curDateTime = curDateTime + "0" + date;
	if (hours > 9)
		curDateTime = curDateTime + "" + hours;
	else
		curDateTime = curDateTime + "0" + hours;
	if (minutes > 9)
		curDateTime = curDateTime + "" + minutes;
	else
		curDateTime = curDateTime + "0" + minutes;
	if (seconds > 9)
		curDateTime = curDateTime + "" + seconds;
	else
		curDateTime = curDateTime + "0" + seconds;
	return curDateTime+ms;
}