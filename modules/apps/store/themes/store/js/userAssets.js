$(function(){
	


$('button[data-toggle=tooltip]').tooltip();

$(document).on('click', '#myasset-container .asset-remove-btn', function() {
caramel.get('/apis/remove', {
	    aid: $(this).attr('data-aid'),
	    type: $(this).attr('type')
            }, function (data) {
		location.reload();
            });
//console.log("removing : "+$(this).attr('data-aid')+" type :"+$(this).attr('type'));
});

$('.embed-snippet').hide();

$(document).on('click', '#myasset-container .btn-embed', function() {
    $(this).closest('.store-my-item').find('.embed-snippet').toggle(50);
    return false;
});

	$("#asset-in-gadget").carouFredSel({
		items:4,
		width:"100%",
		height:"300px",
		infinite: false,
		auto : false,
		circular: false,		
		pagination  : "#own-asset-slideshow-pag-gadget"

	});
	
	
	$("#asset-in-site").carouFredSel({
		items:4,
		width:"100%",
		height:"300px",
		infinite: false,
		auto : false,
		circular: false,		
		pagination  : "#own-asset-slideshow-pag-site"

	});
	

});