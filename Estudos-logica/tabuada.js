// a tabuada deve ser feita com o for e while

let contador = 1;

while (contador <= 10){
    for(let i = 1; i <= 10;i++){
        console.log(`${contador} x ${i} = ${contador * i}`)
    }
    console.log('\n')
    contador++
}