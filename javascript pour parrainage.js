function Msg(){
    alert(`Message envoyé avec succès`);
}
const parrainer= new Set();
function Parrainer() { 
    const prenom= document.getElementById('prenom').value;
    const nom= document.getElementById('nom').value;
    const num= document.getElementById('num').value;
    const selectedCandidate = document.getElementById('candidat').value;
    if (!parrainer.has(num)){
        parrainer.add(num);
        alert(` ${prenom} ${nom} Vous avez parrainé pour ${selectedCandidate}.`);
    } 
    else {
        alert(`${prenom} ${nom} Vous avez déjà parrainé.`);
    }
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    