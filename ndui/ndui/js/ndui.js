//弹出层
$nd.ndmodal = function (name) {
    var model = {
        name: name,
        template: '',
        hasinit: false,
        title: name,
        showinclude: false,
        getheight: function () {
            return $(window).height() * 0.7;
        },
        getwidth: function () {
            if ($(window).width() > 800) {
                return 800;
            }
            else if ($(window).width() > 500) {
                return $(window).width() * 0.8;
            } else {
                return $(window).width();
            }
        },
        command: [],
        commandClick: function (i) {
            model.command[i].ngclick();
        },
        include: name + '_model',
        includename: name + '_model',
        isiframe: false,
        init: function () {

        },
        load: function () {

        },
        html: function () {

        },
        show: function () {
            if (!this.hasinit) {
                this.print();
            }
            $('#' + this.name + '_Modal').modal('show');
            //$('.modal-dialog').css('marginTop',$())
        },
        hide: function () {
            $('#' + this.name + '_Modal').modal('hide');
        },
        print: function () {
            model.init();
            if ($('#' + model.name).length == 0) {
                $("#myForm").append('<div id="' + model.name + '"></div>');
            }
            //$('#' + this.name).html(template('ndmodel', this));
            $('#' + model.name).html(template.compile(ndui['ndmodel'])(this));
            model.load();
            if (this.isiframe) {
                $('#' + this.name + '_iframe').attr('src', this.include);
            }
            this.hasinit = true;
        },
        bind: function (v) {
            for (var k in v) {
                if (k == 'height') {
                    if (typeof v.height == 'string' && v.height.indexOf('%') > -1) {
                        v.height = v.height.replace(/([0-9.]+)%/, function (a, b) { return +b / 100; });
                        this.getheight = function () { return $(window).height() * v.height; };
                    } else {
                        this.getheight = function () { return v.height; };
                    }
                }
                if (k == 'width') {
                    if (typeof v.width == 'string' && v.width.indexOf('%') > -1) {
                        v.width = v.width.replace(/([0-9.]+)%/, function (a, b) { return +b / 100; });
                        this.getwidth = function () { return $(window).width() * v.width; };
                    } else {
                        this.getwidth = function () { return v.width; };
                    }
                }
                if (k == 'include') {
                    if (v.include.indexOf('/') > -1 || v.include.indexOf('.') > 0 || v.include.indexOf(':') > 0) {
                        this.isiframe = true;
                    } else {
                        this.includename = v.include;
                    }
                }
                if (k == 'command') {
                    for (var i = 0; i < v.command.length; i++) {
                        v.command[i].model = function () { return window[name]; };
                    }
                }
                model[k] = v[k];
            }
            return model;
        }
    };
    window[name] = model;
    return model;
}
//控件集
$nd.expandcontrols = [];
//控件属性
$nd.ndcontrol = function (T, form) {
    var control = {
        validatetime: 0,//验证次数
        haserror: false,//是否有错误
        title: '',//Title信息
        tags: '',
        split: ',',
        placeholder: '',
        dbpath: '',
        label: '',
        condition: 'none',
        select: 'value',
        ndif: function () { return true; },
        disabled: false,
        validatedone: function () {
            this.val();
            if (!form.needvalidate) { return; }
            this.validatetime++;
            $nd.validatedone(this, form);
            for (var co = 0; co < $nd.expandcontrols.length; co++) {
                if (control.type == $nd.expandcontrols[co].name) {
                    $nd.expandcontrols[co].validatedone(control);
                    return;
                }
            }
            this.print();
        },
        elementEl: false,
        element: function () { return $('[ndid="' + this.ndid + '"]'); },
        html: function () {
            //return template(this.type, this);
            //return template.compile($('#' + this.type).html())(this);
            return template.compile(ndui[this.type])(this);
        },
        text: '',
        val: function (v) {
            if (typeof v != 'undefined') {
                this.value = v;
                this.print();
                return this.value;
            }

            //尚未初始化
            if ($('[ndid="' + this.ndid + '_box"]').length == 0) { return this.value; }
            for (var co = 0; co < $nd.expandcontrols.length; co++) {
                if (control.type == $nd.expandcontrols[co].name) {
                    $nd.expandcontrols[co].val(control);
                    return this.value;
                }
            }
            this.value = this.element().val();
            return this.value;
        },
        value: '',
        name: '',
        rows: 10,
        options: [],
        width: '100%',
        type: 'input',
        noprint: false,
        ndid: form.name + '_',
        cname: '',
        form: function () { return form; },
        print: function () {
            this.init();
            if (!this.noprint) {
                $('[ndid="' + this.ndid + '_box"]').parent().html(this.html());
            }
            this.load();
        },
        onchange: function () { },
        init: function (v) {
            if (typeof (control.value) == undefined || control.value == null) { control.value = ''; }
            for (var co = 0; co < $nd.expandcontrols.length; co++) {
                if (control.type == $nd.expandcontrols[co].name) {
                    $nd.expandcontrols[co].init(control);
                    return;
                }
            }
        },
        load: function () {
            for (var co = 0; co < $nd.expandcontrols.length; co++) {
                if (control.type == $nd.expandcontrols[co].name) {
                    $nd.expandcontrols[co].load(control);
                    return;
                }
            }
            this.element().bind('change', function (a) {
                control.elementEl = this;
                control.validatedone();
                control.onchange();
            });
        },
        error: '不能为空！'
    };
    for (var s in T) {
        control[s] = T[s];
    }
    control.ndid = control.ndid + control.name;
    if (!T.title) { control.title = control.text; }
    return control;
};
//扩展控件
$nd.ndcontrol.expand = function (a) {
    if (typeof a.init == 'undefined') { a.init = function (control) { } };
    if (typeof a.getform == 'undefined') { a.getform = function (control, model) { } };

    if (typeof a.val == 'undefined') {
        a.val = function (control) {
            control.value = control.element().val();
            return control.value;
        }
    };
    if (typeof a.load == 'undefined') {
        a.load = function (control) {
            control.element().bind('change', function (a) {
                control.elementEl = control;
                control.validatedone();
                control.onchange();
            });
        }
    };
    if (typeof a.validatedone == 'undefined') { a.validatedone = function (control) { control.print(); } };
    $nd.expandcontrols.forEach(function (obj) {
        if (obj.name == a.name) {
            obj = a;
            return;
        }
    });
    $nd.expandcontrols.push(a);
}
//获取表单
$nd.getform = function (v, model) {
    model[v.name] = v.val();
    $nd.expandcontrols.forEach(function (obj) {
        if (v.type == obj.name) {
            obj.getform(v, model);
            return;
        }
    });
    if (typeof v.labelName != 'undefined' && typeof v.label != 'undefined') {
        model[v.labelName] = v.label == undefined ? '' : v.label;
    }

    if (typeof v.modelName1 != 'undefined' && typeof v.model != 'undefined') {
        model[v.modelName1] = v.model[v.modelName1] == undefined ? '' : v.model[v.modelName1];
    }

    if (typeof v.modelName2 != 'undefined' && typeof v.model != 'undefined') {
        model[v.modelName2] = v.model[v.modelName2] == undefined ? '' : v.model[v.modelName2];
    }

    if (typeof v.modelName3 != 'undefined' && typeof v.model != 'undefined') {
        model[v.modelName3] = v.model[v.modelName3] == undefined ? '' : v.model[v.modelName3];
    }

    if (typeof v.modelName4 != 'undefined' && typeof v.model != 'undefined') {
        model[v.modelName4] = v.model[v.modelName4] == undefined ? '' : v.model[v.modelName4];
    }

    if (typeof v.modelName5 != 'undefined' && typeof v.model != 'undefined') {
        model[v.modelName5] = v.model[v.modelName5] == undefined ? '' : v.model[v.modelName5];
    }

    return model;
}
//表单
$nd.ndform = function (name) {
    window[name] = undefined;
    var form = {
        name: name,
        nopanel: false,
        needvalidate: true,
        template: 'panel',
        data: [],
        hiddata: [],
        isonerow: false,
        validate: false,
        bind: function (v) { for (var k in v) { form[k] = v[k]; } return form; },
        //设置表单数据，及隐藏数据
        setdata: function (data, hiddata) {
            data.forEach(function (v) {
                if (typeof v.lsws == 'undefined' && typeof v.rsws == 'undefined' && typeof v.type != 'undefined' && typeof v.name != 'undefined') {
                    v.lsws = v;
                }
                if (v.lsws) { v.lsws = form.valuebind(v.lsws); v.lsws.tags = 'lsws'; v.lsws.init(v.lsws); }
                if (v.rsws) { v.rsws = form.valuebind(v.rsws); v.rsws.tags = 'rsws'; v.rsws.init(v.rsws); }
            });
            form.data = data;
            if (hiddata) {
                hiddata.forEach(function (v) {
                    v.ndid = form.name + '_' + v.name;
                    v.tags = 'hids';
                    v.val = function (s) {
                        if (typeof s != 'undefined') {
                            $('[ndid="' + this.ndid + '"]').val(s);
                        }
                        return $('[ndid="' + this.ndid + '"]').val();
                    };
                    v.validatedone = function () {
                        this.val();
                        $nd.validatedone(this, form);
                    };
                });
                form.hiddata = hiddata;
            }
            return form;
        },
        //根据字段名称获取对应对象
        getform: function (name) {
            if (typeof name != 'undefined') {
                var d = null;
                form.data.forEach(function (v) {
                    if (v.lsws) {
                        if (v.lsws.name == name) {
                            d = v.lsws;
                        }
                    }
                    if (v.rsws) {
                        if (v.rsws.name == name) {
                            d = v.rsws;
                        }
                    }
                });
                form.hiddata.forEach(function (v) {
                    { if (v.name == name) d = v; }
                });
                return d;
            }
            return form.data;
        },
        getdata: function () {
            form.validate = true;
            var Model = {};
            form.data.forEach(function (v) {
                if (v.lsws) {
                    Model = $nd.getform(v.lsws, Model);
                    if (form.needvalidate) { v.lsws.validatedone(); }

                }
                if (v.rsws) {
                    Model = $nd.getform(v.rsws, Model);
                    if (form.needvalidate) { v.rsws.validatedone(); }
                }
            });
            form.hiddata.forEach(function (v) {
                Model[v.name] = v.val();
                if (form.needvalidate) { v.validatedone(); }
            });
            return Model;
        },
        valuebind: function (T) {
            return $nd.ndcontrol(T, form);
        },
        print: function () {
            if ($(window).width() < 500) {
                form.isonerow = true;
            }
            if ($('#' + this.name).length == 0) {
                $("#myForm").append('<div id="' + this.name + '"></div>');
            }
            //$('#' + this.name).html(template(this.template, this));
            var render = template.compile(ndui[this.template]);
            $('#' + form.name).html(render(form));

            $('#' + form.name + '_ph').click(function () {
                if ($(form).hasClass('glyphicon-collapse-up')) {
                    $(form).addClass("glyphicon-collapse-down");
                    $(form).removeClass("glyphicon-collapse-up");
                    $(form).html('&nbsp;' + $nd_lang.openorclose);
                    $('#' + name + '_pb').hide();
                } else {
                    $(form).removeClass("glyphicon-collapse-down");
                    $(form).addClass("glyphicon-collapse-up");
                    $(form).html('&nbsp;' + $nd_lang.openorclose);
                    $('#' + name + '_pb').show();
                }
            });

            form.data.forEach(function (v) {
                if (v.lsws) { v.lsws.load(); }
                if (v.rsws) { v.rsws.load(); }
            });
        }
    }
    window[name] = form;
    return form;
}
//表格
$nd.ndgrid = function (name, api) {
    var grid = {
        name: name,
        columns: [],//绑定列信息
        command: [],//绑定行命令
        lang: window.$nd_lang,//加载语言包
        toolbar: [],
        height: 200,
        template: 'ndgrid',//模板
        multiped: true,//是否多选
        showcheckbox: false,//是否显示复选
        showrownumber: true,//是否显示行号
        showfooter: true,//是否显示分页
        showtoolbar: true,//是否显示toolbar
        showsearch: true,//是否显示查询条件
        showmoresearch: false,//是否显示更多查询条件
        autoheight: true,//是否自动高度
        expanded: false,//是否扩展数据
        rowSelected: false,//是否行点击
        selectedRow: false,//选中行数据
        commandinleft: true,//靠左显示行命令
        dosorting: true,//是否排序
        colspancount: 0,
        searchdata: [],
        needvalidate: false,
        data: [],
        checkeddata: [],//选中数据
        pagepaper: 10,
        pages: [],
        //显示行数列表
        options: [{ value: 10, text: 10 }, { value: 20, text: 20 }, { value: 50, text: 50 }, { value: 100, text: 100 }],
        //查询条件
        search: {
            page: 0,//当前页
            pageItems: 0,//数据条目
            pageSize: 20,//分页大小
            sort: '',//排序字段
            sortasc: '',//排序方式
            data: {}//其它条件
        },
        api: api,
        setpagecount: function (a) {
            grid.search.pageSize = $(a).val();
            grid.queryClick();
        },
        searchset: function (i, t) {
            if (t == 'more') {
                grid.searchdatamore[i].position = (grid.searchdatamore[i].position == 'default' ? 'more' : 'default');
            } else {
                grid.searchdatadefault[i].position = (grid.searchdatadefault[i].position == 'default' ? 'more' : 'default');
            }

            grid.searchdata = grid.searchdatadefault;
            grid.searchdatamore.forEach(function (a) { grid.searchdata.push(a); });
            grid.showserachEidte();
            grid.hasprint = false;
            grid.print();
        },
        sortsearchwithbox: function (index, a, items) {
            $('#' + a).sortable({
                items: items,
                containment: 'parent',
                stop: function (event, ui) {
                    $('#' + a).sortable('destroy');
                    var $this = ui.item.index();
                    var newarr = [];
                    if ($this < 0) { newarr.push(grid.searchdatamore[index]); }
                    if ($this === index) { return; }
                    for (var cc = 0; cc < grid.searchdatamore.length; cc++) {
                        if (cc === index) { continue; }
                        if ($this < index && cc === $this) { newarr.push(grid.searchdatamore[index]); }
                        if ($this > index && cc === ($this + 1)) { newarr.push(grid.searchdatamore[index]); }
                        newarr.push(grid.searchdatamore[cc]);
                    }
                    grid.searchdatamore = newarr;
                    grid.searchdata = grid.searchdatamore;
                    grid.searchdatamore.forEach(function (a) { grid.searchdata.push(a); });
                    grid.showserachEidte();
                    grid.hasprint = false;
                    grid.print();
                }
            });
        },
        sortsearchwith: function (index, a, items) {
            $('#' + a).sortable({
                items: items,
                containment: 'parent',
                stop: function (event, ui) {
                    $('#' + a).sortable('destroy');
                    var $this = ui.item.index();
                    var newarr = [];
                    if ($this < 0) { newarr.push(grid.searchdatadefault[index]); }
                    if ($this === index) { return; }
                    for (var cc = 0; cc < grid.searchdatadefault.length; cc++) {
                        if (cc === index) { continue; }
                        if ($this < index && cc === $this) { newarr.push(grid.searchdatadefault[index]); }
                        if ($this > index && cc === ($this + 1)) { newarr.push(grid.searchdatadefault[index]); }
                        newarr.push(grid.searchdatadefault[cc]);
                    }
                    grid.searchdatadefault = newarr;
                    grid.searchdata = grid.searchdatadefault;
                    grid.searchdatamore.forEach(function (a) { grid.searchdata.push(a); });
                    grid.showserachEidte();
                    grid.hasprint = false;
                    grid.print();
                }
            });
        },
        searchhasmore: function () {
            return grid.searchdata.find(function (obj) { return obj.position == 'more' });
        },
        //刷新
        refresh: function () {
            grid.checkeddata = [];
            grid.queryClick(); return grid;
        },
        bindsearch: function (s1, s2) {
            grid.searchdata = [];
            if (s1) {
                s1.forEach(function (s) {
                    s.position = 'default';
                    s.cname = typeof s.cname == 'undefined' ? '' : s.cname;
                    s = $nd.ndcontrol(s, grid);
                    s.init();
                    grid.searchdata.push(s);
                });
            }
            if (s2) {
                s2.forEach(function (s) {
                    s.cname = typeof s.cname == 'undefined' ? '' : s.cname;
                    s.position = 'more';
                    s = $nd.ndcontrol(s, grid);
                    s.init();
                    grid.searchdata.push(s);
                });
            }
            return grid;
        },
        //导出
        excel: function (url, data, name) {
            $("#LoadingModal").modal('show');
            var search = grid.search;
            if (data) {
                for (var d in data) {
                    search.data[d] = data[d]
                }
            }
            $nd.dogridexcel(api, name, grid.search, function (r) {
                if (r.success) { window.open($nd.url + "/temp/" + r.data + "/" + url + "?ndfile=true"); } else { alert(r.message); }
                $("#LoadingModal").modal('hide');
            });
        },
        searchbtnclick: function (a) {
            if ($(a).hasClass('btn-warning')) {
                $('[ndid="' + this.name + '_search_more"]').css('display', 'none');
                $(a).removeClass('btn-warning');
            } else {
                $('[ndid="' + this.name + '_search_more"]').css('display', 'inline-block');
                $(a).addClass('btn-warning');
            }
        },
        showserachEidte: function () {
            $nd.ndmodal(grid.name + 'DSerachED').bind({
                title: $nd_lang.conditioneditor,
                load: function () {
                    grid.searchdatamore = [];
                    grid.searchdatadefault = [];
                    grid.searchdata.forEach(function (a) {
                        if (a.position == 'default') {
                            grid.searchdatadefault.push(a);
                        }
                        else {
                            grid.searchdatamore.push(a);
                        }
                    });
                    var Data = { name: grid.name, lang: window.$nd_lang, searchdatamore: grid.searchdatamore, searchdatadefault: grid.searchdatadefault };
                    //$('#' + this.includename).html(template('ndgirdsed', Data));
                    $('#' + this.includename).html(template.compile(ndui['ndgirdsed'])(Data));
                },
                command: [{ cmd: $nd_lang.sure, ngclick: function () { window[grid.name + 'DSerachED'].hide(); } }]
            }).show();
        },
        sortingClick: function (i) {
            grid.columns.forEach(function (c) {
                if (c.name != grid.columns[i].name) {
                    c.sorting = '';
                }
            });
            if (grid.columns[i].sorting != 'sorting_asc') {
                grid.columns[i].sorting = 'sorting_asc';
                grid.search.sortasc = 'asc';
            } else {
                grid.columns[i].sorting = 'sorting_desc';
                grid.search.sortasc = 'desc';
            }
            grid.search.sort = grid.columns[i].name;
            grid.refresh();
        },
        columnsvisbleClick: function (i) {
            this.columns[i].visble = !this.columns[i].visble;
            this.saveuserconfig();
        },
        checkedClick: function (a, num) {
            $('#' + name).find('tr').removeClass('rowselect');
            if (!this.multiped) {
                $('#' + name).find('[ndname="' + this.name + '_checkbox"]').removeAttr("checked");
                $(a).attr("checked", "checked");
                this.checkeddata = a.checked ? [grid.rows[num].data] : [];
                return;
            } else {
                if (a.checked) {
                    this.checkeddata.push(grid.rows[num].data);
                } else {
                    this.checkeddata.remove(grid.rows[num].data);
                }
            }
        },
        clicktime: new Date(),
        //行点击
        rowClick: function (a, index) {
            var now = new Date();
            if (this.rowSelected) {
                if ($(a).hasClass('rowselect') && (now - grid.clicktime) < 300) {
                    grid.dblclick(grid.rows[index].data);
                }
                $('#' + name).find('tr').removeClass('rowselect');
                $(a).addClass('rowselect');
                grid.selectedRow = grid.rows[index].data;
            }
            grid.clicktime = now;
        },
        //行双击
        dblclick: function (v) { },
        checkedAll: function (a) {
            if (a.checked) {
                var checkboxs = $('#' + name + '_body').find('[ndname="' + this.name + '_checkbox"]');
                for (var k = 0; k < checkboxs.length; k++) {
                    checkboxs[k].checked = true;
                }
                this.checkeddata = [];
                for (var si = 0; si < grid.rows.length;si++){
                    this.checkeddata.push(grid.rows[si].data);
                }
            } else {
                $('#' + name + '_body').find('[ndmame="' + this.name + '_checkbox"]').removeAttr("checked");
                this.checkeddata = [];
            }
        },
        sortcolumns: function (index, a, items) {
            $('#' + a).sortable({
                items: items,
                containment: 'parent',
                stop: function (event, ui) {
                    $('#' + a).sortable('destroy');
                    var $this = ui.item.index();
                    var newarr = [];
                    if ($this < 0) { newarr.push(grid.columns[index]); }
                    if ($this === index) { return; }
                    for (var cc = 0; cc < grid.columns.length; cc++) {
                        if (cc === index) { continue; }
                        if ($this < index && cc === $this) { newarr.push(grid.columns[index]); }
                        if ($this > index && cc === ($this + 1)) { newarr.push(grid.columns[index]); }
                        newarr.push(grid.columns[cc]);
                    }
                    grid.columns = newarr;
                    grid.saveuserconfig();
                }
            });
        },
        toolbarClick: function (i) {
            if (!grid.toolbar[i].disabled()) {
                grid.toolbar[i].ngclick();
            }
        },
        commandClick: function (i, r) {
            if (!grid.command[i].disabled(r)) {
                $('#' + name).find('tr').removeClass('rowselect');
                grid.command[i].ngclick(grid.rows[r].data);
            }
        },
        //保存用户配置
        saveuserconfig: function () { this.print(); },
        //获取查询条件
        getsearch: function (name) {
            var sd;
            grid.searchdata.forEach(function (s) {
                if (s.name == name) {
                    sd = s;
                }
                grid.search.data = $nd.getform(s, grid.search.data);
            });
            if (name) { return sd; } else { return grid.search.data; }
        },
        rows: [],
        //行绑定
        rowbinding: function (r, index) {

        },
        //设置数据
        setdata: function (vdata) {
            grid.rows = [];
            grid.data = vdata.data;
            for (var i = 0; i < grid.data.length; i++) {
                grid.rows.push({
                    data: grid.data[i],
                    selected: false,
                    num: i,
                    style: '',
                    checkbox: {
                        ndid: name + '_row_checkbox_' + i,
                        name: name + '_checkbox',
                        disabled: false,
                        visble: true
                    },
                    id: name + '_row_' + i
                });
                grid.rowbinding(grid.data[i], i);
            }
            grid.search.pageItems = vdata.count;//总条目
            grid.sum = vdata.sum;//合计
            //计算分页
            grid.getpages();
        },
        //查询方法
        queryClick: function (num) {
            if (typeof num == 'number') {
                if (num > (grid.search.pageCount - 1)) { num = grid.search.pageCount - 1; }
                if (num < 0) num = 0; grid.search.page = num;
            }
            grid.gridBingData(num, grid.api);
        },
        //数据绑定
        gridBingData: function (num) {
            $("#LoadingModal").modal('show');
            grid.getsearch();
            if (typeof grid.api != 'undefined' && grid.api != null && grid.api != '') {
                $nd.gridbind(grid.api, grid.search, function (r) {
                    if (r.success) {
                        //触发数据绑定事件
                        grid.setdata({ data: r.data.data, sum: r.data.sum, count: r.data.count });
                        $("#LoadingModal").modal('hide');
                    } else {
                        alert(r.message);
                        $("#LoadingModal").modal('hide');
                    }
                    grid.print();
                });
            } else {
                grid.print();
            }
        },
        //计算分页
        getpages: function () {
            grid.search.pageCount = Math.ceil(grid.search.pageItems / grid.search.pageSize);//总页数
            var starindex = grid.search.page;
            if (grid.search.page > grid.pages[0].pnumber & grid.search.page < grid.pages[grid.pagepaper - 1].pnumber) {
                starindex = grid.pages[0].pnumber;
                if (grid.search.page > grid.pages[Math.floor(grid.pagepaper / 2) + 1].pnumber) {
                    starindex = grid.pages[0].pnumber + Math.floor(grid.pagepaper / 2);
                    if (starindex + grid.pages.length > grid.search.pageCount) { starindex = grid.pages[0].pnumber; }
                } else if (grid.search.page < grid.pages[3].pnumber) {
                    starindex = grid.pages[0].pnumber - Math.floor(grid.pagepaper / 2);
                    if (starindex <= 0) { starindex = grid.pages[0].pnumber; }
                }
            } else {
                if (grid.search.page + grid.pages.length > grid.search.pageCount) { starindex = grid.search.pageCount - 1; }
                if (starindex <= 0) { starindex = 0; }
                starindex = parseInt(starindex / grid.pagepaper) * grid.pagepaper;
                if (starindex > grid.search.page) {
                    starindex = starindex - grid.pagepaper;
                }
            }
            grid.search.page2 = grid.search.page + 1;
            grid.pages = [];
            for (var i = starindex; i < starindex + grid.pagepaper; i++) {
                var disable = i >= grid.search.pageCount ? true : false;
                grid.pages.push({ pnumber: i, disabled: disable });
            }
        },
        rowincluded: function (a, i) { includehtml(i, ''); },
        //包含子页面 tree
        includehtml: function (i, html) {
            if (html == '') { html = '&nbsp;'; }
            $('[ndid="' + this.name + '_included_' + i + '"]').children('td').html(html);
        },
        //获取高度
        getheight: function () {
            if (this.autoheight) {
                $('#' + this.name + '_body').height($(window).height() - $('#' + this.name + '_search').height() - 140);
                $(window).resize(function () {
                    $('#' + grid.name + '_body').height($(window).height() - $('#' + grid.name + '_search').height() - 140);
                    if ($(window).width() < 700) {
                        $('[ndid="' + grid.name + '_pagenum"]').hide();
                    } else {
                        $('[ndid="' + grid.name + '_pagenum"]').show();
                    }
                });
            } else { $('#' + this.name + '_body').height(this.height); }
            if ($(window).width() < 700) {
                $('[ndid="' + grid.name + '_pagenum"]').hide();
            } else {
                $('[ndid="' + grid.name + '_pagenum"]').show();
            }
        },
        //是否已经打印
        hasprint: false,
        showincludedbox: function (a, i) {
            if ($(a).hasClass('glyphicon-triangle-bottom')) {
                $(a).removeClass('glyphicon-triangle-bottom');
                $(a).addClass('glyphicon-triangle-right');
                $('[ndid="' + this.name + '_included_' + i + '"]').hide();
            } else {
                $(a).hasClass('glyphicon-triangle-right');
                $(a).addClass('glyphicon-triangle-bottom');
                $('[ndid="' + this.name + '_included_' + i + '"]').show();
                if ($('[ndid="' + this.name + '_included_' + i + '"]').children('td').html() == '') {
                    $('[ndid="' + this.name + '_included_' + i + '"]').children('td').html('数据加载中。。。');
                    grid.rowincluded(grid.rows[i].data, i);
                }
            }
        },
        //打印到浏览器表单
        print: function () {
            grid.colspancount = 0;
            if (grid.showcheckbox) { grid.colspancount++; }
            if (grid.showrownumber) { grid.colspancount++; }
            if (grid.showincluded) { grid.colspancount++; }

            if (grid.command.length > 0) { grid.colspancount++; }
            grid.columns.forEach(function (c) {
                if (c.visble) { grid.colspancount++; }
            });
            if (!this.hasprint) {
                if ($('#' + this.name).length == 0) {
                    $("#myForm").append('<div id="' + this.name + '"></div>');
                }

                //$('#' + this.name).html(template(this.template, this));
                $('#' + this.name).html(template.compile(ndui[grid.template])(this));

                grid.searchdata.forEach(function (v) {
                    v.load();
                });

                //$('#' + this.name + '_grid').html(template('ndgrid_grid', this));
                $('#' + this.name + '_grid').html(template.compile(ndui['ndgrid_grid'])(this));

                $('#' + this.name + '_ph').click(function () {
                    if ($(this).hasClass('glyphicon-collapse-up')) {
                        $(this).addClass("glyphicon-collapse-down");
                        $(this).removeClass("glyphicon-collapse-up");
                        $(this).html('&nbsp;' + $nd_lang.openorclose);
                        $('#' + name + '_searchbox').hide();
                        grid.getheight();
                    } else {
                        $(this).removeClass("glyphicon-collapse-down");
                        $(this).addClass("glyphicon-collapse-up");
                        $(this).html('&nbsp;' + $nd_lang.openorclose);
                        $('#' + name + '_searchbox').show();
                        grid.getheight();
                    }
                });
                this.hasprint = true;
            } else {
                // $('#' + this.name + '_grid').html(template('ndgrid_grid', this));
                $('#' + this.name + '_grid').html(template.compile(ndui['ndgrid_grid'])(this));
            }
            if (grid.showsearch) {
                $('#' + this.name + '_search').show();
            } else {
                $('#' + this.name + '_search').hide();
            }
            grid.getheight();
            grid.load();
        },
        showInfo: function (i, j) {
            $('#' + name).find('tr').removeClass('rowselect');
            $nd.ndmodal(grid.name + 'DInfo').bind({
                width: '50%',
                height: '240',
                title: $nd_lang.detailedcontent,
                load: function () {
                    var html = '<div style="padding:10px;min-height:50px;max-height:240px;overflow-y:scroll">' +grid.rows[i].data[grid.columns[j].name] + '</div>';
                    $('#' + this.includename).html(html);
                },
                command: [{ cmd: $nd_lang.sure, ngclick: function () { window[grid.name + 'DInfo'].hide(); } }]
            }).show();
        },
        showView: function ($r) {
            $('#' + name).find('tr').removeClass('rowselect');
            $nd.ndmodal('View').bind({
                include: grid.name + '_showdata',
                title: $nd_lang.detailedcontent,
                load: function () {
                    var $t = [];
                    for (var i = 0; i < grid.columns.length; i++) {
                        for (var c in $r) {
                            var title = c;
                            var value = $r[c];
                            if (grid.columns[i].name == c) {
                                title = grid.columns[i].text;
                                value = $r[c];//grid.columns[i].bountdata(r[c]);
                                $t.push({ label: title, text: value });
                                break;
                            }
                        }
                    }
                    //$('#showdata').html(template('tableview', { data: t }));
                    $('#' + grid.name + '_showdata').html(template.compile(ndui['tableview'])({ data: $t }));
                },
                command: [{ cmd: $nd_lang.sure, ngclick: function () { View.hide(); } }]
            }).show();
        },
        //加载后执行
        load: function () {
            if (grid.expanded) {
                for (var i = 0; i < grid.rows.length; i++) {
                    grid.rowincluded(grid.rows[i].data, i);
                }
            }
        },
        getndgridtable: function (t) {
            if (t == 'b') {
                return template.compile(ndui['ndgridtable'])(grid);
            } else {
                return template.compile(ndui['ndgridtable'])(grid).replaceAll(" id=", " gid=");
            }
        },
        //绑定配置信息
        bind: function (v) {
            for (var k in v) {
                if (k == "columns") {
                    v.columns.forEach(function (v) {
                        if (typeof v.align == 'undefined') {
                            v.align = "left";
                        }
                        if (typeof v.showlength == 'undefined') {
                            v.showlength = 30;
                        }
                        if (typeof v.bountdata == 'undefined') {
                            v.bountdata = function (r, i) {
                                if (r == undefined && r == null) {
                                    r = '';
                                }
                                return r.toString().substring(0, v.showlength);
                            };
                        }
                    });
                }
                else if (k == "toolbar") {
                    v.toolbar.forEach(function (v) {
                        if (typeof v.ndif == 'undefined') {
                            v.ndif = function () { return true };
                        }
                        if (typeof v.disabled == 'undefined') {
                            v.disabled = function () { return false };
                        }
                    });
                }
                else if (k == "command") {
                    v.command.forEach(function (v) {
                        if (typeof v.ndif == 'undefined') {
                            v.ndif = function () { return true };
                        }
                        if (typeof v.disabled == 'undefined') {
                            v.disabled = function () { return false };
                        }
                        if (typeof v.title == 'undefined') {
                            v.title = v.cmd;
                        }
                    });
                }
                else if (k == "searchdatadefault") {
                    v.searchdatadefault.forEach(function (s) {
                        s.position = 'default';
                        s.cname = typeof s.cname == 'undefined' ? '' : s.cname;
                        s = $nd.ndcontrol(s, grid);
                        s.init();
                        grid.searchdata.push(s);
                    });
                }
                else if (k == "searchdatamore") {
                    v.searchdatamore.forEach(function (s) {
                        s.cname = typeof s.cname == 'undefined' ? '' : s.cname;
                        s.position = 'more';
                        s = $nd.ndcontrol(s, grid);
                        s.init();
                        grid.searchdata.push(s);
                    });
                }

                grid[k] = v[k];
            }

            for (var i = 0; i < grid.pagepaper; i++) { grid.pages.push({ pnumber: i, disabled: true }); }
            return grid;
        },
        //删除数据
        Delete: function (r, fun) {
            $nd.griddel(api, r, function (rd) {
                if (rd.success) {
                    alert($nd_lang.delok, rd.message);
                    grid.queryClick();
                    if (fun) {
                        if (typeof (fun) == "function") {
                            fun.call(this, rd);
                        };
                    }
                }
                else {
                    alert($nd_lang.delfailure, rd.message);
                }
            });
            return grid;
        },
        //插入数据
        Add: function (r, fun) {
            $nd.gridadd(api, r, function (rd) {
                if (rd.success) {
                    alert($nd_lang.addok, rd.message);
                    grid.queryClick(0);
                    if (fun) {
                        if (typeof (fun) == "function") {
                            fun.call(this, rd);
                        };
                    }
                }
                else {
                    alert($nd_lang.oprationfailure + rd.message);
                }

            });
            return grid;
        },
        //更新数据
        Update: function (r, fun) {
            $nd.gridupdata(api, r, function (rd) {
                if (rd.success) {
                    alert($nd_lang.updatecomplate, rd.message);
                    grid.queryClick(grid.search.page);
                    if (fun) {
                        if (typeof (fun) == "function") {
                            fun.call(this, rd);
                        };
                    }
                }
                else {
                    alert($nd_lang.oprationfailure + rd.message);
                }

            });
            return grid;
        },
        //执行自定义函数 m=api r=参数 myapi ='远程服务器'
        DoSql: function (m, r, fun) {
            $nd.griddosql(m, api, r, function (rd) {
                if (rd.success) {
                    if (fun) {
                        if (typeof (fun) == "function") {
                            fun.call(this, rd);
                        };
                    }
                    else {
                        alert($nd_lang.updatecomplate + rd.message)
                    };
                }
                else {
                    alert($nd_lang.oprationfailure + rd.message);
                }

            });
            return grid;
        },
        //批处理
        BatchDoSql: function (cname, sdata) {
            if (grid.checkeddata.length == 0) { alert($nd_lang.noselect); return; }
            $("#LoadingModal").modal('show');
            grid.Batchsum = grid.checkeddata.length;
            grid.Batcherror = [];
            for (var i = 0; i < grid.checkeddata.length; i++) {
                var r = grid.checkeddata[i];
                for (var c in sdata) { r[c] = sdata[c]; }
                grid.DoSql(cname, r, function (r) {
                    grid.Batchsum = grid.Batchsum - 1;
                    if (r.success) {
                        if (grid.Batchsum == 0) {
                            $("#LoadingModal").modal('hide');
                            if (grid.Batcherror.length == 0) { alert($nd_lang.handercomplate); } else { alert($nd_lang.somedataerror); }
                            grid.Batcherror.checkall = false;
                            grid.refresh();
                        }
                    } else {
                        grid.Batcherror.push(grid.checkeddata[i]);
                    }
                });
            }
        }
    };
    window[name] = grid;
    return grid;
}

