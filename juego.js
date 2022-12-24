let checkTheEnd=[];
let a=0;
let b=0;
let nivel=1;
let checkeo;

randomMovement(); //genero un nuevo dashboard de parejas aleatorio
estadoInicial(); //inhabilito las parejas antes de comenzar

//Deshabilitados los niveles 2 y 3 por defecto
document.getElementById('nivel2').disabled=true;
document.getElementById('nivel3').disabled=true;

//Oculto los botones de niveles superiores. Se mostrarán según se vayan superando los niveles.
document.getElementById('mesa').style.visibility = 'hidden';
document.getElementById('table').style.visibility = 'hidden';
document.getElementById('loro').style.visibility = 'hidden';
document.getElementById('parrot').style.visibility = 'hidden';

elnivel.innerHTML= 'Nivel 1';

function nivel2(){  // se resetea la pantalla a los parámetros del nivel 2
    nivel=2;
    checkTheEnd=[];
    randomMovement();
    estadoInicial();
    ponerTimerACero();
    pausar();
   
    document.getElementById('mesa').style.visibility = 'visible';
    document.getElementById('table').style.visibility = 'visible';
    document.getElementById('start').style.visibility = 'visible';
    segundos=25;
    
    elnivel.innerHTML= 'Nivel 2';
    timer.innerHTML = '00:25:00';   
}
function nivel3(){ //se resetea la pantalla a los parámetros del nivel 2
    nivel=3;   
    checkTheEnd=[];
    randomMovement();
    estadoInicial();
    ponerTimerACero();
    pausar();
    
    document.getElementById('mesa').style.visibility = 'visible';
    document.getElementById('table').style.visibility = 'visible';
    document.getElementById('loro').style.visibility = 'visible';
    document.getElementById('parrot').style.visibility = 'visible';
    document.getElementById('start').style.visibility = 'visible';

    segundos=20;
    elnivel.innerHTML= 'Nivel 3';   
    timer.innerHTML = '00:20:00';
}

function resetTable(){      //se resetea la pantalla a los parámetros del nivel en el que se encuentra
    if (nivel===2){
        nivel2();  
    }else if(nivel===3){
        nivel3();
    }else{
        location.reload();
    }
}

// Función para cada boton de pareja. Cada pareja asigna un mismo número a las variables a y b para después hacer la comprobación.
//También se inhabilita el boton que se clicka.
function asignarValorCasa(){ 
    a=1;
    document.getElementById('casa').disabled=true;    
}
function asignarValorHouse(){ 
    b=1; 
    document.getElementById('house').disabled=true;          
}
function asignarValorCoche(){
    a=2; 
    document.getElementById('coche').disabled=true;        
}   
function asignarValorCar(){
    b=2;  
    document.getElementById('car').disabled=true;       
}
function asignarValorPerro(){
    a=3;   
    document.getElementById('perro').disabled=true;        
}
function asignarValorDog(){
    b=3; 
    document.getElementById('dog').disabled=true;        
}
function asignarValorMono(){
    a=4;   
    document.getElementById('mono').disabled=true;      
}
function asignarValorMonkey(){
    b=4; 
    document.getElementById('monkey').disabled=true;          
}
function asignarValorLoro(){
    a=5; 
    document.getElementById('loro').disabled=true;          
}
function asignarValorParrot(){
    b=5; 
    document.getElementById('parrot').disabled=true;          
}
function asignarValorMesa(){
    a=6; 
    document.getElementById('mesa').disabled=true;        
}
function asignarValorTable(){
    b=6; 
    document.getElementById('table').disabled=true;         
}

//Se checkean las parejas. Si a y b son iguales el matcheo está bien, se imprime un "bien" y 
//se pushea un número al array checkTheEnd para saber cuándo se han hecho la correcta union de todas las parejas de ese nivel.
//Si el emparejamiento esta mal se pone el array checkTheEnd y las condiciones iniciales a cero para empezar de nuevo.
function check(){
    if (a>0&&b>0&&a===b) {
        mensaje.innerHTML= 'Bien';  
        checkTheEnd.push(1);    
        checkEnd(); 
    }else{
        mensaje.innerHTML= 'Mal'; 
        checkTheEnd=[]; 
        estadoTodoActivo();  
    } 
}

//Se suman los numeros del array de checkeo para saber cuándo se han acabado de unir todas las parejas de cada nivel.
function checkEnd(){    
    checkeo= checkTheEnd.reduce((prev,actual)=>prev+actual)
    if (nivel===1&&checkeo===4){
        mensajeFinal(); 
    } else if(nivel===2&&checkeo===5){
        mensajeFinal(); 
    }else if(nivel===3&&checkeo===6){
        mensajeFinal();         
    }else{}
}

