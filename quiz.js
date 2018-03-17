$(document).ready(function() {

	var $scroll = $('#scroll');
	var $play = $('#play');
	var $true1 = $('#true-1');
	var $true2 = $('#true-2');
	var $true3 = $('#true-3');
	var $true4 = $('#true-4');
	var $true5 = $('#true-5');
	var $false = $('.false');
	var $gameOver = $('#game-over')

	$play.on('click', function() {
		$scroll.css('top', '410px');
	});

	$true1.on('click', function() {
		$scroll.css('top', '630px');
	});

	$true2.on('click', function() {
		$scroll.css('top', '850px');
	})

	$true3.on('click', function() {
		$scroll.css('top', '1070px');
	})

	$true4.on('click', function() {
		$scroll.css('top', '1290px');
	})

	$true5.on('click', function() {
		$scroll.css('top', '1510px');
	})

	$false.on('click', function() {
		$gameOver.css('visibility', 'visible');
	});

});