//rangetime
$nd.ndcontrol.expand({
    name: 'rangetime',
    load: function (control) {
        $('[ndid="' + control.ndid + '_datebox1"]').datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            //pickerPosition: scope.bindmodel.pickerPosition,
            startView: 2,
            minView: 2,
            forceParse: 0
        }).on('changeDate', function (ev) {
            var d = ev.date ? ev.date.Format('yyyy-MM-dd') : '';
            if (control.value1 != d) {
                control.value1 = d;
                control.value = control.value1 + control.split + control.value2;
                if (control.value1 == '' && control.value2 == '') {
                    control.value = '';
                }
                control.validatedone();
                control.onchange();
            }
        });
        $('[ndid="' + control.ndid + '_datebox2"]').datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            //pickerPosition: scope.bindmodel.pickerPosition,
            startView: 2,
            minView: 2,
            forceParse: 0
        }).on('changeDate', function (ev) {
            var d = ev.date ? ev.date.Format('yyyy-MM-dd') : '';
            if (control.value2 != d) {
                control.value2 = d;
                control.value = control.value1 + control.split + control.value2;
                if (control.value1 == '' && control.value2 == '') {
                    control.value = '';
                }
                control.validatedone();
                control.onchange();
            }
        });
    },
    val: function (control) {
        control.value1 = $('[ndid="' + control.ndid + '_start"]').val();
        control.value2 = $('[ndid="' + control.ndid + '_end"]').val();
        control.value = control.value1 + 'to' + control.value2;
        if (control.value1 == '' && control.value2 == '') {
            control.value = '';
        }
    },
    getform: function (control, model) {
        if (typeof control.valueName1 != 'undefined') {
            model[control.valueName1] = control.value1 == undefined ? '' : control.value1;
        }
        if (typeof control.valueName2 != 'undefined') {
            model[control.valueName2] = control.value2 == undefined ? '' : control.value2;
        }
    }
});

