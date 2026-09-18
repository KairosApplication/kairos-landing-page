const carrossel = document.getElementById("carrossel");

const botoes = document.querySelectorAll(
    ".indicadores button"
);
const botaoatras = document.querySelectorAll(
    ".botaoatras button"
)

let atual = 0;
let crescido = 0;

function mudarCard(numero) {

    atual = numero;

    carrossel.style.transform =
        `translateX(-${atual * 100}%)`;


    botoes.forEach(botao => {
        botao.classList.remove("ativo");
    });


    botoes[atual].classList.add("ativo");
}
function crescer(numero){
    crescido = numero;

    carrossel.style.transform =
        `translateX(-${numero * 100}%)`;
    botaoatras.forEach(botao => {
        if(numero = 0)
            botao.classList.remove("ativo");
        }
            
    );
    if (numero >= numero){
        botaoatras[atual].classList.add("ativo");
    }


}


mudarCard(0);