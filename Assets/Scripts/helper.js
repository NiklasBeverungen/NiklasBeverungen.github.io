function adjustPreviewImagePaddings(){

	/*collect all imageContainers*/
	var previewImages = $('.trousers ul li');

	/*look if the last row is full*/
	var rest = function(){
		var restValue = parseInt(previewImages.length % 3);
		if (restValue === 0) {
			return 3;
		}
		return restValue;
	}();

	/*set the margins of all image continers*/
	for (var i = 0; i < previewImages.length; i++) {
		var currentImage = $(previewImages[i]);
		
		/*remove the the margin-left of every first container in every row(every third container)*/
		if (i % 3 === 0) {
			currentImage.css('margin-left', 0);
		}

		/*set the margin-bottom of every container to 20*/
		currentImage.css('margin-bottom', 20);
	}

	/*set the margin-bottom of every container in the last row to 0*/
	for (i = rest; i > 0; i--){
		$(previewImages[previewImages.length - i]).css('margin-bottom', 0);
	}
}