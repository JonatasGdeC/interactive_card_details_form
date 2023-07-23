$(document).ready(function(){
    const inputName = $('#card-houder-name');
    const inputNumber = $('#card-of-number');
    const inputDateMonth = $('#exp-date-month');
    const inputDateYear = $('#exp-date-year');
    const inputCVC = $('#card-of-cvc');

    const mensagemErroNome = $('#error-name');
    const mensagemErroNomeComNumero = $('#error-name-with-number');
    const mensagemErroNumero = $('#error-number');
    const mensagemErroMeseAno = $('#error-month-year');
    const mensagemErroCVC = $('#error-cvc');

    const cardName = $('#card-name');
    const cardNumber = $('#card-number');
    const cardMonth = $('#card-month');
    const cardYear = $('#card-year');
    const cardCVC = $('#card-cvc');

    inputNumber.mask('0000 0000 0000 0000');
    inputDateMonth.mask('00');
    inputDateYear.mask('00');
    inputCVC.mask('000');

    inputName.keyup(function nomePreenchido(e){
        if(e.target.value === '' || e.target.value === ' '){
            mensagemErroNome.css({display:'block'});
            inputName.css({border:'2px solid #FF5050'})
            mensagemErroNomeComNumero.css({display:'none'});
            cardName.html('JANE APPLESEED')
        } else if (e.target.value >= 0 || e.target.value <= 0){
            mensagemErroNomeComNumero.css({display:'block'});
            inputName.css({border:'2px solid #FF5050'})
            mensagemErroNome.css({display:'none'});
            cardName.html('JANE APPLESEED')
        } else{
            mensagemErroNome.css({display:'none'});
            mensagemErroNomeComNumero.css({display:'none'});
            inputName.css({border:'2px solid #DFDEE0'});
            cardName.html(e.target.value)
        }
    });

    inputNumber.keyup(function numeroPreenchido(e){
        if(e.target.value === '' || e.target.value === ' '){
            mensagemErroNumero.css({display:'block'});
            inputNumber.css({border:'2px solid #FF5050'});
            cardNumber.html('0000 0000 0000 0000')
        } else{
            mensagemErroNumero.css({display:'none'});
            inputNumber.css({border:'2px solid #DFDEE0'})
            cardNumber.html(e.target.value)
        }
    })

    inputDateMonth.keyup(function mesPreenchido(e){
        if(e.target.value < 1 || e.target.value > 12){
            mensagemErroMeseAno.css({display:'block'})
            inputDateMonth.css({border: '2px solid #FF5050'});
            cardMonth.html('00')
        } else{
            mensagemErroMeseAno.css({display:'none'});
            inputDateMonth.css({border: '2px solid #DFDEE0'})
            cardMonth.html(e.target.value)
        }
    })

    inputDateYear.keyup(function anoPreenchido(e){
        if(e.target.value < 23){
            mensagemErroMeseAno.css({display:'block'});
            inputDateYear.css({border:'2px solid #FF5050'});
            cardYear.html('00');
        } else{
            mensagemErroMeseAno.css({display:'none'});
            inputDateYear.css({border:'2px solid #DFDEE0'});
            cardYear.html(e.target.value)
        }
    })

    inputCVC.keyup(function cvcPreenchido(e){
        if(e.target.value === ''){
            mensagemErroCVC.css({display:'block'});
            inputCVC.css({border:'2px solid #FF5050'});
            cardCVC.html('000')
        } else{
            mensagemErroCVC.css({display:'none'});
            inputCVC.css({border:'2px solid #DFDEE0'});
            cardCVC.html(e.target.value)
        }
    })

    $('form').submit(function(evento){
        evento.preventDefault()
        if(inputName.val() ===''){
            mensagemErroNome.css({display:'block'});
            inputName.css({border:'2px solid #FF5050'})
        } else if (inputNumber.val() === ''){
            mensagemErroNumero.css({display:'block'});
            inputNumber.css({border:'2px solid #FF5050'});
        } else if(inputNumber.val().length < 19){
            mensagemErroNumero.css({display:'block'});
            inputNumber.css({border:'2px solid #FF5050'});
        } else if (inputDateMonth.val()=== ''||inputDateYear.val()===''){
            mensagemErroMeseAno.css({display:'block'})
            inputDateMonth.css({border: '2px solid #FF5050'});
            inputDateYear.css({border:'2px solid #FF5050'});
        } else if(inputCVC.val()===''){
            mensagemErroCVC.css({display:'block'});
            inputCVC.css({border:'2px solid #FF5050'});
        } else if(inputCVC.val().length<3){
            mensagemErroCVC.css({display:'block'});
            inputCVC.css({border:'2px solid #FF5050'});
        }
        else{
            $('form').css({display:'none'});
            $('.mensage-sucess').css({display:'block'})
        }
    })

    $('#continue-mensage-sucess').click(function(){
        $('.mensage-sucess').css({display:'none'})
        $('form').css({display:'flex'});
        inputName.val('');
        inputNumber.val('');
        inputDateMonth.val('');
        inputDateYear.val('');
        inputCVC.val('');
        cardName.html('JANE APPLESEED');
        cardNumber.html('0000 0000 0000 0000');
        cardMonth.html('00');
        cardYear.html('00');
        cardCVC.html('000');
    })
})