var enviar = document.getElementById("enviar");
//con asincronia cogemos todos los datos del fichero login.json para saber los usuarios, sus contraseñas y la dificultad que es lo que nos hara falta mas tarde
async function validar(user, pass) {
  let response = await fetch("js/login.json");//guardamos los datos del fichero fichero
  let arrayjson = await response.json();//lo almacenamos en un array
  return arrayjson;
}
enviar.addEventListener("click", () => {// usando el DOM al hacer click en el boton de "Iniciar Sesion" hacemos todo lo que este dentro 
  var usuario = document.getElementById("usuario").value;// cogemos los datos del nombre introducido y los almacenamos en una variable
  var contraseña = document.getElementById("contraseña").value;// cogemos los datos de la contraseña introducido y los almacenamos en una variable
  (async function () {
    let arrayjson = await validar(usuario, contraseña);
    for (const key of arrayjson) {
      if (key.Nombre == usuario && key.Contraseña == contraseña) {
        var local_nombre = key.Nombre;//cogemos los datos del .json del nombre
        var local_apellido = key.Apellido;//cogemos los datos del .json del apellido
        var local_dificultad = key.Dificultad;//cogemos los datos del .json de la dificultad
        localStorage.setItem(`nombre:`, `${local_nombre}`);//guardamos en local el nombre excogido
        localStorage.setItem(`apellido:`, `${local_apellido}`);//guardamos en local el apellido excogido
        localStorage.setItem(`dificultad:`, `${local_dificultad}`);//guardamos en local la dificultad segun el nombre  excogido
        location.href = "hf.html"; // Te redirecciona a esta pagina
      }
    }
  })();
});
