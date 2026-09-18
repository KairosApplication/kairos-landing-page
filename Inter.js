const carrossel = document.getElementById("carrossel");

const botoes = document.querySelectorAll(
    ".indicadores button"
);

let atual = 0;


function mudarCard(numero) {

    atual = numero;

    carrossel.style.transform =
        `translateX(-${atual * 100}%)`;


    botoes.forEach(botao => {
        botao.classList.remove("ativo");
    });


    botoes[atual].classList.add("ativo");
}


mudarCard(0);