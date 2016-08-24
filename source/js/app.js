// JavaScript Document


/* function to add class */
function openOffcanvas($element){
	$element.addClass('open-offcanvas');
}

/* function to remove class */
function hideOffcanvas($element){
	$element.removeClass('open-offcanvas');
}

function slideMenuicon($element){
	$element.addClass('slide-menu-icon');
}

$('.open-off').on('click', function(){
	openOffcanvas($('html'));
});

/* slide to show the side-bar menu */
$('html, body').on('swiperight', function(){
	openOffcanvas($('html'));
});
/* slide to hide the side-bar menu */
$('html, body').on('swipeleft', function(){
	hideOffcanvas($('html'));
});

/* hide the side-bar menu by clicking out of the bar area */
$('html, body').on('click', function(e){
	if(this === e.target)
	hideOffcanvas($('html'))
});