//rangenumber
$nd.ndcontrol.expand({
    name: 'rangenumber',
    val: function (control) {
        control.value1 = $('[ndid="' + control.ndid + '_start"]').val();
        control.value2 = $('[ndid="' + control.ndid + '_end"]').val();
        control.value = control.value1 + control.split + control.value2;
        if (control.value1 == '' && control.value2 == '') {
            control.value = '';
        }
    },
    getform: function (control, model) {
        if (typeof control.valueName1 != 'undefined') {
            model[control.valueName1] = control.value1 == undefined ? '' : control.value1;
        }
        if (typeof control.valueName2 != 'undefined') {
            model[control.valueName2] = control.value2 == undefined ? '' : control.value2;
        }
    }
});

//rangemoney
$nd.ndcontrol.expand({
    name: 'rangemoney',
    init: function (control) {
        if (typeof (control.value1) == undefined || control.value1 == null) {
            control.value1 = '';
        }
        if (typeof (control.value2) == undefined || control.value2 == null) {
            control.value2 = '';
        }
        control.getmoney1 = function () {
            control.label1 = control.value1.formatMoney(2);
            return control.label1;
        };
        control.getmoney2 = function () {
            control.label2 = control.value2.formatMoney(2);
            return control.label2;
        };
        control.label1 = control.value1.formatMoney(2);
        control.label2 = control.value2.formatMoney(2);
    },
    load: function (control) {
        $('[ndid="' + control.ndid + '_label1"]').bind('change', function (a) {
            control.validatedone();
            control.onchange();
        });
        $('[ndid="' + control.ndid + '_label2"]').bind('change', function (a) {
            control.validatedone();
            control.onchange();
        });
    },
    val: function (control) {
        control.value1 = $('[ndid="' + control.ndid + '_label1"]').val().replaceAll(',', '');
        control.value2 = $('[ndid="' + control.ndid + '_label2"]').val().replaceAll(',', '');
        control.value = control.value1 + control.split + control.value2;
        if (control.value1 == '' && control.value2 == '') {
            control.value = '';
        }
    },
    getform: function (control, model) {
        if (typeof control.valueName1 != 'undefined') {
            model[control.valueName1] = control.value1 == undefined ? '' : control.value1;
        }
        if (typeof control.valueName2 != 'undefined') {
            model[control.valueName2] = control.value2 == undefined ? '' : control.value2;
        }
    }
});

