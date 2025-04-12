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

let puntosJugador = 0;
let puntosComputaodra = 0;


//referencias del html
const btnPedirCarta = document.querySelector('#btnPedirCarta');

const puntosHTML = document.querySelectorAll('small');

//crear un nuevo deck
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
       
    return carta;
}

//pedirCarta()

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor)   ) ?
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1;
}



//eventos (clicks)

btnPedirCarta.addEventListener('click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    

})





