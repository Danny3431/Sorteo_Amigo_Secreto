// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// version 1.0.1
// Autor: Daniela Puebla

const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que no esté repetido (ignora mayúsculas/minúsculas)
    const nombreExiste = amigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase());
    if (nombreExiste) {
        alert("Ese nombre ya está en la lista.");
        inputAmigo.value = '';
        inputAmigo.focus();
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();

    actualizarListaAmigos();

    // habilitar botón reiniciar
    document.getElementById('btnReiniciar').disabled = amigos.length === 0;
}


// Función que actualiza la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (amigos.length === 0) {
        lista.innerHTML = '<li>No hay amigos en la lista.</li>';
    } else {
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }
}

// Función que selecciona un amigo al azar
function sortearAmigo() {
    const resultadoDiv = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado y activar la clase "mostrar"
    resultadoDiv.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultadoDiv.classList.add("mostrar");//| mostrar
    resultadoDiv.style.display = 'block'; // asegurarse de que se muestre
}
function reiniciarJuego() {
    amigos.length = 0;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').classList.remove("mostrar"); // ocultar de nuevo
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    document.getElementById('btnReiniciar').disabled = true;
}
