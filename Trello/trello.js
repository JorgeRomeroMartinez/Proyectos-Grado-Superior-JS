const time = document.getElementById("time");
// cogemos el id time
const date = document.getElementById("date");
//cogemos el id date
const interval = setInterval(()=>{
    const local = new Date();
    //creamos una variable que almacena el objeto date, en este caso para que se actualice cada segundo
    let day = local.getDate(),
    //sacamos solo el dia del objeto date
        month = local.getMonth(),
        //sacamos solo el mes del objeto date
        year = local.getFullYear();
        //sacamos solo el año del objeto date
    time.innerHTML = local.toLocaleTimeString();
    //mostramos la hora 
    date.innerHTML = `${day}/${month+1}/${year}`
    //mostramos la fecha dd/mm/aa
}, 1000);
//esto se repite cada segundo
const local = new Date();
//creamos una variable que almacena el objeto date, en este caso sera igual que el anterio pero se ejecutara inmediatamente al ejecutar el programa
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();
    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day}/${month+1}/${year}`
    
const btn_añadir1 = document.querySelector('#añadir1');
//variable para almacenar el boton de añadir 1
const btn_añadir2 = document.querySelector('#añadir2');
//variable para almacenar el boton de añadir 2
const btn_añadir3 = document.querySelector('#añadir3');
//variable para almacenar el boton de añadir 3
var contador1 = localStorage.getItem("contador1");
//creamos un contador para el primer div(Sin hacer)
var contador2 = localStorage.getItem("contador2");
//creamos un contador para el segundo div(En proceso)
var contador3 = localStorage.getItem("contador3");
//creamos un contador para el tercer div(Finalizado)
btn_añadir1.addEventListener('click', function(event){
    //creamos una funcion que se ejecute cada vez que hagamos click con el raton en el boton de añadir uno(caja: Sin hacer)
    contador1++;
    localStorage.setItem("contador1", contador1);
    var div1 = document.createElement("div"); 
    //almacenamos en una variable la creacionde un div nuevo
    var text_area1 = document.createElement("textarea");
    //almacenamos en una variable la creacionde un nuevo textarea
    text_area1.setAttribute("id","area1"+contador1);
    //al crear el textarea la damos atributos como un id que sera area1 y el contador que sea (area11, area12, area13...)
    div1.appendChild(text_area1);
    //metemos textarea como hijo a div1 que es el padre
    document.getElementById("caja1").appendChild(div1);
    text_area1.addEventListener("focusout", ()=>{
        //esto lo que hace es que al salir del textarea se guarde lo que has escrito
        localStorage.setItem("area1"+contador1,text_area1.value);
        //estos son los valores que guardara, el nombre del contador y lo que se almacena dentro 
    })
    text_area1.value=localStorage.getItem("area1"+contador1);
    //almacenamos los valores en local
});
    for (let i = 1; i <= contador1; i++) {
        //creamos un bucle para ir almacenando los datos de maneara consecutiva añadiendo+1 al contador 
        //si no creamos este bucle se sobrescribiria y solo tendrimaos un textarea
        //el codigo es igual que el anterior solo que se va sumando la i al id del area1
        var div1 = document.createElement("div");
        var text_area1 = document.createElement("textarea");
        text_area1.setAttribute("id","area1"+i);
        div1.appendChild(text_area1);
        document.getElementById("caja1").appendChild(div1)
        text_area1.addEventListener("focusout", ()=>{
            localStorage.setItem("area1"+i,text_area1.value);
        })
        text_area1.value=localStorage.getItem("area1"+i);
    }
    //apartir de aqui los comentarios seria practicamente iguales cambiando el div donde se encuentran t algun parametro que pasaria de 1 a 2 o 3
btn_añadir2.addEventListener('click', function(event){
    //creamos una funcion que se ejecute cada vez que hagamos click con el raton en el boton de añadir dos(caja: En proceso)
    contador2++;
    localStorage.setItem("contador2", contador2);
    var div2 = document.createElement("div");
    var text_area2 = document.createElement("textarea");
    text_area2.setAttribute("id","area2"+contador2);
    div2.appendChild(text_area2);
    document.getElementById("caja2").appendChild(div2)
    text_area2.addEventListener("focusout", ()=>{
        localStorage.setItem("area2"+contador2,text_area2.value);
    })
    text_area2.value=localStorage.getItem("area2"+contador2);
});
for (let i = 1; i <= contador2; i++) {
    var div2 = document.createElement("div");
    var text_area2 = document.createElement("textarea");
    text_area2.setAttribute("id","area1"+i);
    div2.appendChild(text_area2);
    document.getElementById("caja2").appendChild(div2)
    text_area2.addEventListener("focusout", ()=>{
        localStorage.setItem("area2"+i,text_area2.value);
    })
    text_area2.value=localStorage.getItem("area2"+i);
}
btn_añadir3.addEventListener('click', function(event){
    //creamos una funcion que se ejecute cada vez que hagamos click con el raton en el boton de añadir tres(caja: Finalizado)
    contador3++;
    localStorage.setItem("contador3", contador3);
    var div3 = document.createElement("div");
    var text_area3 = document.createElement("textarea");
    text_area3.setAttribute("id","area3"+contador3);
    div3.appendChild(text_area3);
    document.getElementById("caja3").appendChild(div3)
    text_area3.addEventListener("focusout", ()=>{
        localStorage.setItem("area3"+contador3,text_area3.value);
    })
    text_area3.value=localStorage.getItem("area3"+contador3);
});
for (let i = 1; i <= contador3; i++) {
    var div3 = document.createElement("div");
    var text_area3 = document.createElement("textarea");
    text_area3.setAttribute("id","area3"+i);
    div3.appendChild(text_area3);
    document.getElementById("caja3").appendChild(div3)
    text_area3.addEventListener("focusout", ()=>{
        localStorage.setItem("area3"+i,text_area3.value);
    })
    text_area3.value=localStorage.getItem("area3"+i);
}


