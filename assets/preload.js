$(document).ready(function(){
	function preload(arrayOfImages) {
  
        var nbLoaded = 0,
        nbTotal = arrayOfImages.length;
        $(arrayOfImages).each(function()
        {  
            var $img = $('<img/>');
            $img[0].src = this;
            $img.one('load', function()
            {
                nbLoaded ++;
                if($(window).width() >= 960) {
                	if (nbLoaded==13) { $("body").removeClass("loading") }
                } else {
                	if (nbLoaded==13) { $("body").removeClass("loading") }
                }
            });
        });
    }
	
	if($(window).width() >= 960) {
		preload([
			'../design/pashupatinath_front.jpg',
			'../grid/cfsite.jpg',
			'../grid/spt.jpg',
			'../grid/uiux.jpg',
			'../grid/ichigo.jpg',
			'../grid/mediaplayer.jpg',
			'../grid/birds.jpg',
			'../background/uiux/bg_nb.jpg',
			'../background/birds/bg_nb.jpg',
			'../background/spt/bg_nb.jpg',
			'../background/cfsite/bg_nb.jpg',
			'../background/mediaplayer/bg_nb.jpg',
			'../background/ichigo/bg_nb.jpg',
		]);
	}
	else {
		preload([
			'../design/pashupatinath_front.jpg',
			'../grid/cfsite.jpg',
			'../grid/spt.jpg',
			'../grid/uiux.jpg',
			'../grid/ichigo.jpg',
			'../grid/mediaplayer.jpg',
			'../grid/birds.jpg',
			'../background/uiux/bg.jpg',
			'../background/birds/bg.jpg',
			'../background/spt/bg.jpg',
			'../background/cfsite/bg.jpg',
			'../background/mediaplayer/bg.jpg',
			'../background/ichigo/bg.jpg',
		]);
	};

	setTimeout(function(){ $("body").removeClass("loading"); }, 15000);
	setTimeout(function(){ $("#visas_style_div a.close").trigger('click'); }, 5000);
	
});