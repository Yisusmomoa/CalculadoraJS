//"escucha" cuando se cargue completamente el html y vamos a buscar los botones y el display
window.addEventListener('load',()=>{
    const display=document.querySelector(".calculator-display");//busca y el primer elemento que encuentre lo guarda
    const keypadButtons=document.getElementsByClassName('keypad-button');//nos guarda un html collection en la constante

    //vamos a ir iterando y le iremos asignando un listener a cada uno, si el usuario hace clic
    //convertir el html collection a un array
    const keypadButtonsArray=Array.from(keypadButtons);
    
    //por cada botón del array lo imprima por consola
    //se van a imprimir todas las etiquetas en consola

    keypadButtonsArray.forEach((button)=>{
        //console.log(button);
        button.addEventListener('click',()=>{
            console.log(button.innerHTML);
        });
        //agregar el evento/listener de clic a cada botón
    })



});




