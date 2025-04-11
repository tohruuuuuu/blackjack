/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamons
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
 * 
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S',];
const especiales = ['A', 'J', 'Q', 'K',];



const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push ( i + tipo);
        }
    }

    for( let tipo of tipos) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // push es para meter cosas a aun array
    deck = _.shuffle ( deck );
    console.log( deck );
    return deck;

}

crearDeck();

//funcion para tomar una carta 
const pedirCarta = () => {
    if( deck.length === 0 ) {
        throw 'no hay mas cartas en el deck';
    }

    let carta = deck.pop();
        console.log( deck ); // carta debe ser de la baraja y dejar de existir en el array
        console.log( carta ); 
    return;
}

//pedirCarta()
