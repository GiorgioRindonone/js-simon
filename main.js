
// creo la funzione per generare i numeri random
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

// Un alert() espone 5 numeri generati casualmente.

// creo una variabile con stringa vuota, che poi andrò a riempire
var numeriGenerati = [];
// mi creo un while che mi pusha 5 numeri random
while ( numeriGenerati.length < 5 ) {
  var numero = generaNumeroRandom(1, 100);
  // controllo che il numero generato non si ripeta, e poi lo pusho
  if (numeriGenerati.includes(numero) == false) {
    numeriGenerati.push(numero);
  }
}
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

setTimeout(function () {
  // creo una variabile stringa vuota dei numeri che inserirà l'utente da riempire
  var numeriUtente = [];

  // mi creo un while che mi limita i numeri inseriti dall'utente a 5
  while ( numeriUtente.length < 5 ) {
    // chiedo il numero all'utente
    var numUtente = parseInt(prompt("inserisci il numero"));

    // controllo che il l'utente non inserisca due volte lo stesso numero
    if (numeriUtente.includes(numUtente) == false) {
      numeriUtente.push(numUtente);
    } else {
      alert("Hai già inserito questo numero");
    }
  }

  // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

  // mi creo una variabile stringa vuota per inserire i numeri che indovina l'utente
  var numeriIndovinati = [];
  // con un for mi ciclo la lunghezza della stringa dei numeri generati dall'utente che sono 5
  for (var i = 0; i < numeriUtente.length; i++) {
    // controllo che i numeri nella stringa numeriUtente siano presenti nella stringa numeriGenerati
    // se sono inclusi li pusho nella stringa numeriIndovinati
    if (numeriGenerati.includes(numeriUtente[i]) == true) {
      numeriIndovinati.push(numeriUtente[i]);
    }
  }
  // se l'utente ha indovinato qualche numero gli dico quanti e quali numeri ha indovinato
  if (numeriIndovinati.length > 0) {
    alert("hai indovinato " + numeriIndovinati.length + " numeri." + " Sono: " + numeriIndovinati);
  } else {
    alert("Mi spiace, riprova!");
  }
}, 3000);
