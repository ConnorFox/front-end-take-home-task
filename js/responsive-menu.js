// Opens and closes the sitemap accordion

$(".mobile-footer h5").click(function(){
	$(this).parent(".sitemap-accordion").toggleClass("sitemap-open"); 
	$('html, body').animate({ scrollTop: jQuery(this).offset().top - 170 }, 500 );
}
);
