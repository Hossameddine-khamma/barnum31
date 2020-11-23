document.querySelector("#formulaire").addEventListener("submit",(e)=>{
    e.preventDefault()
    nom=document.querySelector("#NOM").value
    email=document.querySelector("#Email").value
    numéro=document.querySelector("#numéro").value
    objet=document.querySelector("#Objet").value
    message=document.querySelector("#Message").value
    if (!nom || !email || !numéro || !objet || !message){
        reset()
        document.querySelector("#error").innerHTML="veulliez remplir les champs obligatoires ! "
    }
    if (!nom){
        reset("#errorNOM")
        document.querySelector("#errorNOM").innerHTML="le nom est un champ obligatoire "
    }
    if (!email){
        reset("#errorEmail")
        document.querySelector("#errorEmail").innerHTML="l'email est un champ obligatoire "
    }
    if (!numéro){
        reset("#errorNumero")
        document.querySelector("#errorNumero").innerHTML="le numéro est un champ obligatoire "
    }
    if (!objet){
        reset("#errorObjet")
        document.querySelector("#errorObjet").innerHTML="l'objet est un champ obligatoire "
    }
    if (!message){
        reset("#errorMessage")
        document.querySelector("#errorMessage").innerHTML="le message est un champ obligatoire "
    }
    if (email) {
        em=false
        reset("#errorEmail")
       re= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/
        if(!re.test(email)){
            document.querySelector("#errorEmail").innerHTML="veulliez entrer une adresse mail valide !"
        }if(re.test(email)){
            em=true
        }
    }
    if (numéro) {
        n=false
        reset("#errorNumero")
        re= /(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
        if(!re.test(numéro)){
            document.querySelector("#errorNumero").innerHTML="veulliez entrer un numéro valide !"
        }if (re.test(numéro)){
            n=true
        }
    }
    if (n && em && nom && objet && message){
        document.querySelector("#formulaire").submit()
    }
})
document.querySelector("#NOM").addEventListener("click",function(){
    reset("#errorNOM")
})
document.querySelector("#Email").addEventListener("click",function(){
    reset("#errorEmail")
})
document.querySelector("#numéro").addEventListener("click",function(){
    reset("#errorNumero")
})
document.querySelector("#Objet").addEventListener("click",function(){
    reset("#errorObjet")
})
document.querySelector("#Message").addEventListener("click",function(){
    reset("#errorMessage")
})
function reset(div){
    if (!div){
        document.querySelector("#error").innerHTML="* Champs obligatoires"
        document.querySelector("#errorNOM").innerHTML="*"
        document.querySelector("#errorEmail").innerHTML="*"
        document.querySelector("#errorNumero").innerHTML="*"
        document.querySelector("#errorObjet").innerHTML="*"
        document.querySelector("#errorMessage").innerHTML="*"
    }
    if (div=="error"){
        document.querySelector(div).innerHTML="* Champs obligatoires"
    }
    if (div){
        document.querySelector(div).innerHTML="*"
    }

}