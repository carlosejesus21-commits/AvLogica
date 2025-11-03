function media(){
     var nota1 = parseFloat(document.getElementById("m1").value)
    var nota2 = parseFloat(document.getElementById("m2").value)
    var nota3 = parseFloat(document.getElementById("m3").value)
    var nota4 = parseFloat(document.getElementById("m4").value)
    var nota5 = parseFloat(document.getElementById("m5").value)
    var nota6 = parseFloat(document.getElementById("m6").value)
    var nota7 = parseFloat(document.getElementById("m7").value)
    var nota8 = parseFloat(document.getElementById("m8").value)
    var nota9 = parseFloat(document.getElementById("m9").value)
    var nota10 = parseFloat(document.getElementById("m10").value)

   var media = document.getElementById("resposta")
   var conta = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10) / 10

   if(conta >= 7){
        media.textContent = conta.toFixed(2) + "-" + "PASSOU DE ANO"
        media.style.color = "green"
   }else{
         media.textContent = conta.toFixed(2) + "-" + "REPROVOU DE ANO"
         media.style.color = "red"
   }
}