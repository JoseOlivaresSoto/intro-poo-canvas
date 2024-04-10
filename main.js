const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// el canvas tiene las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = '#ff8';

class circle {

    constructor(x, y, radius, color,text) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;

    }
    draw(context) {
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "Center"
        context.textBaseAlign = "middle"
        context.font = "20px Arial"
        context.fillText(this.text,this.posX,this.posY);

        context.lineWidth=2;
        context.arc(this.posX,this.posY,this.radius,0,Math.PI*2,false)
        context.stroke();
        context.closePath();
    }
}

let arrayCircle=[];

for(let i=0; i<10;i++){

    let randomX = Math.random()*window_width;
    let randomY = Math.random()*window_height;
    let randomRadius = Math.floor(Math.random()*100 + 30);
    let miCirculo=new circle(randomX,randomY,randomRadius,'blue',i+1);
    
    //agrega el objeto al array
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);
}

/* let miCirculo=new circle(100,100,50,'blue','Tec');
miCirculo.draw(ctx);

let miCirculo2=new circle(270,270,50,'black','Pachuca');
miCirculo2.draw(ctx); */