// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();  //.trim elimina los espacios

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;


        // BOTON ELEIMINAR
        const botonEliminar = document.createElement("button"); // creo este elemento
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";

        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea); // elimina el elemento
        };


        // BOTON COMPLETADO
        const botonCompletar = document.createElement("button"); 
        botonCompletar.textContent = "Completado";
        botonCompletar.className = "completed";

        botonCompletar.onclick = function() {
            nuevaTarea.classList.toggle("completed"); // cambiamos el estado
        };


        // BOTON PENDIENTE
        const botonPendientes = document.createElement("button");;
        botonPendientes.textContent = "Pendiente";
        botonPendientes.className = "peding";

        botonPendientes.onclick = function() {
            nuevaTarea.classList.toggle("peding");
            //mostrarPendientes(nuevaTarea);
        }


        nuevaTarea.appendChild(botonCompletar);
        nuevaTarea.appendChild(botonPendientes)
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
}



// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
}


// Agregar evento de clic a las tareas para marcarlas como completadas
document.getElementById("listaTareas").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        marcarCompletada(event.target);
    }
});




// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea);







// 2da Parte de la Actvidad...

// Función para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");  // seleccionamos todo lo que hay
    
    tareas.forEach(tarea => {  // los ordena en lista
        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
}
        

// Función para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");

    tareas.forEach(tarea => {
        if (!tarea.classList.contains("peding")) {
            tarea.style.display = "flex";
            } else {
            tarea.style.display = "none";
        }
    });
}

// si yo hago click arriba, la marco como completada
document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);

document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);
