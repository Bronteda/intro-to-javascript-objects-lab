const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  /*[{
    number: 71,
    name: 'Victreebel',
    type: 'grass',
    hp: 80,
    starter: false
}]*/
//[ARRAY-SQUARE NOTATION{OBJECT- DOT NOTATION}]
//console.dir(pokemon, { maxArrayLength: null })

//Exercise 1

for (const element of pokemon){
    if(element.number===59){
        console.log(element);
        break;
    }
}


//Exercise 2

//console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here: 
*/
game.difficulty = ("Medium");
console.log(game);


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

let starterPokemon = {};
//loop all elements of the Pokemon array to find a random starter
for( const element of pokemon){
    if(element.starter){
        starterPokemon = element;
        break;
    }
}
//Adding the Starter to the Party Array within the Game Object
game.party.push(starterPokemon);
console.log(game);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


 for(let i=0; i<pokemon.length; i++){
    //It's 3 because we already put a Pokemon in this array in the previous question
    if (game.party.length > 3){
         console.log("Party has 4 different Pokemons");
         break;
     }else if(pokemon[i].type==='poison'|| pokemon[i].type==='bug'){
         game.party.push(pokemon[i]);
     }else if (pokemon[i].hp > 70){
         game.party.push(pokemon[i]);
     }
        
}

console.log(game);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for(const gym of game.gyms){
    if (gym.difficulty < 3){
        gym.completed = true;
    }
}
console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. 
When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

let Pokemon2 = {};

for (const element of pokemon){
    if (element.number === 2){
        Pokemon2 = element;
        break;                                                                                                                                                                                                                                                                                                                                                            
    }                       
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

for(let i=0; i<= game.party.length; i++){
    if(game.party[i].name === 'Bulbasaur'){
        game.party.splice(i,1,Pokemon2);
        break;
    }
}

console.log(game.party);
