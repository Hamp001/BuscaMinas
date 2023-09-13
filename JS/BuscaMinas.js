const filas=20
const columnas=20
const numeroMinas=20
let minas=[]

function generarCuadricula(){
    const gridContainer=document.getElementById("grid-container")
    minas=generarMinas()
    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            const celda=document.createElement("div")
            //se le asigna la clase CSS
            celda.className="grid-cell"
            //se agrega la celda al contenedor
            gridContainer.appendChild(celda)
            //agregar evento de click
            celda.addEventListener("click",function(){
                const clicCoordenadas = [i, j];
                let esMina = false;
                
                // Verificar si las coordenadas del clic coinciden con alguna mina
                for (const coordenada of minas) {
                    if (coordenada[0] === i && coordenada[1] === j) {
                        esMina = true;
                        alert("Descubriste una mina")
                        break; // Salir del bucle una vez que se encuentre una mina
                    }
                }
                
                if (esMina) {
                    console.log("Clic en la mina (" + i + ", " + j + ")");
                } else {
                    console.log("Clic en la celda (" + i + ", " + j + ")");
                }
            });
            console.log("celda".concat("(",i,",",j,")"))
        }
    }
}
function numeroRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function generarMinas(){
    const coordenasMinas=[]
    let cont=0
    while(cont<numeroMinas)
    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            /*  
                verificar si el numero random da permiso de poner una mina
                y verificar que el numero de minas sea correcto
            */ 
            if(numeroRandom(0,20)==1 && cont<numeroMinas){
                coordenasMinas.push([i,j])
                cont++
            }            
        }
    }
    return coordenasMinas
}
function mostrarMinas(){
    return minas
}