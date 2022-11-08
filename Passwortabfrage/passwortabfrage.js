let abfrage = () => {
    let password = "Hallo";
    for (let i = 0; i < 3; i++){
        if (password === prompt((i+1)+".Versuch:Was bedeutet DQM", "nope")){
            location.href = "http://www.szut.de/"
            break;
        }
        else if (i === 2) {
            document.getElementById("text").innerHTML = "Drei mal falsch du Vogel";
        }

    }

}