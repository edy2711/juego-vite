   
   /**
    * 
    * @param {string} carta 
    * @returns {HTMLElement} imagen de la carta, esta se regresa para se agregada al DOM
    */
   export const crearCartaHTML = ( carta ) => {
   // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
   }