/*
    DESAFIO QUE UM BORTHER ME FEZ FAZER.

Pegar as horas e minutos
e transformar tudo em segundos. 
ex: 1:10:20' ->  4820 segundos.
*/


function relogio(h, m, s) {

    let hora = (h * 60) * 60; //minutos em segundos
    let minutos = m * 60;
    let segundos = s;

    if (h > 23) {
        console.log(error('HORAS maior que 24'))
    } else if (m > 59) {
        console.log(error('MINUTOS maior que 59'));
    } else if (s > 59) {
        console.log(error('SEGUNDOS maior que 59'));
    };

    const horasPorSegundo = hora + minutos + segundos;

    return `${h}:${m}:${s}  -> são exatamente ${horasPorSegundo} segundos!
    ${h} horas = ${hora}
    ${m} minutos = ${minutos}
    ${s} segundos = ${segundos}
    total = ${hora} + ${minutos} + ${segundos} = ${horasPorSegundo}`

};
console.log(relogio(24, 60, 59))
