(function ($){

    const $form = $('main form');

    // cancela o evento padrão do formulário
    $form.on('submit', function(e) {
        e.preventDefault();

        return false;
    });

    // configurações da função validate (a função submitHandler passada só irá executar se todos os itens forem validados corretamente)
    $form.validate({
        errorClass : 'input-error',
        errorElement : 'em',
        submitHandler : function (e) {

            // irá fazer o envio das informações pro backend
            $.ajax({
                url : $form.attr('action'),
                method : 'POST',
                data : new FormData($form[0]),
                contentType : false,
                cache : false,
                dataType: 'json',
                processData : false,
            })
                .done(function (data){
                    console.log(data);
                    console.log('ok');
                    const main = $('main');

                    main.find('.alert').remove();

                    if(!data.hasOwnProperty('code') || !data.hasOwnProperty('message')){
                        
                        main.prepend(
                            '<div class="alert alert-danger mt-2" role="alert">Ocorreu um erro inesperado.</div>'
                        );
                    } else {

                        main.prepend(
                            `<div class="alert alert-${data.code == 200 ? 'success' : 'danger'} mt-2" role="alert"> ${data.message}</div>`
                        );

                        if(data.code === 200){
                            $form.remove();
                        }

                    }

                    $('html, body').animate({ scrollTop: 0}, 'slow');

                })
            ;
            
        }
    });

}) (jQuery);