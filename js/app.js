function new_element(){
    console.log("entro") //
$("h1").append("<p>JAVA</p>") 
$("h1").append("<p>JAVA</p>")
$("h1").append("<p>JAVA</p>") 
//$("h1").append("<p><img src='img/ss.jpg'><p>")
$("body").append("<p><img src='img/ss.jpg'><p>")

}

// git init practica

$("#btn_clic").click(function()  { //con # indica el id del elemento
    console.log("entro2")
alert("ALERTA AL CLICK");


});




//Array
var frutas = ["uvas","platano","fresa","mango"]


//jquery
$.each(frutas,function(numero_fruta,nombre_fruta){

   // console.log(numero_fruta,nombre_fruta)

    $("#lista_frutas").append("<li type='square'>"   +nombre_fruta+"</li>") ;
});



$("#btn_obten_user").click(function(){
    $("#lista_user").e0mpty()

    $.ajax({

        url: "https://jsonplaceholder.typicode.com/users",
        type:"get",
        dataType: "json", 
        success:function(respuesta_servidor){
          
            $.each(respuesta_servidor,function(numero_usuario,usuario){
                console.log(numero_usuario,usuario);
                $("#lista_user").append("<li> <b>Nombre:</b>"+usuario.name+ "," +  "<b> Email: </b>"  + usuario.email+"</li> ")

            });

        

        }
    });

});


//ENVIA DATOS JSON
$("#EnviarDatos").click(function(event)  { //con # indica el id del elemento
   //
    //console.log("entro3")
    //OBTIENE DATOS DEL FORM
    var email_usuario =  $("#mail_user").val();
    var pass_user     = $("#pass_user").val();

    //ARMA JSON
    var datos_json={
        "usuario_mail":email_usuario,
        "pass_user"   : pass_user
    }

    var endpoint = "https://sujus.free.beeceptor.com";

    //jQuery.post( url [, data ] [, success ] [, dataType ] )
    $.post(endpoint, datos_json);



//https://sujus.free.beeceptor.com



    console.log(datos_json) 
    event.preventDefault(); //cancela enviar información y refrescar



});
