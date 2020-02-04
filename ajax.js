$(document).ready(function () {
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) =>{
            $('#resp').append('<p>' + element.first_name + " " + element.last_name + '</p>');
        });
    });

    
    $('#formulario').submit(function (e) { 
        e.preventDefault();
        
        var usuario = {
            name : $('input[name="username"]').val(),
            web : $('input[name="web"]').val()
        };
        console.log(usuario);        

        $.post($(this).attr('action'), usuario, function(response){
            console.log(response);        
        }).done(function () { 
            alert("USUARIO CREADO CORRECTAMENTE!");
        });

    });
});