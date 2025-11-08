// Esta función me permite tomar una carta
/**
 * 
 * @param {array<string>} _deck 
 * @returns {string} carta del arreglo
 */
export const pedirCarta = (deck) => {


    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
