function contar(){
    var inicio = Number(document.getElementById('ini').value)
    var finish = Number(document.getElementById('fim').value)
    var passo = document.getElementById('pas').value
    var res = document.querySelector('div#res')

    if(inicio=='' || finish=='' || passo==''){
        res.innerHTML = 'Impossível contar!'
    }else{
        if(passo == 0){
            alert(`Passo ${passo} inválido, considerado passo 1.`)
            passo =1
        }
        var s = ''
        if(inicio > finish){
            for(var i=inicio;i >= finish;i-=Number(passo)){
                s += `${i}  \u{1F911}`
            }
        }else{
            for(var i=inicio;i <= finish;i+=Number(passo)){
                s += `${i}  \u{1F911}`
            }
        }
        
        res.innerHTML = `${s} \u{1F590}`
    }
}
