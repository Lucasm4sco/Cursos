( function($){

    const maskBehavior = function(val) {
        return val.replace(/\d/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }

    const options = {
        onKeyPress: function (val, e, fiel, options) {
            fiel.mask(maskBehavior.apply({}, arguments), options);
        }
    } 

    $('#telefone').mask(maskBehavior, options)
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
    $('#rg').mask('00.000.000-0');

})(jQuery);