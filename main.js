$(document).ready(function(){
    $('header button').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome.',
            email: 'Por favor, digite seu E-mail.',
            telefone: 'Por favor, digite um telefone.'
        },
        submitHandler: function(form) {
            e.preventDefault();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})