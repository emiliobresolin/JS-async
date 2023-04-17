async function executa()
{
    const fase1 = await esperaAi('fase 1', rand());
    console.log('Terminamos na fase:', fase1);
    const fase2 = await esperaAi('fase 2', rand());
    console.log('Terminamos na fase:', fase2);
    const fase3 = await esperaAi('fase 3', rand());
    console.log('Terminamos na fase:', fase3);
}