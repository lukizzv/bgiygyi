//https://teachablemachine.withgoogle.com/models/yAZEOQ8JH/
function starClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    oso=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yAZEOQ8JH/model.json",modelReady);

}


function modelReady(){
    oso.classify(gotResults)
}

function gotResults(error,results){
console.log("got result")

if(error){
    console.log(error)
}

else{
    console.log(results)
   tre=Math.floor(Math.random()*255)+1
   
   dow=Math.floor(Math.random()*255)+1

   uno=Math.floor(Math.random()*255)+1

   document.getElementById("kseguro").innerHTML="precision: "+(results[0].confidence*100).toFixed(2)+"%";

   document.getElementById("s").innerHTML="puedo escuchar: "+(results[0].label)


   document.getElementById("kseguro").style.color="rgb("+tre+","+dow+","+uno+")";

   document.getElementById("s").style.color="rgb("+tre+","+dow+","+uno+")";

   imagen1=document.getElementById("ft1");

   imagen2=document.getElementById("ft2");

   imagen3=document.getElementById("ft3");

   imagen4=document.getElementById("ft4");


   if(results[0].label=="Ruido de fondo"){
    imagen1.src="tenor_1.gif"
    imagen2.src="wow.png"
    imagen3.src="bebebailando.png"
    imagen4.src="pato.png"
   } else if(results[0].label=="hola"){
    imagen2.src="Wow-gif.webp"
    imagen1.src="minion.png"
    imagen3.src="bebebailando.png"
    imagen4.src="pato.png"
   }
else if(results[0].label=="golpes"){
    imagen3.src="w.gif"

    imagen1.src="minion.png"
    imagen2.src="wow.png"
    imagen4.src="pato.png"
}

else{
    imagen4.src="p.gif"
    imagen1.src="minion.png"
    imagen3.src="bebebailando.png"
    imagen2.src="wow.png"
}
}

}