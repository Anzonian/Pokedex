let pokemon = JSON.parse(poke_file).result;
console.log(pokemon)

let inputPokemonName = document.getElementById("input_pokemon_name")
let poke_name = document.getElementById("poke_name")
let poke_number = document.getElementById("poke_number")

let poke_weight = document.getElementById("poke_weight")
let poke_height = document.getElementById("poke_height")
let pokeTypeOne = document.getElementById("pokeTypeOne")
let main_image = document.getElementById("main_image")


function search_pokemon_button_click(){
    let pokemonDetails = search_pokemon(inputPokemonName.value)
    console.log(pokemonDetails)
    poke_name.innerHTML = pokemonDetails.name;
    poke_number.innerHTML = pokemonDetails.number;
    poke_weight.innerHTML = pokemonDetails.weight;
    poke_height.innerHTML = pokemonDetails.height;
    pokeTypeOne.innerHTML = pokemonDetails.type;
    
    main_image.src = pokemonDetails.ThumbnailImage
   
}



function search_pokemon(inputPokemonName){
    for(let i = 0; i<pokemon.length; i++){
        if(pokemon[i].name == inputPokemonName){
            return pokemon[i];
        }
    }
}

// function img_change(){
//     let main_image = document.getElementById("main_image")
//     main_image.scr = pokemonDetails.ThumbnailImage;
// }

