let meldung = ()=> {
    document.getElementById("browsertyp").innerHTML = "Das hier ist dein Browsername "+navigator.userAgent;

}
document.getElementById("btDruecken").addEventListener("click", meldung);