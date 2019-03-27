$(document).ready(function(){

    $('#normalCalculatorForm').on('click', 'button', function(){

        var num1 = Number($('#num1').val());
        var num2 = Number($('#num2').val());

        if ($(this).hasClass('add')) {
            $('#answer').html(num1 + num2);
        } else if ($(this).hasClass('subtract')) {
            $('#answer').html(num1 - num2);
        } else if ($(this).hasClass('multiply')) {
            $('#answer').html(num1 * num2);
        } else if ($(this).hasClass('divide')) {
            $('#answer').html(num1 / num2);
        }
        
    })

})