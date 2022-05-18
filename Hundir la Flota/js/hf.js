//Al pulsar el boton de facil se cambiara la dificultad en el local storage y volvera a cargarrse el juego
//para facil
const boton_facil = document.getElementById("btn_facil");
boton_facil.addEventListener("click", () => {
  var dificultad = localStorage.setItem(`dificultad:`, `facil`);
  cargar_numeros_barcos();
  location.reload();
});
//para normal
const boton_normal = document.getElementById("btn_normal");
boton_normal.addEventListener("click", () => {
  var dificultad = localStorage.setItem(`dificultad:`, `normal`);
  cargar_numeros_barcos();
  location.reload();
});
//para dificil
const boton_dificil = document.getElementById("btn_dificil");
boton_dificil.addEventListener("click", () => {
  var dificultad = localStorage.setItem(`dificultad:`, `dificil`);
  cargar_numeros_barcos();
  location.reload();
});
//Con el DOM cogemos el boton de reiniciar y llamamos al la operacion reiniciar
const boton_reiniciar = document.getElementById("btn_reiniciar"); 
boton_reiniciar.addEventListener("click", () => {
  location.reload();
});

//Funcion para coger el numero de barcos y tipo del Json(dificultad.json) segun la dificultad que tengamos o seleccionemos
function cargar_numeros_barcos() {
  var dificultad = localStorage.getItem("dificultad:"); // almacenamos en la variable la dificultad que esta en local
  //Usando la asincronia cogemos los datos del fichero dificultad.json
  async function validar_dificultad(dificultad) {
    let response = await fetch("js/dificultad.json");//guardamos los datos del fichero fichero
    let arrayjson = await response.json();//lo almacenamos en un array
    return arrayjson;
  }

  (async function () {
    let arrayjson = await validar_dificultad(dificultad);
    for (const key of arrayjson) {
      // creamos las variables para luego almacenar datos dependiendo de la dificultad
      var portaaviones = "";
      var acorazado = "";
      var buque = "";
      var lancha = "";
      //Segun la dificultad almacenaremos en las variables anteriores un numero de barcos u otro.
      //Esto estaria ams depurado con un switch pero no consegui hacerlo 
      //la key es solo el numero de barcos que hay 
      if (dificultad == "facil") {
        portaaviones = key.facil.portaavione;
        acorazado = key.facil.acorazado;
        buque = key.facil.buque;
        lancha = key.facil.lancha;
      } else if (dificultad == "normal") {
        portaaviones = key.normal.portaavione;
        acorazado = key.normal.acorazado;
        buque = key.normal.buque;
        lancha = key.normal.lancha;
      } else {
        portaaviones = key.dificil.portaavione;
        acorazado = key.dificil.acorazado;
        buque = key.dificil.buque;
        lancha = key.dificil.lancha;
      }
      //Ahora guradamos los datos obtenidos en local para luego poder cogerlos en otras funciones
      var num_portaaviones_local = localStorage.setItem(`portaaviones:`, `${portaaviones}`);
      var num_acorazado_local = localStorage.setItem(`acorazado:`, `${acorazado}`);
      var num_buque_local = localStorage.setItem(`buque:`, `${buque}`);
      var num_lancha_local = localStorage.setItem(`lancha:`, `${lancha}`);
      
    }
  })();
}
//LLamamos a la funcion cargar_numeros_barcos()
cargar_numeros_barcos();

//Esta funcion crea la tabla que veremos en la interfaz tambien les asigna un ID(super importante por que es con lo que trabajaremos)
function crear_tabla() {
  //funcion para hacer la tabla con los id
  var tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
  var tabla_inicial = "<table>";
  //Bucle para las filas
  for (let i = 0; i < 10; i++) {
    tabla_inicial += "<tr>";
    //bucle para las columnas y con la variable $i y la varibale $x le damos un nombre en este caso un numero de identificador a cada celda
    for (let x = 0; x < 10; x++) {
      tabla_inicial += `<td><input type="button" id=${i}${x}></td>`;
    }
    tabla_inicial += "</tr>";
  }
  tabla_inicial += "</table>";
  tabla.innerHTML = tabla_inicial;
}
//LLamamos a la funcion crear_tabla()
crear_tabla();
//Funcion para la direcion a la hora de colocar los barcos   si da 1 sera horizontal y si es 0 sera vertical
function direcccccion2(){
    min_direccion = 0;
    max_direccion = 1;
        var barcos_direccion = Math.floor(
            Math.random() * (max_direccion - min_direccion +1 ) + min_direccion
        );
         //Guardamos el numeo de la direccion que nos da en local
        localStorage.setItem(`barcos_direccion:`, `${barcos_direccion}`);  
}
 //Funcion para hacer un numerio aleatorio entre en 0 y el 9 para usarlo en la colocacion de los barcos   
