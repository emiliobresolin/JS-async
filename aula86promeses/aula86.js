//OUT PUT ALEATORIO MESMO SENDO EM ORDER:

function rand(min,max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo)
{
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}


//espera('Frase 1', rand(1, 3));
//espera('Frase 2', rand(1, 3));
//espera('Frase 3', rand(1, 3));

//=================================================================

//CALL BACK (CB) TYPE :

function rand2(min,max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera2(msg, tempo, cb)
{
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}
/*
espera2('2 Frase 1', rand2(1, 3), function()
{
    espera2('2 Frase 2', rand2(1, 3), function()
    {
        espera2('2 Frase 3', rand2(1, 3));
    });
});
*/
//=================================================================

function rand3(min,max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera3(msg, tempo)
{
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Bad value!');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espera3('connection to data server has been made.', rand3(1, 3))
.then(resposta => {
    console.log(resposta);
    return espera3('searching for data...', rand3(1,3));
})
.then(resposta => {
    console.log(resposta);
    return espera3('data has been found.', rand3(1,3));
})
/*
// USANDO O REJECT:
.then(resposta => {
    console.log(resposta);
    return espera3(404, rand3(1,3));
})
*/
.then(resposta => {
    console.log(resposta);
}).then(()=>{
    console.log('data is ready.');
})
.catch(e=>{
    console.log('Erro:', e);
});