//Función constructora:
function auto (MARCA, MODELO, ANNIO) {
      this.marca = MARCA;
      this.modelo = MODELO;
      this.annio = ANNIO;
  }

var autos = []; //Array en blanco llamada autos

  for(let i = 0 ; i < 2 ; i++) { // 

      var marca = prompt("Ingresa la marca del auto");
      var modelo = prompt("Ingresa el modelo del auto");
      var annio = prompt("Ingresa el año del auto");

      autos.push(new auto (marca, modelo, annio));//the function .push will add 
      //elements to final of the array, and returns the new lenght of the array.
  }
  
  for ( let i = 0 ; i < autos.length ; i++ ) {
      console.log(autos[i]);
  }