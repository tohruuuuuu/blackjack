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
let puntosComputadora = 0;


//referencias del html
const btnPedirCarta         = document.querySelector('#btnPedirCarta');
const divCartasJugador      = document.querySelector('#Jugador-cartas');
const divCartasComputadora  = document.querySelector('#Computadora-cartas');
const puntosHTML            = document.querySelectorAll('small' );

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

// turo de la computadora


const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();
    
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
    
        //div.cartasJugador //
    
        //funcionalidad de crear cartas visibles jugador
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);
        
        if(puntosMinimos > 21 ) {
            break;
        }

    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );



}



//eventos (clicks)

btnPedirCarta.addEventListener('click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    //div.cartasJugador //

    //funcionalidad de crear cartas visibles jugador

    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${ carta }.png`
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if ( puntosJugador > 21 ) {
        console.warn('lo siento mucho, perdiste')
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    } else if ( puntosJugador === 21 ) {
        console.warn('!el jugador gana!');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador);
    }


});

btnDetener.addEventListener('click', () => {
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador);

})





