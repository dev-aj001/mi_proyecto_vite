function FetchPost() {

    console.log('FETCH PUT');

    let usuario = {
        nombre: 'Juanita',
        edad: 25
    }
    
    fetch('https://reqres.in/api/users/2', {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(console.log)
    .catch(err => {
        console.log('Error: ');
        console.log(err);
    });



    return (
        <>
            <div>
                <h1>
                    Programa Fetch API PUT
                </h1>
            </div>
        </>
    );
}

export default FetchPost;