// ! Iteración #1: Fetch

// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

//1.1
fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io/?name=';

const button$$ = document.querySelector('button');
const input$$ = document.querySelector('input');
button$$.addEventListener('click',()=>{
    fetch(baseUrl+input$$.value.toLowerCase())
    .then(res => res.json())
    .then(resData => console.log(resData))
})



{/* 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */}
const baseUrl = 'https://api.nationalize.io/?name=';

const button$$ = document.querySelector('button');
const input$$ = document.querySelector('input');
button$$.addEventListener('click',()=>{
    fetch(baseUrl+input$$.value.toLowerCase())
    .then(res => res.json())
    .then(resData =>{
       createElement(resData);
    
    } )
});

const createElement = (resData) => {
    
    for (const country of resData.country) {
        const percentage = Math.ceil(country.probability * 100);
        const text = `El  nombre ${resData.name} tiene un ${percentage}% de ser de ${country.country_id}`;
        const p$$ = document.createElement('p');
        document.body.appendChild(p$$);
         p$$.textContent = text;
    }
    
    
}


{/* 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */}

const baseUrl = 'https://api.nationalize.io/?name=';

const button$$ = document.querySelector('button');
const input$$ = document.querySelector('input');
button$$.addEventListener('click',()=>{
    fetch(baseUrl+input$$.value.toLowerCase())
    .then(res => res.json())
    .then(resData =>{
       createElement(resData);
    
    } )
});

const createElement = (resData) => {
    
    for (const country of resData.country) {
        const percentage = Math.ceil(country.probability * 100);
        const text = `El  nombre ${resData.name} tiene un ${percentage}% de ser de ${country.country_id}`;
        const p$$ = document.createElement('p');
        document.body.appendChild(p$$);
         p$$.textContent = text;
         const button2$$ = document.createElement('button');
         button2$$.innerHTML='X';
         document.body.appendChild(button2$$);
         button2$$.addEventListener('click', ()=>{
            p$$.remove();
         })
    }
    
    
}

//! **Iteración #2: async-await**

// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
// const runTimeOut = async() => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     await promise;
//     console.log('Time out');


   
// };

// runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();
