
var aparted = false;

$("#open").click(function () {

	if (!aparted) {
		var typed = new Typed('.letter', {
			strings: [
				"亲爱的小宝贝^200<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一封只写给你的信，给我一生所爱的女孩子<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很荣幸与你相遇，我也很欢喜将与你度过后半生<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我不是个完美的人，但我会将所有的美好都送与你<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;余生还请多多指教（宝贝来旋转木马）<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱你的<br/><p style='float:right; display:block; width:80px;'>^1000哥哥</p>"],
			typeSpeed: 130,
			backSpeed: 50
		});

		$('#open').find("span").eq(0).css('background-position', "0 -150px");

		aparted = true;

		var music = document.getElementById('music2');
		if (music.paused) {
			music.play();
			$('#music_btn2').css("opacity", "1");
		}
	}

});

function playPause() {
	var music = document.getElementById('music2');
	var music_btn = $('#music_btn2');

	if (music.paused) {
		music.play();
		music_btn.css("opacity", "1");
	}
	else {
		music.pause();
		music_btn.css("opacity", "0.2");
	}
}


window.onload = function () {

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart', function (event) { if (event.touches.length > 1) event.preventDefault(); });

	var lastTouchEnd = 0;

	document.addEventListener('touchend', function (event) {

		var now = (new Date()).getTime();
		if (now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;

	}, false);

	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');

}
