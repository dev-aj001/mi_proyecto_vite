function OrigenFetch() {

    // Instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configuración de la solicitud
    xhr.open('GET', ' https://reqres.in/api/unknown', true);
    // true -> de manera asincrona

    // Mandamos la solicitud
    xhr.send(null);

    // Manejar la respuesta cuando esté lista
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) { // Comprobar si la solicitud ha tenido éxito
            var data = JSON.parse(xhr.responseText); // Convertir la respuesta JSON
            console.log(data); // Mostrar los datos en la consola
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.error('Error: ', xhr.status); // Manejar el error si ocurre
        }
    };

    return (
        <>
            {/* Codigo HTML */}

            <div>
                <h1>
                    Origen Fetch
                </h1>
            </div>
        </>
    );
}

export default OrigenFetch;