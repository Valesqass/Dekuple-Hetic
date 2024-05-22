let button = document.getElementById ("submit");
let nom = document.getElementById("Nom");
let prenom = document.getElementById("Prenom");
let identifiant = document.getElementById("identifiant");
let password = document.getElementById("password");

button.addEventListener("click", async (e)=>{
    e.preventDefault();
    // affichage.value = "";
    if(nom.value!== "" && prenom.value !== "" && identifiant.value !== "" && password.value !== ""){
        const requestOptions = {
            method : 'POST',
            headers : {
                'accept':'application/JSON',
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify ({
                "Nom": nom.value,
                "Prenom": prenom.value,
                "email": identifiant.value,
                "mdp": password.value
            })
        };
        
            fetch ("http://localhost:3001/v2/auth/", requestOptions)
            .then (response => response.json())
            .then (data => console.log(data));

            // document.location.href = "http://127.0.0.1:5500/steps/connect_appareil.html" ;
        }else{
            alert("Veuillez remplir tous les champs.");
        }
        
    
    
})



