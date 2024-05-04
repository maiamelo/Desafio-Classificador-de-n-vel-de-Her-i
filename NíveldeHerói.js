


let nome = prompt("Digite seu nome");
let exp = prompt("Digite sua Experiencia");

let classificacao;

if (exp < 1000 ){
    console.log(classificacao = "ferro");
}else if(exp > 1001 && exp < 2000){
    console.log(classificacao = "Bronze");
}else if(exp > 2001 && exp < 5000){
    console.log(classificacao = "Prata");
}else if(exp > 5001 && exp < 7000){
    console.log(classificacao = "Ouro");
}else if(exp > 7001 && exp < 8000){
    console.log(classificacao = "Platina");
}else if(exp > 8001 && exp < 9000){
    console.log(classificacao = "Ascendente");
}else if(exp > 9001 && exp < 10000){
    console.log(classificacao = "Imortal");
}else if(exp >= 10001){
    console.log(classificacao = "Radiante");
}

console.log(" O heroi de nome "+ nome + " esta no nivel de "+ classificacao );