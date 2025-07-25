# 🎮 Jogo do Número Secreto

![Status do Projeto](https://img.shields.io/badge/status-concluído-brightgreen)

Este projeto é o resultado do desafio "Jogo do Número Secreto", desenvolvido durante o programa **ONE (Oracle Next Education)**, uma parceria educacional entre a **Oracle** e a **Alura**.

Trata-se de um divertido jogo de adivinhação desenvolvido com JavaScript puro, onde o jogador deve descobrir um número secreto. O projeto conta com manipulação do DOM para interagir com o usuário e utiliza a biblioteca `ResponsiveVoice.js` para dar feedback por voz.

### 🖼️ Screenshot do Jogo
<img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/80a62f1c-515e-4693-82b8-2b7704c3afa9" />

---

## ✨ Funcionalidades Principais

- **Número Aleatório:** Um número secreto entre 1 e 10 é gerado a cada nova partida.
- **Feedback Interativo:** O jogo informa se o chute do jogador é maior ou menor que o número secreto.
- **Contador de Tentativas:** Mostra ao jogador quantas tentativas foram necessárias para acertar.
- **Feedback por Voz:** Utiliza a API `ResponsiveVoice.js` para ler os textos da tela, melhorando a acessibilidade.
- **Lógica Anti-Repetição:** O sistema evita sortear números que já foram utilizados em partidas anteriores, reiniciando a lista apenas quando todos os números possíveis forem sorteados.
- **Reiniciar o Jogo:** Um botão permite que o jogador comece uma nova partida a qualquer momento após acertar.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura base da página.
- **CSS3:** (Recomendado) Para estilização da interface.
- **JavaScript:** Toda a lógica do jogo, manipulação do DOM e interatividade.
- **[ResponsiveVoice.js](https://responsivevoice.org/):** Biblioteca externa para síntese de voz em português.

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/andersongouveiaa/Jogo-do-numero-secreto
    ```

2.  **Crie o arquivo `index.html`:**
    
    Crie um arquivo chamado `index.html` na mesma pasta do seu arquivo JavaScript (`app.js`) e cole o código abaixo. Ele contém a estrutura mínima para o jogo funcionar.

    ```html
     
    <!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.responsivevoice.org/responsivevoice.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>JS Game</title>
    </head>
    
    <body>

    <div class="container">
        <div class="container__conteudo">
            <div class="container__informacoes">
                <div class="container__texto">
                    <h1></h1>
                    <p class="texto__paragrafo"></p>
                </div>
                <input type="number" min="1" max="10" class="container__input">
                <div class="chute container__botoes">
                    <button onclick="verificarChute()" class="container__botao">Chutar</button>
                    <button onclick="reiniciarJogo()" id="reiniciar" class="container__botao" disabled>Novo jogo</button>
                </div>
            </div>
            <img src="./img/ia.png" alt="Uma pessoa olhando para a esquerda" class="container__imagem-pessoa" />
        </div>
    </div>




    <script src="app.js" defer></script>
    </body>
    
    </html>

    ```

3.  **Abra no Navegador:**
    
    Abra o arquivo `index.html` no seu navegador de preferência. O jogo estará pronto para ser jogado!

---

## 📂 Estrutura de Arquivos
    /projeto-numero-secreto
    |-- index.html      # Estrutura da página
    |-- app.js          # Lógica principal do jogo
    |-- style.css       # (Opcional) Estilos da página
    |-- README.md       # Documentação do projeto
---

## 👨‍💻 Autor

Feito por **Anderson Gouveia**.
