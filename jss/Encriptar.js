




const btnEncriptar= document.getElementById("btn-encriptar");
const frase= document.getElementById("frase");
const respuesta = document.getElementById("respuesta");
const btnlimpiar = document.getElementById("btn-limpiar");





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

   function addResp() {
        respuesta.innerHTML= encriptar()
   }

   btnEncriptar.onclick= addResp;

   btnlimpiar.addEventListener("click", () => {
            frase.value= '';
   });

   






