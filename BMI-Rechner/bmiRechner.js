let BmiRechner = () => {
    let groesse = document.getElementById("groesse").value;
    let gewicht = document.getElementById("gewicht").value;
    let bmi =gewicht/Math.pow(groesse/100, 2);
    if (bmi <= 0){
        document.getElementById("bmiOutput").innerHTML = "Bitte sowohl Körpergröße als auch Gewicht eingeben";
    }
    else if (bmi >= 30){
        document.getElementById("bmiOutput").value = bmi.toFixed(2);
        let para = document.createElement("p");
        para.innerText = "Sie haben leider sehr starkes Übergewicht!";
        document.getElementById("eingabeKasten").appendChild(para);

    }
    else {
        document.getElementById("bmiOutput").value = bmi.toFixed(2);
    }
}
document.getElementById("taste").addEventListener('click', BmiRechner);