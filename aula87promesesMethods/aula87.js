function rand(min,max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo)
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('false - ERRO');
                return;
            } 
            resolve(msg.toUpperCase() + ' - passei na primise');
        }, tempo);
    });
}

// Promise.all , Promise.race , Promise.resolve, Promise.reject

// ========================================== ALL
const promises1 = [
    'primeiro valor',
    espera('Promese 1', 3000),
    espera('Promese 2', 500),
    espera('Promese 3', 1000),
    //espera(1000,1000), // usando o reject
    'ultimo valor'
];

Promise.all(promises1)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
// ========================================== RACE


const promises2 = [
    espera('Promese2 1', rand(1,5)),
    espera('Promese2 2', rand(1,5)),
    espera('Promese2 3', rand(1,5)),
    espera(1000,rand(1,5)) // usando o reject
];

Promise.race(promises2)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});

//==================================================


function baixaPagina() {
    const emCache = false;
  
    if(emCache) {
      return Promise.resolve('Página em cache');
    } else {
      return espera('Baixei a página', 3000);
    }
  }
  
  baixaPagina()
    .then(dadosPagina => {
      console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));