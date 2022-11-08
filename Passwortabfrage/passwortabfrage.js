let abfrage = () => {
    let password = "Hallo";
    let ok = true;
    for (let i = 0; i < 3 && ok; i++){
        if (password === prompt((i+1)+".Versuch:Was bedeutet DQM", "nope")){
            location.href = "http://www.szut.de/"
            ok = false;
        }
        else if (i === 2) {
            document.getElementById("text").innerHTML = "Drei mal falsch du Vogel";
        }

    }

}