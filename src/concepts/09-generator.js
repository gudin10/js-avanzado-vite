/**
 * 
 * @param {HTMLDivElement} element 
 */

const generatorFunctionscomponent = ( element )=>{

    //const myGenerator = myFirstGeneratorFunction();
    //console.log( myGenerator.next() );

    const genId = IdGerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = ()=>{
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }
    //console.log( genId.next() );
    
    button.addEventListener('click', renderButton );
}

function* IdGerator(){
    let currenId = 0;

    while(true){
        yield `2024 - ${++ currenId}`;
    }
}
function* myFirstGeneratorFunction(){

    yield 'Primera valor';

    yield '2 valor';

    yield '3 valor';

    return 'Nada';
}

export {
    generatorFunctionscomponent,
}