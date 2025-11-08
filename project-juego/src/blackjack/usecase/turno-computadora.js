import { pedirCarta } from './';
import { valorCarta } from './';
// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos : puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement[]} puntosHTML : arreglo de los puntos del HTML donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora : Div donde se muestran las cartas de la computadora
 * @param {array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [] ) => {
    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error('Puntos HTML son necesarios');

    do {
        const carta = pedirCarta(deck);
        let puntosComputadora = 0;

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
