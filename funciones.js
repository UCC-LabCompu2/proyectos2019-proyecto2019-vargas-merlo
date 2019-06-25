/** <form></form>
 * Calculo de la hipotenusa<form></form>
 * @method operacion<form></form>
 * @param Cateto1<form></form>
 * @param Cateto2<form></form>
 * @return Hipotenusa<form></form>
 * Calculo del area<form></form>
 * @method area<form></form>
 * @param Cateto1<form></form>
 * @param Cateto2<form></form>
 * @return area<form></form>
 * Calculo del perimetro<form></form>
 * @method perimetro<form></form>
 * @param Cateto1<form></form>
 * @param Cateto2<form></form>
 * @param Hipotenusa<form></form>
 * @return perimetro<form></form>
 **/

function operacion() {

    var catA = document.pitagoras.Cateto1.value;
    var catB = document.pitagoras.Cateto2.value;

    if(catA>0 || catB>0){

        var a = Math.pow(catA, 2);
        var b = Math.pow(catB, 2);
        var c = Math.sqrt(a+b);

        document.pitagoras.Hipotenusa.value=c.toFixed(2);
    }

    else{ alert("DEBE INGRESAR VALORES POSITIVOS"); }

    }

    function dibujar(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var n1 = document.pitagoras.Cateto1.value*30;
    var n2 = document.pitagoras.Cateto2.value*30;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(n2, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(100, n1);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}

function area() {

    var catA = document.pitagoras.Cateto1.value;
    var catB = document.pitagoras.Cateto2.value;

    document.pitagoras.Area.value=catA*catB/2;

}

function perimetro(){

    var catA = document.pitagoras.Cateto1.value;
    var catB = document.pitagoras.Cateto2.value;
    var catC = document.pitagoras.Hipotenusa.value;

    document.pitagoras.Perimetro.value=parseInt(catA)+parseInt(catB)+parseInt(catC);
}

function limpiar() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var n1 = document.pitagoras.Cateto1.value*30;
    var n2 = document.pitagoras.Cateto2.value*30;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    document.pitagoras.Cateto1.value=0;
    document.pitagoras.Cateto2.value=0;
    document.pitagoras.Hipotenusa.value=0;
    document.pitagoras.Area.value=0;
    document.pitagoras.Perimetro.value=0;
}