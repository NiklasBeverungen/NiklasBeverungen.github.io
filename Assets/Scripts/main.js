$(document).ready(function($){
	$(".image-preview").sliphover({
		target: '.sliphover-item',
		caption: 'data-caption'
	});

	adjustPreviewImagePaddings();
});
