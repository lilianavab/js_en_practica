//1. Desarrollar un código para validar un formulario de contacto utilizando el evento submit y las expresiones regulares que permitan el ingreso de caracteres desde la “A-a” hasta la “Z-z” mediante el método test() de JavaScript, mostrando un mensaje de error y/o éxito cuando corresponda. Es decir, el usuario deberá obligatoriamente ingresar datos en el formulario y que estos solo sean caracteres alfabéticos de la “a” hasta la “z” para poder enviar la información. Como se muestra en las siguientes imágenes.

// Inicio de event submit y las expresiones regulares
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('#formulario');
    const mensajeExito = document.querySelector('.mensaje-exito');
    const mensajeDatoNombreCompleto = document.querySelector('#error_nombre_completo');
    const mensajeDatoAsunto = document.querySelector('#error_asunto');
    const mensajeDatoMensaje = document.querySelector('#error_mensaje');

    mensajeDatoNombreCompleto.style.display = 'none';
    mensajeDatoAsunto.style.display = 'none';
    mensajeDatoMensaje.style.display = 'none';

    const inputs = document.querySelectorAll('#formulario input');

    inputs.forEach(input => {
        input.addEventListener('input', e => {
            const id = input.getAttribute('id');
            if (id === 'nombre_completo') {
                mensajeDatoNombreCompleto.style.display = 'none';
            } else if (id === 'asunto') {
                mensajeDatoAsunto.style.display = 'none';
            } else if (id === 'mensaje') {
                mensajeDatoMensaje.style.display = 'none';
            }
            
            console.log("Datos:", input.value);
        });
    });
    

    const validarDatos = (nombre, asunto, mensaje) => {
        let pasamosValidacion = true;
        const validacionNombre = /[a-zA-Z]/gim;
    
        if (validacionNombre.test(nombre) === false) {
            mensajeDatoNombreCompleto.style.display = 'block'; 
            mensajeDatoNombreCompleto.textContent = "El Nombre completo es requerido."; 
            pasamosValidacion = false;
        }
    
        if (validacionNombre.test(asunto) === false) {
            mensajeDatoAsunto.style.display = 'block'; 
            mensajeDatoAsunto.textContent = "El Asunto es requerido."; 
            pasamosValidacion = false; 
        }
    
        if (validacionNombre.test(mensaje) === false) {
            mensajeDatoMensaje.style.display = 'block';
            mensajeDatoMensaje.textContent = "El Mensaje es requerido."; 
            pasamosValidacion = false; 
        }
    
        console.log("Validación de datos:", pasamosValidacion);
    
        return pasamosValidacion; 
    };
    

    const envioDatos = (e) => {
        e.preventDefault(); 
    
        const nombreCompleto = document.querySelector('#nombre_completo').value;
        const asunto = document.querySelector('#asunto').value;
        const mensaje = document.querySelector('#mensaje').value;
    
        if (nombreCompleto.length !== 0 && asunto.length !== 0 && mensaje.length !== 0) {
           
            let validar = validarDatos(nombreCompleto, asunto, mensaje);
      
            if (validar) {
               
                mensajeExito.textContent = '¡Datos enviados correctamente!';
                mensajeExito.style.color = 'green'; 
                mensajeExito.style.display = 'block'; 
    
                formulario.reset();
                
                console.log("Formulario enviado correctamente:");
                console.log("Nombre completo:", nombreCompleto);
                console.log("Asunto:", asunto);
                console.log("Mensaje:", mensaje);
            }
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };
    formulario.addEventListener('submit', envioDatos);
});

//2. A partir de un selector de colores, cambia el color del cuadro principal al hacer click sobre uno de los colores. Ver las siguientes imágenes

// Inicio del event listener al hacer click en el cuadro con selector de colores
document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('button');
    const caja = document.querySelector('#caja');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.style.backgroundColor;
            caja.style.backgroundColor = color;

            console.log("Color seleccionado:", color);
        });
    });
});

// 3. Dar la funcionalidad de sumar y restar a la calculadora, mostrando el resultado en el elemento con clase resultado. Si el resultado de la resta entrega un número negativo debes mostrar un 0

//Inicio evento click para sumar y restar
document.addEventListener('DOMContentLoaded', function() {
    const inputValor1 = document.querySelector('#valor1'); 
    const inputValor2 = document.querySelector('#valor2'); 
    const btnSumar = document.querySelector('#btn-sumar'); 
    const btnRestar = document.querySelector('#btn-restar'); 

    // Agregando evento click al botón de sumar
    btnSumar.addEventListener('click', function() {
        const valor1 = parseFloat(inputValor1.value); 
        const valor2 = parseFloat(inputValor2.value); 
        const resultadoElement = document.querySelector('.resultado'); 
        console.log("Valor 1:", valor1);
        console.log("Valor 2:", valor2);

        if (!isNaN(valor1) && !isNaN(valor2)) {
            const resultado = valor1 + valor2;
            resultadoElement.textContent = resultado;
            console.log("Resultado de la suma:", resultado);
        } else {
            resultadoElement.textContent = 'Ingrese dos números válidos.';
        }
    });

    // Agregando evento click al botón de restar
    btnRestar.addEventListener('click', function() {
        const valor1 = parseFloat(inputValor1.value); 
        const valor2 = parseFloat(inputValor2.value); 
        const resultadoElement = document.querySelector('.resultado'); 
        console.log("Valor 1:", valor1);
        console.log("Valor 2:", valor2);

        if (!isNaN(valor1) && !isNaN(valor2)) {
            let resultado = valor1 - valor2;
            if (resultado < 0) {
                resultado = 0;
            }
            resultadoElement.textContent = resultado;
            console.log("Resultado de la resta:", resultado);
        } else {
            resultadoElement.textContent = 'Ingrese dos números válidos.';
        }
    });
});