//upload
$nd.ndcontrol.expand({
    name: 'upload',
    validatedone: function (control) {
        if (control.validatetime > 1) {
            if (control.haserror) {
                $('[ndid="' + control.ndid + '_box"]').removeClass('has-success');
                $('[ndid="' + control.ndid + '_box"]').addClass('has-error');
                $('[ndid="' + control.ndid + '_error"]').remove();
                $('[ndid="' + control.ndid + '_box"]').append('<span ndid="' + control.ndid + '_error" class="control-label has-error">' + control.error + '</span>');
            } else {
                $('[ndid="' + control.ndid + '_box"]').addClass('has-success');
                $('[ndid="' + control.ndid + '_box"]').removeClass('has-error');
                $('[ndid="' + control.ndid + '_error"]').remove();
            }
        } else {
            return false;
        }
    },
    load: function (control) {
        $('[ndid="' + control.ndid + '_iframe"]').attr('src', $nd.url + '/ndui/control/fileupload?fid=' + control.fid + '&key=' + control.key + '');
        $('[ndid="' + control.ndid + '_iframe"]').load(function () {
            control.validatedone();
            if (control.validatetime > 1) {
                var name = $('[ndid="' + control.ndid + '_iframe"]')[0].contentWindow.name.split('|');
                if (name.length > 1) {
                    control.value = name[0];
                    control.label = name[1];
                    if (!control.label) control.label = '';
                    var filepath = control.label.substring(control.label.lastIndexOf('.'), control.label.length).toLocaleLowerCase();
                    var href = $nd.url + '/' + control.key + '/' + control.value + '/' + control.label;
                    var src = $nd.url + "/ndui/images/file/empty.png";
                    $('#' + control.ndid + '_img').unbind("click");
                    if ('.png|.jpg|.gif'.indexOf(filepath) > -1) {
                        src = $nd.url + '/' + control.key + '/' + control.value + '/' + control.label;
                        $('#' + control.ndid + '_img').parent().html('<img id="' + control.ndid + '_img" height="100" src="' + src + '" />')
                        $('#' + control.ndid + '_img').viewer();
                    } else {

                        if ('.pdf'.indexOf(filepath) > -1) {
                            src = $nd.url + "/ndui/images/file/pdf.png";
                        }

                        if ('.xls|.xlsx'.indexOf(filepath) > -1) {
                            src = $nd.url + "/ndui/images/file/excel.png";
                        }

                        if ('.doc|.docx'.indexOf(filepath) > -1) {
                            src = $nd.url + "/ndui/images/file/word.png";
                        }
                        if ('.txt'.indexOf(filepath) > -1) {
                            src = $nd.url + "/ndui/images/file/text.png";
                        }

                        if ('.mp4|.wmv|.avi'.indexOf(filepath) > -1) {
                            src = $nd.url + "/ndui/images/file/movie.png";
                        }

                        if ('.mp3'.indexOf(filepath) > -1) {
                            src = $nd.url + "/ndui/images/file/music.png";
                        }
                        $('#' + control.ndid + '_img').click(function () { window.open(href, '_blank'); });
                    }
                    $('#' + control.ndid + '_img').attr('src', src);
                    $('[ndid="' + control.ndid + '_imgbox"]').show();
                    $('#' + control.ndid + '_link').attr('href', href);
                    $('#' + control.ndid + '_link').html(control.label);
                } else {
                    control.value = '';
                    control.label = '';
                }

                control.onchange();
            }
        });
    },
    val: function (control) {
        var name = $('[ndid="' + control.ndid + '_iframe"]')[0].contentWindow.name.split('|');
        if (name.length > 0) {
            control.value = name[0];
            control.label = name[1];
        } else {
            control.value = '';
            control.label = '';
        }
    }
});

