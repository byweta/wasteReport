/**
 * 打开时间选择器Demo 
 * @param {Object} dateStr 格式 yyyy-MM-dd hh:mm
 */
function fnOpenPickerDemo(dateStr){
	getSelectTime(dateStr, function(checkDate){
		console.log("返回的时间："+JSON.stringify(checkDate));
		var checkDateStr = checkDate.year+"-"+
			(parseInt(checkDate.month)<10?"0"+parseInt(checkDate.month):checkDate.month)+"-"+
			(parseInt(checkDate.day)<10?"0"+parseInt(checkDate.day):checkDate.day)
	});
}

// 时间选择器

var now = new Date();
var nowYear = now.getFullYear();
var nowMonth = now.getMonth() + 1;
var nowDate = now.getDate();
var nowHour = now.getHours(); //小时
var nowMinute = now.getMinutes(); //分
var nowSecond = now.getSeconds(); //秒

// 数据初始化
function formatYear(nowYear) {
	var arr = [];
	for (var i = 1976; i <= nowYear; i++) {
		arr.push({
			id : i + '',
			value : i + '年'
		});
	}
	return arr;
}

function formatMonth() {
	var arr = [];
	for (var i = 1; i <= 12; i++) {
		arr.push({
			id : i + '',
			value : i + '月'
		});
	}
	return arr;
}

function formatDate(count) {
	var arr = [];
	for (var i = 1; i <= count; i++) {
		arr.push({
			id : i + '',
			value : i + '日'
		});
	}
	return arr;
}

var yearData = function(callback) {
	callback(formatYear(nowYear))
}
var monthData = function(year, callback) {
	callback(formatMonth());
};
var dateData = function(year, month, callback) {
	if (/^(1|3|5|7|8|10|12)$/.test(month)) {
		callback(formatDate(31));
	} else if (/^(4|6|9|11)$/.test(month)) {
		callback(formatDate(30));
	} else if (/^2$/.test(month)) {
		if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
			callback(formatDate(29));
		} else {
			callback(formatDate(28));
		}
	} else {
		throw new Error('month is illegal');
	}
};
var hourData = function(one, two, three, callback) {
	var hours = [];
	for (var i = 0, len = 24; i < len; i++) {
		hours.push({
			id : i,
			value : i + '时'
		});
	}
	callback(hours);
};
var minuteData = function(one, two, three, four, callback) {
	var minutes = [];
	for (var i = 0, len = 60; i < len; i++) {
		minutes.push({
			id : i,
			value : i + '分'
		});
	}
	callback(minutes);
};

function parserDate(date) {  
    var t = Date.parse(date);  
    if (!isNaN(t)) {  
        return new Date(Date.parse(date.replace(/-/g, "/")));  
    } else {  
        return new Date();  
    }  
};

function getSelectTime(dateStr, callback) {
	if(dateStr != ''){
		paramTime = parserDate(dateStr);
		nowYear = paramTime.getFullYear();
		nowMonth = paramTime.getMonth() + 1;
		nowDate = paramTime.getDate();
	}
	var oneLevelId = nowYear;
	var twoLevelId = nowMonth;
	var threeLevelId = nowDate;
	var iosSelect = new IosSelect(3, [yearData, monthData, dateData], {
		title : '时间选择',
		itemHeight : 35,
		itemShowCount : 9,
		oneLevelId : oneLevelId,
		twoLevelId : twoLevelId,
		threeLevelId : threeLevelId,
		callback : function(selectOneObj, selectTwoObj, selectThreeObj) {
			var checkDate = {
				'year': selectOneObj.id,
				'month': selectTwoObj.id,
				'day': selectThreeObj.id
			};
			console.log(selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
			console.log('选中的时间：'+JSON.stringify(checkDate));
			callback(checkDate);
		}
	});
}

