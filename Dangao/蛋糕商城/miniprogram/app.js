//app.js
App({
    version: {
        key: "version",
        current: "1.0.2",
        getValue: function () {
            return wx.getStorageSync(this.key);
        }
    },
    path: {
        res: "https://res.bestcake.com/",
        www: "https://mcstj.bestcake.com/",
        www:"http://localhost:9419/"
    },
    user: {
        userid: 0,//用户ID
        sessionid: "",//秘钥
        jzb: 0,
        exp: 0,
        phone: "",
        levels: 0,
        headimg: "",
        islogin: function (tp) {
            var re = false;
            if (this.userid > 0) {
                re = true;
            } else {
                if (tp == true) {
                    wx.navigateTo({
                        url: ''
                    })
                }
            }
            return re;
        },
        key: "userkey",
        setCache: function (obj) {
            wx.setStorageSync(this.key, obj);
        },
        getCache: function () {
            return wx.getStorageSync(this.key);
        },        
        clear: function () {
            wx.removeStorageSync(this.key);
        }
    },
    cart: {
        key: "cart",
        ref: "",
        add: function (p) {
            var re = false;
            if (p.supplyno && p.price && p.size && p.name && p.num) {
                var dic = wx.getStorageSync(this.key) || {};
                if (p.supplyno in dic) {
                    dic[p.supplyno].num += p.num;
                } else {
                    dic[p.supplyno] = { name: p.name, price: p.price, size: p.size, num: p.num, brand: p.brand }
                }
                wx.setStorageSync(this.key, dic);
                re = true;
            }
            return re;
        },
        exist: function (sno) {
            var re = false;
            var dic = wx.getStorageSync(this.key) || {};
            if (sno in dic) {
                re = true;
            }
            return re;
        },
        remove: function (sno) {
            var dic = wx.getStorageSync(this.key) || {};
            if (sno in dic) {
                delete dic[sno];
                wx.setStorageSync(this.key, dic);
            }
        },
        getNum: function () {
            var n = 0;
            var dic = wx.getStorageSync(this.key) || {}
            for (var i in dic) {
                n += dic[i].num;
            }
            return n;
        },
        num: function (sno, n) {
            var dic = wx.getStorageSync(this.key) || {};
            if (sno in dic) {
                if (n > 0) {
                    dic[sno].num = n;
                } else {
                    delete dic[sno];
                }
                wx.setStorageSync(this.key, dic);
            }
        },
        getList: function () {
            var list = [];
            var dic = wx.getStorageSync(this.key);
            for (var p in dic) {
                list.push({ supplyno: p, name: dic[p].name, price: dic[p].price, size: dic[p].size, num: dic[p].num, brand: dic[p].brand });
            }
            return list;
        },
        clear: function () {
            wx.removeStorageSync(this.key);
        }
    },
    cake: {
        tab: null,
        key: "cake",
        setCache: function (obj) {
            wx.setStorageSync(this.key, obj);
            var vs = getApp().version;
            wx.setStorageSync(vs.key, vs.current);//设置当前版本号
        },
        getCache: function () {
            return wx.getStorageSync(this.key);
        },
        getByName: function (nm) {
            var p = null;
            var dic = wx.getStorageSync(this.key) || {};
            if (nm in dic) {
                p = dic[nm];
            }
            return p;
        }
    },
    toast: function (p) {
    wx.showToast(p);
    },
  get: function (p, suc, tit) {
    var _this = this;
    //var loaded = false;//请求状态
    _this.loading.show({ title: tit });
    // setTimeout(function () {
    //     if (!loaded) {
    //         _this.loading.show();
    //     }
    // }, 500);
    if (_this.user.islogin()) {
      p.userid = _this.user.userid;
      p.sessionid = _this.user.sessionid;
    }
    wx.request({
      url: this.path.www + 'client.ashx?v=' + Math.random(),
      data: p,
      header: {
        'Content-Type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        suc(res);
      },
      fail: function (e) {
        _this.toast({ title: "请求出错！" })
      },
      complete: function () {
        //loaded = true;//完成
        _this.loading.hide();
      }
    })
  },
    loading: (function () {
        return {
            show: function (p) {
                p = p ? p : {};
                wx.showToast({
                    title: p.title || '加载中',
                    icon: 'loading',
                    duration: p.duration || 10000
                })
            },
            hide: function () {
                wx.hideToast();
            }
        }
    })(),
});