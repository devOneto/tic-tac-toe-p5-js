mouseClicado = false;

estaDentroDoX = false;
estaDentroDo0 = false;

escolhaDoJogador = "nenhum";

function setup(){
    createCanvas(800,600);
}

function draw(){

    background(0);
    mouseClicado = false;

    fill(255);
    textSize(30);
    text("Jogo da Velha",280,40);

    if(escolhaDoJogador == "nenhum"){
        escolha();
    }

    if(escolhaDoJogador != "nenhum"){
        textSize(15);
        text("A escolha do Jogador foi: " + escolhaDoJogador, 500, 20)
    }

    //tabletop
    
}

function escolha(){
    
    retanguloUmX = 100;
    retanguloUmY = 180;

    retanguloDoisX = 500;
    retanguloDoisY = 180;

    largura = 200;

    corFundoRetanguloX = 0;
    corFundoRetangulo0 = 0;
    corX = 255;
    cor0 = 255;


    if(
        mouseX >=retanguloUmX && mouseX <= retanguloUmX + largura
        && 
        mouseY >= retanguloUmY && mouseY <= retanguloUmY + largura
    ){
        corFundoRetanguloX = 255;
        corX = 0;
        estaDentroDoX = true;
    }

    if(
        mouseX >=retanguloDoisX && mouseX <= retanguloDoisX + largura
        && 
        mouseY >= retanguloDoisY && mouseY <= retanguloDoisY + largura
    ){
        corFundoRetangulo0 = 255;
        cor0 = 0;
        estaDentroDo0 = true;
    }

    text("Escolha com o que você deseja jogar!", 150, 120);

    textSize(200);

    stroke(255);
    fill(corFundoRetanguloX);
    rect(retanguloUmX, retanguloUmY, largura, largura);
    fill(corX)
    text("X", 130, 350);

    stroke(255);
    fill(corFundoRetangulo0);
    rect(retanguloDoisX, retanguloDoisY, largura, largura);
    fill(cor0);
    text("0", 540, 350);

    textSize(20);
    strokeWeight(0.5);
    text("texto", mouseX, mouseY);


}

function mouseClicked(){

    if(estaDentroDoX){
        console.log("Está dentro do X e foi clicado.");
        escolhaDoJogador = "X";
    }

    if(estaDentroDo0){
        console.log("Está dentro do 0 e foi clicado.");
        escolhaDoJogador = "0";
    }

}