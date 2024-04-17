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

let personajeElegido;

function searchCharacters() {
  personajeElegido = document.getElementById("searchInput").value;
  personajeElegido = personajeElegido.toLowerCase();

  fetch("https://rickandmortyapi.com/api/character/?name=" + personajeElegido)
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function cogerData(data) {
      imprimirFicha(data);
    });
}

function imprimirFicha(data) {
document.getElementById("resultado").innerHTML = ``

  for (let i = 0; i < data.results.length; i++) {
    document.getElementById("resultado").innerHTML += `
        <div class="ficha" style="width: 18rem;">
        <img src="${data.results[i].image}" class="card-img-top" alt="..." background-color= "white">
        <div class="information-card">
        <h5>${data.results[i].name}</h5>
        <p><b>Estatus: </b>${data.results[i].species}</p>
        <p><b>Estado: </b>${data.results[i].status}</p>
        <p><b>Genero: </b>${data.results[i].genre}</p>
         </div> 
         `;
          
            
  }
}