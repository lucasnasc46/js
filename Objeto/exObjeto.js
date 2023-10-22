let pessoa = {nome: 'lucas',
sexo:'M',
peso: 70,
engordar(p=0){
    console.log('Engordou ')
    this.peso += p
}
}

pessoa.engordar(5)
console.log(`${pessoa.nome} pesa ${pessoa.peso}`)

let num =8
num **=2

console.log(num)