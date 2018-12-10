// Funcion anomima
var carro = {
    encedido: false,
    llantas:4,
    puertas:5,
    fabricante:{
        creador:"toyora",
        telefono: "555-5555",
        direction: "xyz Avenida 123"
    },
    colores:["azul", "Blanco", "Rojo", "Negro"],
    arrancar: function () {
        if(carro.encedido){
            console.log("El veiculo estaba encedido");
        }else {
            console.log("Encendiendo el motor");
            this.encedido = true;
        }
    },
    apagar: function () {
        if( carro.encedido === false){
            console.log("El veiculo ya estaba Apagado");
        }else {
            console.log("Apagando el motor");
            this.encedido = false;
        }
    }
};
//carro.arrancar();
//carro.apagar();
$(".js_encender").on("click", function () {
    carro.arrancar();
});
$(".js_apagar").on("click", function () {
    carro.apagar();
});