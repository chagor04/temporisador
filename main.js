const pantalla= document.getElementById('pantalla')
const dato= document.getElementById('dato')
const boton = document.getElementById('boton')


function alfin(){
    function regresiva(dato){
    if(dato==0){
        pantalla.innerHTML="finish"
        return
        
    }else{
        setTimeout(regresiva,1000,dato-1)
        console.log(dato)
        pantalla.textContent=(dato)
    }
    }
    regresiva(dato.value)
}
