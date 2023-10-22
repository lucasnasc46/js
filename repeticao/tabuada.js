function multiplicador(){

    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    var n = Number(num.value)

    if(num.value.length == 0){
        window.alert('Por favor digite um número')
    }else{

        tab.innerHTML= ''
        for(var cont = 0; cont <= 10; cont++){

            var item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)
        }
    }
    
}