let num = document.getElementById('num')
let lista = document.getElementById('sellista')
let res = document.getElementById('res')
let list = []

function isNumber(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){   //-1 = valor não foi encontrado na lista
        return true
    }else{
        return false
    }
}
function add(){
    if(isNumber(num.value) && !isLista(num.value, list)){
        list.push(Number(num.value))

        var item = document.createElement('option')
        item.text = `${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML ='' //ao adiciionar um novo elemento ele limpa o resultado da funcao finalizar
    }else{
        window.alert('valor invalido ou ja adicionado')
    }

    num.value='' //deixando o campo vazio apos inserir um numero
    num.focus()  //retornando o seletor para o compo
}

function finalizar(){
    if(list.length == 0){
        alert('digite pelo menos 1 numero')
    }else{
        let total = lista.length

        let maior = list[0]
        let menor = list[0]

        let soma = 0
        let media = 0
        for(let pos in list){

            soma +=list[pos]

            if(list[pos] > maior){
                maior = list[pos]
            }
            if(list[pos] < menor){
                menor = list[pos]
            }
        }

        media = soma / total
        res.innerHTML =''
        res.innerHTML += `<p>${total} números cadastrados</p>`
        res.innerHTML += `<p> o maior valor foi ${maior}</p>`
        res.innerHTML += `<p> o menor valor foi ${menor}</p>`
        res.innerHTML += `<p> a soma dos elementos é ${soma}</p>`
        res.innerHTML += `<p> a media dos elementos é ${media}</p>`
    }
}