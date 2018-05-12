//*************scroll + map***************
function initMap() {
	var coordinates = { lat: 59.879795, lng: 30.400109 },
		image = 'img/map-marker.png';
		popupContent = '<div class="info_content">' +
			'<font size="3"><strong>ПРОМТЕХ СПБ</strong>' +
			'<font size="2"><p>г.Санкт-Петербург, ул.Белы Куна д.30, офис 301</p>' +
			'</div>'
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 59.879795, lng: 30.400109 },
		zoom: 16
	});
	var marker = new google.maps.Marker({
		map: map,
		position: coordinates,
		icon: image
	});
	infowindow = new google.maps.InfoWindow({
		content: popupContent
	});
	//I cool man here!
	//fjsdfkjsdlfjls
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
};
$(document).ready(function(){
	$('.js-go').click( function(){
		var scroll_el = $(this).data('place');
		if ($(scroll_el).length != 0) {
			var myScroll = $(scroll_el).offset().top - 60;
			$('html, body').animate({ scrollTop: myScroll}, 1000);
		};
		return false;
	});
});

$('.burger_button').on('click', function() {
	$('.menuDesktop').addClass('animit opened');
});

$('.menu_close, .js-go').on('click', function() {
	$('.menuDesktop').removeClass('opened');
});

$(document).ready(function(){
	initMap();
});
$('.screen1 .btn').on('click', function() {
	$('.back-1').css('zIndex', '200');
	$('.back-1').css('visibility', 'visible');
	$('.body').css('overflow','hidden');
});
$('.popup-close-block-1').on('click', function() {
	$('.back-1').css('zIndex', '-1');
	$('.back-1').css('visibility', 'hidden');
	$('.body').css('overflow','auto');
});
$('.popup-block-1').click(function(e) {
	e.stopPropagation();
});
$('.back-1').on('click', function() {
	$('.back-1').css('zIndex', '-1');
	$('.back-1').css('visibility', 'hidden');
	$('.body').css('overflow','auto');
});
$('.popup-close-thanks').on('click', function() {
	$('.back-thanks').css('zIndex', '-1');
	$('.back-thanks').css('visibility', 'hidden');
	$('.body').css('overflow','auto');
});
$('.popup-thanks').click(function(e) {
	e.stopPropagation();
});
$('.back-thanks').on('click', function() {
	$('.back-thanks').css('zIndex', '-1');
	$('.back-thanks').css('visibility', 'hidden');
	$('.body').css('overflow','auto');
});
$(document).keydown(function(e) {
	if( e.keyCode === 27 ) {
		var back1 = $('.back-1').css('visibility');
		if(back1 == 'visible'){
			$('.back-1').css('zIndex', '-1');
			$('.back-1').css('visibility', 'hidden');
			$('.body').css('overflow','auto');
			return;
		};
	}
});

$('form').submit(function(event){
	event.preventDefault();
	var target = $(this);
	var data = target.serialize();
	$.ajax({
		url:'http://instrument.promt.spb.ru/mail/mail.php',
		type: 'POST',
		data: data,
		success:function(){
			$('.back-1').css('zIndex', '-1');
			$('.back-1').css('visibility', 'hidden');
			$('.back-thanks').css('zIndex', '200');
			$('.back-thanks').css('visibility', 'visible');
			$('.body').css('overflow','hidden');
		}
	})
});