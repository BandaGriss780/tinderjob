
const inputUsername = document.querySelector(".input-name")
const username = inputUsername.value

const inputlastName = document.querySelector(".input-lastName")
const lastName = inputlastName.value

const inputMail = document.querySelector(".input-mail")
const mail = inputMail.value

const inputPassword = document.querySelector(".input-password")
const password = inputPassword.value

const btn = document.querySelector(".boton-Registro")
ByteLengthQueuingStrategy()
// const subirDatos = async () => {
//     console.log("subirDatos")
//     await fetch('/api/register', {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify({
//             name: username,
//             lastName: lastName,
//             mail: mail,
//             password: password
//         })
//     })();
// }



// (async () => {
//     const subirDatos = await fetch('/api/register', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(            
//         {name: username,
//         lastName: lastName,
//         mail: mail,
//         password: password})
//     });
//     const content = await subirDatos.json();
  
//     console.log(content);
//   })();

  //btn.addEventListener("click", subirDatos)






// const contenedor = document.querySelector(".contenedor")

// [{}].map((post) => {
//     contenedor.innerHTML += `
//         <section>
//             ${post.id}
//             <h1>${post.title}</h1>
//             <p>${post.description}</p>
//         </section>
//     `
// })

