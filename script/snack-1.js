//10 domande e 10 dati

const target = document.getElementById("target");

let userNumber;
let total = 0;

for( i = 0 ; i < 10 ; i++){
    userNumber = parseInt(prompt(" scegli un numero da 1 a 10 " , "1"))    
    total += userNumber;
    console.log("risultato" + total);
}

target.innerText = "il totale è :" + total;


