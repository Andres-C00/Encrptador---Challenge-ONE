function validarEntrada(){
    const textoEntrada = document.getElementById('inputText').value;
    const mensajeValidacion = document.getElementById('mensajeValidacion');

    const regex = /^[a-z\s]*$/;

    if (!regex.test(textoEntrada)){
        mensajeValidacion.classList.remove('oculto');
        return false;
    } else{
        mensajeValidacion.classList.add('oculto');
        return true;
    }
}

function encriptarTexto(){
    if (validarEntrada()){
        let texto = document.getElementById('inputText').value;
        let textoEncriptado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('outputText').value = textoEncriptado;
    } else{
        alert('Por favor, asegúrese de que el texto no contiene mayúsculas ni caracteres especiales.');
    }
}

function desencriptarTexto(){
    if (validarEntrada()){
        let texto = document.getElementById('inputText').value;
        let textoDesencriptado = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('outputText').value = textoDesencriptado;
    } else{
        alert('Por favor, asegúrese de que el texto no contiene mayúsculas ni caracteres especiales.');
    }
}

document.getElementById('inputText').addEventListener('input', validarEntrada);
document.querySelector('.boton-encriptar').addEventListener('click', encriptarTexto);
document.querySelector('.boton-desencriptar').addEventListener('click', desencriptarTexto);



