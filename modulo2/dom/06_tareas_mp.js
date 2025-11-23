console.log("=== GESTOR DE TAREAS DE INVESTIGACIÓN ===\n");

const botonAgregar = document.getElementById('agregar');

botonAgregar.addEventListener('click', () => {
    const tareaTexto = document.getElementById('tareaInvestigacion').value;
    
    if (tareaTexto.trim() !== '') {
        
        const li = document.createElement('li');
        li.textContent = tareaTexto;
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';
        btnEliminar.addEventListener('click', () => {
            li.remove();
            console.log(`Tarea eliminada: ${tareaTexto}`);
        });
        
        li.appendChild(btnEliminar);
        
        document.getElementById('listaTareas').appendChild(li);
        
        document.getElementById('tareaInvestigacion').value = '';
        
        console.log(`Nueva tarea registrada: ${tareaTexto}`);
    } else {
        alert('Por favor, ingresa una tarea de investigación válida');
    }
});

document.getElementById('tareaInvestigacion').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        botonAgregar.click();
    }
});