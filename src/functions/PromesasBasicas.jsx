function PromesasBasicas() {

    //Primera Promesa Básica
    const miPromesa = new Promise(function (resolve, reject) {
        //Funion asincrona que espera  
        setTimeout(function () {

            const error = true; // Simula si hubo un error o no
            if (!error) {
                resolve({ data: "Datos recibidos" });
            } else {
                reject("Error al obtener los datos");
            }

        }, 2000);
    });

    // Uso de la promesa
    miPromesa.then( // Caso de exito (resolve)
        function (resultado) {
            console.log(resultado);
            console.log(miPromesa);
        }
    ).catch(        // Caso de fallo (reject)
        function (error) {
            console.log(error);
            console.log(miPromesa);
        }
    );

    return (
        <>
            {/* Codigo HTML */}

            <div>
                <h1>
                    Promesas Básicas
                </h1>
            </div>
        </>
    );
}

export default PromesasBasicas;