//Se genera el movimiento aleatorio de todos los botones
 function randomMovement(){

    casa.style.left= Math.floor(Math.random()*1000)+1+"px"
    casa.style.top= Math.floor(Math.random()*100)+1+"px"
    house.style.left= Math.floor(Math.random()*1000)+1+"px"
    house.style.top= Math.floor(Math.random()*100)+1+"px"
    coche.style.left= Math.floor(Math.random()*1000)+1+"px"
    coche.style.top= Math.floor(Math.random()*100)+1+"px"
    car.style.left= Math.floor(Math.random()*1000)+1+"px"
    car.style.top= Math.floor(Math.random()*100)+1+"px"
    perro.style.left= Math.floor(Math.random()*1000)+1+"px"
    perro.style.top= Math.floor(Math.random()*100)+1+"px"
    dog.style.left= Math.floor(Math.random()*1000)+1+"px"
    dog.style.top= Math.floor(Math.random()*100)+1+"px"
    mono.style.left= Math.floor(Math.random()*1000)+1+"px"
    mono.style.top= Math.floor(Math.random()*100)+1+"px"
    monkey.style.left= Math.floor(Math.random()*1000)+1+"px"
    monkey.style.top= Math.floor(Math.random()*100)+1+"px"
    loro.style.left= Math.floor(Math.random()*1000)+1+"px"
    loro.style.top= Math.floor(Math.random()*100)+1+"px"
    parrot.style.left= Math.floor(Math.random()*1000)+1+"px"
    parrot.style.top= Math.floor(Math.random()*100)+1+"px"
    table.style.left= Math.floor(Math.random()*1000)+1+"px"
    table.style.top= Math.floor(Math.random()*100)+1+"px"
    mesa.style.left= Math.floor(Math.random()*1000)+1+"px"
    mesa.style.top= Math.floor(Math.random()*100)+1+"px"    
 }

 // Distintos mensajes para los distintos niveles segun el tiempo de corte
function mensajeFinal(){
    pausar()    
    if (segundos>19&&checkeo===4){
        document.getElementById('nivel2').disabled=false; 
        mensajeDelFinal.innerHTML= '¡¡Has acabado!! desbloqueado el nivel 2'; 
    }else if(segundos>12&&checkeo===5){
        document.getElementById('nivel3').disabled=false; 
        mensajeDelFinal.innerHTML= '¡¡Has acabado!! desbloqueado el nivel 3'; 
    }else if(segundos<5&&checkeo===6){
        document.getElementById('nivel3').disabled=false; 
        mensajeDelFinal.innerHTML= 'Has acabado pero necesitas dejar el contador a mas de 6 segundos para ser el Master of Universe'; 
    }else if(segundos>5&&checkeo===6){
        mensajeDelFinal.innerHTML= '¡¡Eres el Master of Universe!!'; 
    }
    else{
        mensajeDelFinal.innerHTML= 'Has acabado pero necesitas mejorar para pasar al siguiente nivel'; 
    }
}

 //TIMER

 let minutos = 0;
 let segundos = 30;
 let centesimas = 0;
 let control;
 let control2;

 timer.innerHTML = '00:30:00'
  
 function start(){   
    document.getElementById('start').style.visibility = 'hidden'; 
    control = setInterval(cronometrar,10);
    mensaje.innerHTML='';  
    estadoTodoActivo();      
 }

 function pausar(){
    clearInterval(control);
    clearInterval(control2);
}

function ponerTimerACero(){
    minutos = 0;
    segundos = 0;
    centesimas = 0;
    timer.innerHTML = minutos + ':'+ segundos + ':'+ centesimas  
    mensajeDelFinal.innerHTML= ''
    mensaje.innerHTML= ''
}
 
 
 function cronometrar(){
    centesimas--
    if(centesimas < 0){
        segundos--;
        centesimas = 99;    
    }
    if(segundos === 0 && centesimas === 0){
        clearInterval(control);
        clearInterval(control2);
        mensaje.innerHTML = 'Tiempo <br> agotado';
        estadoInicial();               
    }     
 timer.innerHTML =  minutos + ':'+ segundos + ':'+ centesimas 
    }

// Código que utilizo para establecer el estado inicial

function estadoInicial(){
    document.getElementById('casa').disabled=true; 
    document.getElementById('house').disabled=true; 
    document.getElementById('coche').disabled=true; 
    document.getElementById('car').disabled=true; 
    document.getElementById('perro').disabled=true; 
    document.getElementById('dog').disabled=true; 
    document.getElementById('mono').disabled=true; 
    document.getElementById('monkey').disabled=true; 
    document.getElementById('loro').disabled=true; 
    document.getElementById('parrot').disabled=true; 
    document.getElementById('mesa').disabled=true; 
    document.getElementById('table').disabled=true;   
}

function estadoTodoActivo(){
    document.getElementById('casa').disabled=false; 
    document.getElementById('house').disabled=false;  
    document.getElementById('coche').disabled=false; 
    document.getElementById('car').disabled=false; 
    document.getElementById('perro').disabled=false; 
    document.getElementById('dog').disabled=false;  
    document.getElementById('mono').disabled=false; 
    document.getElementById('monkey').disabled=false; 
    document.getElementById('loro').disabled=false; 
    document.getElementById('parrot').disabled=false;  
    document.getElementById('mesa').disabled=false; 
    document.getElementById('table').disabled=false;    
}


