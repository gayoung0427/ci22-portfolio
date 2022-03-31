$('#controls li a').click(
    function(e){
        e.preventDefault();
        var that = this,
            $that = $(that),
            id = that.id,
            gallery = $('#gallery');
        if (id == 'all') {
            gallery.find('img:hidden').fadeIn(1000);
        }
        else {
            gallery.find('img.' + id + ':hidden').fadeIn(1000);
            gallery.find('img').not('.' + id).fadeOut(1000);
        }
    });