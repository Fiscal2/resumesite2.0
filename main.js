
async function fetchCharacter() {
    
     const response = await fetch("https://rickandmortyapi.com/api/character/1")
     const data = await response.json();
     console.log(data);
     const rickDiv = document.querySelector('#rick');
}

fetchCharacter();