let appareil = document.getElementById('Plus')
let loader = document.getElementById('loader')


function change() {
    
    appareil.style.display = "none";
    loader.style.display = "block";
    setTimeout(()=>{
        document.location.href = "http://127.0.0.1:5500/steps/info_appareil.html"
    }, 5000)
};