function al_num(){
        min = 0;
        max = 9;
        var num = Math.floor(
            Math.random() * (max - min +1 ) + min
        );
        //Guardamos el numero de la casilla en local
        localStorage.setItem(`num:`, `${num}`);
}
//Funcion para poner los barcos aleatoriamente segun su dificultad     
function ordenar2(){
  //Llamamos al la funcion de la direccion para que nos de una de las direcciones
    direcccccion2();
        // Creamos las variables del numero de casillas que ocupa cada barco
        var portaaviones = 4;
        var acorazado = 3;
        var buque = 2;
        var lancha = 1;
        //Este sera el array iniciarl con el cual luegotrabajaremos poniendo los barcos de manera aleatoria
        var tabla0 = [
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
            ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
          ];
          var barco = "x";//creamos la variables para los barcos que sera una x
          var dificultad = localStorage.getItem("dificultad:");//cogemos de local la dificultad y la almacenamos en una variables
          var num_barcos_total = "";


        //Para saber cuantas veces se tiene que repetir el bucle dependiendo del numero de barcos 
        if(dificultad == "dificil"){
            num_barcos_total = 3;
        }else if (dificultad == "normal") {
            num_barcos_total = 4;
        }else if (dificultad == "facil"){
            num_barcos_total = 10;
        }else{
            alert("Ha ocurrido un error");
        }         
          
          
          //Creamos un contador para saber el numero de veces que se repite
          var contador1 = 0;
          //Cogemos de local el numero de cada barco que ahy
          var num_portaaviones = localStorage.getItem("portaaviones:");
          var num_acorazados = localStorage.getItem("acorazado:");
          var num_buques = localStorage.getItem("buque:");
          var num_lanchas = localStorage.getItem("lancha:");
        //Bucle para colocar los barcos segun el numero de barcos que haya
        for (let x = 0; x < num_barcos_total; x++) {
            direcccccion2();//Volvemos a llamar a la funcion de direccion
            contador1 = contador1 +1 ;
            var num_casillas = localStorage.getItem("num_casillas:");
            var barcos_direccion = localStorage.getItem("barcos_direccion:");
            var contador = num_barcos_total;
            //Este IF es el encargadfo de situar los portaaviones
            if (num_portaaviones == 1) {
                al_num();//Llamamos a la funcion del numero aleatorio(0-9)
                var num = localStorage.getItem("num:");
                //Bucle para colocar los portaaviones en un lugar aleatorio
                for (let p = 0; p < num_portaaviones; p++) {
                    direcccccion2();//Llamamos a la funcion direccion2() para saber si lo vamos a colocar en horizontal(0) o vertical(1)
                    if(barcos_direccion == 0 ){
                        for (let i = 0; i < 4; i++) {
                            tabla0[num][i] = barco;  
                        }
                    }else{
                        for (let i = 0; i < 4; i++) {
                            tabla0[i][num] = barco;      
                        }
                    } 
                    num_portaaviones = num_portaaviones - 1;
                } 
            }else if(num_acorazados >= 1){//Esta IF es para situar los acorazados
                al_num();//Llamamos a la funcion del numero aleatorio(0-9)
                var num = localStorage.getItem("num:");
                //Bucle para colocar los acorazados en un lugar aleatorio
                for (let a = 0; a < num_acorazados; a++) {
                    direcccccion2();//Llamamos a la funcion direccion2() para saber si lo vamos a colocar en horizontal(0) o vertical(1)
                    if(barcos_direccion == 0 ){
                        for (let i = 0; i < 3; i++) {
                            //Con este IF nos aseguramos de que no coloquemos un barco en encima de otro
                             if (tabla0[num][i].value == barco) {
                                 num = num + 1;
                                
                             }else{
                                tabla0[num][i] = barco; 
                            }
                        }
                    }else{
                        for (let i = 0; i < 3; i++) {
                            //Con este IF nos aseguramos de que no coloquemos un barco en encima de otro
                            if (tabla0[i][num].value == barco) {
                                num = num + 1;
                                
                            }else{
                                tabla0[i][num] = barco; 
                            }
                        }
                    }  
                    num_acorazados = num_acorazados - 1;
                }
            }else if(num_buques >= 1){ //Cargar los buques
                al_num();//Llamamos a la funcion del numero aleatorio(0-9)
                var num = localStorage.getItem("num:");
                //Bucle para colocar los buques en un lugar aleatorio
                for (let b = 0; b < num_buques; b++) {
                    direcccccion2();//Llamamos a la funcion direccion2() para saber si lo vamos a colocar en horizontal(0) o vertical(1)
                    if(barcos_direccion == 0 ){
                        for (let i = 0; i < 2; i++) {
                            //Con este IF nos aseguramos de que no coloquemos un barco en encima de otro
                             if (tabla0[num][i].value == barco) {
                                 num = num + 1;
                                
                             }else{
                                tabla0[num][i] = barco; 
                            } 
                        }
                    }else{
                        for (let i = 0; i < 2; i++) {
                            //Con este IF nos aseguramos de que no coloquemos un barco en encima de otro
                            if (tabla0[i][num].value == barco) {
                                num = num + 1;
                                
                          }else{
                                tabla0[i][num] = barco; 
                            }
                              
                        }
                    }  
                    num_buques = num_buques - 1;
                }
            }else if(num_lanchas >= 1){//Cargar los lanchas
                al_num();//Llamamos a la funcion del numero aleatorio(0-9)
                var num = localStorage.getItem("num:"); 
                 //Bucle para colocar las lanchas en un lugar aleatorio
                for (let c = 0; c < num_lanchas; c++) {
                    direcccccion2();//Llamamos a la funcion direccion2() para saber si lo vamos a colocar en horizontal(0) o vertical(1)
                    if(barcos_direccion == 0 ){
                        for (let i = 0; i < 1; i++) {
                            //Con este IF nos aseguramos de que no coloquemos un barco en encima de otro
                            if (tabla0[num][i].value == barco) {
                                num = num + 1;
                                
                             }else{
                                tabla0[num][i] = barco; 
                            } 
                        }
                    }else{
                        for (let i = 0; i < 1; i++) {
                            //Con este IF nos aseguramos de que no coloquemos un barco en encima de otro
                             if (tabla0[i][num].value == barco) {
                               num = num + 1;
                                
                            }else{
                            tabla0[i][num] = barco; 
                             }
                            
                        }
                    }  
                num_lancha = num_lanchas - 1;
                }
            }else{
               alert("Algo fallo");
            }
        }

        // console.log(` ${dificultad}`);
        // console.log(tabla0);
        return tabla0;
        
        
} 
//Funcion para calcular el numero de casillas de cada barco   
function calcular_casillas_barcos() {
  // Creamos las variables de lo que ocupa cada clase de barco
  var casillas_portaaviones = 4;
  var casillas_acorazado = 3;
  var casillas_buque = 2;
  var casillas_lancha = 1;
  //Recuperamos del local el numero total de barcos y su tipo segun la dificultad 
  var num_portaaviones = localStorage.getItem("poortaviones:");
  var num_acorazado = localStorage.getItem("acorazado:");
  var num_buque = localStorage.getItem("buque:");
  var num_lancha = localStorage.getItem("lancha:");
  //Calculamos las casillas que ocupan cada tipo de barcos segun el numero de su tipo que existan
  var num_total_portaaviones = casillas_portaaviones * num_portaaviones;
  var num_total_acorazado = casillas_acorazado * num_acorazado;
  var num_total_buque = casillas_buque * num_buque;
  var num_total_lancha = casillas_lancha * num_lancha;
  //sumamos el numero total de casillas que ocupan segun su dificultad
  var total_casillas_barcos =
    num_total_portaaviones +
    num_total_acorazado +
    num_total_buque +
    num_total_lancha;
  //Guardamos el numero total de casillas en local
  var todoslosbarcos = localStorage.setItem(`num_total_casillas`, `${total_casillas_barcos}`);
}

