const username = document.getElementById("nome");
const button = document.getElementById("btn");
const risultato = document.getElementById ("target")

const ammessi = ["gino" , "franco" , "paolo"]

let imbucato = false
button.addEventListener("click" , function(){
    for(i = 0 ; i < ammessi.length ; i++){
        if( username.value == ammessi [i]){
            target.innerText = `Egregio signor ${username.value} il padrone di casa la attende ai piani superiori`
        }else if (!(username.value == ammessi [i])) {
            target.innerText = `lei signore, è un IMPOSTORE! FUORI!`

        }
        console.log(ammessi)
    }

})