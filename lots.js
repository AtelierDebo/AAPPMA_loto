const lots = [
  {id:1, partie:"Partie 1 · Quine 1", title:"Panier gourmand", desc:"Produits locaux et spécialités de notre région.", value:"50 €", partner:"À compléter", emoji:"🧺"},
  {id:2, partie:"Partie 1 · Quine 2", title:"Lot n°2", desc:"Description du lot à compléter.", value:"—", partner:"À compléter", emoji:"🎁"},
  {id:3, partie:"Partie 1 · Quine 3", title:"Lot n°3", desc:"Description du lot à compléter.", value:"—", partner:"À compléter", emoji:"🎁"},
  {id:4, partie:"Partie 2 · Quine 1", title:"Lot n°4", desc:"Description du lot à compléter.", value:"—", partner:"À compléter", emoji:"🎁"},
  // Continue jusqu'au lot 40.
];

const container = document.querySelector(".lots-grid");
container.innerHTML = lots.map(lot => `
  <article class="card" id="lot-${lot.id}">
    <div class="photo">${lot.emoji}</div>
    <div class="card-body">
      <span class="partie">${lot.partie}</span>
      <h3>${lot.title}</h3>
      <p>${lot.desc}</p>
      <span class="value">Valeur : ${lot.value}</span>
      <div class="partner">🤝 Partenaire : ${lot.partner}</div>
      <a class="btn" href="?lot=${lot.id}#lot-${lot.id}" onclick="trackLot(${lot.id})">▦ Voir le lot</a>
    </div>
  </article>
`).join("");

function trackLot(id){
  if(typeof gtag === "function") gtag("event","lot_consultation",{lot_id:String(id)});
}
