///汪彤阳 生写


var unical = {
    debug : 2,
    lunarInfo:new Array(
        0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
        0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
        0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
        0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
        0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
        0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
        0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
        0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
        0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
        0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
        0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
        0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
        0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
        0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
        0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0),
    solarMonth : new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),
    Gan : new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"),
    Zhi : new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"),
    Animals : new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"),
    solarTerm : new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"),
    sTermInfo : new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758),
    nStr1 : new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'),
    nStr2 : new Array('初', '十', '廿', '卅', '　'),
    monthName : new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"),
    sFtv : new Array(
		"0101*元旦",
		"0214 情人节",
		"0308 妇女节",
		"0312 植树节",
		"0315 消费者权益日",
		"0321 世界森林日、世界儿歌日",
		"0322 世界水日",
		"0323 世界气象日",
		"0324 世界防治结核病日",

		"0401 愚人节",
		"0407 世界卫生日",
		"0422 世界地球日",

		"0501*劳动节",
		"0504 青年节",
		"0505 碘缺乏病防治日",
		"0508 世界红十字日",
		"0512 国际护士节",
		"0515 国际家庭日",
		"0517 世界电信日",
		"0518 国际博物馆日",
		"0520 全国学生营养日",
		"0523 国际牛奶日",
		"0531 世界无烟日",

		"0601 儿童节",
		"0605 世界环境日",
		"0606 全国爱眼日",
		"0616 防治荒漠化和干旱日",
		"0623 国际奥林匹克日",
		"0625 全国土地日",
		"0626 国际反毒品日",

		"0701 建党节 香港回归纪念 国际建筑日",
		"0707 中国人民抗日战争纪念日",
		"0711 世界人口日",

		"0801 建军节",
		"0808 父亲节",

		"0908 国际扫盲日",
		"0909 毛泽东逝世纪念",
		"0910 教师节",
		"0916 国际臭氧层保护日",
		"0920 国际爱牙日",
		"0927 世界旅游日",
		"0928 孔子诞辰",

		"1001*国庆节 国际音乐日",
		"1004 世界动物日",
		"1006 老人节",
		"1008 全国高血压日 世界视觉日",
		"1009 世界邮政日",
		"1015 国际盲人节",
		"1016 世界粮食日",
		"1017 世界消除贫困日",
		"1024 联合国日",

		"1108 中国记者日",
		"1109 消防宣传日",
		"1112 孙中山诞辰纪念",
		"1114 世界糖尿病日",
		"1117 国际大学生节",

		"1201 世界艾滋病日",
		"1203 世界残疾人日",
		"1209 世界足球日",
		"1220 澳门回归纪念",
		"1225 圣诞节",
		"1226 毛泽东诞辰纪念",
		"1229 国际生物多样性日"
		),
    lFtv : new Array(
		"0101*春节",
		"0115 元宵节",
		"0505 端午节",
		"0707 七夕情人节",
		"0715 中元节",
		"0815 中秋节",
		"0909 重阳节",
		"1208 腊八节",
		"1223 小年",
		"0100*除夕"
		),
    wFtv: new Array(
		"0520 国际母亲节",
		"0530 全国助残日",
		"0630 国际父亲节",
		"0932 国际和平日",
		"0940 国际聋人节",
		"1013 国际减轻自然灾害日",
		"1011 国际住房日"
		),
    lYearDays: function (y) {
        var i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0;
        return (sum + this.leapDays(y));
    },
    leapDays: function (y) {
        if (this.leapMonth(y)) return ((this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
        else return (0);
    },
    leapMonth: function (y) {
        return (this.lunarInfo[y - 1900] & 0xf);
    },
    monthDays: function (y, m) {
        return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
    },
    Lunar: function (objDate) {
        var m = ""; 
        var i, leap = 0, temp = 0;
        var baseDate = new Date(1900, 0, 31);
        var offset = Math.floor((objDate.getTime() + 2206425600000) / 86400000);
        m += "objDate=" + objDate.getTime() + ", new Date(1900,0,31)=" + baseDate.getTime();
        m += "offset=" + offset;

        this.dayCyl = offset + 40;
        this.monCyl = 14;

        for (i = 1900; i < 2050 && offset > 0; i++) {
            temp = this.lYearDays(i);
            offset -= temp;
            this.monCyl += 12;
        }

        if (offset < 0) {
            offset += temp;
            i--;
            this.monCyl -= 12;
        }

        this.year = i;
        this.yearCyl = i - 1864;

        leap = this.leapMonth(i);
        this.isLeap = false;

        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i == (leap + 1) && this.isLeap == false)
            { --i; this.isLeap = true; temp = this.leapDays(this.year); }
            else
            { temp = this.monthDays(this.year, i); }

            if (this.isLeap == true && i == (leap + 1)) this.isLeap = false;

            offset -= temp;
            if (this.isLeap == false) this.monCyl++;
        }

        if (offset == 0 && leap > 0 && i == leap + 1)
            if (this.isLeap)
            { this.isLeap = false; }
            else
            { this.isLeap = true; --i; --this.monCyl; }

        if (offset < 0) { offset += temp; --i; --this.monCyl; }

        this.month = i;
        this.day = offset + 1;

        m += "\noffset=" + offset + ", year=" + this.year + ", yearCyl=" + this.yearCyl + ", month=" + this.month + ",\n monthCyl=" + this.monthCyl + ", day=" + this.day + ", dayCyl=" + this.dayCyl;
    },
    solarDays: function (y,m) {
        if (m == 1)
            return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
        else
            return (this.solarMonth[m]);
    },
    cyclical: function (num) {
        return (this.Gan[num % 10] + this.Zhi[num % 12]);
    },
    calElement: function (sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {
        this.isToday = false;
        this.sYear = sYear;
        this.sMonth = sMonth;
        this.sDay = sDay;
        this.week = week;
        this.lYear = lYear;
        this.lMonth = lMonth;
        this.lDay = lDay;
        this.isLeap = isLeap;
        this.cYear = cYear;
        this.cMonth = cMonth;
        this.cDay = cDay;

        this.color = '';

        this.lunarFestival = '';
        this.solarFestival = '';
        this.solarTerms = '';
    },
    sTerm: function (y, n) {
        var offDate = new Date((31556925974.7 * (y - 1900) + this.sTermInfo[n] * 60000) - 2208549300000);
        return (offDate.getUTCDate());
    },
    calendar: function (y, m) {
        var sDObj, lDObj, lY, lM, lD = 1, lL, lX = 0, tmp1, tmp2;
        var lDPOS = new Array(3);
        var n = 0;
        var firstLM = 0;

        sDObj = new Date(y, m, 1);

        this.length = this.solarDays(y, m);
        this.firstWeek = sDObj.getDay();

        for (var i = 0; i < this.length; i++) {

            if (lD > lX) {
                sDObj = new Date(y, m, i + 1);
                lDObj = new Lunar(sDObj);
                lY = lDObj.year;
                lM = lDObj.month;
                lD = lDObj.day;
                lL = lDObj.isLeap;
                lX = lL ? this.leapDays(lY) : this.monthDays(lY, lM);

                if (n == 0) firstLM = lM;
                lDPOS[n++] = i - lD + 1;
            }

            this[i] = new calElement(y, m + 1, i + 1, nStr1[(i + this.firstWeek) % 7],
                                   lY, lM, lD++, lL,
                                   this.cyclical(lDObj.yearCyl), this.cyclical(lDObj.monCyl), this.cyclical(lDObj.dayCyl++));


            if ((i + this.firstWeek) % 7 == 0) this[i].color = '#ff5f07';
            if ((i + this.firstWeek) % 14 == 13) this[i].color = '#ff5f07';
        }

        tmp1 = this.sTerm(y, m * 2) - 1;
        tmp2 = this.sTerm(y, m * 2 + 1) - 1;
        this[tmp1].solarTerms = this.solarTerm[m * 2];
        this[tmp2].solarTerms = this.solarTerm[m * 2 + 1];
        if (m == 3) this[tmp1].color = '#ff5f07';

        for (var i = 0; i < this.sFtv.length; i++) {
            if (this.sFtv[i] && this.sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
                if (Number(RegExp.$1) == (m + 1)) {
                    this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + ' ';
                    if (RegExp.$3 == '*') {
                        this[Number(RegExp.$2) - 1].color = '#ff5f07';
                    }
                }
        }

        for (var i = 0; i < this.wFtv.length; i++) {
            if (this.wFtv[i] && this.wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
                if (Number(RegExp.$1) == (m + 1)) {
                    tmp1 = Number(RegExp.$2);
                    tmp2 = Number(RegExp.$3);
                    this[((this.firstWeek > tmp2) ? 7 : 0) + 7 * (tmp1 - 1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' ';
                }
        }

        for (var i = 0; i < this.lFtv.length; i++) {
            if (this.lFtv[i] && this.lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                tmp1 = Number(RegExp.$1) - firstLM;
                if (tmp1 == -11) tmp1 = 1;
                if (tmp1 >= 0 && tmp1 < n) {
                    tmp2 = lDPOS[tmp1] + Number(RegExp.$2) - 1;
                    if (tmp2 >= 0 && tmp2 < this.length) {
                        this[tmp2].lunarFestival += RegExp.$4 + ' ';
                        if (RegExp.$3 == '*') this[tmp2].color = '#ff5f07';
                    }
                }
            }
        }
        if ((this.firstWeek + 12) % 7 == 5)
            this[12].solarFestival += '黑色星期五 ';

        if (y == this.tY && m == this.tM) {
            this[this.tD - 1].isToday = true;
        }
    },
    cDay: function (d) {
        var s;
        switch (d) {
            case 10:
                s = '初十';
                break;
            case 20:
                s = '二十';
                break;
            case 30:
                s = '三十';
                break;
            default:
                s = this.nStr2[Math.floor(d / 10)];
                s += this.nStr1[d % 10];
        }
        return (s);
    },
    cld: null,
    drawCld: function (SY, SM) {
        var myban = '';
        var myjia = '';

        var ref = $nd.getdata('dbsqlx/EIACOA?name=GetHoliday', [SY, SM + 1]);
        if (ref.success) {
            for (var k = 0; k < ref.data.length; k++) {
                if (ref.data[k].Flag == 2) {
                    myban += '|' + ref.data[k].day;
                } else {
                    myjia += '|' + ref.data[k].day;
                }
            }
            myban += '|';
            myjia += '|';
        } else {
            alert('获取调班信息失败！');
        }

        var i, sD, s, size;
        this.cld = new calendar(SY, SM);

        document.getElementById("gz").innerHTML = '&nbsp;&nbsp;农历'
            + cyclical(SY - 1900 + 36) + '年 &nbsp;&nbsp;【' + Animals[(SY - 4) % 12] + '】';

        for (i = 0; i < 42; i++) {

            sObj = document.getElementById('sd' + i);
            lObj = document.getElementById('ld' + i);

            sObj.style.background = '';
            lObj.style.background = '';

            sD = i - this.cld.firstWeek;

            if (sD > -1 && sD < this.cld.length) {

                //if (i == 8) {
                if (myjia.indexOf('|' + (sD + 1) + '|') > -1) {
                    sObj.innerHTML = '<font onclick="showctip(\'' + SY + '-' + (SM + 1) + '-' + (sD + 1) + '\')"  style="margin-left:20px;" id=sdf' + i + '>' + (sD + 1) + '</font>' + '<img src="' + $nd.url + '/cap/tools/imagesa34/jia.jpg" style="margin-right:10px; float: right" />';
                }
                else if (myban.indexOf('|' + (sD + 1) + '|') > -1) {
                    sObj.innerHTML = '<font onclick="showctip(\'' + SY + '-' + (SM + 1) + '-' + (sD + 1) + '\')"  style="margin-left:20px;" id=sdf' + i + '>' + (sD + 1) + '</font>' + '<img src="' + $nd.url + '/cap/tools/imagesa34/ban.jpg" style="margin-right:10px; float: right" />';
                }
                else {
                    sObj.innerHTML = '<font onclick="showctip(\'' + SY + '-' + (SM + 1) + '-' + (sD + 1) + '\')" id=sdf' + i + '>' + (sD + 1) + '</font>';
                }

                if (this.cld[sD].isToday) {
                    //设置今天的背景色
                    sObj.style.background = '#defdfd';
                    lObj.style.background = '#91dae3';
                }

                sObj.style.color = this.cld[sD].color;

                if (this.cld[sD].lDay == 1)
                    lObj.innerHTML = '<b>' + (this.cld[sD].isLeap ? '闰' : '')
                        + this.cld[sD].lMonth + '月'
                        + (this.monthDays(this.cld[sD].lYear, this.cld[sD].lMonth) == 29 ? '小' : '大') + '</b>';
                else
                    lObj.innerHTML = cDay(this.cld[sD].lDay);

                s = this.cld[sD].lunarFestival;
                if (s.length > 0) {
                    //农历节日名称大于5个字截去
                    //if(s.length>5) s = s.substr(0, 3)+'…';
                    if (s.length > 7) s = s.substr(0, 5) + '…';
                    s = s.fontcolor('#ff5f07');
                }
                else {
                    s = this.cld[sD].solarFestival;
                    if (s.length > 0) {
                        //阳历节日名称截去
                        //size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;			
                        size = (s.charCodeAt(0) > 0 && s.charCodeAt(0) < 128) ? 9 : 5;
                        if (s.length > size + 1) s = s.substr(0, size - 1) + '…';
                        s = s.fontcolor('#0168ea');
                    }
                    else {
                        s = this.cld[sD].solarTerms;
                        if (s.length > 0) s = s.fontcolor('#44d7cf');
                    }
                }
                if (s.length > 0) lObj.innerHTML = s;

            }
            else {
                sObj.innerHTML = ' ';
                lObj.innerHTML = ' ';
            }
        }
    },
    changeCld: function () {
        var y, m;
        y = document.getElementById("sy").selectedIndex + 1900;
        m = document.getElementById("sm").selectedIndex;
        this.drawCld(y, m);
    },
    pushBtm: function (K) {
        switch (K) {
            case 'YU':
                if (document.getElementById("sy").selectedIndex > 0)
                    document.getElementById("sy").selectedIndex--;
                break;
            case 'YD':
                if (document.getElementById("sy").selectedIndex < 149)
                    document.getElementById("sy").selectedIndex++;
                break;
            case 'MU':
                if (document.getElementById("sm").selectedIndex > 0) {
                    document.getElementById("sm").selectedIndex--;
                }
                else {
                    document.getElementById("sm").selectedIndex = 11;
                    if (document.getElementById("sy").selectedIndex > 0)
                        document.getElementById("sy").selectedIndex--;
                }
                break;
            case 'MD':
                if (document.getElementById("sm").selectedIndex < 11) {
                    document.getElementById("sm").selectedIndex++;
                }
                else {
                    document.getElementById("sm").selectedIndex = 0;
                    if (document.getElementById("sy").selectedIndex < 149)
                        document.getElementById("sy").selectedIndex++;
                }
                break;
            default:
                document.getElementById("sy").selectedIndex = this.tY - 1900;
                document.getElementById("sm").selectedIndex = this.tM;
        }
        this.changeCld();
    },
    Today :new Date(),
    tY : this.Today.getFullYear(),
    tM: this.Today.getMonth(),
    tD: Today.getDate(),
    width:"130",
    offsetx : 2,
    offsety : 16,
    x : 0,
    y : 0,
    show : 0,
    sw : 0,
    cnt : 0,
    dStyle:null,
    mEvn: function (e) {
        if (!this.show) return;
        if (window.event) {
            this.x = event.x;
            this.y = event.y;
            if (document.body.scrollLeft) {
                this.x += document.body.scrollLeft;
                this.y += document.body.scrollTop;
            }
            this.dStyle.left = (this.x + this.offsetx - (this.width / 2)) + "px";
            this.dStyle.top = (this.y + this.offsety) + "px";
        }
        else {
            this.dStyle.left = (e.pageX + this.offsetx - (this.width / 2)) + "px";
            this.dStyle.top = (e.pageY + this.offsety) + "px";
        }
    },
    mOvr: function (v) {
        var festival = document.getElementById("festival");
        var datedetail = document.getElementById("datedetail");

        var sObj = document.getElementById('sdf' + v);
        if (sObj != null) {
            //alert(v);
            var d = sObj.innerHTML - 1;

            if (sObj.innerHTML != '') {
                sObj.style.cursor = 'pointer';
                if (this.cld[d]) {
                    if (this.cld[d].solarTerms == ''
                    && this.cld[d].solarFestival == ''
                    && this.cld[d].lunarFestival == '') {
                        festival.innerHTML = "";
                        festival.style.display = "none";
                    }
                    else {
                        festival.innerHTML = this.cld[d].solarTerms + ' ' + this.cld[d].solarFestival + ' ' + this.cld[d].lunarFestival;
                        festival.style.display = "block";
                    }
                    datedetail.innerHTML = this.cld[d].sYear + ' 年 ' + this.cld[d].sMonth
                + ' 月 ' + this.cld[d].sDay + ' 日<br />星期' + this.cld[d].week + '<br />'
                + '<span>农历' + (this.cld[d].isLeap ? '闰 ' : ' ')
                + this.cld[d].lMonth + ' 月 ' + this.cld[d].lDay + ' 日<br />'
                + this.cld[d].cYear + '年 ' + this.cld[d].cMonth
                + '月 ' + this.cld[d].cDay + '日</span>';
                }
                if (this.show == 0) {
                    this.dStyle.left = (this.x + offsetx - (this.width / 2)) + "px";
                    this.dStyle.top = (this.y + offsety) + "px";
                    this.dStyle.visibility = "visible";
                    this.show = 1;
                }
            }
        }
    },
    initial: function () {
        this.dStyle = document.getElementById("detail").style;

        document.getElementById("sy").selectedIndex = this.tY - 1900;
        document.getElementById("sm").selectedIndex = this.tM;
        this.drawCld(tY, tM);
        document.onmousemove = mEvn;
    },
    mOut: function () {
        if (this.cnt >= 1) { this.sw = 0 }
        if (this.sw == 0) { this.show = 0; this.dStyle.visibility = "hidden"; }
        else this.cnt++;
    }
}


