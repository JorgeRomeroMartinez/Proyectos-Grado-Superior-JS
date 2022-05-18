  /*
  
  ========================================================================================================================================
  ==  Es el juego del Ahorcado consiste en adivinar la palabra, mientras vas escribiendo letras, en caso de que metas una letra que     ==
  ==  no esta en la palabra te contara error y quitara vida y si pones una letra que ya habias puesto quitara vida tanto si esta en la  ==
  ==  palabra como si no(Hay que estar atento a las palabras que has introducido)                                                       ==
  ========================================================================================================================================

  */

  let palabras = Array("hamilton", "bottas", "verstappen", "perez", "norris", "ricciardo", "stroll", "vettel", "lecrel", "sainz", "alonso", "ocon", "gasly", "tsunoda", "raikkonen", "giovinazzi", "schumacher", "mazepin", "russell", "latifi");
  let palabra_adivinar ="";
  let palabra_oculta = "";
  let vidas = 6;
  let vidasn = -1;
  let ver = "";
  document.getElementById("boton").addEventListener("click", comprobar); //al presionar el boton(click) llama a la funcion comprobar
  document.getElementById("pista").addEventListener("click", pista); 
  iniciar();
  reiniciar();
  function iniciar(){
      palabra_oculta=palabras[Math.floor(Math.random()*palabras.length)];//Math.floor, redondear, Math random, un numero random del 0 al 1 multiplicado por lo que ocupe el array
      for (let i=0; i<palabra_oculta.length; i++ ){
          palabra_adivinar=palabra_adivinar+"_ ";// para almacenar los numeros de guiones necesarios de la palabra
      }
      document.getElementById("frase").innerHTML=palabra_adivinar;
  }
  function comprobar(){
      let letra = document.getElementById("letra").value.toLowerCase(); //toLowerCase() lo trasformo todo a minisculas
      palabra_oculta = palabra_oculta.toLowerCase(); //minusculas de la palabra aleatoria excogida
      let nuevo = "";
      for(let i=0; i<palabra_oculta.length; i++ ){//con este for comparamos si la letra escrita esta y la ponemos en la casilla quie toque 
          if(letra==palabra_oculta[i]){
              nuevo = nuevo + letra + " ";
          }else{
              nuevo = nuevo + palabra_adivinar[i*2] + " ";
          }
      }
       ver = ver + letra + " " //parte en la que pongo las letras que hemos introducido
       document.getElementById("ver").innerHTML="Las letras introducidas son: " + ver;

       
      if (nuevo == palabra_adivinar){//con este if vamos descontando vidas si no se encuentra la letraS
          vidas--;
          document.getElementById("vida").innerHTML="El número de vidas que quenan son: " + vidas;
          document.getElementById("img").innerHTML= `<img src="img/${vidas}.png"></img>`;          
      }
      palabra_adivinar = nuevo;
      document.getElementById("frase").innerHTML=palabra_adivinar;
      if(vidas==0){ // si vidas vale 0 muestra que has perdido
          alert("Has perdido lo siento");
          document.getElementById("solucion").innerHTML= `La palabra era: ${palabra_oculta}`;
      }
      if(palabra_adivinar.search("_")==-1){ // si no hay guiones muestra que has ganado
          alert("Has ganado Enhorabuena");
          location.reload();
      }
      if(vidas==-1){
        location.reload();
      }

      document.getElementById("letra").value="";
      document.getElementById("letra").focus();// estas lineas sirven para dejar en blnaco el imput donde asignamos las letras cada vez que le dasmo a comprobar
  }
  function pista(){
      if(palabra_oculta==palabras[0] || palabra_oculta==palabras[1]){
        document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Mercedes`;
        }else if(palabra_oculta==palabras[2] || palabra_oculta==palabras[3]){
            document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Red Bull`;
            }else if(palabra_oculta==palabras[4] || palabra_oculta==palabras[5]){
                document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia McLaren`;
                }else if(palabra_oculta==palabras[6] || palabra_oculta==palabras[7]){
                    document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Aston Martin`;
                    }else if(palabra_oculta==palabras[8] || palabra_oculta==palabras[9]){
                        document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Ferrari`;
                        }else if(palabra_oculta==palabras[10] || palabra_oculta==palabras[11]){
                            document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Alpine`;
                            }else if(palabra_oculta==palabras[12] || palabra_oculta==palabras[13]){
                                document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Alpha Tauri`;
                                }else if(palabra_oculta==palabras[13] || palabra_oculta==palabras[14]){
                                    document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Alfa Romeo`;
                                    }else if(palabra_oculta==palabras[16] || palabra_oculta==palabras[17]){
                                        document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Haas`;
                                        }else if(palabra_oculta==palabras[18] || palabra_oculta==palabras[18]){
                                            document.getElementById("solucion").innerHTML= `Es un piloto de la escuderia Williams`;
                                        }
  }
  function reiniciar(){
      const reload = document.getElementById('reload');
      reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros, sirve para reiniciar la pagina es como un F5
      location.reload();  
      });
  }   