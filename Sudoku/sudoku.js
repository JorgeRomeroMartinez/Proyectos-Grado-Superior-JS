var tabla = [ // Array principal, que sera el que se muetra al principio del juego
    ["", 6,"", 1,"", 4,"", 5,""],
    ["","", 8, 3,"", 5, 6,"",""],
    [2,"","","","","","","", 1],
    [8,"","", 4,"", 7,"","", 6],
    ["","", 6,"","","", 3,"",""],
    [7,"","", 9,"", 1,"","", 4],
    [5,"","","","","","","", 2],
    ["","", 7, 2,"", 6, 9,"",""],
    ["", 4,"", 5,"", 8,"",7,""],
]
var tabla_solucion = [ // Array resuelto para posteriormente hacer la comprobacion
    ["9", "6","3", "1","7", "4","2", "5","8"],
    ["1","7", "8", "3","2", "5", "6","4","9"],
    ["2","5","4","6","8","9","7","3", "1"],
    ["8","2","1", "4","3", "7","5","9", "6"],
    ["4","9", "6","8","5","2", "3","1","7"],
    ["7","3","5", "9","6", "1","8","2", "4"],
    ["5","8","9","7","1","3","4","6", "2"],
    ["3","1", "7", "2","4", "6", "9","8","5"],
    ["6", "4","2", "5","9", "8","1", "7","3"],
]
var fila0 = document.getElementsByClassName("f0");
var fila1 = document.getElementsByClassName("f1");
var fila2 = document.getElementsByClassName("f2");
var fila3 = document.getElementsByClassName("f3");
var fila4 = document.getElementsByClassName("f4");
var fila5 = document.getElementsByClassName("f5");
var fila6 = document.getElementsByClassName("f6");
var fila7 = document.getElementsByClassName("f7");
var fila8 = document.getElementsByClassName("f8");
//Metemos en las variables anteriores todos los componenetes de cada fila que tienen la calse correspondiente
function cargar_numeros(){// funccion para cargar el primer array en el html, con cada dato en su sitio correspondiente
    for (let i = 0; i < fila0.length; i++) {
        if (tabla[0][i] !="") {fila0[i].setAttribute("disabled", "")} 
        if (tabla[1][i] !="") {fila1[i].setAttribute("disabled", "")}
        if (tabla[2][i] !="") {fila2[i].setAttribute("disabled", "")}
        if (tabla[3][i] !="") {fila3[i].setAttribute("disabled", "")} 
        if (tabla[4][i] !="") {fila4[i].setAttribute("disabled", "")}
        if (tabla[5][i] !="") {fila5[i].setAttribute("disabled", "")}
        if (tabla[6][i] !="") {fila6[i].setAttribute("disabled", "")} 
        if (tabla[7][i] !="") {fila7[i].setAttribute("disabled", "")}
        if (tabla[8][i] !="") {fila8[i].setAttribute("disabled", "")}
        fila0[i].value = tabla[0][i]; 
        fila1[i].value = tabla[1][i]; 
        fila2[i].value = tabla[2][i]; 
        fila3[i].value = tabla[3][i]; 
        fila4[i].value = tabla[4][i]; 
        fila5[i].value = tabla[5][i]; 
        fila6[i].value = tabla[6][i]; 
        fila7[i].value = tabla[7][i]; 
        fila8[i].value = tabla[8][i]; 
    }
}
cargar_numeros();// llamamos a la funcion
function cargar_todos_numeros(){// funccion para cargar el array completo en el html 
    for (let i = 0; i < fila0.length; i++) {
        if (tabla_solucion[0][i] !="") {fila0[i].setAttribute("disabled", "")} 
        if (tabla_solucion[1][i] !="") {fila1[i].setAttribute("disabled", "")}
        if (tabla_solucion[2][i] !="") {fila2[i].setAttribute("disabled", "")}
        if (tabla_solucion[3][i] !="") {fila3[i].setAttribute("disabled", "")} 
        if (tabla_solucion[4][i] !="") {fila4[i].setAttribute("disabled", "")}
        if (tabla_solucion[5][i] !="") {fila5[i].setAttribute("disabled", "")}
        if (tabla_solucion[6][i] !="") {fila6[i].setAttribute("disabled", "")} 
        if (tabla_solucion[7][i] !="") {fila7[i].setAttribute("disabled", "")}
        if (tabla_solucion[8][i] !="") {fila8[i].setAttribute("disabled", "")}
        fila0[i].value = tabla_solucion[0][i]; 
        fila1[i].value = tabla_solucion[1][i]; 
        fila2[i].value = tabla_solucion[2][i]; 
        fila3[i].value = tabla_solucion[3][i]; 
        fila4[i].value = tabla_solucion[4][i]; 
        fila5[i].value = tabla_solucion[5][i]; 
        fila6[i].value = tabla_solucion[6][i]; 
        fila7[i].value = tabla_solucion[7][i]; 
        fila8[i].value = tabla_solucion[8][i]; 
    }
}
function reiniciar(){// funccion para recargar la pagina/ reiniciar el sudoku
    location.href = "sudoku.html";
}
function recoger_num(){// funccion para almacenar los datos que hemos metido en el sudoku los almacenamos en el array bidimensional
    for (let i = 0; i < fila0.length; i++) {
        tabla[0][i] = fila0[i].value;
        tabla[1][i] = fila1[i].value;
        tabla[2][i] = fila2[i].value;
        tabla[3][i] = fila3[i].value;
        tabla[4][i] = fila4[i].value;
        tabla[5][i] = fila5[i].value;
        tabla[6][i] = fila6[i].value;
        tabla[7][i] = fila7[i].value;
        tabla[8][i] = fila8[i].value;
    }
}
 function comprobar( ){// funcion para comprobar dos arrays el array resuelto y el array que hemos creado con la funcion de recoger_num
    recoger_num();// llamamos a la funccion para que se ejecute 
    let contador = 0;
    for (let i = 0; i < fila0.length; i++) {
        for (let x = 0; x < fila0.length; x++) {
            if(tabla[i][x] == tabla_solucion[i][x]){
              contador++;  
            }else{
                alert(` Algun numero de la fila ${i+1} esta mal`);
                break;
            } 
        }
    }
    if(contador == 81){
        alert(`Esta perfecto`);
    }   
 }
 


  