async function obtenerInformacion() {
    
    const select = document.getElementById("pokemon-select");
    const pokemon = select.value;

    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            throw new Error("No se pudo obtener la información del Pokémon");
        }

        const data = await response.json();

        
        const nombre = data.name;
        const imagen = data.sprites.front_default;
        const tipos = data.types.map(tipo => tipo.type.name).join(", ");
        const altura = data.height / 10; 
        const peso = data.weight / 10; 

        
        const infoDiv = document.getElementById("pokemon-info");
        infoDiv.innerHTML = `
            <h2>${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h2>
            <img src="${imagen}" alt="${nombre}">
            <p><strong>Tipo:</strong> ${tipos}</p>
            <p><strong>Altura:</strong> ${altura} metros</p>
            <p><strong>Peso:</strong> ${peso} kg</p>
        `;
    } catch (error) {
        console.error("Error:", error);
        const infoDiv = document.getElementById("pokemon-info");
        infoDiv.innerHTML = <p>Error al obtener la información: ${error.message}</p>;
    }
}