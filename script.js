const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver( (entries) =>{
    // console.log(entries) DETALHAR AS INFORMACOES

    entries.forEach((entry) =>{
        if(entry.isIntersecting === true){
            // elements[0].classList.remove('hidden')
            // elements[0].classList.add('show')
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } )
} );


// myObserver.observe(elements); NÃO FUNCIONA DESSA FORMA


// passa item por item pois o observer não pega todos de uma vez
elements.forEach( (element) => myObserver.observe(element));
