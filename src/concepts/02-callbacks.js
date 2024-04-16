import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */

const callbacksComponent = ( element )=>{

    //console.log( 'callbacks' );

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f25a058e5b1c8a65e';
    

    findHero(id1 , ( error, hero1 )=>{
        //element.innerHTML = hero?.name || 'No hay Heroe';

        if ( error ){
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error,hero2)=>{
            if ( error ){
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });

    } );
}


/**
 * 
 * @param {String} id 
 * @param {(error:String |null,heroe:Object) => void} callback 
 */
const findHero = (id ,callback)=>{
    const heroe = heroes.find( person=> person.id === id );

    if( !heroe ){
        callback(`Hero with id ${ id } not found.`);

        return;//undefine
    }

    callback( null, heroe );
}

export {
    callbacksComponent,
}