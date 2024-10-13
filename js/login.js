
var usuario="admin", contraseña="initpass", resultado=false; 

function validar()
{
    var fun_user= document.getElementById("user-input");
    var fun_pass= document.getElementById("pass-input");

    while(resultado==false)
    {
        if(fun_user!= usuario || fun_pass!=contraseña)
        {
            alert("Ah ah ah , you din´t say the magic word");
        }else
        {
            resultado=true;
        }    
    }

    window.location.href ="pages/main_page.html"; 

}



