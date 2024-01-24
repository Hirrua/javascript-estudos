//Timestamp unix (01/01/1970) -> para conseguir data anterior a está, deve usar valores negativos dentro do parenteses

//Um dia em milesimos de segundo          1 hora        *  24 horas   * 1000 milesimos = 24000 milesimos (para manipular a data no js somente em milesimos)

const umDia = 60 * 60 * 24 * 1000   // 60 segundos * 60 segundos * 24 horas * 1000 milesimos
const tresHoras = 60 * 60 * 3 * 1000 // devido ao fuso hórario

const data = new Date(0 + tresHoras + umDia) // 02/01/1970
console.log(data.toString())