//multiselect
$nd.ndcontrol.expand({
    name: 'multiselect',
    load: function (control) {
        control.element().multiselect();
        var sceneIdArr = control.value.split(",");
        control.element().find('option').each(function (i, content) {
            if ($.inArray($.trim(content.value), sceneIdArr) >= 0) {
                control.selected = true;
            }
        });

        //设置选中值后，需要刷新select控件
        control.element().multiselect('refresh');
    },
    val: function (control) {
        //control.element().multiselect("getChecked").map(function () {
        //    control.value = control.value;
        //}).get();
    }
});

//persontree
$nd.ndcontrol.expand({
    name: 'persontree',
    getform: function (control, model) { },
    load: function (control) {
        $('[ndid="' + control.ndid + '_ico"]').bind('click', function (a) {
            if (!control.disabled) {
                control.viewData();
            }
        });

        if (typeof control.dbpath != 'undefined') {
            $('[ndid="' + control.ndid + '_label"]').autocomplete({
                source: function (request, response) {
                    var condition = [$('[ndid="' + control.ndid + '_label"]').val()];
                    if (control.condition != 'none') { control.condition.forEach(function (v) { condition.push(v); }); }
                    control.value = '';
                    $nd.getdata(control.dbpath, condition, function (data) {
                        var d = [];
                        if (data.data) {
                            for (var a = 0; a < data.data.length; a++) {
                                if (!data.data[a].label) {
                                    data.data[a].label = data.data[a].name;
                                }
                                d.push(data.data[a]);
                            }
                        }
                        response(d);
                    });
                },
                select: function (event, ui) {
                    $('[ndid="' + control.ndid + '_label"]').val(ui.item.label);
                    control.model = ui.item.label;
                    control.label = ui.item.label;
                    control.value = ui.item[control.select];
                    control.val(ui.item[control.select]);
                    control.validatedone();
                    control.onchange();
                    return false;
                },
                focus: function (event, ui) {
                    return false;
                },
                formatResult: function (item) {
                    return item[v.select];
                }
            });
        }
    },
    init: function (control) {
        if (typeof control.orgdbpath == 'undefined') {
            control.orgdbpath = 'dbsqlx/userandorg?name=GetOrganization';
        }
        if (typeof control.select == 'undefined') {
            control.select = 'EmployeeID';
        }
        if (typeof control.dbpath == 'undefined') {
            control.dbpath = 'dbsqlx/userandorg?name=GetUser';
        }
        if (typeof control.viewData == 'undefined') {
            control.viewData = function () {
                $nd.ndmodal(control.ndid + 'persontree').bind({
                    title: control.title ? control.title : $nd_lang.data,
                    width: 850,
                    load: function () {
                        var model = this;

                        var tabel = '';
                        tabel += '<table width="100%" border="0">';
                        tabel += '<tr><td style="vertical-align:top;min-width:300px"><div style="height:' + (model.getheight() - 20) + 'px;overflow-y:scroll"><ul id="' + model.includename + '_tree" class="ztree"></ul></div></td>';
                        tabel += '<td style="vertical-align:top;"><div id="' + model.includename + '_grid"></div></td></tr></table>';
                        $('#' + this.includename).html(tabel);

                        control.checkedvalue = [];

                        if (typeof control.setting == 'undefined') {
                            control.setting = {
                                check: { enable: false },
                                dblClickExpand: true,
                                data: { simpleData: { enable: true } },
                                callback: {
                                    onDblClick: function (treeId, treeNode) {
                                        var treeObj = $.fn.zTree.getZTreeObj(window[control.ndid + 'persontree'].includename + '_tree');
                                        window[window[control.ndid + 'persontree'].includename + '_grid'].getsearch('OrganizationID').val(treeObj.getSelectedNodes(true)[0].Dpnum);
                                        window[window[control.ndid + 'persontree'].includename + '_grid'].refresh();
                                    }
                                }
                            }
                        }
                        if (typeof control.select == 'undefined') {
                            control.select = 'EmployeeID';
                        }

                        if (typeof control.data == 'undefined' || control.data == null) {
                            $nd.getdata(control.orgdbpath, [], function (ref) {
                                if (ref.success) {
                                    control.data = ref.data;
                                    $.fn.zTree.init($("#" + model.includename + "_tree"), control.setting, control.data);
                                } else {
                                    alert(ref.message);
                                }
                            });
                        } else {
                            $.fn.zTree.init($("#" + model.includename + "_tree"), control.setting, control.data);
                        }

                        $nd.ndgrid(model.includename + '_grid', 'dbsqlx/userandorg?name=List_TPersonDetail').bind({
                            pagepaper: 3,
                            rowSelected: true,
                            height: model.getheight() - 230,
                            aotoheight: false,
                            dblclick: function (v) {
                                control.label = v.UserName;
                                control.val(v[control.select]);
                                control.validatedone();
                                control.onchange();
                                window[control.ndid + 'persontree'].hide();
                            },
                            columns: [
                                { name: "UserName", text: $nd_lang.username, visble: true },
                                { name: "OrganizationName", text: $nd_lang.organization, visble: true, showlength: 10 },
                                { name: "JobName", text: $nd_lang.jobname, visble: true, showlength: 10 },
                                { name: "LevelName", text: $nd_lang.levelname, visble: true }
                            ]
                        }).bindsearch([{ name: "Search", type: "input", text: $nd_lang.search, value: "" }, { name: "OrganizationID", type: "hidden", text: $nd_lang.department, value: "" }]).refresh();
                    },
                    command: [{
                        cmd: $nd_lang.sure, ngclick: function () {
                            var v = window[window[control.ndid + 'persontree'].includename + '_grid'].selectedRow;
                            if (v) {
                                control.label = v.UserName;
                                control.val(v[control.select]);
                            } else {
                                control.label = '';
                                control.val('');
                            }
                            control.validatedone();
                            control.onchange();
                            window[control.ndid + 'persontree'].hide();
                        }
                    }]
                }).show();
            }
        }
    }
});

