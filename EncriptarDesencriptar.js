







function encriptar() {

for (let index = 0; index < palabra.length; index++) {
    switch (palabra[index]) {
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
            nuevaPalabra=nuevaPalabra+palabra[index];
            break;
    }
    
  }
  return nuevaPalabra;
}







