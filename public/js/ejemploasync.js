function tarea1(){
    console.log('tarea1');
}
function tarea2(){
    console.log('tarea2');
}

tarea1();
tarea2();   

setTimeout(() => {
    console.log('tarea3');
}, 3000);


function tareaAsincrona(){
    setTimeout(() => {
        console.log('tarea asincrona');
    }, 2000);
}


function tareaSincrona2(){
    setTimeout(() => {
        try {
            connect(); //No existe la funcion connect
            console.log('tarea sincrona Conexio exitosa');
        }catch (error) {
            console.log('No encuentro la conexion');
        }
    }, 4000);
}

tareaAsincrona();
tareaSincrona2()

console.log('Fin del programa');

