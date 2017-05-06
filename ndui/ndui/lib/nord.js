(function (window, undefined) {
    // 构造Nord对象
    var Nord = function (selector, context) {
        //return new Nord.fn.init(selector, context, rootjQuery);
        return new Object();
    }

    var Nord = new Object();



    //内部使用
    var jkprt = new Object();

    Nord = function (a) {
        if ("string" != typeof (a)) return new Object();
        switch (a.substring(0, 1)) {
            case "#":
                var n = a.substring(1, a.length);
                var Ele = document.getElementById(n);
                Ele.val = function (v) {
                    if (typeof (Ele) != "undefined") {
                        if (typeof (Ele.type) != "undefined") {
                            if (Ele.type == "text" || Ele.type == "password" || Ele.type == "textarea") {
                                if (typeof (v) != "undefined") document.getElementById(n).value = v;
                                return document.getElementById(n).value;
                            }
                            else if (Ele.type == "select-one") return Nord.selval(n, v);
                            else return Ele.innerHTML;
                        }
                        else {
                            if (typeof (v) != "undefined") Ele.innerHTML = v;
                            return Ele.innerHTML;
                        }
                    }
                    else
                        return document.getElementsByName(n).value;
                }
                return Ele;
            default:
                return new Object();
        }
    }

    //根据value 获取name属性
    Nord.getname = function (r, items) {
        if (r == undefined) return '';
        var objs = items.find(function (obj) { return obj.value.toString() == r.toString() });
        if (objs) {
            return objs.name;
        }
        return r;
    }

    //获取当前网站Url
    jkprt.path = function getRootPath() {
        //获取当前网址
        var curWwwPath = window.document.location.href;
        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        //获取主机地址
        var localhostPaht = curWwwPath.substring(0, pos);
        //获取带"/"的项目名
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return (localhostPaht + projectName);
    };

    Nord.url = jkprt.path;

    Nord.GetProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");

    Nord.basepage = function (a) {
        if (window.parent)
            return window.parent;
    }

    /////获取数组
    Nord.toArray = function toArray(a) {
        var o = [];
        for (d in a) {
            o.push(a[d]);
        }
        return o;
    }

    //ajax实际请求方法
    Nord.ajax = function ajaxmethod(conf) {

        var ajaxkey = '';

        //过滤
        if (typeof (conf) == "undefined") return;
        if (typeof (conf.url) == "undefined") return;

        var config = {
            url: conf.url,
            data: conf.data,
            async: typeof (conf.async) == "undefined" ? false : conf.async,
            contentType: typeof (conf.contentType) == "undefined" ? "application/json; charset=utf-8" : conf.contentType,
            method: typeof (conf.method) == "undefined" ? "Post" : conf.method,
            success: conf.success,
            error: conf.error,
            datatype: typeof (conf.datatype) == "undefined" ? "json" : conf.datatype,
            submit: conf.submit,
            ndtarget: conf.ndtarget,
            ndhost: conf.ndhost
        };
        var rddata;

        // new XMLDocumentRequest();

        //头处理
        var xmlhttp = new XMLHttpRequest();
        if (xmlhttp.overrideMimeType)
            xmlhttp.overrideMimeType("application/json; charset=utf-8");
        if ("withCredentials" in xmlhttp) {
            // 针对Chrome/Safari/Firefox.
        }
            //else if (typeof XDomainRequest != undefined) {
            //    // 针对IE
            //    xmlhttp = new XDomainRequest();
            //} 
        else {
            // 不支持CORS
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 401) {
                        var data = eval('(' + xmlhttp.responseText + ')');
                        if (typeof (window.login) == 'function') {
                            window.login();
                        } else {
                            window.location.href = data.url + '?u=' + window.location.href;
                        }
                    }
                    else if (xmlhttp.status == 200 && xmlhttp.responseText != "") {
                        if (config.datatype == "json") {
                            data = eval('(' + xmlhttp.responseText + ')');
                            data.status = 200;
                        } else data = xmlhttp.responseText;
                    } else {
                        data = { status: xmlhttp.status, success: false, message: xmlhttp.statusText, data: xmlhttp.responseText };
                    }
                    if (typeof (config.success) != "undefined") {
                        if (typeof (config.success) != "function") {
                            eval('(' + config.success + "(data)" + ')');
                        }
                        else config.success.call(this, data);
                    }
                }
                rddata = data;
                return data;
            };

            var hasn = config.url.indexOf('?') > 0 ? "&" : "?";

            if (config.method.toLowerCase() == "get") {
                if (typeof (config.data) == "string") config.data = "[\"" + config.data + "\"]";
                var M = (typeof (config.submit) != "undefined") ? hasn + "nd-method=" + config.submit : "";
                var D = (typeof (config.data) != "undefined") ? (M.length > 0) ? "&" : hasn + "nd-senddata=" + Nord.json2Str(config.data) : "";
                config.url = encodeURI(config.url + M + D).replace(/\%/g, "%_").replace(/\+/g, "%2B");
            }

            xmlhttp.open(config.method, config.url, config.async);
            if (config.datatype == "json") {
                xmlhttp.setRequestHeader("keys", ajaxkey);
                xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            }

            //火狐不支持
            if (navigator.userAgent.indexOf("Firefox") == 0) {
                xmlhttp.withCredentials = true;
            }


            if (typeof (config.submit) != "undefined") {
                xmlhttp.setRequestHeader("nd-method", config.submit);
            }

            if (typeof (config.ndtarget) != "undefined") {
                xmlhttp.setRequestHeader("ndtarget", config.ndtarget);
            }

            if (typeof (config.ndhost) != "undefined") {
                xmlhttp.setRequestHeader("ndhost", config.ndhost);
            }

            if (typeof (config.data) != "undefined")
                xmlhttp.send(Nord.json2Str(config.data).replace(/\%/g, "%_").replace(/\+/g, "%2B"));
            else xmlhttp.send();
            return rddata;
        }

        // 回应处理
        xmlhttp.onload = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 401) {
                    var data = eval('(' + xmlhttp.responseText + ')');
                    if (typeof (window.login) == 'function') {
                        window.login();
                    } else {
                        window.location.href = data.url + '?u=' + window.location.href;
                    }
                }
                else if (xmlhttp.status == 200 && xmlhttp.responseText != "") {
                    if (config.datatype == "json") {
                        data = eval('(' + xmlhttp.responseText + ')');
                        data.status = 200;
                    }
                    else data = xmlhttp.responseText;
                } else {
                    if (config.datatype == "json") {
                        data = { status: xmlhttp.status, success: false, message: xmlhttp.statusText, data: xmlhttp.responseText };
                    } else {
                        data = xmlhttp.responseText;
                    }
                }
                if (typeof (config.success) != "undefined") {
                    if (typeof (config.success) != "function") eval('(' + config.success + "(data)" + ')');
                    else config.success.call(this, data);
                }
            }
            rddata = data;
            return data;
        };

        xmlhttp.onerror = function (e) {
            rddata = { message: e.toString(), success: false };
            if (typeof (config.error) != "undefined") eval('(' + config.error + "(data)" + ')');
            return rddata;
        };

        var hasn = config.url.indexOf('?') > 0 ? "&" : "?";

        if (config.method.toLowerCase() == "get") {
            if (typeof (config.data) == "string") config.data = "[\"" + config.data + "\"]";
            var M = (typeof (config.submit) != "undefined") ? hasn + "nd-method=" + config.submit : "";
            var D = (typeof (config.data) != "undefined") ? (M.length > 0) ? "&" : hasn + "nd-senddata=" + Nord.json2Str(config.data) : "";
            config.url = encodeURI(config.url + M + D).replace(/\%/g, "%_").replace(/\+/g, "%2B");
        }

        xmlhttp.open(config.method, config.url, config.async);
        if (config.datatype == "json") {
            xmlhttp.setRequestHeader("keys", ajaxkey);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
        }
        if (navigator.userAgent.indexOf("Firefox") == 0) {
            xmlhttp.withCredentials = true;
        }

        if (typeof (config.submit) != "undefined") {
            xmlhttp.setRequestHeader("nd-method", config.submit);
        }

        if (typeof (config.ndtarget) != "undefined") {
            xmlhttp.setRequestHeader("ndtarget", config.ndtarget);
        }

        if (typeof (config.ndhost) != "undefined") {
            xmlhttp.setRequestHeader("ndhost", config.ndhost);
        }

        if (typeof (config.data) != "undefined" && config.data != null) {
            xmlhttp.send(Nord.json2Str(config.data).replace(/\%/g, "%_").replace(/\+/g, "%2B"));
        }
        else xmlhttp.send();

        if (!rddata && xmlhttp.readyState == 4) {
            if (xmlhttp.status == 401) {
                rddata = eval('(' + xmlhttp.responseText + ')');
                if (typeof (window.login) == 'function') {
                    window.login();
                } else {
                    window.location.href = rddata.url + '?u=' + window.location.href;
                }
            }
            else if (xmlhttp.status == 200 && xmlhttp.responseText != "") {
                if (config.datatype == "json") {
                    rddata = eval('(' + xmlhttp.responseText + ')');
                    rddata.status = 200;
                }
                else rddata = xmlhttp.responseText;
            } else {
                rddata = { status: xmlhttp.status, success: false, message: xmlhttp.statusText, data: xmlhttp.responseText };
            }
            if (typeof (config.success) != "undefined") {
                if (typeof (config.success) != "function") eval('(' + config.success + "(data)" + ')');
                else config.success.call(this, rddata);
            }
        }
        return rddata;
    }

    //获取url参数的方法
    Nord.que = function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    ///审查登录是否过期
    //setInterval(function () {
    //    var Time = Nord.getCookie('this,timer');
    //    if (Time) {


    //    }
    //}, 1000);

    //Json 转换为 字符串
    Nord.json2Str = function (obj) {
        if ("undefined" != typeof (angular)) return angular.toJson(obj);

        if ("undefined" != typeof (JSON)) return JSON.stringify(obj);
        else {
            var THIS = this;
            switch (typeof (obj)) {
                case 'string':
                    return '"' + obj.replace('/(["', '\\$1') + '"';
                case 'array':
                    return '[' + obj.map(Nord.json2Str).join(',') + ']';
                case 'object':
                    if (obj instanceof Array) {
                        var strArr = [];
                        var len = obj.length;
                        for (var i = 0; i < len; i++) {
                            strArr.push(Nord.json2Str(obj[i]));
                        }
                        return '[' + strArr.join(',') + ']';
                    } else if (obj == null) {
                        return 'null';

                    } else {
                        var string = [];
                        for (var property in obj) string.push(Nord.json2Str(property) + ':' + Nord.json2Str(obj[property]));
                        return '{' + string.join(',') + '}';
                    }
                case 'number':
                    return obj;
                case false:
                    return obj;
            }
        }
    }

    //对象拷贝
    Nord.copy = function (source) {
        var result = {};
        for (var key in source) {
            result[key] = typeof source[key] === 'object' ? deepCoyp(source[key]) : source[key];
        }
        return result;
    }

    Nord.isJson = function (str) {
        try {
            eval('(' + str + ')');
            return true;
        }
        catch (e) {
            return false;
        }
    }

    Nord.Str2json = function (str) {
        try {
            return eval('(' + str + ')');
        }
        catch (e) {
            return str;
        }
    }

    //路径配置信息
    Nord.config = { serurl: jkprt.path() + "/", upload: false };

    /////////******************************************************************************************************

    //使用小写 设置允许上传的数据类型
    Nord.filetype = [".*"];

    //上传文件格式控制（前端）
    jkprt.check = function check(a) {
        var filepath = a.value
        filepath = filepath.substring(filepath.lastIndexOf('.'), filepath.length).toLocaleLowerCase();
        if (Nord.filetype.indexOf(".*") < 0) {
            if (Nord.filetype && Nord.filetype.indexOf(filepath) < 0) {
                var mess = "仅支持数据格式：\"" + Nord.filetype.join("\",\"") + "\"。";
                alert(mess);
                return false;
            }
        }
        return true;
    };

    //
    Nord.uploadid = 0;

    //上传完成返回的执行方法集
    Nord.uploadcmd = [];

    //上传返回事件
    Nord.uploadback = function uploadback(v) {
        var dd = eval('(' + v + ')');
        for (var a = 0; a < Nord.uploadcmd.length; a++) {
            if (dd.id == Nord.uploadcmd[a].id) {
                if (dd.err) Nord.uploadcmd[a].fun.call(this, dd.data);
                else alert(dd.data);
            }
        }
    }

    //数据上传 a= 上传控件ID c=回调函数 b=滚动条ID
    Nord.upload = function uploadImage(u, a, c) {

        var file = document.getElementById(a);

        if (jkprt.check(file)) {

            var p = file.parentNode;
            var s = p.outerHTML;

            var uploadFormElement = document.getElementById("uploadForm");

            ////显示进度条
            //if (b) document.getElementById(b).style.display = "block"; // the progress div

            //复制图片数据
            uploadFormElement.innerHTML = "";
            uploadFormElement.appendChild(file);

            p.innerHTML = s;

            u = u.replace(/([^\/]*)\/([^\/]*)$/g, '$1?nd-method=$2');

            uploadFormElement.action = u + "&&l=" + document.domain + "&&id=" + Nord.uploadid;

            var cmd = {
                id: Nord.uploadid,
                fun: c
            };

            Nord.uploadcmd.push(cmd);

            Nord.uploadid = Nord.uploadid + 1;
            //提交图片数据
            uploadFormElement.submit();
        }
    };

    //注册相关组件
    Nord.config = function (a) {
        if (a.upload) document.body.innerHTML += "<div style=\"display: none;\"><iframe name=\"uploadResponse\"></iframe><form id=\"uploadForm\" action=\"" + Nord.url + 'NordNeige/Upload' + "\" target=\"uploadResponse\" method=\"post\" enctype=\"multipart/form-data\"><input type=\"file\" name=\"imageFile\" value=\"\" /></form></div>";
    };

    //*********************************************Ajax数据获取*********************************************************

    //获取Html 嵌入页 直接输出
    Nord.outhtml = function gethtml(u, f) {
        var config = {
            url: u, data: null, async: f, success: "document.write", error: "加载失败！", method: "Get", datatype: "html"
        };
        return Nord.ajax(config);
    };

    //获取Html 代码返回结果
    Nord.gethtml = function setdiv(div, u, m, f) {
        var config = {
            url: u, data: null, async: f, error: "加载失败！", method: "Get", datatype: "html"
        };
        document.getElementById(div).innerHTML = Nord.ajax(config);
        if (typeof (m) != "undefined") eval('(' + m + ')');
    }

    //获取json文件
    Nord.getjson = function setdiv(u, m) {
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GetJson(u, m);
    }

    Nord.savejson = function setdiv(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.SaveJson(dd, m);
    }

    //交换组件 交换域 交换路径 交换数据 交换后执行 交换目标
    Nord.exchange = function exchange(h, u, d, m, n) {
        //支持CORS跨域
        if ("withCredentials" in xmlhttp) {
            return Nord.post(h + u, d, m, n);
        } else {
            var parm = { url: $nd.url + u, data: d, method: m, ndtarget: n, ndhost: h };
            if (typeof (d) == "function") { parm.method = d; parm.data = null; }
            if (typeof (m) != "function") { parm.ndtarget = m; }
            if (typeof (m) != "function") { parm.ndtarget = m; }

            var config = {
                url: parm.url.replace(/([^\/]*)\/([^\/]*)$/g, '$1'),
                data: parm.data,
                method: "Post",
                async: typeof (parm.method) != "undefined" ? true : false,
                success: parm.method,
                datatype: "json",
                submit: parm.url.substring(parm.url.lastIndexOf("/") + 1),
                ndtarget: parm.ndtarget,
                ndhost: parm.ndhost
            };
            return Nord.ajax(config);
        }
    }

    //u=路由地址 d=提交的数据 m=成功执行方法
    Nord.post = function ajaxpost(u, d, m, n) {
        var parm = { url: u, data: d, method: m, ndtarget: n };
        if (typeof (d) == "function") { parm.method = d; parm.data = null; }
        if (typeof (m) != "function") { parm.ndtarget = m; parm.method = undefined; }

        var config = {
            url: parm.url.replace(/([^\/]*)\/([^\/]*)$/g, '$1'),
            data: parm.data,
            method: "Post",
            async: typeof (parm.method) != "undefined" ? true : false,
            success: parm.method,
            datatype: "json",
            submit: parm.url.substring(parm.url.lastIndexOf("/") + 1),
            ndtarget: parm.ndtarget
        };
        return Nord.ajax(config);
    }

    //u=路由地址 d=提交的数据 m=成功执行方法
    Nord.get = function ajaxpost(u, d, m) {
        var parm = { url: u, method: m, data: d, ndtarget: n };
        if (typeof (d) == "function") { parm.method = d; parm.data = null; }
        if (typeof (m) != "function") { parm.ndtarget = m; parm.method = undefined; }
        var config = {
            url: parm.url.replace(/([^\/]*)\/([^\/]*)$/g, '$1'),
            method: "Get",
            async: typeof (parm.method) != "undefined" ? true : false,
            success: parm.method,
            datatype: "json",
            submit: parm.url.substring(parm.url.lastIndexOf("/") + 1),
            data: parm.data,
            ndtarget: parm.ndtarget
        };
        return Nord.ajax(config);
    }

    //获取表格 报表 u=sql配置路径 c=配置信息 d=条件参数 m=执行后发生
    Nord.grid = function ajaxgrid(u, c, d, m) {
        var dd = [u, c, d];
        var config = {
            url: Nord.url + "/NordNeige/Default",
            data: dd,
            method: "Post",
            async: typeof (m) != "undefined" ? true : false,
            success: m,
            datatype: "json",
            submit: "Grid"
        };
        return Nord.ajax(config);
    }

    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.doexcel = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.Excel([u, d], m);
    }

    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.dogridexcel = function ajaxpost(u, name, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GridExcel([u, d, name ? name : ''], m);
    }

    //调用数据库下载数据允许注入但需要超级管理员权限校验 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.dounsafeexcel = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.UnSafeExcel([u, d], m);
    }


    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.gridbind = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GridBind(dd, m);
    }

    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.griddel = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GridDel(dd, m);
    }

    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.gridadd = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GridAdd(dd, m);
    }

    //调用数据库 获取数据数组 t=执行路径  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.griddosql = function ajaxpost(t, u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [t, u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GridDoSql(dd, m);
    }

    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.gridupdata = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GridUpdate(dd, m);
    }


    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.getdata = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GetData(dd, m);
    }

    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.postdata = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.PostData(dd, m);
    }

    //调用数据库 获取数据数组  u=sql配置路径 d=条件参数 m=执行后发生
    Nord.getcount = function ajaxpost(u, d, m) {
        if (typeof (d) == "function") { m = d; d = null }
        var dd = [u, d];
        return NordNeige.Core.Web.HttpHandlers.BaseHandler.GetCount(dd, m);
    }


    //**************end**************end**************end************************end***************end*****************

    //***********************************************缓存跟踪**********************************************************

    Nord.sessiontimer;
    Nord.wacthsessions = [];
    Nord.sessionstarted = false;
    // var ss = { cmd: 'as', fun: function () { } }
    Nord.wacthsessionsstart = false;//跟踪控制指令

    Nord.setsessionlistener = function (a, f) {
        Nord.wacthsessions.push({ cmd: a, fun: f });
    }

    Nord.wacthingsession = function () {
        var temp = [];
        for (var n = 0; n < wacthsessions.length; n++) {
            var session = sessionStorage.getItem(Nord.wacthsessions[n].cmd);
            if ("undefined" != typeof (session)) {
                if (typeof (Nord.wacthsessions[n].fun) != "function") {
                    eval('(' + Nord.wacthsessions[n].fun + "(session)" + ')');
                }
                else Nord.wacthsessions[n].fun.call(this, session);
            } else {
                temp.push(Nord.wacthsessions[n]);
            }
        }
        Nord.wacthsessions = temp;
    }

    Nord.sessionstart = function () {
        Nord.sessiontimer = setInterval(Nord.wacthingsession, 1000);
        if (!Nord.sessionstarted) Nord.sessionstarted = true;
    }

    Nord.sessionstop = function () {
        if (timer2) clearInterval(sessiontimer);
        if (Nord.sessionstarted) Nord.sessionstarted = false;
    }

    //******************end*****************end**********************end**************************end******************

    //**********************************************通信指令（修订2013-12-30）*****************************************

    //指令库
    Nord.cmd = [];

    //定时获取指令集
    Nord.getcmd = [];

    //设定命令 c=指令数据 n=指令名称 k=指令锁 l=锁定客户端 t=指令时间 禁止跨域访问
    Nord.send = function host_set(c, n, k, l, t) {
        var aa = false;
        if (l) aa = true;

        if (!t) {
            var dt = new Date();
            var t = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() +
            ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
        };

        var url = "";
        if (Nord.url) url = Nord.url + "/NordNeige/Core/Web/HttpHandlers/HostHandler"; else url = "../NordNeige/Core/Web/HttpHandlers/HostHandler";

        var config = { url: url, data: { type: "set", islock: aa, keys: k, path: n, data: c, time: t }, async: true };

        var TT = Nord.ajax(config);

        if (Nord.cmd) {
            for (var ii = 0; ii < Nord.cmd.length; ii++) {
                if (Nord.cmd[ii].name == n) {
                    Nord.cmd[ii].time = t;
                    Nord.cmd[ii].data = c;
                    return TT;
                }
            }
            Nord.cmd.push({ name: n, key: k, user: l, time: t, data: c });
        }
        return TT;
    };

    //获取命令 n=唯一指令名称 k=指令锁 l=加锁的 m=执行方法 禁止跨域访问
    Nord.receive = function host_getajax(n, m, k, l) {

        var aa = false;
        if (l) aa = true;

        if (Nord.url) url = Nord.url + "/NordNeige/Core/Web/HttpHandlers/HostHandler"; else url = "../NordNeige/Core/Web/HttpHandlers/HostHandler";

        var config = {
            url: url,
            data: { type: "get", islock: aa, keys: k, path: n, data: "" },
            async: true,
            success: m
        };

        var TT = Nord.ajax(config);

        if (Nord.getcmd) {
            for (var ii = 0; ii < Nord.getcmd.length; ii++) {

                if (Nord.getcmd[ii].name == n) {
                    Nord.getcmd[ii].method = m;
                    Nord.getcmd[ii].key = k;
                    Nord.getcmd[ii].user = l;
                    return TT;
                }
            }
            Nord.getcmd.push({ name: n, key: k, user: l, method: m });
        }
        return TT;
    };

    Nord.started = false;

    Nord.timer1;
    Nord.timer2;

    //通信跟踪启动
    Nord.start = function zhilingjieshou() {
        if (!Nord.started) {
            Nord.timer1 = setInterval(jkprt.aotogetzl, 1000);
            Nord.timer2 = setInterval(jkprt.aotosendcmd, 300000);
            Nord.started = true;
        }
    };

    //停止跟踪
    Nord.stop = function zhilingstop() {
        if (timer1) clearInterval(timer1);
        if (timer2) clearInterval(timer2);
        if (Nord.started) Nord.started = false;
    };

    //扫描接收指令 内部使用
    jkprt.aotogetzl = function Interval() {
        if (Nord.getcmd) {
            for (var ii = 0; ii < Nord.getcmd.length; ii++) {
                Nord.receive(Nord.getcmd[ii].name, Nord.getcmd[ii].method, Nord.getcmd[ii].key, Nord.getcmd[ii].user)
            }
        }
    };

    //扫描发送指令
    jkprt.aotosendcmd = function sendzhiling() {
        if (Nord.cmd) {
            for (var ji = 0; ji < Nord.cmd.length; ji++) {
                Nord.send(Nord.cmd[ji].data, Nord.cmd[ji].name, Nord.cmd[ji].key, Nord.cmd[ji].user, Nord.cmd[ji].time);
            }
        }
    };

    //***************************end*********************end**********************end*********************************

    //*******************************************值的获取与绑定*******************************************************

    //获取 Radio 的选中值 n=控件name
    Nord.rdval = function GetRadioValue(n) {
        var obj;
        obj = document.getElementsByName(n);
        if (obj != null) {
            var i;
            for (i = 0; i < obj.length; i++) {
                if (obj[i].checked) {
                    return obj[i].value;
                }
            }
        }
        return null;
    };

    //获取 CheckBox 的选中值{name:"",value:""} n=控件name
    Nord.cbval = function GetCheckBoxValue(n) {
        var boxes = document.getElementsByName(n);
        var arr = [];
        for (var i = 0; i < boxes.length; i++) {
            if (boxes[i].checked) {
                arr.push({ value: boxes[i].value, name: boxes[i].text });
            }
        }
        return arr;
    };

    //Select 控件绑定 id=控件Id  arr=绑定数据源[{name:"",value:""},{name:"",value:""}] va=当前选中值
    Nord.selbind = function SelectBind(id, arr, va) {
        var sel = document.getElementById(id);
        for (var i = 0, len = arr.length; i < len; i++) {
            var op = new Option(arr[i].name, arr[i].value);
            sel.options.add(op);
            if (arr[i].value == va) {
                sel.selectedIndex = i;
            }
        }
        if (!va) {
            sel.selectedIndex = 0;
        }
    };

    //设定或获取 选中值 id=控件Id va=设定值
    Nord.selval = function SelectBind(id, va) {
        var sel = document.getElementById(id);
        if (va) {
            for (var i = 0, len = sel.options.length; i < len; i++) {
                if (sel.options[i].value == va) {
                    sel.selectedIndex = i;
                    return sel.options[i].value;
                }
            }
        } else {
            if (sel.options.length == 0) return null;
            else return sel.options[sel.options.selectedIndex].value;
        }
    };

    //************end*************end****************end*********************end**************end*********************

    //***************************************sessionStorage****************************************************************

    Nord.setsession = function (key, data) {
        sessionStorage.setItem(key, Nord.json2Str(data));
    }

    Nord.removesession = function (key) {
        sessionStorage.removeItem(key);
    }

    Nord.getsession = function (key) {
        return Nord.Str2json(sessionStorage.getItem(key));
    }

    Nord.sessionclear = function () {
        sessionStorage.clear();
    }


    Nord.setdbStorage = function (key, data) {
        localStorage.setItem(key, data);
    }

    Nord.removedbStorage = function (key) {
        localStorage.removeItem(key);
    }

    Nord.getdbStorage = function (key) {
        return localStorage.getItem(key);
    }

    Nord.dbStorageclear = function () {
        localStorage.clear();
    }

    //********************end******************end****************************end*****************************

    //********************************cookies*******************************************************************

    Nord.setCookie = function setCookie(name, value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    //读取cookies 
    Nord.getCookie = function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))

            return unescape(arr[2]);
        else
            return null;
    }

    //删除cookies 
    Nord.delCookie = function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

    //************************end******************end*****************************end**************************

    //加密
    Nord.encode = function getCookie(str) {
        if (str && str.length > 0) {
            return $.base64.encode(str);
        }
        return "";
    }

    //解密
    Nord.decode = function getCookie(str) {
        if (str && str.length > 0) {
            return $.base64.decode(str);
        }
        return "";
    }

    //******************************************动画 nd 2014-2-12****************************************************

    //宽度变更定时器
    Nord.ani_timer;

    //动画效果
    Nord.animate = function datareset(a, data, s, b) {
        //获取Div
        var node = document.getElementById(a);

        if (typeof (s) == "undefined") s = 5;
        if (typeof (b) == "undefined") b = 1;

        //速度控制
        var sudu = { w: b, h: b, t: 1, myw: node.offsetWidth, myh: node.offsetHeight, s: s };

        //宽度转换
        if (typeof (data.width) != "undefined" && node.offsetWidth > data.width) { sudu.w = -sudu.w; }

        //高度转换
        if (typeof (data.height) != "undefined" && node.offsetHeight > data.height) { sudu.h = -sudu.h; }

        jkprt.animatemethod(data, node, sudu);

    }

    //定义宽度处理
    jkprt.animatemethod = function gowdth(data, node, sudu) {

        //保持唯一性
        if (typeof (Nord.ani_timer) != "undefined") clearTimeout(Nord.ani_timer);

        //宽度定义 b=速度控制
        //已宽度为变化

        if (typeof (data.width) != "undefined" && ((data.width - sudu.myw) >= (data.height - sudu.myh))) {
            if (sudu.w != 0) node.style.width = node.offsetWidth + sudu.w + 'px';
            if (typeof (data.height) != "undefined" && sudu.h != 0) {
                node.style.height = (data.height - (data.width - node.offsetWidth) * (data.height - sudu.myh) / (data.width - sudu.myw)) + 'px';
            }
        }
        else if (typeof (data.height) != "undefined") { //已高度为变化
            if (sudu.h != 0) node.style.height = node.offsetHeight + sudu.h + 'px';
            if (typeof (data.width) != "undefined" && sudu.w != 0) {
                node.style.width = (data.width - (data.height - node.offsetHeight) * (data.width - sudu.myw) / (data.height - sudu.myh)) + 'px';
            }
        }

        //宽度锁死
        if (sudu.w == 0 || (sudu.w > 0 && node.offsetWidth > data.width) || (sudu.w < 0 && node.offsetWidth < data.width)) {
            node.style.width = data.width + 'px';
            sudu.w = 0;
        }

        //高度度锁死
        if (sudu.h == 0 || (sudu.h > 0 && node.offsetHeight > data.height) || (sudu.h < 0 && node.offsetHeight < data.height)) {
            node.style.height = data.height + 'px';
            sudu.h = 0;
        }

        //定期执行效果
        Nord.ani_timer = setTimeout(function () { jkprt.animatemethod(data, node, sudu); }, sudu.s); //这个5是速度 值越大就变的越慢

        //停止动画
        if (sudu.w == 0 && sudu.h == 0 && Nord.ani_timer) clearTimeout(Nord.ani_timer);
    }

    //清除定时器（暂停动画）
    Nord.aniclear = function tc100() {
        if (typeof (Nord.ani_timer) != "undefined") clearTimeout(Nord.ani_timer);
    }

    //******************end******************end***********************end********************end*********************
    //****************************************拖拽********************************************************************
    Nord.zIndex = 1;

    Nord.rDrag = {
        o: null,
        init: function (o) {
            o.onmousedown = this.start;
        },
        start: function (e) {
            var o;
            e = Nord.rDrag.fixEvent(e);
            e.preventDefault && e.preventDefault();
            Nord.rDrag.o = o = this;
            o.x = e.clientX - Nord.rDrag.o.offsetLeft;
            o.y = e.clientY - Nord.rDrag.o.offsetTop;
            document.onmousemove = Nord.rDrag.move;
            document.onmouseup = Nord.rDrag.end;
            o.style.zIndex = Nord.zIndex++;
        },
        move: function (e) {
            e = Nord.rDrag.fixEvent(e);
            var oLeft, oTop;
            oLeft = e.clientX - Nord.rDrag.o.x;
            oTop = e.clientY - Nord.rDrag.o.y;
            Nord.rDrag.o.style.left = oLeft + 'px';
            Nord.rDrag.o.style.top = oTop + 'px';
        },
        end: function (e) {
            e = Nord.rDrag.fixEvent(e);
            Nord.rDrag.o = document.onmousemove = document.onmouseup = null;
        },
        fixEvent: function (e) {
            if (!e) {
                e = window.event;
                e.target = e.srcElement;
                e.layerX = e.offsetX;
                e.layerY = e.offsetY;
            }
            return e;
        }
    }

    //*****************************end************************************end*****************************************

    //****************************************** 弹出框 **************************************************************

    Nord.alert = function myalert(mes) {
        var bkbox = document.createElement("div");
        bkbox.style.width = document.body.offsetWidth + 'px';
        bkbox.style.height = document.body.offsetHeight + 'px';
        bkbox.style.backgroundColor = 'black';
        bkbox.style.position = 'fixed';
        document.body.appendChild(bkbox);

        var mslable = document.createElement("lable");
        mslable.innerText = "提示信息";
        var msbox = document.createElement("div");
        msbox.appendChild(mslable);
        msbox.style.width = '100px';
        msbox.style.height = '70px';
        msbox.style.position = 'fixed';
        msbox.style.marginTop = '100px';
        msbox.style.marginLeft = '100px';
        msbox.style.backgroundColor = 'red';
        document.body.appendChild(msbox);
    }

    //******************end******************end***********************end********************end*********************

    //****************************************效果插件****************************************************************

    //遮罩层
    Nord.shade = function (id) {

    }


    Nord.now = function () {
        return new Date().Format('yyyy-MM-dd hh:mm:ss');
    }

    //*********************end*************************end*******************end**************************************

    //************************************时间日期处理  nd 2014******************************************************

    //计算间隔天数
    Nord.GetDateDiff = function (startDate, endDate) {
        var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
        var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
        var dates = Math.abs((startTime - endTime)) / (1000 * 60 * 60 * 24);
        return dates;
    }

    //计算间隔小时数
    Nord.GetHourDiff = function (startDate, endDate) {
        var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
        var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
        var dates = Math.abs((startTime - endTime)) / (1000 * 60 * 60);
        return dates;
    }

    //计算间隔分钟数
    Nord.GetMinuteDiff = function (startDate, endDate) {
        var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
        var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
        var dates = Math.abs((startTime - endTime)) / (1000 * 60);
        return dates;
    }

    //计算间隔秒数
    Nord.GetSecondDiff = function (startDate, endDate) {
        var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
        var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
        var dates = Math.abs((startTime - endTime)) / (1000);
        return dates;
    }

    //获取服务器时间
    Date.prototype.getServerTime = function () {
        return Date.parseDate(Nord.post(Nord.url + "NordNeige/Base/GetServerTime", '').data);
    }

    //增加天数
    Date.prototype.addDays = function (n) {
        this.setDate(this.getDate() + n);
        return this;
    }

    //增加月数
    Date.prototype.addMonths = function (n) {
        this.setMonth(this.getMonth() + n);
        return this;
    }

    //增加年数
    Date.prototype.addMonths = function (n) {
        this.setYear(this.getYear() + n);
        return this;
    }

    //增加小时数
    Date.prototype.addHours = function (n) {
        this.setHours(this.getHours() + n);
        return this;
    }

    //增加分钟数
    Date.prototype.addMinutes = function (n) {
        this.setMinutes(this.getMinutes() + n);
        return this;
    }

    //增加秒数
    Date.prototype.addSeconds = function (n) {
        this.setSeconds(this.getSeconds() + n);
        return this;
    }

    //字符转时间
    Date.parseDate = function (str) {
        return new Date(str.replace(/-/g, "/").replace(/年/g, "/").replace(/月/g, "/").replace(/日/g, "/"));
    }

    //字符转时间
    Date.parseDate = function (str) {
        return new Date(str.replace(/-/g, "/").replace(/年/g, "/").replace(/月/g, "/").replace(/日/g, "/"));
    }

    //时间格式化 Date.Format("yyyy-MM-dd ")
    Date.prototype.Format = function (mask) {
        var d = this;
        var zeroize = function (value, length) {
            if (!length) length = 2;
            value = String(value);
            for (var i = 0, zeros = ''; i < (length - value.length) ; i++) {
                zeros += '0';
            }
            return zeros + value;
        };

        return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
            switch ($0) {
                case 'd': return d.getDate();
                case 'dd': return zeroize(d.getDate());
                case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
                case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
                case 'M': return d.getMonth() + 1;
                case 'MM': return zeroize(d.getMonth() + 1);
                case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
                case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
                case 'yy': return String(d.getFullYear()).substr(2);
                case 'yyyy': return d.getFullYear();
                case 'h': return d.getHours() % 12 || 12;
                case 'hh': return zeroize(d.getHours() % 12 || 12);
                case 'H': return d.getHours();
                case 'HH': return zeroize(d.getHours());
                case 'm': return d.getMinutes();
                case 'mm': return zeroize(d.getMinutes());
                case 's': return d.getSeconds();
                case 'ss': return zeroize(d.getSeconds());
                case 'l': return zeroize(d.getMilliseconds(), 3);
                case 'L': var m = d.getMilliseconds();
                    if (m > 99) m = Math.round(m / 10);
                    return zeroize(m);
                case 'tt': return d.getHours() < 12 ? 'am' : 'pm';
                case 'TT': return d.getHours() < 12 ? 'AM' : 'PM';
                case 'Z': return d.toUTCString().match(/[A-Z]+$/);
                    // Return quoted strings with the surrounding quotes removed
                default: return $0.substr(1, $0.length - 2);
            }
        });
    };

    /** 
 * 比较两个日期的差距 
 * @param date1 Date类型的时间 
 * @param date2 Dete 类型的时间 
 * @param isFormat boolean 是否对得出的时间进行格式化,<br>  
 *       false:返回毫秒数，true：返回格式化后的数据 
 * @return 返回两个日期之间的毫秒数 或者是格式化后的结果 
 */
    Date.prototype.compareTo = function (date1, date2, isFormat) {
        try {
            var len = arguments.length;
            var tmpdate1 = new Date();
            var tmpdate2 = new Date();
            if (len == 1) {
                tmpdate1 = date1;
            } else if (len >= 2) {
                tmpdate1 = date1;
                tmpdate2 = date2;
            }
            if (!(tmpdate1 instanceof Date) || !(tmpdate2 instanceof Date)) {
                return 0;
            } else {
                var time1 = tmpdate1.getTime();
                var time2 = tmpdate2.getTime();
                var time = Math.max(time1, time2) - Math.min(time1, time2);
                if (!isNaN(time) && time > 0) {
                    if (isFormat) {
                        var date = new Date(time);
                        var result = {};
                        result['year'] = (date.getFullYear() - 1970) > 0 ? (date.getFullYear() - 1970) : '0';
                        result['month'] = (date.getMonth() - 1) > 0 ? (date.getMonth() - 1) : '0';
                        result['day'] = (date.getDate() - 1) > 0 ? (date.getDate() - 1) : '0';
                        result['hour'] = (date.getHours() - 8) > 0 ? (date.getHours() - 1) : '0';
                        result['minute'] = date.getMinutes() > 0 ? date.getMinutes() : '0';
                        result['second'] = date.getSeconds() > 0 ? date.getSeconds() : '0';
                        return result;
                    } else {
                        return time;
                    }
                } else {
                    return 0;
                }
            }
        } catch (e) {
            this.debug('比较时间出现异常' + e.message);
        }
    }

    //******************end******************end***********************end********************end*********************



    //****************************************************************************************************************

    //获取一个服务器Guid
    Nord.guid = function (a) {
        var count = a;
        if ("undefined" == typeof (count) || a < 1) count = 1;
        var data = Nord.post(Nord.url + "/NordNeige/Core/Web/HttpHandlers/BaseHandler/GetGuid", [count]).data;
        return count == 1 ? data[0] : data;
    }

    //****************************************************************************************************************

    //**********************************************基本数据校验******************************************************

    //验证不存在
    Nord.is_undefined = function (a) {
        return typeof (a) == "undefined";
    }

    //验证数字
    Nord.is_number = function (a) {
        return typeof (a) == "number";
    }

    //验证方法
    Nord.is_function = function (a) {
        return typeof (a) == "function";
    }

    //验证方法
    Nord.is_null = function (a) {
        return a == null;
    }

    //取文字长度区分中英文
    Nord.getStrLength = function getStrLength(str) {
        if (typeof (str) == 'undefined' || str == null) {
            return 0;
        }
        else if (typeof (str) != 'string') {
            return str.length;
        }
        var cArr = str.match(/[^\x00-\xff]/ig);
        return str.length + (cArr == null ? 0 : cArr.length);
    }

    //获取滚动条的宽度
    Nord.scrollWidth = function (a) {
        return document.getElementById(a).offsetWidth - document.getElementById(a).scrollWidth;
    }

    //**********************************end****************************end********************************************

    //****************************************************************************************************************

    Nord.types =
        {
            number: "number",
            string: "string",
            email: "email",
            tel: "tel",
            number8: "number8"
        };

    //************************************end*********************************End*************************************


    //************************************创建超级实体 nd 2014*******************************************************

    Nord.load = function load(a) {
        a.insert = function () {
            $nd.post("../../test/updown/Senddata", a, function (data) {
                alert(data.data);
            });
        };
        return a;
    }

    ///创建实体
    Nord.makeModel = function () {
        var data = {
            model: null,
            add: function (a) {
                this.model = a;
            },
            isOK: true,
            validate: function () {
                return this.isOK;
            },
            rule: {
                equel: function (a, b) {
                    if (a != b) this.isOK = false;
                    return a;
                },
                email: function (a) {
                    return a;
                }
            }
        };
        return data;
    }


    //******************end******************end***********************end********************end*********************

    //*********************************************Jquery伪造*********************************************************
    //ANGULAR
    Nord.$apply = function safeApply(scope, fn) {
        (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
    }
    //*******************end******************************end*********************************************************

    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, thisArg) {
            var T, k;
            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }
            var O = Object(this);
            var len = O.length >>> 0; // Hack to convert O.length to a UInt32  
            if ({}.toString.call(callback) != "[object Function]") {
                throw new TypeError(callback + " is not a function");
            }
            if (thisArg) {
                T = thisArg;
            }
            k = 0;
            while (k < len) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }

    //****************************************************************************************************************

    Nord.forEach = function (obj, iterator, context) {
        return angular.forEach(obj, iterator, context);// $.each(obj, iterator, context);
    }

    Nord.isWindow = function (obj) {
        return obj && obj.document && obj.location && obj.alert && obj.setInterval;
    }

    Nord.isArrayLike = function (obj) {
        if (obj == null || Nord.isWindow(obj)) {
            return false;
        }

        var length = obj.length;

        if (obj.nodeType === 1 && length) {
            return true;
        }

        return isString(obj) || Nord.isArray(obj) || length === 0 ||
               typeof length === 'number' && length > 0 && (length - 1) in obj;
    }

    Nord.isObject = function (value) { return value != null && typeof value === 'object'; }

    Nord.isString = function (value) { return typeof value === 'string'; }

    Nord.isNumber = function (value) { return typeof value === 'number'; }

    Nord.isDate = function (value) {
        return toString.call(value) === '[object Date]';
    }

    Nord.isFunction = function (value) { return typeof value === 'function'; }

    Nord.isArray = (function () {
        if (!Nord.isFunction(Array.isArray)) {
            return function (value) {
                return toString.call(value) === '[object Array]';
            };
        }
        return Array.isArray;
    })();

    Nord.isRegExp = function (value) {
        return toString.call(value) === '[object RegExp]';
    }

    Nord.isWindow = function (obj) {
        return obj && obj.document && obj.location && obj.alert && obj.setInterval;
    }

    Nord.isScope = function (obj) {
        return obj && obj.$evalAsync && obj.$watch;
    }


    Nord.isFile = function (obj) {
        return toString.call(obj) === '[object File]';
    }


    Nord.isBlob = function (obj) {
        return toString.call(obj) === '[object Blob]';
    }


    Nord.isBoolean = function (value) {
        return typeof value === 'boolean';
    }

    Nord.includes = function (array, obj) {
        return Nord.indexOf(array, obj) != -1;
    }

    Nord.indexOf = function (array, obj) {
        //if (array.indexOf) return array.indexOf(obj);

        for (var i = 0; i < array.length; i++) {
            if (obj === array[i]) return i;
        }
        return -1;
    }

    Nord.arrayRemove = function (array, value) {
        var index = Nord.indexOf(array, value);
        if (index >= 0)
            array.splice(index, 1);
        return value;
    }

    Nord.equals = function (o1, o2) {
        if (o1 === o2) return true;
        if (o1 === null || o2 === null) return false;
        if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
        var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
        if (t1 == t2) {
            if (t1 == 'object') {
                if (isArray(o1)) {
                    if (!isArray(o2)) return false;
                    if ((length = o1.length) == o2.length) {
                        for (key = 0; key < length; key++) {
                            if (!equals(o1[key], o2[key])) return false;
                        }
                        return true;
                    }
                } else if (isDate(o1)) {
                    return isDate(o2) && o1.getTime() == o2.getTime();
                } else if (isRegExp(o1) && isRegExp(o2)) {
                    return o1.toString() == o2.toString();
                } else {
                    if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2)) return false;
                    keySet = {};
                    for (key in o1) {
                        if (key.charAt(0) === '$' || isFunction(o1[key])) continue;
                        if (!equals(o1[key], o2[key])) return false;
                        keySet[key] = true;
                    }
                    for (key in o2) {
                        if (!keySet.hasOwnProperty(key) &&
                            key.charAt(0) !== '$' &&
                            o2[key] !== undefined &&
                            !isFunction(o2[key])) return false;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    String.prototype.Trim = function () { return this.replace(/(^\s*)|(\s*$)/g, ""); }
    String.prototype.LeftTrim = function () { }

    String.prototype.TrimStart = function (a) {
        if (typeof a == 'undefined') { a = ' '; }
        var value = this;
        while (value.startsWith(a)) {
            value = value.substring(value.IndexOf(a) + a.length, value.length);
        }
        return value;
    }

    String.prototype.TrimEnd = function (a) {
        if (typeof a == 'undefined') { a = ' '; }
        var value = this;
        while (value.endsWith(a)) {
            value = value.substring(0, value.lastIndexOf(a));
        }
        return value;
    }

    String.prototype.RightTrim = function () {

        return this.replace(/(\s*$)/g, "");
    }
    String.prototype.endsWith = function (suffix) { return (this.substr(this.length - suffix.length) === suffix); }
    String.prototype.startsWith = function (prefix) { return (this.substr(0, prefix.length) === prefix); }
    String.prototype.replaceAll = function (s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
    }


    String.prototype.trim = function () { return this.replace(/(^\s*)|(\s*$)/g, ""); }
    String.prototype.ltrim = function () { return this.replace(/(^\s*)/g, ""); }
    String.prototype.rtrim = function () { return this.replace(/(\s*$)/g, ""); }

    String.prototype.formatMoney = function (places, symbol, thousand, decimal) {
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        symbol = symbol !== undefined ? symbol : "";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var number = parseFloat(this),
            negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
    };
    Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        symbol = symbol !== undefined ? symbol : "";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var number = this,
            negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
    };

    String.prototype.format = function (args) {
        if (arguments.length > 0) {
            var result = this;
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
            else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] == undefined) {
                        return "";
                    }
                    else {
                        var reg = new RegExp("({[" + i + "]})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
            return result;
        }
        else {
            return this;
        }
    }

    if (!Array.prototype.find) {
        Array.prototype.find = function (predicate) {
            if (this === null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }

    Nord.getIEVersion = function () {
        var browser = navigator.appName
        var b_version = navigator.appVersion
        var version = b_version.split(";");
        var trim_Version = version[1].replace(/[ ]/g, "");
        if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
            return ("IE6");
        }
        else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
            return ("IE7");
        }
        else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
            return ("IE8");
        }
        else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
            return ("IE9");
        }
        return '';
    }


    Nord.stripscript = function (s) {
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）—|{}【】‘；：”“'。，、？]")
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
        return rs;
    }

    //数据迁移 不同数组
    Nord.moveTo = function (s1, t1, a) {
        t1.push(s1[a]); s1.splice(a, 1);
    }

    //xml
    Nord.loadXML = function (xmlString) {
        var xmlDoc = null;
        //判断浏览器的类型
        //支持IE浏览器 
        if (!window.DOMParser && window.ActiveXObject) {   //window.DOMParser 判断是否是非ie浏览器
            var xmlDomVersions = ['MSXML.2.DOMDocument.6.0', 'MSXML.2.DOMDocument.3.0', 'Microsoft.XMLDOM'];
            for (var i = 0; i < xmlDomVersions.length; i++) {
                try {
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    xmlDoc.async = false;
                    xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                    break;
                } catch (e) {
                }
            }
        }
            //支持Mozilla浏览器
        else if (window.DOMParser && document.implementation && document.implementation.createDocument) {
            try {
                /* DOMParser 对象解析 XML 文本并返回一个 XML Document 对象。
                 * 要使用 DOMParser，使用不带参数的构造函数来实例化它，然后调用其 parseFromString() 方法
                 * parseFromString(text, contentType) 参数text:要解析的 XML 标记 参数contentType文本的内容类型
                 * 可能是 "text/xml" 、"application/xml" 或 "application/xhtml+xml" 中的一个。注意，不支持 "text/html"。
                 */
                domParser = new DOMParser();
                xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
            } catch (e) {
            }
        }
        else {
            return null;
        }

        return xmlDoc;
    }

    //读取语言
    Nord.lang = function (a) {
        return lang[a];
    }

    //****************************模板相关*****************************************
    Nord.ndTemplate = function (tmpid, dta) {
        var tmpl = $('#' + tmpid).html();
        if (!dta) {
            return tmpl;
        }
        var format = {
            name: function (x) {
                return x
            }
        };
        return tmpl.replace(/<!--(\w+)-->/g, function (m1, m2) {
            if (!m2)
                return "";
            return (format && format[m2]) ? format[m2](dta[m2]) : (dta[m2] ? dta[m2] : '<!--' + m2 + '-->');
        });
    }

    //**************************************************************************************************************
    window.Nord = window.$nd = Nord;
})(window);

