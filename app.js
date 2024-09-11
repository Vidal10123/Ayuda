// app.js
function showInfo(emergencyType) {
    const infoDiv = document.getElementById('info');
    const callBtn = document.getElementById('llamar112');
    let infoContent = '';

    switch (emergencyType) {
        case 'cortada':
            infoContent = `
                <h2>Cortada</h2>
                <p>1. Lava la herida con agua y jabón suave.</p>
                <p>2. Aplica presión con una gasa o un paño limpio para detener el sangrado.</p>
                <p>3. Aplica un vendaje si es necesario.</p>
                <p>4. Si la cortada es profunda o sigue sangrando, busca atención médica.</p>
                <h3>¿Se necesita asistencia médica?</h3>
                <p>Si la cortada es muy profunda o no deja de sangrar después de aplicar presión durante 10 minutos, podría ser necesario llamar al 112.</p>
            `;
            callBtn.style.display = 'block';
            break;
        case 'quemadura':
            infoContent = `
                <h2>Quemadura</h2>
                <p>1. Enfría la zona afectada con agua corriente durante 10-20 minutos.</p>
                <p>2. No uses hielo ni pongas la quemadura en contacto con mantequilla o aceites.</p>
                <p>3. Cubre la quemadura con una gasa estéril o un paño limpio sin apretar.</p>
                <h3>Opciones:</h3>
                <p>- Para quemaduras leves, usar crema para quemaduras y proteger el área.</p>
                <p>- Para quemaduras graves, busca atención médica.</p>
                <h3>¿Se necesita asistencia médica?</h3>
                <p>Si la quemadura cubre una parte importante del cuerpo o es de tercer grado (muy profunda), se debe llamar al 112.</p>
            `;
            callBtn.style.display = 'block';
            break;
        case 'fractura':
            infoContent = `
                <h2>Fractura</h2>
                <p>1. Mantén la parte lesionada inmóvil en la posición encontrada.</p>
                <p>2. Aplica una férula (algo rígido) para estabilizar, si es posible.</p>
                <p>3. No intentes enderezar el hueso.</p>
                <h3>Opciones:</h3>
                <p>- Si es una fractura menor, aplicar hielo y mantener inmóvil hasta ver a un médico.</p>
                <p>- En casos graves o si hay una herida abierta, buscar atención médica inmediata.</p>
                <h3>¿Se necesita asistencia médica?</h3>
                <p>Si la fractura es grave o si hay una herida abierta, llama al 112 de inmediato.</p>
            `;
            callBtn.style.display = 'block';
            break;
        case 'ahogo':
            infoContent = `
                <h2>Ahogo</h2>
                <p>1. Si la persona no puede toser, hablar o respirar, aplica la maniobra de Heimlich.</p>
                <p>2. Coloca tus manos alrededor del abdomen de la persona y aplica presión hacia arriba en ráfagas rápidas.</p>
                <p>3. Repite hasta que el objeto sea expulsado.</p>
                <h3>¿Se necesita asistencia médica?</h3>
                <p>Si la persona pierde la conciencia o no puedes remover el objeto, llama al 112 inmediatamente.</p>
            `;
            callBtn.style.display = 'block';
            break;
        default:
            infoContent = `<p>Selecciona una emergencia para ver la información.</p>`;
            callBtn.style.display = 'none';  // Esconde el botón si no hay emergencia seleccionada
    }

    infoDiv.innerHTML = infoContent;
}

// Función para confirmar antes de llamar al 112
function confirmCall() {
    const confirmation = confirm("¿Seguro que quieres llamar al 112?");
    if (confirmation) {
        // Aquí puedes añadir la lógica para realizar la llamada en un entorno real.
        alert("Llamando al 112...");
        // En un móvil real, puedes utilizar la siguiente línea para realizar la llamada:
        // window.location.href = 'tel:112';
    } else {
        alert("Llamada cancelada.");
    }
}
// Función para confirmar antes de llamar al 112
function confirmCall() {
    const confirmation = confirm("¿Seguro que quieres llamar al 112?");
    if (confirmation) {
        // Realiza la llamada al 112 en dispositivos que lo soporten
        window.location.href = 'tel:112';
    } else {
        alert("Llamada cancelada.");
    }
}
