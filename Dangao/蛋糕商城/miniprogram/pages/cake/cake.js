var base = getApp();
var jzData = require('../../utils/jzData.js')
// var jdData = require('../../utils/jdData.js')
Page({
    data: {
        tab: 0,
        list: [],
        listJz: []
    },
    onLoad: function () {
        var _this = this;
        var _dic = base.cake.getCache();
        if (_dic) {
            this.setlist(_dic);
        } else {
            this.initData();
        }
        //极致系列
        var _jzlist = [];
        var dic = jzData.data;
        for (var i in dic) {
            _jzlist.push({
                name: i,
                price: dic[i].CakeType[0].CurrentPrice + ".00",
                des: dic[i].Means,
                imgUrl: base.path.res + dic[i].img
            })
        }
        this.setData({ "listJz": _jzlist });
    },
    onShow: function (e) {
        if (base.cake.tab != null) {
            this.setData({ "tab": base.cake.tab });
            base.cake.tab = null;
        }
        if (base.version.current != base.version.getValue()) {

            this.initData();
        }
        
    },
    initData: function () {
        var _this = this;
        var _dic = base.cake.getCache();
        if (_dic) {
            _this.setlist(_dic);
        }

    },
    setlist: function (dic) {
        var _list = [];
        for (var i in dic) {
            _list.push({
                name: i,
                price: dic[i].CakeType[0].CurrentPrice + ".00",
                des: dic[i].Means,
                imgUrl: base.path.res + "images/ksk/mlist/item/" + i + ".jpg",
                imgUrl: base.path.res + "/images-2/index-3/jdcake/w_240/" + encodeURI(i) + ".png"
            })
        }
        this.setData({ "list": _list });
    },
   
    changeTab: function (e) {
        var d = e.currentTarget.dataset.index;
        this.setData({ tab: d });
    },
    goDetail: function (e) {
        var d = e.currentTarget.dataset.pname;
        var b = e.currentTarget.dataset.brand;
        if (d) {
            wx.navigateTo({
                url: '../cakeDetail/cakeDetail?pname=' + d + "&brand=" + b
            })
        }
    }
});