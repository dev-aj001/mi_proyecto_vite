function PromesasAll() {

    // Promesas básicas

    const promesa1 = new Promise((resolve) => setTimeout(() => resolve('Resultado 1'), 1000));
    const promesa2 = new Promise((resolve) => setTimeout(() => resolve('Resultado 2'), 2000));
    const promesa3 = new Promise((resolve) => setTimeout(() => resolve('Resultado 3'), 1500));


    // Promesas All

    Promise.all([promesa1, promesa2, promesa3])
        .then((resultados) => {
            console.log(resultados); // No se ejecuta porque promesa3 es rechazada
        })
        .catch((error) => {
            console.error(error); // Imprime: 'Error en Promesa 3'
        });


    return (
        <>
            {/* Codigo HTML */}

            <div>
                <h1>
                    Promesas All
                </h1>
            </div>
        </>
    );
}

export default PromesasAll;