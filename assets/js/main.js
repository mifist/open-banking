/**
 * Created by wp-2-10 on 20.11.2017.
 */


$(document).ready(function(){
	
	if(window.screen.width>=770) {
		$('.home-desc-wrap, .news-wrap, .explor-div, .more-links-item, .product-slider .item > div').matchHeight({ property: 'min-height' });
			el = '';
		
	}
	
	$('.filter-btn').click(function(){
		$(this).toggleClass('active');
	});
	
	// profile edit
	$('.btn-edit').click(function(){
		$(this).removeClass('shows');
		$('.profile-details').addClass('edit-details');
		$(this).addClass('hide');
		$('.btn-save, .btn-cancel').removeClass('hide');
	});
	$('.btn-save, .btn-cancel').click(function(){
		$('.profile-details').removeClass('edit-details');
		$('.btn-edit').removeClass('hide').addClass('shows');
		$(this).addClass('hide');
	});
	// company edit
	$('.btn-edit-company').click(function(){
		$(this).removeClass('shows');
		$('.company-wrap').addClass('edit-company');
		$(this).addClass('hide');
		$('.btn-save-company, .btn-cancel-company').removeClass('hide');
		$('.company-item form.link').removeClass('hide').addClass('shows');
		$('.company-item .media-link').removeClass('hide').addClass('shows');
		$('.company-item .social-choice').removeClass('hide').addClass('shows');
		$('.company-link').removeClass('shows').addClass('hide');
        $('.media-link-span').removeClass('hide').addClass('shows');
		
	});
	$('.btn-save-company, .btn-cancel-company').click(function(){
		$('.company-wrap').removeClass('edit-company');
		$('.btn-edit-company').removeClass('hide').addClass('shows');
		$(this).addClass('hide');
		$('.company-item form.link').removeClass('shows').addClass('hide');
		$('.company-item .media-link').removeClass('shows').addClass('hide');
		$('.company-item .social-choice').removeClass('shows').addClass('hide');
		$('.company-link').removeClass('hide').addClass('shows');
        $('.media-link-span').removeClass('shows').addClass('hide');
	});
	$('form input.input-drag').change(function () {
		$('form span.placeholder').text(this.files.length + " file(s) selected");
	});
	
// Configure/customize these variables.
	var showsChar = 180;  // How many characters are showsn by default
	var ellipsestext = "";
	var moretext = "[More]";
	var lesstext = "[Hide]";
	
	
	$('.more').each(function() {
		var content = $(this).html();
		
		if(content.length > showsChar) {
			
			var c = content.substr(0, showsChar);
			var h = content.substr(showsChar, content.length - showsChar);
			
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
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $(".header-top").addClass("darkHeader");
        }
        if (scroll <= 500) {
            $(".header-top").removeClass("darkHeader");
        }

    });


});