//Función constructora

function auto(marca, modelo, annio){ //function auto con 3 parametros que quiero que tenga mi objeto 
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Construyendo un nuevo objeto:
var autoNuevo = new auto("Tesla", "Model 3", 2022); //new va a generar una nueva instancia de nuestra función constructora
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020 );