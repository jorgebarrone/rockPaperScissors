function selRandom() {
  let numero =  Math.floor((Math.random()*3)+1);
  let respuesta;
  if (numero == 1) {
      respuesta = "Piedra";
  } else if (numero == 2) {
      respuesta = "Papel";
  } else {
      respuesta = "Tijera";
  }
  // return respuesta;
  return (numero);
  // console.log(numero);
};

function selUser(valUser) {
  if (isNan(valUser)) {
    return 'El valor solo puede ser numerico';
  }
}

function defineResult(valUser, valRandom) {
  if (valUser == valRandom) {     //Ambos eligieron la misma opción
    return "Empate";
  }
  else {
    if (valUser == 1 && valRandom == 2) {
      return"Gana el ordenador.";
    }
    if (valUser == 1 && valRandom == 3) {
      return"Gana el Usuario.";
    }
    if (valUser == 2 && valRandom == 3) {
      return"Gana el ordenador.";
     }
     if (valUser == 2 && valRandom == 1){
      return"Gana el Usuario.";
    }
     if (valUser == 3 && valRandom == 1) {
      return"Gana el ordenador.";
        }
     if (valUser == 3 && valRandom == 2) {
      return"Gana el Usuario.";
    }
  }
}

module.exports = {
  selUser, selRandom, defineResult
}
