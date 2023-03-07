let adrese = window.location.hash;
adrese = decodeURI(adrese);
adrese = adrese.replace('#', '');
adrese = adrese.split(",");
vards = adrese[0];
document.querySelector('.virsraksts').innerHTML = 'sveiks,' +vards;

let vardi_1 = ["suns", "kaķis", "Sigulda", "Rīga", "Dators",
"monitors", "propāns", "datums", "Pauls", "sniegs"]
let vardi_2 = ["snus", "iskaķ", "uldaSig", "gaRī", "toDars",
"tormonis", "roppāns", "tumdas", "ulsPa", "egssni"]

vardi_i = []
let timeout;
let c = document.getElementById("sekundes")
let s = c.getContext("2d")
let laiks
let punkti = 0
let punkti2 = document.getElementById("punkti")
reset()
//minēt vārdus var 1 min
function reset() {
  for(var i=0; i<vardi_1.length; i++){
   vardi_i.push(i)
  }
}

function taimeris(){
   laiks = 60
   n = 400/laiks
   s.clearRect(0,0,400,30) //katru reizi taisnstūris atjaunojas
   s.fillRect(0,0,400,30)
   var izpildit = setInterval(function(){
    if (laiks>0){
        laiks=laiks-1
    }
   
   s.clearRect(0,0,400,30)
   s.fillRect(0,0,n*laiks,30)
   izvade.innerHTML = laiks
   if(laiks==0){
    alert("Laiks ir beidzies!")
    clearInterval(izpildit)
   }
},1000)
}
function startTime(){
    const date = new Date()
    document.getElementById("demo").innerHTML = date.toLocaleDateString();
    setTimeout(function() {
        startTime()
    },1000)
}

function izveletiesVardu(size) {
    randomNr = Math.random()*(size)
    randomNr = Math.ceil(randomNr)
    randomNr--
    document.querySelector(".sajaukts").innerHTML=sajauktVardu(vardi_1[vardi_i[randomNr]])
    document.querySelector(".atbilde").value=''
    console.log(vardi_1)
}