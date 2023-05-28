




const btnEncriptar= document.getElementById("btn-encriptar");
const frase= document.getElementById("frase");
const respuesta = document.getElementById("respuesta");
respuesta.readOnly=true;
const btnlimpiar = document.getElementById("btn-limpiar");
const btnDesencriptar = document.getElementById("btn-desencriptar")
const btnCopiar = document.getElementById("btn-copiar");





function encriptar() {
    let nuevaPalabra= '';

    for (let index = 0; index < frase.value.length; index++) {
        switch (frase.value[index]) {
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
                nuevaPalabra=nuevaPalabra+frase.value[index];
                break;
        }
        
      }
      return nuevaPalabra;
    }

    function Desencriptar() {
      
        let fraseDesencriptada = frase.value.replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        
            return fraseDesencriptada;
            


    }

   function addEncr() {
        respuesta.innerHTML= encriptar()
        
   }
   function addDesc(){
    respuesta.innerHTML= Desencriptar()
   }

   btnEncriptar.onclick= addEncr;
   btnDesencriptar.onclick=addDesc

   btnlimpiar.addEventListener("click", () => {
            frase.value= '';
           
   });

   btnCopiar.addEventListener("click", function() {
    respuesta.select();
    navigator.clipboard.writeText(respuesta.value)
      .then(function() {
        alert("El contenido se ha copiado al portapapeles.");
      })
      .catch(function(error) {
        console.error("Error al copiar al portapapeles: ", error);
      });
  });

   






