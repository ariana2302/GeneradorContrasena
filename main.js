let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña =document.getElementById('contrasena');

const cadenaCaracteres= 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()'; //variable que no cambia en el tiempo

function generar(){

    let numeroDigitado = parseInt (cantidad.value);//parseInt transforma un String a int

    if(numeroDigitado < 6 ){
        alert("La contraseña debe tener más de 6 caracteres");//Funcion para que salga una notificación como ventana emergente
    }else{

    let password ='';
    //bucle for
    for (let i=0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }
    contrasena.value=password;
    
    }
    verificarFortaleza(contrasena.value);
}

function limpiar(){
    document.getElementById('cantidad').value='';
    document.getElementById('contrasena').value='';
}

function verificarFortaleza(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneSimbolo = /[!@#$%^&*()]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneSimbolo) {
        alert("Contraseña Fuerte");
    } else {
        alert("Contraseña Débil");
    }
}

//let texto = "texto";
//console.log(typeof texto); //Para imprimir en consola el valor de la variable
//typeof imprime el tipo de dato de la variable

//Estructura condicional


//Funcion docuemnt para traer datos ingresados por el ususario
//document.getElementById();


//<input class="container__input" type="number" id="cantidad" ></input>



















