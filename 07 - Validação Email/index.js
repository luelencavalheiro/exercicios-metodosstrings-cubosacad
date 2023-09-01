const email = "aluno@cubos.academy";

const validarEmail = (email) => {
    let emailValido = true;

    if (email.indexOf("@") < 0) {
        emailValido = false;
    } else if (email.indexOf(".") < 0) {
        emailValido = false;
    } else if (email.indexOf(".") === 0) {
        emailValido = false;
    } else if (email.lastIndexOf(".") === email.length - 1) {
        emailValido = false;
    } else if (email.lastIndexOf("@") === email.length - 1) {
        emailValido = false;
    }

    if (emailValido) {
        console.log("Email válido");
    }
    else {
        console.log("Email inválido")
    }
}


validarEmail(".@");