console.log('Pokemon journey begins...')

const encounterButton = document.getElementById('pokemonEncounterButton');

async function getPokemon() {
    console.log('Looking for a wild Pokemon');

    let apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    let apiData =  await apiResponse.json();

    // Fetch name, type, image, cry
    // let pokemonName = apiData.name;
    return {
        name: apiData.name,
        types: apiData.types,
        image: apiData.sprites.other.home.front_default,
        sound: apiData.cries.latest
    };
}

// encounterButton.addEventListener('click', (event) => getPokemon(event));

// encounterButton.addEventListener('click', getPokemon);

encounterButton.addEventListener('click', async (event) => {
    console.log('Doing something here...');

    let pokemonResult = await getPokemon();

    console.log(pokemonResult);
});