function PromesasRace() {

    // Promesas basicas
    const promesa1 = new Promise((resolve) => setTimeout(() => resolve('Promesa 1 resuelta'), 600));
    const promesa2 = new Promise((resolve) => setTimeout(() => resolve('Promesa 2 resuelta'), 2000));
    const promesa3 = new Promise((resolve, reject) => setTimeout(() =>
        reject('Promesa 3 rechazada'), 1000)); //Promesa mas rapida

    // Carrera de promesas
    Promise.race([promesa1, promesa2, promesa3])
        .then((resultado) => {
            console.log(resultado); // Se ejecuta cuando una promesa se resuelve primero
        })
        .catch((error) => {
            console.error(error); // Se ejecuta si la primera promesa que termina es rechazada
        });

    return (
        <>
            {/* Codigo HTML */}

            <div>
                <h1>
                    Promesas Race
                </h1>
            </div>
        </>
    );
}

export default PromesasRace;