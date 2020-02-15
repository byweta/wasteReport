/** 
 * 打开二级选项弹框Demo 
 * @param {Object} oneOptionId 选中选项一的Id
 * @param {Object} twoOptionId 选中选项二的Id
 */
function fnCheckOption(oneOptionId, twoOptionId){
	getOptionId(oneOptionId, twoOptionId, function(checkOption){
		firstOptionId = checkOption.firstOptionId;
		secondOptionId = checkOption.secondOptionId;
		var firstOptionName= checkOption.firstOptionName;
		var secondOptionName= checkOption.secondOptionName;
	});
}

// 选项一和选项二的Id值
var firstOptionId = '', secondOptionId = '';
// 选项一数据源
var firstOptions = [
	{'id': '15476218813229018', 'value': '动态信息', 'parentId': '0'},
    {'id': '15476219224959020', 'value': '联合研究', 'parentId': '0'},
    {'id': '15476219549559022', 'value': '驻点工作', 'parentId': '0'},
	{'id': '15476220235479026', 'value': '联系我们', 'parentId': '0'}
];
// 选项二数据源
var secondOptions = [
    /**********动态信息********/
    {"id":"15476220800569028","value":"工作快讯","parentId":"15476218813229018"},
    {"id":"15476222622979030","value":"长江资讯","parentId":"15476218813229018"},
    {"id":"15476223183929032","value":"通知公告","parentId":"15476218813229018"},
    {"id":"15476227054849040","value":"党建工作","parentId":"15476218813229018"},
    {"id":"15476228071189043","value":"招标公告","parentId":"15476218813229018"},
    /**********联合研究********/
    {"id":"15476215298349006","value":"交流合作","parentId":"15476219224959020"},
    {"id":"15476225892079035","value":"研究专题","parentId":"15476219224959020"},
    {"id":"15476226321279037","value":"专家视点","parentId":"15476219224959020"},
    {"id":"15476228546909045","value":"研究成果","parentId":"15476219224959020"},
    /**********驻点工作********/
    {"id":"15476214859669004","value":"一市一策","parentId":"15476219549559022"},
    {"id":"15476230628779049","value":"驻点动态","parentId":"15476219549559022"},
    {"id":"15476908001759091","value":"专家视点","parentId":"15476219549559022"},
    {"id":"15476909408589094","value":"研究成果","parentId":"15476219549559022"},
    {"id":"15476909894409096","value":"交流合作","parentId":"15476219549559022"},
    /**********联系我们********/
    {"id":"15476234849179065","value":"联系中心","parentId":"15476220235479026"},
    {"id":"15476235168799067","value":"共建单位","parentId":"15476220235479026"}
];

// 选择
function getOptionId(firstOptionId, secondOptionId, callback){
    if(firstOptionId == ''){
        oneLevelId = firstOptions[0].id;
        twoLevelId = secondOptions[0].id;
    } else {
    	oneLevelId = firstOptionId;
    	twoLevelId = secondOptionId;
    }
    var iosSelect = new IosSelect(2,
        [firstOptions, secondOptions],
        {
            title: '选择',
            itemHeight: 35,
            relation: [1, 1],
            oneLevelId: oneLevelId,
            twoLevelId: twoLevelId,
            callback: function (selectOneObj, selectTwoObj) {
                var checkOption = {
                    firstOptionId: selectOneObj.id,
                    firstOptionName: selectOneObj.value,
                    secondOptionId: selectTwoObj.id,
                    secondOptionName: selectTwoObj.value
                };
                callback(checkOption);
            }
    });
}
