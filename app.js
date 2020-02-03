$(document).ready(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        
        var data = $(this).serializeArray();
        data.push({ name: 'tag', value: 'login'});

        $.ajax({
            url: 'process.php',
            type: 'post',
            dataType: 'json',
            data: data,
            beforeSend: function(){
                $('.fa').css('display', 'inline');
                console.log(data);    
            }
        })
        .done(function(){
            setTimeout(() => {
                $('span').html("Correcto");                
            }, 600);
        })
        .fail(function(){
            setTimeout(() => {
                $('span').html("Falso");                
            }, 600);
        })
        .always(function(){
            setTimeout(function () {
                $('.fa').hide();                
            }, 500);
        });
    });
});