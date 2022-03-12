// console.log("https://api.pokemontcg.io/v1/cards?name=charizard");

function fetchPhotos(pokename){
    fetch("https://api.pokemontcg.io/v1/cards?name=" + pokename)
    .then(response => response.text())
    .then(contents => {
        data = contents
        obj = JSON.parse(contents)

        console.log(obj);
        populateImages(obj);

    })
}

function populateImages(obj){
    let length = obj["cards"].length;
    for(i = 0; i < length; i++){
        $("#core").prepend(
            '<img class = "pokemoncards" id = "pokemoncard' + i + '" >'
        );
        
        let image = obj["cards"][i]["imageUrlHiRes"]
        document.getElementById("pokemoncard" + i).src = image;
    }
    
}

function getName(){
    console.log("It works!");
    let pokemonName = document.getElementById("pokemon").value.toLowerCase();
    fetchPhotos(pokemonName);
}

// $('input[name=pokemont]').keyup($.debounce(getName, 300))


