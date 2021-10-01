function flatten(){
    var lista = [];
    for (var i = 0; i < arguments.length; i++)
        lista[i] = arguments[i];
    
    console.log(flatten_aux(lista));
}
function flatten_aux(lista) {
    var resultado = [];
    for(var i = 0; i < lista.length; i++) {
        if(Array.isArray(lista[i])) {
            resultado = resultado.concat(flatten_aux(lista[i]));
        } else {
            resultado.push(lista[i]);
        }
    }
    return resultado;
}

flatten(1, [2, 3], 4, 5, [6, [7]])  // [0, 1, 2, 3, 4, 5]


function rep(lista) {
    lista=lista.concat(['']);
    var resultado = [];
    var rep=0;

    for(var i = 0; i < lista.length; i++) {
        for(var j = i; j < lista.length; j++) {
            if(lista[i]==lista[j]) {
                rep+=1; 
            } 
            else{
                resultado = resultado.concat([[lista[i],rep]]);
                i=j-1;
                break;
            }
        }
        
        rep=0;
    }
    return resultado;
}

console.log(rep(['a','a','a', 'b','b','c','a','b','b','x','x','c','c','pao','pao','pao']))

function fn(listaP, palabraC){
    var founded=0;
    for(var i = 0; i < listaP.length; i++) {
        for(var j = 0; j < listaP.length; j++) {
            var prueba=listaP[i]+listaP[j];
            var prueba2=listaP[j]+listaP[i];
            if((prueba == palabraC ) && (founded==0) ){
                console.log(founded);
                console.log([listaP[i],listaP[j]],[i,j]);
                founded+=1;
            }
            if((prueba2== palabraC ) && (founded==0) ){
                console.log(founded);
                console.log([listaP[j],listaP[i]],[i,j]);
                founded+=1;
            }
        }
    }
}

fn(['bow','crystal','organic','ally','rain','line'], "crystalline")
// ['crystal','line', [1,5]]

fn(['bow','crystal','organic','ally','rain','line'], "rainbow")
// ['bow','rain',     [4,0]]

fn(['bow','crystal','organic','ally','rain','line'], "organically")
// ['organic','ally', [2,3]]

fn(['top','main','tree','ally','fin','line'], "mainline")
// ['main','line',    [1,5]]

fn(['top','main','tree','ally','fin','line'], "treetop")
// ['top','tree',     [2,0]]

function cuadrado(numero){
    var numeroS = numero.toString() ;
    var resultado = "";
    var numerotemp=0;
    for(var j = 0; j < numeroS.length; j++) {
        numerotemp= parseInt( numeroS[j] );
        numerotemp= numerotemp*numerotemp;
        resultado+= numerotemp.toString();
    }
    return parseInt(resultado);
}
console.log(cuadrado(9155))

