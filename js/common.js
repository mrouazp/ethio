$(document).ready(function() {
	//плавная прокрутка
	$("body, .left_side").niceScroll({
		horizrailenabled: false,
		cursoropacitymax: 0
	});
	$(".gallery").css("min-height", $(document).height()*2);
	//левое меню
	$(".btn_mnu").click(function() {
	$(this).toggleClass("active");
	$(".left_side").toggleClass("active");
	});
	//Плитка галереи
	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
			onResize: function() {
				wall.fitWidth();
			}
	});

	var images = wall.container.find("a");
		images.find("img").load(function() {
			wall.fitWidth();
		});
	//Фильтер картинок	
		$(".filter_label").click(function() {
			$(".filter_label").removeClass("active");
			var filter = $(this).addClass("active").data("filter");
			wall.filter(filter);
			setTimeout(function() {
				$(window).resize();
				wall.fitWidth();
			}, 400);
		});
	//Увеличение плитки	
	$(".gallery img").lazyload({
    	effect : "fadeIn",
    	threshold : 1000
	}).parent().hover(function() {
		$(".gallery a").css("opacity", "1");
		$(this).css("opacity", ".5");
	}, function() {
		$(".gallery a").css("opacity", "1");
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//Индикатор загрузки
	$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	});
	
});

