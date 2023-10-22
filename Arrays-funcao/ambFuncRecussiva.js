//recursidade 
/* 3! = 3x2x1
   3! = 3 x 2! */

function fatorial(n){
    if(n == 1){
        return 1
    }else{

        return n * fatorial(n -1)
    }
}

console.log(fatorial(5))