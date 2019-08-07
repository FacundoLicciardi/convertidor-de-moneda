var areuro= document.getElementById("eur")

var ArVef =4.55;
var EurVef= 11.2;

var ardolar=document.getElementById("dol")
var eurdolar = document.getElementById("eurdolar")
var vefdolar = document.getElementById("vefdolar")
var moneda = [ardolar, areuro, eurdolar,vefdolar]

if (typeof bot !== null) {

function traer(){
        fetch('https://s3.amazonaws.com/dolartoday/data.json')
        .then(res => res.json())
        .then(datas => {
          (datas.USD['efectivo'])
          moneda[0]=`${datas.USD['efectivo']}`
        moneda[1]=`${datas.EUR['efectivo']}`
        moneda[2]=`${datas.EURUSD['rate']}`
        moneda[3]=`${datas.USDVEF['rate']}`}
            
       )



}

    
/*rec1*/function Euro1(valNum) {

document.getElementById("output1").innerHTML=valNum / moneda[1] + " euros";
}

    
/*rec3*/function Euro2(valNum) {

document.getElementById("output2").innerHTML=valNum / moneda[2] + " euros";
}
 /*rec9_5*/function Euro3(valNum) {

document.getElementById("output9").innerHTML=valNum /EurVef  + " euros";
}
/*rec2*/function Dolar1(valNum) {

document.getElementById("output3").innerHTML=valNum / moneda[0] + " dolares";
}


/*rec3_5*/function Dolar2(valNum) {

document.getElementById("output3_5").innerHTML=valNum * moneda[2] + " dolares";
}

/*rec9*/function Dolar3(valNum) {

document.getElementById("output9_5").innerHTML=valNum / moneda[3] + " dolares";
}


/*rec4*/function Peso1(valNum) {

document.getElementById("output4").innerHTML=valNum * moneda [1] + " pesos";
}

    /*rec5*/function Peso2(valNum) {

document.getElementById("output5").innerHTML=valNum * moneda [0] + " pesos";
}
/*rec8*/function Peso3(valNum) {

document.getElementById("output8").innerHTML=valNum * ArVef + " pesos";
}

/*rec10*/function Vef1(valNum) {

document.getElementById("output10").innerHTML=valNum / ArVef + " bolivares";
}

/*rec7*/function Vef2(valNum) {

document.getElementById("output7").innerHTML=valNum * moneda[3] + " bolivares";
}

/*rec6*/function Vef3(valNum) {

document.getElementById("output6").innerHTML=valNum * EurVef + " bolivares";
}

    
 
    
    
    
}