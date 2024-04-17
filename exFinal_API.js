/*
const apiRick=async (pagina)=>{
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.getElementById("resultado");
    divRes.innerHTML = "";
    data.results.map(item=>{
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Estatus: </b>${item.status}</p>
                <p class="card-text"><b>Especie: </b>${item.species}</p>
                <p class="card-text"><b>Genero: </b>${item.genre}</p>
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    })
}
apiRick(1);
*/



function searchCharacter() {
    const input = document.getElementById('searchInput').value;
    const url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(input)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no pudo ser completada.');
            }
            return response.json();
        })
        .then(data => {
            const characters = data.results;
            const displayArea = document.getElementById('result');
            displayArea.innerHTML = ''; // Limpiar resultados anteriores

            if (characters.length > 0) {
                characters.forEach(character => {
                    displayArea.innerHTML += `<p>Nombre: ${character.name}<br>Especie: ${character.species}<br>Género: ${character.gender}<br>Origen: ${character.origin.name}</p>`;
                });
            } else {
                displayArea.innerHTML = '<p>No se encontraron personajes.</p>';
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            document.getElementById('result').innerHTML = '<p>Hubo un error al realizar la búsqueda.</p>';
        });

        divRes = document.getElementById("result");
    divRes.innerHTML = "";
    data.results.map(item=>{
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Estatus: </b>${item.status}</p>
                <p class="card-text"><b>Especie: </b>${item.species}</p>
                <p class="card-text"><b>Genero: </b>${item.genre}</p>
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    })
}
//apiRick(1);
//}
