const baseURL = 'https://api.example.com/characters'; // Reemplaza con la URL de la API de personajes

async function searchCharacters() {
    const searchTerm = document.getElementById('searchInput').value.trim();

    try {
        const response = await fetch(`${baseURL}?name=${searchTerm}`);
        const data = await response.json();

        displayCharacters(data);
    } catch (error) {
        console.error('Error al buscar personajes:', error);
    }
}

function displayCharacters(characters) {
    const characterList = document.getElementById('characterList');
    characterList.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos resultados

    if (characters.length === 0) {
        characterList.innerHTML = '<p>No se encontraron personajes.</p>';
        return;
    }

    characters.forEach(character => {
        const characterCard = `
            <div class="character">
                <h2>${character.name}</h2>
                <p><strong>Edad:</strong> ${character.age}</p>
                <p><strong>Género:</strong> ${character.gender}</p>
                <p><strong>Descripción:</strong> ${character.description}</p>
            </div>
        `;
        characterList.innerHTML += characterCard;
    });
}