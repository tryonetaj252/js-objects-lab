//console.dir(pokemon, { maxArrayLength: null })
//const game = {
//    party: [],
//    gyms: [
//      { location: "Pewter City", completed: false, difficulty: 1 },
//      { location: "Cerulean City", completed: false, difficulty: 2 },
//      { location: "Vermilion City", completed: false, difficulty: 3 },
//      { location: "Celadon City", completed: false, difficulty: 4 },
//      { location: "Fuchsia City", completed: false, difficulty: 5 },
 //     { location: "Saffron City", completed: false, difficulty: 6 },
//      { location: "Cinnabar Island", completed: false, difficulty: 7 },
//      { location: "Viridian City", completed: false, difficulty: 8 },
//    ],
 //   items: [
//      { name: "potion", quantity: 4 },
//      { name: "pokeball", quantity: 8 },
//      { name: "rare candy", quantity: 99 },
//    ],
//  }
//console.log(game)



/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
 let game = {
    title: "Day z",
    genre: "Horror",
    platform: "Ps5",
  };  
  game.difficulty = "Hard";
 console.log(game.difficulty); 'Hard' 



 /*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
// Assuming you have an array of Pokémon objects like this:

const pokemon = [
    { name: 'Pikachu', type: 'Electric', starter: true },
   
    
];


function selectStarterPokemon(pokemonArray) {
    
    for (let i = 0; i < pokemonArray.length; i++) {
        
        if (pokemonArray[i].starter === true) {
            
            return pokemonArray[i];
        }
    }
    
    return null;
}


const starterPokemon = selectStarterPokemon(pokemon)
if (starterPokemon !== null) {
    console.log("Your starter Pokémon is:", starterPokemon.name);
} else {
    console.log("No starter Pokémon found in the array.");
}



  

 
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const Pokemon = [
    { name: 'Bulbasaur', type: 'Grass', HP: 45 },
    { name: 'Charmander', type: 'Fire', HP: 39 },
    { name: 'Squirtle', type: 'Water', HP: 44 },
];


const party = [];

function addToParty(pokemonArray, criteria, value, partyArray, count) {
    
    const filteredPokemon = pokemonArray.filter(pokemon => pokemon[criteria] === value);
    
    filteredPokemon.sort((a, b) => a.HP - b.HP);
    
    for (let i = 0; i < count && i < filteredPokemon.length; i++) {
        partyArray.push(filteredPokemon[i]);
    }
}


addToParty(pokemon, 'type', 'Grass', party, 1); 
addToParty(pokemon, 'type', 'Fire', party, 1);  
addToParty(pokemon, 'type', 'Water', party, 1); 


console.log("Your party:", 'Bulbasaur', 'Charmander', 'Squirtle');
party.forEach(pokemon => console.log(pokemon.name));




/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

const Game = {
    party: [
        { name: 'Bulbasaur', HP: 45 },
        { name: 'Squirtle', HP: 44 },
        { name: 'charmander', HP: 39 },
        { name: 'Pikachu', HP: 35 },
        
    ]



};

console.log("Arranged party by HP:");
console.log(pokemon);  ['Bulbasaur', 'Squirtle', 'charmander', 'Pikachu']

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/// Assuming you have an array of gym objects like this:
const gyms = [
    { name: 'Pewter Gym', difficulty: 1, completed: false },
    { name: 'Cerulean Gym', difficulty: 2, completed: false },
    { name: 'Vermilion Gym', difficulty: 3, completed: false },
    
];

for (let i = 0; i < gyms.length; i++) {
    if (gyms[i].difficulty < 3) {
        gyms[i].completed = true;
    }
}

console.log(gyms);


/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/

const pok = [
    { name: 'Pikachu', evolvesTo: 'Raichu' },
    { name: 'Bulbasaur' },
    { name: 'Charmander' },
    { name: 'Squirtle' }
    
];

const index = party.findIndex(pokemon => pokemon.name === 'Pikachu');


if (index !== -1) {
    party.splice(index, 1, { name: 'Raichu' });
    delete party[index].Pikachu;
}


console.log("Updated party: 'Raichu'");
party.forEach(pokemon => console.log(pokemon.name));



/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/

const pokemonObj = [
    { name: 'Bulbasaur' },
    { name: 'Charmander' },
    { name: 'Squirtle' },
    { name: 'Raichu' },
];

console.log("Pokémon in your party: 'Raichu', 'Bulbasaur', 'Charmander','Squirtle' ");
party.forEach(pokemon => console.log(pokemon.name));





/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/
const po = [
    { name: 'Bulbasaur', starter: true },
    { name: 'Charmander', starter: true },
    { name: 'Squirtle', starter: true },
    { name: 'Pikachu', starter: false },
];

for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true) {
        console.log("The starter Pokémon is: 'Bulbasaur'", pokemon[i].name);
        break; 
    }
}

/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/







/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/




/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/








/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/







/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/




/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/




/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/