//orgtree
$nd.ndcontrol.expand({
    name: 'orgtree',
    load: function (control) {
        $('[ndid="' + control.ndid + '_ico"]').bind('click', function (a) {
            if (!control.disabled) {
                control.viewData();
            }
        });

        if (typeof control.dbpath != 'undefined') {
            $('[ndid="' + control.ndid + '_label"]').autocomplete({
                source: function (request, response) {
                    var condition = [$('[ndid="' + control.ndid + '_label"]').val()];
                    if (control.condition != 'none') { control.condition.forEach(function (v) { condition.push(v); }); }
                    control.value = '';
                    $nd.getdata(control.dbpath, condition, function (data) {
                        var d = [];
                        if (data.data) {
                            for (var a = 0; a < data.data.length; a++) {
                                if (!data.data[a].label) {
                                    data.data[a].label = data.data[a].name;
                                }
                                d.push(data.data[a]);
                            }
                        }
                        response(d);
                    });
                },
                select: function (event, ui) {
                    $('[ndid="' + control.ndid + '_label"]').val(ui.item.label);
                    control.model = ui.item.label;
                    control.label = ui.item.label;
                    control.value = ui.item[control.select];
                    control.val(ui.item[control.select]);
                    control.validatedone();
                    control.onchange();
                    return false;
                },
                focus: function (event, ui) {
                    return false;
                },
                formatResult: function (item) {
                    return item[v.select];
                }
            });
        }
    },
    init: function (control) {
        if (typeof control.viewdbpath == 'undefined') {
            control.viewdbpath = 'dbsqlx/userandorg?name=GetOrganization';
        }
        if (typeof control.select == 'undefined') {
            control.select = 'Dpnum';
        }
        if (typeof control.viewData == 'undefined') {
            control.viewData = function () {
                $nd.ndmodal(control.ndid + 'orgtree').bind({
                    title: control.title ? control.title : $nd_lang.data,
                    load: function () {
                        var model = this;
                        $('#' + this.includename).html('<ul id="' + model.includename + '_tree" class="ztree"></ul>');

                        control.checkedvalue = [];

                        if (typeof control.setting == 'undefined') {
                            control.setting = {
                                check: { enable: false },
                                data: { simpleData: { enable: true } }
                            }
                        }
                        if (typeof control.select == 'undefined') {
                            control.select = 'id';
                        }

                        if (typeof control.data == 'undefined') {
                            $nd.getdata(control.viewdbpath, [], function (ref) {
                                if (ref.success) {
                                    control.data = ref.data;
                                    $.fn.zTree.init($("#" + model.includename + "_tree"), control.setting, control.data);
                                } else {
                                    alert(ref.message);
                                }
                            });
                        } else {
                            $.fn.zTree.init($("#" + model.includename + "_tree"), control.setting, control.data);
                        }
                    },
                    command: [{
                        cmd: $nd_lang.sure, ngclick: function () {
                            var treeObj = $.fn.zTree.getZTreeObj(window[control.ndid + 'orgtree'].includename + '_tree');
                            if (control.setting.check.enable) {
                                control.checkedvalue = treeObj.getCheckedNodes(true);
                            } else {
                                control.checkedvalue = treeObj.getSelectedNodes(true);
                            }
                            if (control.checkedvalue.length > 0) {
                                control.label = control.checkedvalue[0].name;

                                control.val(control.checkedvalue[0][control.select]);
                            } else {
                                control.val();
                                control.label = '';
                            }
                            control.validatedone();
                            control.onchange();
                            window[control.ndid + 'orgtree'].hide();
                        }
                    }]
                }).show();
            }
        }
    },
    getform: function (control, model) { }
});

