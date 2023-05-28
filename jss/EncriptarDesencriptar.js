




const btnEncriptar= document.getElementById("btn-encriptar");//accedemps al boton que encriptara
const frase= document.getElementById("frase"); // accedemos a la frase que encriptaremos o desencriptaremos del text area
const respuesta = document.getElementById("respuesta");// accedemos a la respuesta que sera la desencriptacion o encriptacion
respuesta.readOnly=true; //el text area de la respuesta no se podra excribir nada
const btnlimpiar = document.getElementById("btn-limpiar"); //accedemos a la btnlimpiar que limpiara la frase
const btnDesencriptar = document.getElementById("btn-desencriptar")//accedemos al boton que desencriptara
const btnCopiar = document.getElementById("btn-copiar");//accedemos a la btnCopiar que copiara el contenido de la respuesta





function encriptar() {  //algoritmo que encripata
    let nuevaPalabra= ''; //la nueva palabra ira completandose en el loop
        if(frase.value!==''){
    for (let index = 0; index < frase.value.length; index++) {
        switch (frase.value[index]) { //en caso de que tenga la frase alguna delas letras pasara eso
            case 'a':
                nuevaPalabra=nuevaPalabra+'ai'
                break;
                case 'e':
                    nuevaPalabra=nuevaPalabra+'enter'
                    break;
                    case 'o':
                        nuevaPalabra=nuevaPalabra+'ober'
                        break;
                        case 'i':
                            nuevaPalabra=nuevaPalabra+'imes'
                            break;
                            case 'u':
                                nuevaPalabra=nuevaPalabra+'ufat'
                                break;
        
            default:
                nuevaPalabra=nuevaPalabra+frase.value[index]; //si no la regresara completa
                break;
        }
        
      }
      return nuevaPalabra; // aqui debe ya estar encriptado que es lo que retornaremos en caso de que se cumplan las condiciones
      }
      else {
        alert("no hay frase")
      }
    }

    function Desencriptar() { //algorimo que me desencripta
      
        //la frase desencriptada sera igual a mi frase pero le replazaremos a lo que equivale cada letra
        if (frase.value!==''){  let fraseDesencriptada = frase.value.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
        return fraseDesencriptada; //retornamos la frase desencriptada}
      
            


    }else {
        alert("No hay frase que desencriptar")
     }
    }
   function addEncr() {
    if(typeof encriptar() === 'undefined'){
        respuesta.innerHTML= '' //aqui agregamos lo que retorna la funcion encriptar    
   }else{
    respuesta.innerHTML= encriptar();
   }
}
   function addDesc(){
    if(typeof Desencriptar() === 'undefined'){
     respuesta.innerHTML= '';
   }else{
    respuesta.innerHTML= Desencriptar()//aqui agregamos lo que retorna la fucnion desencriptar
   }
 }

   btnEncriptar.onclick= addEncr;// elclick llamara a la funcion addEcnr que lo gregara al campo de la respuesta
   btnDesencriptar.onclick=addDesc // el click llaara a la funcion addDesc que lo gregara al campo de la respuesta

   btnlimpiar.addEventListener("click", () => {
            frase.value= ''; //la frase se reemplazara por vacio
           
   });

   btnCopiar.addEventListener("click", function() {
    respuesta.select(); //seleccionara lo contenido en la respuesta
    navigator.clipboard.writeText(respuesta.value) //lo copiara al portapapeles
      .then(function() {
        alert("El contenido se ha copiado al portapapeles."); //si todo marcha bien 
      })
      .catch(function(error) {
        console.error("Error al copiar al portapapeles: ", error); //si hay error
      });
  });

   






