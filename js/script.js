// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//imput: 
//numero di kilometri ed età passeggero


//dati: 0,21 al km prezzo base 
    // < 18 anni sconto 20% 
    //> 65 anni sconto 40%


// output: 
//prezzo finale 

// Chiedere dati di kilomteri e età
const numeroKm = parseInt (prompt("Quanti km deve fare?"));
console.log(numeroKm, typeof(numeroKm));

const etaPass = parseInt (prompt("Che età ha?"));
console.log(etaPass, typeof(etaPass) );

//costo biglietto base 0,21 al km
const bigliettoBase = 0.21;
console.log(bigliettoBase, typeof(bigliettoBase));

//costo biglietto km

const bigliettoKm = (bigliettoBase * numeroKm);
console.log(bigliettoKm, typeof (bigliettoKm));

//SE il passeggero ha meno di 18 anni si applicherà uno sconto del 20% altrimenti se ha più di 65 anni si applicherà uno sconto del 40%.

let $bigliettoScontato 
if (etaPass <= 18 ) {
    $bigliettoScontato=
    bigliettoKm * 20 / 100 
} else if (etaPass >65) {
    $bigliettoScontato=
        bigliettoKm * 40 / 100
    }