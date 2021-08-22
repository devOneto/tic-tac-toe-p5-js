mouseClicado = false;

estaDentroDoX = false;
estaDentroDo0 = false;

escolhaDoJogador = "nenhum";
estaEscolhendo = true;

quadroUm = null;
quadroDois = null;
quadroTres = null;
quadroQuatro = null;
quadroCinco = null;
quadroSeis = null;
quadroSete = null;
quadroOito = null;
quadroNove = null;

quadros = null;

function setup(){

    createCanvas(800,600);

    quadroUm = new Quad(0,0);
    quadroDois = new Quad(0,0);
    quadroTres = new Quad(0,0);
    quadroQuatro = new Quad(0,0);
    quadroCinco = new Quad(0,0);
    quadroSeis = new Quad(0,0);
    quadroSete = new Quad(0,0);
    quadroOito = new Quad(0,0);
    quadroNove= new Quad(0,0);

    quadros = [quadroUm,quadroDois,quadroTres,quadroQuatro,quadroCinco,quadroSeis,quadroSete,quadroOito,quadroNove]

    sqX = 400 - 150;
    sqY = 300 - 150;
    sqL = 300;

    noFill();
    count = -1;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            count++;
            quadros[count].y = 200 + 80*i;
            quadros[count].x = 200 + 80*j;
            quadros[count].n = count;

        }
    }

    
}

function draw(){

    background(0);
    mouseClicado = false;

    fill(255);
    textSize(30);
    text("Jogo da Velha",280,40);

    if(escolhaDoJogador == "nenhum"){
        escolha();
    } else {
        partida();
    }

    if(escolhaDoJogador != "nenhum"){
        textSize(15);
        text("A escolha do Jogador foi: " + escolhaDoJogador, 500, 20)
    }

    //tabletop
    count=-1;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            count++;
            quadros[count].draw();    
        }     
    }
    
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
    }else{
        estaDentroDoX = false;
    }

    if(
        mouseX >=retanguloDoisX && mouseX <= retanguloDoisX + largura
        && 
        mouseY >= retanguloDoisY && mouseY <= retanguloDoisY + largura
    ){
        corFundoRetangulo0 = 255;
        cor0 = 0;
        estaDentroDo0 = true;
    }else{
        estaDentroDo0 = false;
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

}

function mouseClicked(){

    if(estaDentroDoX && estaEscolhendo){
        console.log("Está dentro do X e foi clicado.");
        escolhaDoJogador = "X";
        estaEscolhendo = false;
    }

    if(estaDentroDo0 && estaEscolhendo){
        console.log("Está dentro do 0 e foi clicado.");
        escolhaDoJogador = "0";
        estaEscolhendo = false;
    }

    if (quadroUm.isHover){
        console.log("Clicou no quadro: " + 0)
    }

    if (quadroDois.isHover){
        console.log("Clicou no quadro: " + 1)
    }
    
    if (quadroTres.isHover){
        console.log("Clicou no quadro: " + 2)
    }

    if (quadroQuatro.isHover){
        console.log("Clicou no quadro: " + 3)
    }

    if (quadroCinco.isHover){
        console.log("Clicou no quadro: " + 4)
    }

    if (quadroSeis.isHover){
        console.log("Clicou no quadro: " + 5)
    }

    if (quadroSete.isHover){
        console.log("Clicou no quadro: " + 6)
    }

    if (quadroOito.isHover){
        console.log("Clicou no quadro: " + 7)
    }

    if (quadroNove.isHover){
        console.log("Clicou no quadro: " + 8)
    }

}

function partida(){

    quadroUm.draw();
    quadroUm.listenClick();
    quadroDois.draw();
    quadroDois.listenClick();
    quadroTres.draw();
    quadroTres.listenClick();
    quadroQuatro.draw();
    quadroQuatro.listenClick();
    quadroCinco.draw();
    quadroCinco.listenClick();
    quadroSeis.draw();
    quadroSeis.listenClick();
    quadroSete.draw();
    quadroSete.listenClick();
    quadroOito.draw();
    quadroOito.listenClick();
    quadroNove.draw();
    quadroNove.listenClick();

    strokeWeight(1);
}

class Quad{

    constructor(x,y,w = 80,h=80,n=0){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.n = 0;
        this.isHover = false;
    }

    listenClick(){
        if( 
            (mouseX >= this.x && mouseX <= this.x + this.w) 
            &&
            (mouseY >= this.y && mouseY <= this.y + this.h)
        ) {
            this.isHover = true;
        } else {
            this.isHover = false;
        }
    }

    draw(){
        fill(255,0,0)
        ellipse(this.x, this.y,5);
        noStroke()
        textSize(12)
        text("(" + this.x + "," + this.y +")" , this.x,this.y-5)
        stroke(255)
        noFill();
        rect(this.x,this.y,this.w,this.h);
        text(this.n, this.x + this.w/2, this.y + this.h/2);
    }

}