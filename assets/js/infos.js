
let circles = document.querySelectorAll(".cercle")
let input1 = document.getElementById("input1")
let bouton = document.getElementById ("bouton")
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let input4 = document.getElementById('input4')
let input5 = document.getElementById('input5')
let texts = document.querySelectorAll('.formulaire h3')

function performances(){

    circles.forEach(circle => {
        circle.style.display = 'inline-block';
    });
    
    texts.forEach(text =>{
        text.style.display = 'none';
    })
    
    input1.placeholder = 'état de la batterie';
    input2.placeholder = 'gyroscope';
    input3.placeholder = 'géolocalisation';
    input4.placeholder = 'magnetometre';
    input5.placeholder = 'temperature';

    bouton.style.display = 'none';


}

function redirection() {
    document.location.href = "https://progres.azureiotcentral.com/devices/details/my-phone-as-device-vADu_oRAXE/dtmi:azureiot:PhoneAsADevice:solutionModel:overview;1"
}