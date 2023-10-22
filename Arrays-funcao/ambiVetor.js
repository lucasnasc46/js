let num = [1,2,3]
let vetor = [3,4,5,673,2,5,6,7]
num[1]=60
num.push(6)

console.log(num)
console.log(`${num.length}`)

for (let pos = 0; pos < num.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let position in vetor){
    console.log(`A posição ${position} tem o valor ${vetor[position]}`)
}

console.log(num.indexOf(3))