//money
$nd.ndcontrol.expand({
    name: 'money',
    load: function (control) {
        $('[ndid="' + control.ndid + '_label"]').bind('change', function (a) {
            control.validatedone();
            control.onchange();
        });
    },
    val: function (control) {
        control.value = $('[ndid="' + control.ndid + '_label"]').val().replaceAll(',', '');
    },
    init: function (control) {
        control.getmoney = function () {
            control.label = control.value.formatMoney(2);
            return control.label;
        };
        control.label = control.value.formatMoney(2);
    }
});

//autocomplete
$nd.ndcontrol.expand({
    name: 'autocomplete',
    load: function control() {
        $('[ndid="' + control.ndid + '_label"]').autocomplete({
            source: function (request, response) {
                var condition = [$('[ndid="' + control.ndid + '_label"]').val()];
                if (control.condition != 'none') { control.condition.forEach(function (v) { condition.push(v); }); }
                control.value = '';
                $nd.getdata(control.dbpath, condition, function (data) {
                    var d = [];
                    if (data.data) {
                        for (var a = 0; a < data.data.length; a++) {
                            if (!data.data[a].label) {
                                data.data[a].label = data.data[a].name;
                            }
                            d.push(data.data[a]);
                        }
                    }
                    response(d);
                });
            },
            select: function (event, ui) {
                $('[ndid="' + control.ndid + '_label"]').val(ui.item.label);
                control.model = ui.item.label;
                control.label = ui.item.label;
                control.value = ui.item[control.select];
                control.val(ui.item[control.select]);
                control.validatedone();
                control.onchange();
                return false;
            },
            focus: function (event, ui) {
                return false;
            },
            formatResult: function (item) {
                return item[v.select];
            }
        });
    },
    getform: function (control, model) { }
});

