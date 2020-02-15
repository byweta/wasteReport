/**
 * 打开一级选项弹框Demo
 * @param {Object} oneOptionId 选中选项一的Id
 */
function fnCheckOptionDemo(oneOptionId){
	getOptionId(oneOptionId, function(checkOption){
		firstOptionId = checkOption.firstOptionId;
		var firstOptionName= checkOption.firstOptionName;
	});
}

// 选项一的Id值
var firstOptionId = '';
// 选项一数据源-废物类型
var firstOptionsType = [
	{'id': '1', 'value': '感染性废物', 'parentId': '0'},
	{'id': '2', 'value': '损伤性废物', 'parentId': '0'},
	{'id': '3', 'value': '病理性废物', 'parentId': '0'},
	{'id': '4', 'value': '化学性废物', 'parentId': '0'},
	{'id': '5', 'value': '药物性废物', 'parentId': '0'}
];
// 选项一数据源-处理方式
var firstOptionsFunc = [
	{'id': '1', 'value': '焚烧', 'parentId': '0'},
	{'id': '2', 'value': '掩埋', 'parentId': '0'},
	{'id': '3', 'value': '贮存', 'parentId': '0'},
	{'id': '4', 'value': '利用', 'parentId': '0'}
];
// 选项一数据源
var firstOptions = [];

// 选择
function getOptionId(firstOptionId, callback){
    oneLevelId = firstOptionId;
    var iosSelect = new IosSelect(1,
        [firstOptions],
        {
            title: '选择',
            itemHeight: 35,
            relation: [1],
            oneLevelId: oneLevelId,
            callback: function (selectOneObj) {
                var checkOption = {
                    firstOptionId: selectOneObj.id,
                    firstOptionName: selectOneObj.value
                };
                firstOptionId = checkOption.firstOptionId;
                callback(checkOption);
            }
    });
}