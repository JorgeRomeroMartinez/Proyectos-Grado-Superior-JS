
//ponemos las variables como const por que nunca van a cambiar 
const btnnumeros = document.getElementsByName('numero');// nombramos todos los botones de numeros en un solo paso
const btnoperacion = document.getElementsByName('opera');//nombramos todos los botones de operaciones en un solo paso
const btnigual = document.getElementsByName('igual')[0];//ponemos que nos devuelva solo la primera posicion del array
const btnborrar = document.getElementsByName('borrar')[0];//ponemos que nos devuelva solo la primera posicion del array

//ponemos la variable como car por que el resultado varia segun las operaciones
var resultado = document.getElementById('resultado');
var historial = document.getElementById('historial');
var hist = 0;
var operacion1 ='';//variable de la operacion anterior
var operacion2 ='';//variable de la operacion actual 
var operacion = '';//variable de la operacion que estamos haciendo que de primeras no tiene valor 
//Evento onclik

//La siguiente funcion sirve para coger los valores en esta caso de la variable btnnumeros que presionemos
btnnumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);//le enviamos a esa funcion el valor que hagamos click
    })
});

//Otra funcion como la anterior pero para las operaciones matematicas
btnoperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
        selecOPeracion(boton.innerText);//le enviamos a esa funcion el valor que hagamos click
    })
});

//Otra funcion que cuando presionamos el boton igual llama a la funcion calcular y a la de actualizar la pantalla
btnigual.addEventListener('click', function(){
    calcular();
    actualizarPantalla();
});



//Otra funcion que cuando presionamos el boton de borrar"C" llama a la funcion clear y a la de actualizar la pantalla
btnborrar.addEventListener('click', function(){
    clear();
    actualizarPantalla();
});

//En estos eventos ya tenemos la manera o forma de capturar lo que presionemos 

function selecOPeracion(op){
    if(operacion2 ==='') return;//si la operacion esta vacia sale por que no hay valores ni nada
    if(operacion1 !== ''){//si operacion anterior no esta vacia entra
        calcular();
    }
    operacion = op.toString();
    operacion1 = operacion2;
    operacion2 ='';

}

//funcion para calcular 
function calcular(){
    var calculo;
    const anterior = parseFloat(operacion1);
    const actual = parseFloat(operacion2);

    if(isNaN(operacion2) || isNaN(operacion1)) return;//si no cumple la condicion de ser numeros sale
    switch(operacion){
        case'+':
            calculo = anterior + actual;// en caso de que la operacion sea suma cogemos el valor anterior y lo sumamos al actual
            break;
        case'-':
            calculo = anterior - actual;// en caso de que la operacion sea resta cogemos el valor anterior y lo restamos al actual
            break;
        case'x':
            calculo = anterior * actual;// en caso de que la operacion sea multiplicacion cogemos el valor anterior y lo multiplicamos al actual
            break;
        case'/':
            calculo = anterior / actual;// en caso de que la operacion sea diviison cogemos el valor anterior y lo dividimos al actual
            break;
        case'√':
            calculo = Math.sqrt(anterior);// en caso de que la operacion sea √ hacemos la raiz del valor anterior
            break;
        case'x^y':
            calculo = Math.pow (anterior, actual);// en caso de que la operacion sea x^y devuelve el primer numero elevado al segundo
            break;
        case'log':
            calculo = Math.log(anterior);// en caso de que la operacion sea log hacemos el logaritmo del primer numero introducido
            break;
        case'cos':
            calculo = Math.cos(anterior) * actual;// en caso de que la operacion sea cos hacemos el coseno del primer valor por el segundo
            break;
        case'abs':
            calculo = Math.abs(anterior); //en caso de que la operacion sea abs devuelve el valor absoluto
            break;
        case'log10':
            calculo = Math.log10(anterior); //en caso de que la operacion sea log10 devuelve el logartimo de base 10
            break;
        case'log2':
            calculo = Math.log2(anterior); //en caso de que la operacion sea log2 devuelve el logartimo de base 2
            break;
        case'tan':
            calculo = Math.tan(anterior * Math.PI / 180); //en caso de que la operacion sea tang devuelve la tangente
            break;
        case'cosh':
            calculo = Math.cosh(anterior); //en caso de que la operacion sea cosh devuelve el coseno hiperbolico de un numero
            break;
        case'10x':
            calculo =Math.pow(10, anterior) ; //en caso de que la operacion sea atahn devuelve un arco hiperbólico de un numero
            break;
    }
    operacion2 = calculo;
    operacion1 = '';
    operacion = '';
}
    

function agregarNumero(num){
    operacion2 = operacion2.toString() + num.toString();
    actualizarPantalla();
}

//creamos la funcion para limpiar y volver a nombrar las variables de las operaciones a como las teniamos al principio
function clear(){
    operacion1='';
    operacion2='';
    operacion= '';
    hist = "";
}

//Definimos la funcion para que se muestre en el value del input con id resultado la operacion
function actualizarPantalla(){

    resultado.value = operacion2;
    hist = operacion1 + operacion + operacion2;
    historial.value = hist;
    
}

clear();