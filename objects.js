var myCar = {            //Object
    marca: "Toyota",      //Property
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} del ${this.annio}`)
    }
};

//Acceder a una Propiedad de un objeto
myCar.marca; //result: Toyota

//Acceder a un Metodo de un objeto:
myCar.detalleDelAuto(); //result: Auto Corolla del 2022