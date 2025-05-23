let adrese = window.location.hash.substring(1);
adrese = decodeURI(adrese.split(',')[0]);
adrese = adrese.replace('#','')
adrese = adrese.split(',')
vards = adrese[0];
 
//mainigie
let laiks = 0
let klikski = 0
 
const laukumi = ['L01','L02','L03','L04','L05','L06','L07','L08','L09','L10','L11','L12']
const laukumiSaturs = ['😱','😆','😤','🙂‍↕️','🤠','😈','👽','🙄','😕','😇','🙃','🤩']
let atvertieLaukumi = []
let pedejieDivi = []
 
//sajauc smailikus nejauša seciba
let laukumiSajaukti = laukumiSaturs.sort(() => Math.random( - 0.5));
 
document.addEventListener("DOMContentLoaded", function() {
    let spelesLauks = dokument.querySelector('.speles_laukums')
    spelesLauks.innerHTML = '';
    laukumiSajaukti.forEach((emoji, index) =>{
        let bloks = document.createElement("div");
        bloks.classList.add('bloks');
        bloks.setAttribute('data-index', index);
        bloks.innerText = '';
        bloks.addEventListener('click', function() {
            veiktGajienu(bloks, emoji);
        });
        spelesLauks.appendChild(bloks);
 
    });
});
 
function veiktGajienu(bloks, emoji) {
    if (bloks.classList.contains("atverts") || pedejieDivi.length === 2) {
        return
    }
    bloks.innerText = emoji;
    bloks.classList.add("atverts");
    klikski++;
 
    pedejieDivi.push({bloks, emoji})
    if (pedejieDivi.length === 2) {
        let [pirmais, otrais] = pedejieDivi;
        if (pirmais.emoji === otrais.emoji) {
            atvertieLaukumi.push(pirmais, otrais);
            pedejieDivi = [];
 
            if (atvertieLaukumi.length ===  laukumiSajaukti.length) {
                setTimeout(() => {
                    alert(`Apsviecu, ${vards}! Tu pabiedizi spēli ar ${klikski} klikšķu`)
                }, 500);
            }
        } else {
            setTimeout(() => {
                pirmais.bloks.innerText = "";
                otrais.bloks.innerText = "";
                pirmais.bloks.classList.remove("atverts");
                otrais.bloks.classList.remove("atverts");
                pedejieDivi = [];
            }, 1000)
        }
    }
}
 
