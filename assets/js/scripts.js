$(document).ready(function() {
	function scrollStat(){
		if ($(this).scrollTop() > 20) {
            $('.navbar-default').addClass("sticky");
        } else {
            $('.navbar-default').removeClass("sticky");
        }
	}
	scrollStat();
	
    $(window).scroll(function() {
        scrollStat();
    });
});