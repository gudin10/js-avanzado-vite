import {heroes} from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */

const generatorsAsyncComponent = async( element )=>{

    const heroGenerator = getHerogenerator();
    let isFinished = false;
    do{
        const {value,done} = await heroGenerator.next();
        isFinished = done;

        console.log(value,done);
        if(isFinished) break;
        
        element.innerHTML = value;
    }while( !isFinished )
}

async function* getHerogenerator(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }
    return 'No hay mas';
}
const sleep = ()=>{
    return new Promise ( (resolve) =>{
        setTimeout(()=>{
            resolve();
        },500);
    })
}
export {
    generatorsAsyncComponent,
}