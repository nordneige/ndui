(function ($) {
	$.fn.albeTimeline = function (json, options) {

		var _this = this;

		//Mescla opções do usuário com o padrão
		var settings = $.extend({}, $.fn.albeTimeline.defaults, options);

		var idioma = ($.fn.albeTimeline.languages.hasOwnProperty(settings.language)) ?
			$.fn.albeTimeline.languages[settings.language] :
			{ //pt-BR
				days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
				months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
				shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
				msgEmptyContent: "Sem informações a serem exibidas.",
			};

		//Se for passado 'string', convert para 'object'.
		if (typeof (json) == 'string') {
			json = $.parseJSON(json);
		}

		//Exibe mensagem padão
		if ($.isEmptyObject(json)) {
			console.warn(idioma.msgEmptyContent);
			return;
		}

		//Ordena pela data
		json = json.sort(function (a, b) {
			return (settings.sortDesc) ? (Date.parse(b['time']) - Date.parse(a['time'])) : (Date.parse(a['time']) - Date.parse(b['time']));
		});

		var eMenu = $("<ul>").attr("id", "timeline-menu");
		var eTimeline = $("<section>").attr("id", "timeline");

		$.each(json, function (index, element) {

			var ano = new Date(element.time.split(' ')[0]).getFullYear();
			var separador = $(eTimeline).find("div.group" + ano);

			//Se o separador não existe, cria.
			if (separador.length === 0) {
				separador = $("<div>").attr("id", ("year" + ano)).addClass("group" + ano).text(ano);
				$(eTimeline).append(separador);

				var anchor = $('<a>').attr("href", ("#year" + ano)).text(ano);
				eMenu.append($("<li>").append(anchor));
			}

			/****************************************SLOT****************************************/
			var badge = $('<div>').addClass("badge");
			badge.text(fnDateFormat(element.time, settings.formatDate, idioma));

			var ePanel = $("<div>").addClass("panel").append(badge);

			if (element.header) {
				var ePanelHead = $("<div>").addClass("panel-heading");
				var ePaneltitle = $("<h4>").addClass("panel-title").text(element.header);

				ePanelHead.append(ePaneltitle);
				ePanel.append(ePanelHead);
			}

			var ePanelBody = $("<div>").addClass("panel-body");
			$.each(element.body, function (index2, value2) {

				//Elemento HTML
				var e = $('<' + value2.tag + '>');

				//Atributos do elemento
				$(value2.attr).each(function () {
					$.each(this, function (index3, value3) {
						//Atributo especial, defido o 'class' ser palavra reservada no javascript.
						(index3.toLowerCase() === 'cssclass') ? e.addClass(value3) : e.attr(index3, value3);
					});
				});

				//Conteúdo do elemento
				if (value2.content)
					e.html(value2.content);

				ePanelBody.append(e);
			});

			ePanel.append(ePanelBody);

			if (element.footer) {
				var ePanelFooter = $("<div>").addClass("panel-footer").text(element.footer);
				ePanel.append(ePanelFooter);
			}

			var slot = $("<article>").append(ePanel);
			//Adiciona o item logo após ao respectivo separador.
			slot.insertAfter(separador);

			/****************************************FIM - SLOT****************************************/
		});

		//Marcador inicial da Timeline 
		var badge = $('<div>').addClass("badge").html("&nbsp;");
		var ePanel = $("<div>").addClass("panel").append(badge);
		eTimeline.append($("<article>").append(ePanel));
		eTimeline.append($("<div>").addClass("clearfix").css({ "float": "none" }));

		$.each(eTimeline.find("article"), function (index, value) {
			//Adiciona classe css responsável por inverter o lado do item.
			$(this).addClass((index % 2 == 0) ? "" : "inverted");
			//Adiciona classe de animação.
			if (settings.effect && settings.effect != 'none')
				$(this).addClass("animated " + settings.effect);
		});

		//Exibe o menu
		if (settings.showMenu) {
			eMenu.appendTo(_this);
		}

		eTimeline.appendTo(_this);
		//return this;
	};

    $.fn.albeTimeline.languages = {
        "es-ES": {
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            msgEmptyContent: "No hay información para mostrar."
        },
        "zh-CN": {
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            msgEmptyContent: "No information to display."
        },
        "fr-FR": {
            days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            shortMonths: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
            msgEmptyContent: "Aucune information à afficher."
        }
    };

	$.fn.albeTimeline.defaults = {
		effect: "fadeInUp",
		showMenu: true,
		language: "pt-BR",
		formatDate: 1,
		sortDesc: true,
	};

	//format
	//1.:"dd MMMM"
	//2.:"dd/MM/aaaaa"
	//3.:"dd de MMMM de aaaaa"
	//4.:"DD, dd de MMMM de aaaaa"
	//default.: "YYYY-MM-DD" (ISO 8601)
	function fnDateFormat(value, format, language) {

	    var parts = value.split(' ')[0].split('-');
	    var time = value.split(' ')[1];
		var newDate = new Date(parts[0], (parts[1] - 1), parts[2]);

		var d = ((newDate.getDate() < 10 ? "0" : "") + newDate.getDate());
		var m = ((newDate.getMonth() < 10 ? "0" : "") + newDate.getMonth());

		switch (format) {
			case 1:
				return d + " " + language.shortMonths[newDate.getMonth()];
			case 2:
				return d + "/" + m + "/" + newDate.getFullYear();
			case 3:
				return d + " de " + language.months[newDate.getMonth()] + " de " + newDate.getFullYear();
			case 4:
			    return language.days[newDate.getDay()].substring(0, 3) + ", " + d + " de " + language.months[newDate.getMonth()] + " de " + newDate.getFullYear();
		    case 5:
		        return language.days[newDate.getDay()].substring(0, 3) + ", " + d + "  " + language.months[newDate.getMonth()] + "  " + newDate.getFullYear();
		    case 6:
		        return language.days[newDate.getDay()].substring(0, 3) + ", " + d + "  " + language.months[newDate.getMonth()] + "  " + newDate.getFullYear() + "  " + time;
			default:
				return newDate.getFullYear() + "-" + m + "-" + d;
		}
	};

})(jQuery);