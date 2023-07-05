//Função que será chamada para tocar as teclas
function tocarTeclas () {

    //cria uma variável que contém o áudio que será tocado
    let audio = new Audio('./sons/pokemon red-blue-yellow sound effects.mp3');
    //toca o áudio da variável
    audio.play();

}

const quantidade = document.querySelectorAll('.tecla');

//A repetição ocorrerá enquanto a variável contador for menor que a quantidade de teclas
for(let contador = 0; contador < quantidade.length; contador++) {

    //Cria uma variável com um número maior que contador 
    let numero = contador + 1;
    //Encontra as classes para tocar. Ex.: .tecla_1
    const selecionar = `.tecla_${numero}`;

    const tecla = document.querySelector(selecionar);
    //toca a tecla
    const clique = tecla.onclick = tocarTeclas;

    //retorna a repetição
    console.log(contador);

}


