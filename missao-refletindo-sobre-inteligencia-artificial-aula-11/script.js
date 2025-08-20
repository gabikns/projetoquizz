const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um urso polar recém-chegado ao Ártico sem qualquer treinamento formal. Qual é a sua primeira reação ao se deparar com o ambiente gelado e inóspito?",
        alternativas: [
            {
                texto: "Isso é assustador! Não sei como sobreviver em um lugar tão frio.",
                afirmacao: "Você sente medo do novo ambiente e começa a procurar ajuda de outros ursos."
            },
            {
                texto: "Isso é maravilhoso! Estou pronto para explorar e aprender sobre o Ártico.",
                afirmacao: "Você sente uma grande curiosidade sobre o ambiente e começa a explorar com energia."
            }
        ]
    },
    {
        enunciado: "Você encontra seu primeiro bloco de gelo, mas não sabe como usá-lo para pescar. O que você faz?",
        alternativas: [
            {
                texto: "Desisto e tento procurar outra fonte de alimento em outro lugar.",
                afirmacao: "Você não consegue pescar inicialmente e fica frustrado, mas decide tentar outras abordagens."
            },
            {
                texto: "Procuro observar outros ursos e tentar aprender com eles.",
                afirmacao: "Você começa a aprender observando os outros ursos e, gradualmente, consegue pescar sozinho."
            }
        ]
    },
    {
        enunciado: "Enquanto explora, você encontra um grupo de ursos polares em uma grande reunião. O que você faz?",
        alternativas: [
            {
                texto: "Fico tímido e tento me esconder para não atrapalhar.",
                afirmacao: "Você sente um pouco de insegurança, mas está interessado em aprender mais com o grupo."
            },
            {
                texto: "Me aproximo e tento me integrar ao grupo, mesmo sem experiência.",
                afirmacao: "Você decide ser audacioso e se junta ao grupo para aprender como se virar no Ártico."
            }
        ]
    },
    {
        enunciado: "Você está começando a entender o processo de caçar focas, mas o clima está piorando. O que você faz para se adaptar?",
        alternativas: [
            {
                texto: "Me escondo em uma caverna e espero que a tempestade passe.",
                afirmacao: "Você aprende a lidar com o clima rigoroso e começa a entender como sobreviver a tempestades."
            },
            {
                texto: "Continuo tentando pescar, mesmo com o tempo difícil.",
                afirmacao: "Você decide ser persistente e aprender a caçar em condições adversas."
            }
        ]
    },
    {
        enunciado: "Você descobre um novo território cheio de peixes e oportunidades. Como você reage a essa descoberta?",
        alternativas: [
            {
                texto: "Exploro o local e tento encontrar mais fontes de comida.",
                afirmacao: "Você encontra um novo local rico em recursos e sente um senso de conquista."
            },
            {
                texto: "Decido me estabelecer aqui e fazer deste local meu novo lar.",
                afirmacao: "Você vê o novo território como uma chance de criar raízes e adaptar sua vida no Ártico."
            }
        ]
    },
    {
        enunciado: "A temporada de caça chegou ao fim e você precisa preparar o seu território para o inverno rigoroso. O que faz?",
        alternativas: [
            {
                texto: "Não sei o que fazer, então fico esperando que algo aconteça.",
                afirmacao: "Você aprende que, sem preparação, o inverno pode ser muito difícil, mas agora se sente mais preparado para a próxima temporada."
            },
            {
                texto: "Começo a construir um abrigo seguro e me preparo para o inverno com o que tenho.",
                afirmacao: "Você usa tudo o que aprendeu para se preparar adequadamente para o inverno e se sentir mais seguro."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada como urso polar sem curso em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
