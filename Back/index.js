//QUI VA SCRITTO SOLO IL BACKEND TUTTO INSIEME. SENZA FARE PIU FILE PERCHE SIAMO POVERI CIT FLAVIO <3

 // Ottieni tutti i bottoni con la classe "domanda"
 var domanda = document.getElementsByClassName("domanda");
 var i;

 // Cicla attraverso ogni bottone
 for (i = 0; i < domanda.length; i++) {
   domanda[i].addEventListener("click", function () {
     // Aggiungi/rimuovi la classe "active" per gestire lo stile
     this.classList.toggle("active");
     this.parentElement.classList.toggle("active");

     // Ottieni la descrizione associato al bottone
     var descrizione = this.nextElementSibling;

     // Alterna tra "mostrato" e "nascosto"
     if (descrizione.style.display === "block") {
       descrizione.style.display = "none"; // Nasconde la descrizione
     } else {
       descrizione.style.display = "block"; // Mostra la descrizione
     }
   });
 }




