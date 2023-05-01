
const tpNumber = document.getElementById("tp-number");

document.querySelector("#botao").addEventListener("click", ()=>{

const exercicesNumber = document.getElementById("exrcises-number");
const materia = document.getElementById("materia");
const textArea = document.querySelector("#text-area1");




for(let numEx = 1; numEx <= exercicesNumber.value; numEx++)
{
  
    //Adicionar concatenação de String na DIV 
     textArea.append( `Exercicio ${tpNumber.value}.${numEx} de ${materia.value}`)
  
   //crear um elemento "br" para quebrar linha 
    let quebraLinha = document.createElement("br")
  
  //Adicionar a quebra de linha apos String concatenado
     textArea.appendChild(quebraLinha)

}

});