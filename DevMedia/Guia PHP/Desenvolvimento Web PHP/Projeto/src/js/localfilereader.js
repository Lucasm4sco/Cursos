(function($){

    if(!window.FileReader) { $('#avatar').remove(); }

    $('#file').on('change', function(e) {
        const $avatar = $('#avatar');
        const url = e.target.files;

        if(url.length !== 1 || !url[0].type.match('image')){
            $(e.target).val('');

            $('.modal').modal('show');
            Holder.run({images : '#avatar'});

            $('.modal button')[0].onclick = () => $('.modal').modal('hide');
            $('.modal button')[1].onclick = () => $('.modal').modal('hide');

            return false
        }

        const file = url[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            $avatar
                .attr('src', e.target.result)
                .attr('alt', encodeURI(file.name));
        } 
        reader.readAsDataURL(file);
    })
}
)(jQuery);