const form = document.getElementById("myForm")

//En "event" está toda la info enviada del form
form.addEventListener("submit", (event) => {
    event.preventDefault(); // "congela" la ejecución

    console.log(event);
    console.log(event.target.email); // entiende "email" gracias a "name=email" en el HTML, y, en su defecto, "id=email"
                                    // escribir name y id con el mismo nombre
    console.log(event.target.name.value) // valor
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    console.log(event.target.phone.value)

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    const phone = event.target.phone.value

// Regex para validar los campos
const nameRegex = /^[A-Za-z]{3,}$/
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
const passworRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$*]{8,}$/;
const phoneRegex = /^\d{9}$/


    // if(name.length <= 3) {
    //     alert("Por favor, mínimo 3 caracteres")
    // }

    // if (!email.includes("@")) {
    //     alert("El correo debe tener @")
    // }

    //Comprobación
let errorMessage = ""

    if(!nameRegex.test(name)) {
        errorMessage += "Error formato nombre\n"
    }
    
    if(!emailRegex.test(email)) {
        errorMessage += "Error formato email\n"
    }
    
    if(!passworRegex.test(password)) {
        errorMessage += "Error formato password: Se admite mayusculas, minusculas, $, * al menos 8 caracteres\n"
    }
    
    if(!phoneRegex.test(phone)) {
        errorMessage += "Error formato teléfono\n"
    }

    if(errorMessage){
        alert(errorMessage)
        document.getElementById("errorMessage").innerHTML = `<pre class="errorMessage">${errorMessage}</pre>`
    }
    else {
        alert("Enviado con éxito!");
        document.getElementById("errorMessages").innerHTML = `<pre class="success">Enviado con éxito!</pre>`;
        form.reset() // Limpia el formulario
    }
})