function btn_dom() {
  //LLamamos a la calcular_casillas_barcos()
  calcular_casillas_barcos();
  var tabla = ordenar2();//En esta variable almacenamos la tabla generada en la funcion ordenar2() la conseguimos gracais al return
  var num_total_casillas = localStorage.getItem("num_total_casillas");//cogemos de local el numero general de casillas que ocupan todos los barcos

  var num_casillas_barcos =  num_total_casillas; //aqui va el numero de casillas que ocupan todos los barcos
  var num_casillas_agua = 100 - num_casillas_barcos; //aqui van las casillas de agua segun el numero de barcos
  var contador_barcos_hundido = 0;// iniciamos a 0 un contador para los barcos hundidos
  var contador_agua = 0;// iniciamos a 0 un contador para cuadno no seleccionemos ningun barco
  //En este for recoremos toda la tabla y alm,acenamos todos sus ID
  for (let i = 0; i < 10; i++) {
    for (let x = 0; x < 10; x++) {
      const btn_tabla = document.getElementById(`${i}${x}`);
      //Con esto haremos que al hacer click con el raton encmia de una casilla el programa sepa que ID tiene y segun su ID hara una cosa u otra
      btn_tabla.addEventListener("click", () => {
        if (tabla[i][x] == "x") {//Si en el ID selecionado hay un barco (x) hara esto
          var boton_id = document.getElementById(`${i}${x}`);// almacenamos el boton con el id en una variable para facilitar su manejo despues
          boton_id.style.backgroundImage = `url(../img/explosion.jpg)`; // con esto cambiamos el color al pulsar una de las casills segun si tiene barco o no en este caso seria si hay barco
          boton_id.style.backgroundSize = `contain`;
          boton_id.disabled = true;// hacemos que si deshabilite la casilla seleccionada para que no se pueda volver a pinchar
          contador_barcos_hundido++;
          if (contador_barcos_hundido == num_casillas_barcos) {//Si consigues selecionar todos las casillas que tengan barcos se desplegara esta alerta
            Swal.fire({
              title: "Enhorabuena has ganado",
              confirmButtonText: "Seguir",
              background: "#99C8F2",
              color: "#3E688C",
              confirmButtonColor: "#081226",
              //las 4 siguientes opciones de configuracion son para que le tengas que dar si o si al boton de volver aun que se cierra a los pocos segundos
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              stopKeydownPropagation: false,
              timer: 5000, //para que se cierre en esos segundos
            });
          }
        } else {// Si en el ID selecionado hay agua (a) hara esto 
          var boton_id = document.getElementById(`${i}${x}`);
          boton_id.style.backgroundImage = `url(../img/agua.jpg)`; // con esto cambiamos el color al pulsar una de las casillas segun si tiene barco o no en este caso seria si no hay barco
          boton_id.disabled = true;// hacemos que si deshabilite la casilla seleccionada para que no se pueda volver a pinchar 
          contador_agua++;
          if (contador_agua == num_casillas_agua) {//Si consigues selecionar todos las casillas que tengan agua se desplegara esta alerta
            Swal.fire({
              title: "Lo siento has perdido",
              confirmButtonText: "Seguir",
              background: "#99C8F2",
              color: "#3E688C",
              confirmButtonColor: "#081226",
              //las 4 siguientes opciones de configuracion son para que le tengas que dar si o si al boton de volver aun que se cierra a los pocos segundos
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              stopKeydownPropagation: false,
              timer: 5000, //para que se cierre en esos segundos
            });
          }
        }
      });
    }
  }
}
//LLamamos a la funcion btn_dom()
btn_dom();

