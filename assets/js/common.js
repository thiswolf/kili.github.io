$(document).ready(function(){
	
var controller = $.superscrollorama();
// showcase tweens

controller.addTween('.op', TweenMax.from( $('.op'), 1, {css:{opacity:0}, ease:Quad.easeOut}));				
//$.scrollIt();

/**
Media Queries Debug Helper
---------------------------
$( window ).resize(function() {
var current_width = $('.les_body').width();
$('#contact_me').html(current_width);
});
*/   
});