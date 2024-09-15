function FetchPost() {

    console.log('FETCH POST');

    let usuario = {
        nombre: 'Anita',
        edad: 25
    }
    
    fetch('https://reqres.in/api/users/2', {
        method: 'POST',
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
                    Programa Fetch API POST
                </h1>
            </div>
        </>
    );
}

export default FetchPost;