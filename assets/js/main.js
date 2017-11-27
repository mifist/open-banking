/**
 * Created by wp-2-10 on 20.11.2017.
 */


$(document).ready(function(){
	
	if(window.screen.width>=770) {
		$('.home-desc-wrap, .news-wrap, .more-links-item, .product-slider .item > div').matchHeight({ property: 'min-height' });
			el = '';
	}
	
	$('.filter-btn').click(function(){
		$(this).toggleClass('active');
	});
	
// Configure/customize these variables.
	var showChar = 180;  // How many characters are shown by default
	var ellipsestext = "";
	var moretext = "[More]";
	var lesstext = "[Hide]";
	
	
	$('.more').each(function() {
		var content = $(this).html();
		
		if(content.length > showChar) {
			
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			
			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="btn-more">' + moretext + '</a></span>';
			
			$(this).html(html);
		}
		
	});
	
	$(".btn-more").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
	
	
});