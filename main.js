window.onkeydown = teclaPrecionada;
//Elementos------------------------------------------------------------------
const btnA = document.getElementById("btn_a");
const hola = document.getElementById("hola");
const btnD = document.getElementById("btn_d");
const btnFire = document.getElementById("fire");
var canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const player = new Image();
const misil = new Image();

player.src = './img/nave2.png';
misil.src ="./img/misil.png";

//Variables-------------------------------------------------------------------
const teclaA = 65;
const teclaD = 68;
const teclaEspacio = 32;
const teclaArriba = 38;
const teclaIzquierda = 37;
const teclaDerecha = 39;
let posicionPlayerX = (canvas.width / 2) - 48;
let posicionPlayerY = canvas.height - 96;
let numMisil = true;
let movimientoDerecho = false;



//Render----------------------------------------------------------------------
setInterval(()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();

},10);

function render(){
    ctx.drawImage(player, posicionPlayerX, posicionPlayerY);    
    
}

//Movimiento de Players-------------------------------------------------------     

function teclaPrecionada(e){
    if(e.keyCode === teclaA || e.keyCode === teclaIzquierda){
        //alert("izquierda");
        posicionPlayerX -= 10;
        detenerMovimientos();
    }
    else if(e.keyCode === teclaD || e.keyCode === teclaDerecha){
        //alert("derecha");
        posicionPlayerX += 10
        detenerMovimientos();
    }
    else if(e.keyCode === teclaEspacio || e.keyCode === teclaArriba){
        //alert("Disparo");
        disparo();
    }
}

function detenerMovimientos(){
    if(posicionPlayerX <= 0){
        posicionPlayerX = 0;
    }
    else if(posicionPlayerX >= canvas.width - 96){
        posicionPlayerX = canvas.width - 96;
    }
}

function disparo(){
    let posicionDisparoX = posicionPlayerX + 48;
    let posicionDisparoY = posicionPlayerY;

    if(numMisil){
        numMisil = false;
        setInterval(()=>{
            posicionDisparoY -= 1;
             ctx.drawImage(misil, posicionDisparoX, posicionDisparoY);
             console.log("dispro");
        },1);
    }
    else{
        numMisil = true;
        setInterval(()=>{
            posicionDisparoY -= 1;
             ctx.drawImage(misil, posicionDisparoX - 45, posicionDisparoY);
             console.log("dispro");
        },1);
    }
 
    
        
}


function controlJugador(boton){
    if(boton === "a"){
        //alert("izquierda");
        posicionPlayerX -= 10
        movimientoDerecho = true;
        detenerMovimientos();
    }
    else if(boton === "d"){
        //alert("derecha");
        posicionPlayerX += 10
        detenerMovimientos();
    }
    else if(boton === "fire"){
        //alert("Disparo");
        disparo();
    }
}