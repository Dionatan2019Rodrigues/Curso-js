function calcular(){
    var n = document.getElementById('num')
    var tab = document.getElementById('selc')

    if(n.value.length == 0){
        alert('[ERRO]Número não digitado.')
    }else{
        var num = Number(n.value)
        tab.innerHTML = ''
        for(var i=1;i < 11;i++){
            var item = document.createElement('option')
            item.text = `${num} * ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}