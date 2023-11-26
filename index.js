// constantes
const inicio = "O Herói de nome"
const fim = " está no nível de"

// Varíaveis
let xpHeroi = 999
let NomeDoHeroi = " Salsicha"

if (xpHeroi < 1000) {
    nivelDoHeroi = " Ferro"
}
else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelDoHeroi = " Bronze"
}
else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelDoHeroi = " Prata"
}
else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivelDoHeroi = " Ouro"
}
else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelDoHeroi = " Platina"
}
else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelDoHeroi = " Ascendente"
}
else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelDoHeroi = " Imortal"
}
else {
    nivelDoHeroi = " Radiante"
}

console.log(inicio + NomeDoHeroi + fim + nivelDoHeroi)

console.log ("Oi Felipão, corrige aí")
