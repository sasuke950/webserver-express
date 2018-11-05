const hbs = require('hbs');

//Helpers
hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();
});

hbs.registerHelper('fecha', () => {
    //========================================
    //Código que obtiene la fecha actual
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1; //hoy es 0!
    var yyyy = hoy.getFullYear();

    if (dd < 10 || mm < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    fecha = dd + '/' + mm + '/' + yyyy;
    return fecha;
    //========================================
});