import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */

const asyncAwaitComponent = async( element )=>{

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f233c9f2425f16916';

    //const {name: name1} = await finHero( id1 );

    try {
        const hero1 = await finHero( id1 );
        const hero2 = await finHero( id2 );
    
        element.innerHTML = `${hero1.name}/${hero2.name}`;

    } catch (error) {
        element.innerHTML = `${error}`;
    }

    

    
}

const finHero = async( id )=>{

    const hero  = heroes.find( hero => hero.id === id );

    if(!hero) throw 'Hero not found';

    return hero;
}

export {
    asyncAwaitComponent,
}