const filas=20
const columnas=20
const numeroMinas=20
let minas=[]

function generarCuadricula(){
    gridContainer=document.getElementById("grid-container")
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
                let esMina = false;
                
                // Verificar si las coordenadas del clic coinciden con alguna mina
                for (const coordenada of minas) {
                    if (coordenada[0] === i && coordenada[1] === j) {
                        esMina = true;
                        celda.classList.add("mina")
                        alert("Descubriste una mina")
                        break; // Salir del bucle una vez que se encuentre una mina
                    }
                }
                if (esMina) {
                    celda.classList.add("mina")
                    mostrarMinas()
                    console.log("Clic en la mina (" + i + ", " + j + ")");
                } else {
                    celda.textContent=contarMinasCircundantes(i,j)
                    celda.classList.add("celda-sin-mina")
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
function mostrarMinas() {
    // Obtener el contenedor de la cuadrícula y todas las celdas
    const gridContainer = document.getElementById("grid-container");
    const celdas = gridContainer.getElementsByClassName("grid-cell");

    // Iterar a través de las coordenadas de las minas
    for (const coordenada of minas) {
        const [i, j] = coordenada; // Descomponer las coordenadas en i y j
        const indice = i * columnas + j; // Calcular el índice en el arreglo unidimensional
        const celda = celdas[indice]; // Seleccionar la celda correspondiente
        celda.classList.add("mina"); // Agregar la clase "mina" a la celda
    }
}
function contarMinasCircundantes(i,j){
    let MinasCont=0
    //tenemos que verificar si las 8 celdas de alrededor tienen minas
    /*
        [3,4][3,5][3,6]
        [4,4][4,5][4,6]
        [5,4][5,5][5,6]        
    */
    console.log(minas)
    for(x=i-1;x<=i+1;x++){
        for(y=j-1;y<=j+1;y++){
            console.log("[ "+x+" , "+y+" ]")
            /*
                minas.some() verificca si al menos un elemento cumple con la condicion porque 
                minas.includes() no compara arrays anidados 
                some espera como argumento una funcion
                funcion lambda para verificar 
            */
            if(minas.some(coordenada => coordenada[0] === x && coordenada[1] === y)){
                MinasCont++
            }
        }
    }

    return MinasCont
}
function getCoordenadasMinas(){
    return minas
}
