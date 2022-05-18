var enviar = document.getElementById("enviar");

async function validar (user, pass){
    let response = await fetch ("sudoku.json");
    let arrayjson = await response.json(); 
    return arrayjson;
}

enviar.addEventListener("click",()=>{
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;   
    (async function (){
        let arrayjson = await validar(usuario ,contraseña);
        for (const key of arrayjson) {
            console.log(key)
            if(key.Nombre == usuario && key.Contraseña == contraseña){
                location.href = "sudoku.html"; // Te redirecciona a esta pagina
            }
        }
    })()
})

   

