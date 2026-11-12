/* LOGIN */

function najava() {

    var korisnik = document.getElementById("korisnik").value;
    var lozinka = document.getElementById("lozinka").value;

    if (korisnik == "bojana" && lozinka == "1234") {

        document.getElementById("loginProzor").style.display = "none";

    }
    else {

        document.getElementById("porakaLogin").textContent =
            "Incorrect username or password! Try again.";

        document.getElementById("lozinka").value = "";

    }

}




// Funkcija za izbor na destinacija
function exploreDestination() {

    var grad = document.getElementById("grad").value;
    var kategorija = document.getElementById("kategorija").value;
    var budzet = Number(document.getElementById("budzet").value);

    var poraka = document.getElementById("poraka");

    if (grad == "" || kategorija == "" || budzet <= 0) {

        poraka.innerHTML = "Please complete all fields correctly.";
        poraka.style.color = "red";

        return;
    }

    if (grad == "Paris") {
        window.location.href = "blog.html#paris";
    }
    else if (grad == "Rome") {
        window.location.href = "blog.html#rome";
    }
    else if (grad == "Santorini") {
        window.location.href = "blog.html#santorini";
    }
    else if (grad == "Barcelona") {
        window.location.href = "blog.html#barcelona";
    }
    else if (grad == "London") {
        window.location.href = "blog.html#london";
    }
}

//sliki

var slikiParis = [
    "images/paris.jpg",
    "images/paris2.jpg",
    "images/paris3.jpg",
    "images/paris4.jpg"
];

var slikiRome = [
    "images/rome.jpg",
    "images/rome2.jpg",
    "images/rome3.jpg",
    "images/rome4.jpg"
];

var slikiSantorini = [
    "images/santorini.jpg",
    "images/santorini2.jpg",
    "images/santorini3.jpg",
    "images/santorini4.jpg"
];

var slikiBarcelona = [
    "images/barcelona.jpg",
    "images/barcelona2.jpg",
    "images/barcelona3.jpg",
    "images/barcelona4.jpg"
];

var slikiLondon = [
    "images/london.jpg",
    "images/london2.jpg",
    "images/london3.jpg",
    "images/london4.jpg"
];


// Pocetni indeksi
var indeksParis = 0;
var indeksRome = 0;
var indeksSantorini = 0;
var indeksBarcelona = 0;
var indeksLondon = 0;


// next

function slednaSlika(grad) {

    if (grad == "paris") {

        indeksParis++;

        if (indeksParis == slikiParis.length) {
            indeksParis = 0;
        }

        document.getElementById("slikaParis").src =
            slikiParis[indeksParis];
    }

    else if (grad == "rome") {

        indeksRome++;

        if (indeksRome == slikiRome.length) {
            indeksRome = 0;
        }

        document.getElementById("slikaRome").src =
            slikiRome[indeksRome];
    }

    else if (grad == "santorini") {

        indeksSantorini++;

        if (indeksSantorini == slikiSantorini.length) {
            indeksSantorini = 0;
        }

        document.getElementById("slikaSantorini").src =
            slikiSantorini[indeksSantorini];
    }

    else if (grad == "barcelona") {

        indeksBarcelona++;

        if (indeksBarcelona == slikiBarcelona.length) {
            indeksBarcelona = 0;
        }

        document.getElementById("slikaBarcelona").src =
            slikiBarcelona[indeksBarcelona];
    }

    else if (grad == "london") {

        indeksLondon++;

        if (indeksLondon == slikiLondon.length) {
            indeksLondon = 0;
        }

        document.getElementById("slikaLondon").src =
            slikiLondon[indeksLondon];
    }
}


// prev

function prethodnaSlika(grad) {

    if (grad == "paris") {

        indeksParis--;

        if (indeksParis < 0) {
            indeksParis = slikiParis.length - 1;
        }

        document.getElementById("slikaParis").src =
            slikiParis[indeksParis];
    }

    else if (grad == "rome") {

        indeksRome--;

        if (indeksRome < 0) {
            indeksRome = slikiRome.length - 1;
        }

        document.getElementById("slikaRome").src =
            slikiRome[indeksRome];
    }

    else if (grad == "santorini") {

        indeksSantorini--;

        if (indeksSantorini < 0) {
            indeksSantorini = slikiSantorini.length - 1;
        }

        document.getElementById("slikaSantorini").src =
            slikiSantorini[indeksSantorini];
    }

    else if (grad == "barcelona") {

        indeksBarcelona--;

        if (indeksBarcelona < 0) {
            indeksBarcelona = slikiBarcelona.length - 1;
        }

        document.getElementById("slikaBarcelona").src =
            slikiBarcelona[indeksBarcelona];
    }

    else if (grad == "london") {

        indeksLondon--;

        if (indeksLondon < 0) {
            indeksLondon = slikiLondon.length - 1;
        }

        document.getElementById("slikaLondon").src =
            slikiLondon[indeksLondon];
    }
}


