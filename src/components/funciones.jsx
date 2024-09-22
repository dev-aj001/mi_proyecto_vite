export const Funciones = () => {

    // function sumar(a, b) {
    //     return a + b;
    // }

    // sumar(5,10);

    function obtenerDatosDeServidor(callback) {
        setTimeout(() => {
            let datos = { nombre: "Producto", precio: 100 };
            callback(datos);
        }, 2000); // Simula un retraso en la respuesta del servidor
    }
    
    function mostrarDatos(datos) {
        console.log(`Producto: ${datos.nombre}, Precio: ${datos.precio}`);
    }
    
    obtenerDatosDeServidor(mostrarDatos);
    

    return (
        <>
            <div>
                <h2>Funciones con retorno y argumentos</h2>
            </div>
        </>
    );
}