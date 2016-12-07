$(document).ready(function() {
		

	
	function heightDetect() { 
		// $(".top_header").css("height", $(window).height());
		// $(".bglayer").css("height", $(window).height()); 
		// $(".header_info").css("height", ($(window).height());
			// $(".header_info_centered").css("height", $(window).height()); 
			// $(".header_info_row").css("height", $(window).height());
	$('.top_header').height($(window).height());
	$('.bglayer').height($(window).height());
	$('.header_info').height($(window).height());
	};
	heightDetect()
	$(window).resize(function()  {
		heightDetect();
	});	

	$(".toggle_mnu").click(function() {
		$(".top_mnu").removeClass("hidden");
	}).append("<span>");


	// $(".toggle_mnu").click(function() {
	// 	if ($(".top_mnu").is(":visible")) {
	// 		$(".top_mnu").addClass("hidden");
	// 	} else {
	// 		$(".top_mnu").removeClass("hidden");
	// 	};
	// });

	$(".top_mnu ul li a").click(function() { 
	$(".top_mnu").addClass("hidden"); });

	// //Навигация по Landing Page
	// //$(".top_mnu") - это верхняя панель со ссылками.
	// //Ссылки вида <a href="#contacts">Контакты</a>
	// $(".top_mnu").navigation();

	// //Добавляет классы дочерним блокам .block для анимации
	// //Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

	// //Плавный скролл до блока .div по клику на .scroll
	// //Документация: https://github.com/flesler/jquery.scrollTo
	// $("a.scroll").click(function() {
	// 	$.scrollTo($(".div"), 800, {
	// 		offset: -90
	// 	});
	// });

	

	// //Кнопка "Наверх"
	// //Документация:
	// //http://api.jquery.com/scrolltop/
	// //http://api.jquery.com/animate/
	// $("#top").click(function () {
	// 	$("body, html").animate({
	// 		scrollTop: 0
	// 	}, 800);
	// 	return false;
	// });
	
	// //Аякс отправка форм
	// //Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.fancybox.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

});