/* LIKE I DISLIKE - BLOG */

/* PARIS */

var likesParis = 0;
var dislikesParis = 0;

function likeParis() {
    likesParis++;
    document.getElementById("likesParis").textContent = likesParis;
}

function dislikeParis() {
    dislikesParis++;
    document.getElementById("dislikesParis").textContent = dislikesParis;
}


/* ROME */

var likesRome = 0;
var dislikesRome = 0;

function likeRome() {
    likesRome++;
    document.getElementById("likesRome").textContent = likesRome;
}

function dislikeRome() {
    dislikesRome++;
    document.getElementById("dislikesRome").textContent = dislikesRome;
}


/* SANTORINI */

var likesSantorini = 0;
var dislikesSantorini = 0;

function likeSantorini() {
    likesSantorini++;
    document.getElementById("likesSantorini").textContent = likesSantorini;
}

function dislikeSantorini() {
    dislikesSantorini++;
    document.getElementById("dislikesSantorini").textContent = dislikesSantorini;
}


/* BARCELONA */

var likesBarcelona = 0;
var dislikesBarcelona = 0;

function likeBarcelona() {
    likesBarcelona++;
    document.getElementById("likesBarcelona").textContent = likesBarcelona;
}

function dislikeBarcelona() {
    dislikesBarcelona++;
    document.getElementById("dislikesBarcelona").textContent = dislikesBarcelona;
}


/* LONDON */

var likesLondon = 0;
var dislikesLondon = 0;

function likeLondon() {
    likesLondon++;
    document.getElementById("likesLondon").textContent = likesLondon;
}

function dislikeLondon() {
    dislikesLondon++;
    document.getElementById("dislikesLondon").textContent = dislikesLondon;
}


// survey

function ispratiAnketa() {

    // Zemanje podatoci od formata
    var ime = document.getElementById("imeAnketa").value;
    var omilena = document.getElementById("omilena").value;
    var tip = document.getElementById("tipOdmor").value;
    var budzet = document.getElementById("budzetAnketa").value;
    var ocena = document.getElementById("ocena").value;
    var komentar = document.getElementById("komentar").value;
    var predlog = document.getElementById("predlog").value;

    var poraka = document.getElementById("porakaAnketa");

    // Proverka dali se popolneti polinjata
    if (ime == "" || omilena == "" || tip == "" ||
        budzet == "" || ocena == "") {

        poraka.innerHTML = "Please complete all required fields.";
        poraka.style.color = "red";
        return;
    }

  
    alert("Thank you for completing our survey! We appreciate your feedback!");

    poraka.innerHTML = "Your survey has been submitted successfully!";
    poraka.style.color = "green";

    // Dodavanje komentar vo Visitor Comments
    var komentari = document.getElementById("komentari");

    var novKomentar = document.createElement("div");
    novKomentar.className = "card p-3 mb-3";

    var naslov = document.createElement("h5");
    naslov.textContent = ime + " - " + omilena;
    novKomentar.appendChild(naslov);

    var tekstKomentar = document.createElement("p");
    tekstKomentar.textContent = "Comment: " + komentar;
    novKomentar.appendChild(tekstKomentar);

    var tekstPredlog = document.createElement("p");
    tekstPredlog.textContent = "Suggested destination: " + predlog;
    novKomentar.appendChild(tekstPredlog);

    komentari.appendChild(novKomentar);

    // Praznenje na polinjata
    document.getElementById("imeAnketa").value = "";
    document.getElementById("omilena").value = "";
    document.getElementById("tipOdmor").value = "";
    document.getElementById("budzetAnketa").value = "";
    document.getElementById("ocena").value = "";
    document.getElementById("komentar").value = "";
    document.getElementById("predlog").value = "";
}
