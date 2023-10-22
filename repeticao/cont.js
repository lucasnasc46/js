function contador(){

    var begin = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var jump = document.getElementById('passo')
    var res = document.getElementById('res')

    if(begin.value.length == 0 || end.value.length == 0 || jump.value.begin==0){
        window.alert('ERRO, faltando dados')
    }else{
       
        var i = Number(begin.value)
        var f = Number(end.value)
        var p = Number(jump.value)

        if(p<=0){
            res.innerText('Passo invalido!')
        }
        else if(i<f){
            for(let cont = i; cont <= f; cont += p){
                res.innerText += (cont + '-> ')
            }
        }else{
            for(let cont = i; cont >=f; cont -= p){
                res.innerText += (cont + '<- ')
            }
        }
       
    }

}