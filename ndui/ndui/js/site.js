Array.prototype.remove = function (obj) {
    for (var i = 0; i < this.length; i++) {
        var temp = this[i];
        if (!isNaN(obj)) {
            temp = i;
        }
        if (temp == obj) {
            for (var j = i; j < this.length; j++) {
                this[j] = this[j + 1];
            }
            this.length = this.length - 1;
        }
    }
}

var app = {
    set: function () {

    }
};

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
             ? Math.ceil(from)
             : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

function totheme(a) {
    if (a) {
        $('body').css({ 'background-image': "url('" + $nd.url + "/cap/theme/" + a + ".jpg')" });
        $nd.setCookie('theme', a);
    }
}

$(function () {
    $(window).resize(function () {

        $('#menuApp').height($(window).height() - 50);
    });

    // totheme($nd.getCookie('theme'));

    $('#menuApp').height($(window).height() - 50);
});

var back = ['1551', '1585', '198219', '198266', '198577', '1990', '1994', '2147', '220265', '2342', '236'];

var showbak = 0;
var op = 1;
var tsop = true;
setInterval(function () {
    //totheme('1551');
    //if (op <= 0) {
    //$('body').css({ 'background-image': "url('http://localhost:23105/cap/theme/" + back[showbak] + ".jpg')" });
    //    tsop = true;
    //}

    if (op >= 1) {
        tsop = false;
    }

    showbak++;
    if (showbak >= back.length) {
        showbak = 0;
    }

    //$('body').css({ 'opacity': op });

    if (!tsop) {
        op = op - 0.1;
    } else {
        op = op + 0.1;
    }

}, 5000);

function loadingbegin() {
    $("#LoadingModal").modal('show');
}

function loadingend() {
    $("#LoadingModal").modal('hide');
}

String.prototype.GetExtension = function () {
    var filename = String(this);
    var position = filename.lastIndexOf(".") + 1;
    return filename.substring(position, filename.length);//后缀名  
}

if (typeof Array.prototype.reduce != "function") {
    Array.prototype.reduce = function (callback, initialValue) {
        var previous = initialValue, k = 0, length = this.length;
        if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
        }

        if (typeof callback === "function") {
            for (k; k < length; k++) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    }
}

// 带参数的模态窗口调用方法
function ShowDialog(url, height, width, refushOpener, postObj, winParams) {
    if (url.toString().indexOf("?") < 0)
        url = url + "?"
    else url = url + "&";
    url = url + "rnd=" + Math.random();
    var sFeatures = "dialogWidth=" + width + "px;dialogHeight=" + height + "px;";
    if (winParams != null) {
        if (winParams.dialogLeft != undefined)
            sFeatures += "dialogLeft:" + winParams.dialogLeft + ";";
        if (winParams.dialogTop != undefined)
            sFeatures += "dialogTop:" + winParams.dialogTop + ";";
        if (winParams.edge != undefined)
            sFeatures += "edge:" + winParams.edge + ";";
        if (winParams.center != undefined)
            sFeatures += "center:" + winParams.center + ";";
        if (winParams.dialogHide != undefined)
            sFeatures += "dialogHide:" + winParams.dialogHide + ";";
        if (winParams.help != undefined)
            sFeatures += "help:" + winParams.help + ";";
        if (winParams.resizable != undefined)
            sFeatures += "resizable:" + winParams.resizable + ";";
        if (winParams.scroll != undefined)
            sFeatures += "scroll:" + winParams.scroll + ";";
        if (winParams.status != undefined)
            sFeatures += "status:" + winParams.status + ";";
        if (winParams.unadorned != undefined)
            sFeatures += "unadorned:" + winParams.unadorned + ";";
    }
    /*sFeatures的各项可选参数:
    *dialogWidth:弹出窗口的宽度；
    *dialogHeight:弹出窗口的高度；
    *dialogLeft:弹出窗口的左边距
    *dialogTop:
    *edge:sunken | raised
    *center: yes|no|1|0|on|off
    *dialogHide: yes|no|1|0|on|off
    *help: yes|no|1|0|on|off
    *resizable: yes|no|1|0|on|off
    *scroll: yes|no|1|0|on|off
    *status: yes|no|1|0|on|off
    *unadorned: yes|no|1|0|on|off
    */
    var returnValue = window.showModalDialog(url, postObj, sFeatures);

    if (refushOpener) location.replace(location.href);
    return returnValue;
}