function loading(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora =  data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if((hora >= 8)&&(hora < 12)){
        //BOM DIA
        img.src = 'img/dia.jpg'
        document.body.style.background = '#dfa02bc9';
    }else if((hora >= 12)&&(hora <= 18)){
        //BOA TARDE 
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#a52a2ac2';
    }else{
        //BOA NOITE
        img.src = 'img/noite.jpg'
        document.body.style.background = '#000000be';
    }
}