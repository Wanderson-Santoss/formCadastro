$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(00) 12345-0000'
    });
    $('#cpf').mask('000.000.000-00',{
        placeholder:'000.000.000-00'
    });
    $('#cep').mask('00000-000',{
        placeholder:'12345-000'
    });

    $('form').validate({
        rules:{
            nomeCompleto: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cadCPF: {
                required: true
            },
            endereco: {
                required: false
            },
            cadCEP: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Por Favor, insira o seu nome completo',
            email: 'Por favor, insira o seu Email',
            telefone: 'Por favor, insira o seu número',
            cadCPF: 'Por favor, insira o seu CPF',
            cadCEP: 'Por favor, insira o seu CEP',
        },
        submitHandler: function(form){
            alert('Cadastro realizado com sucesso')
            return 0;
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existe ${camposIncorretos} campos incorreto`);
            }
        }
    });
});