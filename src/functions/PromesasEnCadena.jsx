function PromesasEnCadena() {

    // Primer promesa
    function getData() {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => resolve("Datos obtenidos")
                , 1000);
        });
    }

    //Segunda promesa
    function processData(data)// Parametro resultado de la primera promesa 
    {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => resolve(`Datos procesados: ${data}`)
                , 1000);
        });
    }

    //Tercer promesa
    function displayData(data)// Parametro resultado de la segunda promesa 
    {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve(`Mostrando: ${data}`)
                , 1000);
        });
    }

    // Llamado de promesas anidadas
    // Cadena de promesas
    getData()
    .then(data => processData(data))
    .then(processedData => displayData(processedData))
    .then(finalOutput => console.log(finalOutput))
    .catch(error => console.error(error));


    return (
        <>
            {/* Codigo HTML */}
            <div>
                <h1>
                    Promesas en Cadena
                </h1>
            </div>
        </>
    );
}
export default PromesasEnCadena;

