const traerDatos = async () => {
    await fetch("/api/v1/users", {
        contentType: "application/json",
        body: {
            name: username,
            age: 25,
            band: band
        }
    })
}


// const subirDatos = async () => {
//     await fetch('/api/register', {
//         method: "POST",
//         contentType: "application/json",
//         body: {
//             name: username,
//             lastName: lastName,
//             mail: mail,
//             password: password
//         }
//     })
// }

