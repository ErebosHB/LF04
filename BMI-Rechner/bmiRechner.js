let BmiRechner = () => {
    let groesse = document.getElementById("groesse").value;
    let gewicht = document.getElementById("gewicht").value;
    let bmi =gewicht/Math.pow(groesse/100, 2);
    document.getElementById("bmiOutput").value = bmi.toFixed(2);

}
document.getElementById("taste").addEventListener('click', BmiRechner);