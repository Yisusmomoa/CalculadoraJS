//"escucha" cuando se cargue completamente el html y vamos a buscar los botones y el display
window.addEventListener('load',()=>{
    //creamos dos costantes y nos guardamos los elementso que necesitamos
    const display=document.querySelector(".calculator-display");//busca y el primer elemento que encuentre lo guarda
    const keypadButtons=document.getElementsByClassName('keypad-button');//nos guarda un html collection en la constante


    //vamos a ir iterando y le iremos asignando un listener a cada uno, si el usuario hace clic
    //convertir el html collection a un array
    //constante para convertir el htmlcollection a array
    const keypadButtonsArray=Array.from(keypadButtons);
    
    //por cada botón del array lo imprima por consola
    //se van a imprimir todas las etiquetas en consola

    //iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach((button)=>{
        //console.log(button);
        //agregar el evento/listener de clic a cada botón
        button.addEventListener('click',()=>{
            //console.log(button.innerHTML);
            calculadora(button, display);
        });
    })
});

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display,button)
            break;
    }
}

function calcular(display){
        //texto que esta en el display
    display.innerHTML= eval(display.innerHTML);//toma el string o la operación y la resuelve, luego cambia el contenido del display por la evaluación del eval
}


//coloca cada nuemero u operando uno detras del otro dentro del display
function actualizar(display, button){
    if(display.innerHTML=='0'){
        display.innerHTML='';
    }
    display.innerHTML+=button.innerHTML;

}

function borrar(display){
    display.innerHTML=0;
}
