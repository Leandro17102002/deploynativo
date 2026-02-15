
// Cargar el modulo de express
const express = require('express');
const { error } = require('node:console');

// Cargar el modulo de path
const path = require('node:path');

// Crear la aplicacion de express
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;


// Por cada dato que vamos a manipular, usamos app.use(express.json()) para parsear el cuerpo de la solicitud entrante como JSON., es decir, definir la ruta de la API que va a recibir los datos del formulario de contacto. En este caso, usamos app.post('/contacto', ...) para definir una ruta POST en /contacto. Dentro del manejador de la ruta, podemos acceder a los datos enviados en el cuerpo de la solicitud a través de req.body. Finalmente, respondemos con un mensaje JSON indicando que los datos fueron recibidos correctamente.

// Definimos la carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear json
app.use(express.json());

// Definimos la ruta de la API
app.post('/contacto', (req, res) => {
    console.log('Datos recibidos del formulario de contacto:');
    console.log(req.body);

    // No puedo responder 2 veces en la misma peticion en el front 
    res.json({message: 'Datos recibidos correctamente'})
});

// ruta form de productos
app.post('/productos', (req, res) => {
    console.log('Datos recibidos del formulario de alta de producto:');
    console.log(req.body);
    res.json({message: 'Producto recibido correctamente'})
});

// Creamos una ruta global para manejar rutas no definidas. Si la usamos luego de las rutas definidas, se ejecutará solo si ninguna de las rutas anteriores coincide con la solicitud entrante.
/* app.use((req, res, next) => {
    res.status(404).json({error: 'Ruta no encontrada'});

    // Llamamos a next() para pasar al siguiente middleware (si lo hay)
    //next();
}); */

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})

