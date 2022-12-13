const username = document.getElementById("nome");
const button = document.getElementById("btn");
const risultato = document.getElementById ("target")

const ammessi = ["gino" , "franco" , "paolo"]

let invitato = false
button.addEventListener("click" , function(){
    for(i = 0 ; i < ammessi.length && !invitato ; i++){
        if( username.value === ammessi [i]){
            invitato = true;
        }
        console.log(ammessi)
    }
    if(!invitato){
        target.innerText = `lei signore, è un IMPOSTORE ! FUORI DI QUI!`
        
    }else if (invitato){
        target.innerText = `Egregio signor ${username.value} il padrone di casa la attende ai piani superiori`

    }
})
