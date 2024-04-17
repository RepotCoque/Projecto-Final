const baseURL = 'https://rickandmortyapi.com/api/character/'; // Reemplaza con la URL de la API de personajes

async function searchCharacters() {
    const searchTerm = document.getElementById('searchInput').value.trim();

    try {
        const response = await fetch(`${baseURL}?name=${searchTerm}`);
        const data = await response.json();
        display.console;
        displayCharacters(data);
    } catch (error) {
        console.error('Error al buscar personajes:', error);
    }
}


function displayCharacters(data){
    
}