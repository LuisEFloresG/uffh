function validar(form) {
    // Función para eliminar etiquetas <script> y su contenido
    function eliminarScripts(entrada) {
        const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        return entrada.replace(regex, '').trim();
    }

    // Validar nombre
    var nombre = eliminarScripts(form.nombre.value);
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    // Validar edad
    var edad = eliminarScripts(form.edad.value);
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Validar selección de sexo
    var sexo = eliminarScripts(form.sexo.value);
    if (sexo === "") {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    // Validar deporte favorito
    var deporte = eliminarScripts(form.deporte.value);
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }

    // Si todo es válido
    return true;
}
