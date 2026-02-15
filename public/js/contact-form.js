const form = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

// Expresiones regulares
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let errors = [];

  // Nombre
  if (!nameRegex.test(nameInput.value.trim())) {
    errors.push("El nombre debe tener al menos 3 letras y solo caracteres válidos.");
  }

  // Email
  if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("El email no tiene un formato válido.");
  }

  // Asunto
  if (subjectInput.value.trim().length < 3) {
    errors.push("El asunto debe tener al menos 3 caracteres.");
  }

  // Mensaje
  if (messageInput.value.trim().length < 10) {
    errors.push("El mensaje debe tener al menos 10 caracteres.");
  }

  // Mostrar errores o enviar
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }

  
  // Creamos un objeto con los datos del formulario
  const formData = {
    nombre: nameInput.value,
    email: emailInput.value,
    asunto: subjectInput.value,
    mensaje: messageInput.value,
  };

  // Llamamos a la funcion para enviar los datos al servidor
  sendDataToServer(formData);

  /* alert("Mensaje enviado correctamente 🚀"); */
  form.reset();
});


//Creamos una funcion para enviar los datos a un servidor
// Usamos fetch para hacer una peticion POST

const sendDataToServer = (data) => {
  // Configuramos la url del servidor
  let url = 'http://localhost:3000/contacto';

  // Configuramos las opciones de la peticion
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then (data => {
    console.log('Success:', data);
    alert(data.message);
  })
  .catch((error) => {
    alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente más tarde.');
    console.error('Error:', error);
  });
}
