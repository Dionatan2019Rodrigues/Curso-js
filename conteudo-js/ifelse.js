
function calcular(){
    var txtv = document.getElementById('txtvel')
    var velocidade = Number(txtv.value)
    var bloco = document.getElementById('res')

    bloco.innerHTML = `Sua velocidade é <strong>${velocidade}Km/h. </strong>`
    if(velocidade > 50){
        bloco.innerHTML += "Você foi <strong> Multado! </strong>"
    }else{
        bloco.innerHTML += "Velocidade dentro do permitido."
    }
    bloco.innerHTML += `<p>Dirija com cuidado.</p>`

}


