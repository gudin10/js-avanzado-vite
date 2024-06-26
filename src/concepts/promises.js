/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

const PromiseComponent = ( element )=>{

    const renderHero = ( hero )=>{
        element.innerHTML = hero.name;
    }

    const renderTwoHero = ( hero1,hero2 )=>{
        element.innerHTML = `
                            <h3>${hero1.name}</h3>
                            <h3>${hero2.name}</h3>`;
    }

    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    const renderErro = ( erro )=>{
        element.innerHTML = `<h3> ${erro} </h3>`;
    }

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1,hero2])=>{ renderTwoHero(hero1,hero2)} )
    .catch( renderErro );

    //!    Forma 2
    // findHero(id1)
    //     .then( hero=>{
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 =>{
    //         renderTwoHero(hero1 , hero2);
    //     }).catch( renderErro );

    //!    Forma 1
    // findHero(id1)
    // .then( (hero)=>{
    //     hero1 = hero;

    //     findHero(id2)
    //     .then( hero2 =>{
    //         renderTwoHero(hero1,hero2)
    //     }).catch(renderErro);
    // } )
    // .catch( error => renderErro(error));
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id )=>{
    
    return new Promise( ( resolve, reject )=> {
        const hero = heroes.find( hero => hero.id === id );

        if(hero){
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);
    });
    
    
}

export {
    PromiseComponent,
}