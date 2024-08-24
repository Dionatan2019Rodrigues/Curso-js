function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if((fano.value.length == 0)||(fano.value > ano)){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebe.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem.jpg')
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'img/adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebea.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovema.jpg')
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'img/adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.</br>` 
        res.appendChild(img)

    }
    

}