//ndmodelgrid
$nd.ndcontrol.expand({
    name: 'ndmodelgrid',
    load: function (control) {
        $('[ndid="' + control.ndid + '_ico"]').bind('click', function (a) {
            if (!control.disabled) {
                if (typeof control.viewGrid == 'undefined') {
                    control.viewGrid = function () {
                        alert($nd_lang.noset + ' viewGrid ');
                    }
                }
                control.viewGrid();
            }
        });
        if (typeof control.dbpath != 'undefined') {
            $('[ndid="' + control.ndid + '_label"]').autocomplete({
                source: function (request, response) {
                    var condition = [$('[ndid="' + control.ndid + '_label"]').val()];
                    if (control.condition != 'none') { control.condition.forEach(function (v) { condition.push(v); }); }
                    control.value = '';
                    $nd.getdata(control.dbpath, condition, function (data) {
                        var d = [];
                        if (data.data) {
                            for (var a = 0; a < data.data.length; a++) {
                                if (!data.data[a].label) {
                                    data.data[a].label = data.data[a].name;
                                }
                                d.push(data.data[a]);
                            }
                        }
                        response(d);
                    });
                },
                select: function (event, ui) {
                    $('[ndid="' + control.ndid + '_label"]').val(ui.item.label);
                    control.model = ui.item.label;
                    control.label = ui.item.label;
                    control.value = ui.item[control.select];
                    control.val(ui.item[control.select]);
                    control.validatedone();
                    control.onchange();
                    return false;
                },
                focus: function (event, ui) {
                    return false;
                },
                formatResult: function (item) {
                    return item[v.select];
                }
            });
        }
    },
    getform: function (control, model) { }
});

//number
$nd.ndcontrol.expand({
    name: 'number',
    load: function (control) {
        control.element().bind('change', function (a) {
            control.validatedone();
            control.onchange();
        });
        $('[ndid="' + control.ndid + '_minus"]').click(function (a) {
            if (control.val() == '') { control.val('0'); return; }
            control.val(parseInt(control.val()) - 1);
            control.validatedone();
            control.onchange();
        });
        $('[ndid="' + control.ndid + '_plus"]').click(function (a) {
            if (control.val() == '') { control.val('0'); return; }
            control.val(parseInt(control.val()) + 1);
            control.validatedone();
            control.onchange();
        });
    }
});

//spinner
$nd.ndcontrol.expand({
    name: 'spinner',
    load: function (control) {
        control.element().spinner();
    }
});

//ueditor
$nd.ndcontrol.expand({
    name: 'ueditor',
    load: function (control) {
        var ue = UE.getEditor(control.ndid + '_ueditor');
        control.ue = ue;
    },
    init: function (control) { control.noprint = true; },
    val: function (control) { control.value = control.ue.getAllHtml(); }
});

//datetime
$nd.ndcontrol.expand({
    name: 'datetime',
    load: function (control) {
        $('[ndid="' + control.ndid + '_datebox"]').datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            // pickerPosition: scope.bindmodel.pickerPosition,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        }).on('changeDate', function (ev) {
            var d = ev.date ? ev.date.Format('yyyy-MM-dd HH:mm:ss') : '';
            if (control.value != d) {
                control.value = d;
                control.validatedone();
                control.onchange();
            }
        });
    }
});

//date
$nd.ndcontrol.expand({
    name: 'date',
    load: function (control) {
        $('[ndid="' + control.ndid + '_datebox"]').datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            pickTime: false,
            //pickerPosition: scope.bindmodel.pickerPosition,
            startView: 2,
            minView: 2,
            forceParse: 0
        }).on('changeDate', function (ev) {
            var d = ev.date ? ev.date.Format('yyyy-MM-dd') : '';
            if (control.value != d) {
                control.value = d;
                control.validatedone();
                control.onchange();
            }
        });
    }
});

//magicSuggest
$nd.ndcontrol.expand({
    name: 'magicSuggest',
    val: function (control) { },
    load: function (control) {
        var ms = control.element().magicSuggest({
            data: control.data,
            placeholder: $nd_lang.noselect
        });
        if (control.value.length > 0) {
            ms.setValue(control.value.split(control.split));
        }
        $(ms).on('selectionchange', function () {
            var v = "";
            for (var i = 0; i < ms.getValue().length; i++) {
                if (i == 0) {
                    v += ms.getValue()[i];
                }
                else {
                    v += control.split + ms.getValue()[i];
                }
            }
            control.value = v;
            // control.val(v);
        });
    }
});

//checkbox
$nd.ndcontrol.expand({
    name: 'checkbox',
    val: function (control) { control.value = control.element().get(0).checked; },
    load: function (control) {
        control.element().bind('click', function (a) {
            control.value = false;
            control.validatedone();
            control.onchange();
        });
    }
});

//radiolist
$nd.ndcontrol.expand({
    name: 'radiolist',
    val: function (control) { control.value = $('input:radio[name="' + control.ndid + '_radio"]:checked').val(); }
});

//checkboxlist
$nd.ndcontrol.expand({
    name: 'checkboxlist',
    val: function (control) {
        var cc = $('[ndid="' + control.ndid + '_box"]').find('input[type="checkbox"]');
        var value = '';
        cc.each(function () {
            if ($(control).get(0).checked) { value += $(control).val() + control.split; }
        });
        this.value = value.TrimEnd(control.split);
    }
});

//label
$nd.ndcontrol.expand({
    name: 'label',
    val: function (control) {
        control.value = control.element().html();
    }
});