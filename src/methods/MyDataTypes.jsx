function MyDataTypes() {

    let nombre = "Jair";

    const FicNombre = "Francisco";
    const FicApellidos = "Ibarra Carlos"
    const FicNumControl = 706;
    const FicNumControl2 = 1074;
    const FicFechaReg = new Date();
    let FicExperiencia = 20;
    let FicActivo = true;

    return (
        <>
            <div>
                <h3>Tipos Básicos</h3>
                {nombre},
                <br />
                {FicNombre},
                <br />
                {FicApellidos},
                <br />
                {FicNumControl},
                <br />
                {FicNumControl2},
                <br />
                {FicFechaReg.toString()},
                <br />
                {FicExperiencia},
                <br />
                {(FicActivo) ? 'Activo' : 'No Activo'}
            </div>

        </>
    );
};

export default MyDataTypes;