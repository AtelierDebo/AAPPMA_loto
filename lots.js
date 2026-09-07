const lots = [
  {
    "id": 1,
    "partie": "Partie 1",
    "title": "Ligne 1",
    "desc": "Bon 7€ sur un entremet de 6 personnes offert par Boulangerie Cantore + 1 menu acheté = 1 menu offert par Kebab (Le Central)",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 2,
    "partie": "Partie 1",
    "title": "Ligne 2",
    "desc": "1 Bijou offert par Presse Faverney + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 3,
    "partie": "Partie 1",
    "title": "Carton plein",
    "desc": "Raclette Grill offert par l'AAPPMA",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 4,
    "partie": "Partie 2",
    "title": "Ligne 1",
    "desc": "5l jus de pomme offert par le Verger Bio de Fouchécourt + 1 bon pour une brioche offert par Boulangerie Champion",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 5,
    "partie": "Partie 2",
    "title": "Ligne 2",
    "desc": "Cadre photo offert par QYYP + 1 bain douche offert par la Pharmacie de Jussey + 1 bon de 5€ offert par rotisserie d'Adrien + 1 bon cadeau album photo offert par Isa Photo",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 6,
    "partie": "Partie 2",
    "title": "Carton plein",
    "desc": "1 ensemble de saladiers offerts par Gantois Electroménager + Vinaigre de cidre offert par le Verger Bio de Fouchécourt",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 7,
    "partie": "Partie 3",
    "title": "Ligne 1",
    "desc": "Le pêché sucré",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 8,
    "partie": "Partie 3",
    "title": "Ligne 2",
    "desc": "Pharmacie Amance + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 9,
    "partie": "Partie 3",
    "title": "Carton plein",
    "desc": "Bon 30€ offert par le Petit Port de Fouchécourt",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 10,
    "partie": "Partie 4",
    "title": "Ligne 1",
    "desc": "Bon de 15€ offert par boucherie Juséenne + 1 bon pour une brioche offert par Boulangerie Champion",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 11,
    "partie": "Partie 4",
    "title": "Ligne 2",
    "desc": "1 bon coiffure homme ou femme offert par Art coiffure + 1 bon de 5€ offert par rotisserie d'Adrien + 1 brioche offert par la boulangerie Champion",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 12,
    "partie": "Partie 4",
    "title": "Carton plein",
    "desc": "Veste + pantalon offert par Epagri",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 13,
    "partie": "Partie 5",
    "title": "Ligne 1",
    "desc": "1 bon pour une grande Brioche offert par la boulangerie Sponem + 1 bon 10€ offert par fromagerie Port",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 14,
    "partie": "Partie 5",
    "title": "Ligne 2",
    "desc": "1 bon pour gateau 6 personnes offert par la boulagerie La superbe HUGOT + 1 Kebab offert à Jussey + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 15,
    "partie": "Partie 5",
    "title": "Carton plein",
    "desc": "Bijoux offert par la bijouterie PINTO Ophélie",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 16,
    "partie": "Partie 6",
    "title": "Ligne 1",
    "desc": "1 bon pour une coupe offert par Salon Chrystyl",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 17,
    "partie": "Partie 6",
    "title": "Ligne 2",
    "desc": "1 bon 25€ offert par restaurant l' Eucalyptus + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 18,
    "partie": "Partie 6",
    "title": "Carton plein",
    "desc": "Maxi plancha offert par l'AAPPMA",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 19,
    "partie": "Partie 7",
    "title": "Ligne 1",
    "desc": "1 bon de 20€ pour 40€ d'achat offert par Gantois bricolage",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 20,
    "partie": "Partie 7",
    "title": "Ligne 2",
    "desc": "1 bon de 30€ à partir 60€ d'achat offert par Elle et Lui + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 21,
    "partie": "Partie 7",
    "title": "Carton plein",
    "desc": "1 Nuit en roulotte offert par la communauté de communes",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 22,
    "partie": "Partie 8",
    "title": "Ligne 1",
    "desc": "1 bon pour 20€ sur une prestation offert par Jussey Coiffure",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 23,
    "partie": "Partie 8",
    "title": "Ligne 2",
    "desc": "1 Gourde offerte par Epicerie d'Adele + 1 jus de pomme offert par le Verger Bio de Fouchécourt + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 24,
    "partie": "Partie 8",
    "title": "Carton plein",
    "desc": "Machine à pizza offert par l'AAPPMA",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 25,
    "partie": "Partie 9",
    "title": "Ligne 1",
    "desc": "Fleurs séchées offert par La boite à fleurs + 1 bombe entretien plantes vertes offert par Capucine Fleurs",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 26,
    "partie": "Partie 9",
    "title": "Ligne 2",
    "desc": "1 bon 30€ offert par Pulsat + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 27,
    "partie": "Partie 9",
    "title": "Carton plein",
    "desc": "Séance hypnose relaxation offert par Hypnose de Mars",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 28,
    "partie": "Partie 10",
    "title": "Ligne 1",
    "desc": "1 bon pour gateau 6 personnes offert par la boulagerie La superbe HUGOT",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 29,
    "partie": "Partie 10",
    "title": "Ligne 2",
    "desc": "1 lot soin douche offert par pharmacie Jussey + 1 shampoing + 1 soin offert par Studio coiffure + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 30,
    "partie": "Partie 10",
    "title": "Carton plein",
    "desc": "Crepes party offert par l'AAPPMA + Compote pommes offerte par le Verger Bio de Fouchécourt",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 31,
    "partie": "Partie 11",
    "title": "Ligne 1",
    "desc": "1 bon pour homme ou femme offert par Art Coiffure",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 32,
    "partie": "Partie 11",
    "title": "Ligne 2",
    "desc": "Grille pain + bouilloire offerts par l'AAPPMA + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 33,
    "partie": "Partie 11",
    "title": "Carton plein",
    "desc": "1 bon d'achat de 100€ offert par Adrien Art",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 34,
    "partie": "Partie 12",
    "title": "Ligne 1",
    "desc": "Cadre photo offert par QYYP + 1 bon cadeau album photo offert par Isa Photo",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 35,
    "partie": "Partie 12",
    "title": "Ligne 2",
    "desc": "Massage de 30 min offert par O Bien être + 1 bon coupe homme offert par Pascaline coiffure + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 36,
    "partie": "Partie 12",
    "title": "Carton plein",
    "desc": "1 pizza par mois pendant 12 mois offert par Au four Vésulien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 37,
    "partie": "Partie 13",
    "title": "Ligne 1",
    "desc": "5 sacs de Terreau offert par Rotisserie Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 38,
    "partie": "Partie 13",
    "title": "Ligne 2",
    "desc": "Serviette à personnalisées offert par l'Atelier de Débo + 1 bon d'achat entremet 6 personnes offert par Au bonheur des blé + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 39,
    "partie": "Partie 13",
    "title": "Carton plein",
    "desc": "1 téléphone Redmi Note 12 Pro + 1 verre trempé offerts par QYYP",
    "value": "xxx",
    "emoji": "🎁"
  },
  {
    "id": 40,
    "partie": "🏆 Super Partie",
    "title": "SUPER LOT",
    "desc": "robot pétrin + Air Fryer + Tireuse bière offerts par l'AAPPMA + Téléphone Redmi Note 10 Pro + verre + coque offerts par QYYP + bon achat 50€ offert par Atherme + plaque décorative en résine offert par Créazabou + papa Amandine + Verres ricard / perrier offert par Le Chalet de la Plage + paniers à frites offert par QYYP",
    "value": "Super lot",
    "emoji": "🏆"
  }
];

const container = document.querySelector(".lots-grid");
container.innerHTML = lots.map(lot => `
  <article class="card ${lot.id === 40 ? "super-lot" : ""}" id="lot-${lot.id}">
    <div class="photo">${lot.emoji}</div>
    <div class="card-body">
      <span class="partie">${lot.partie}</span>
      <h3>${lot.title}</h3>
      <p>${lot.desc.replace(/\n/g, "<br>")}</p>
      <span class="value">${lot.value}</span>
    </div>
  </article>
`).join("");

function trackLot(id){
  if(typeof gtag === "function") gtag("event","lot_consultation",{lot_id:String(id),event_category:"loto"});
}

const params = new URLSearchParams(location.search);
const selected = params.get("lot");
if(selected){
  window.addEventListener("load",()=>{
    const el=document.getElementById("lot-"+selected);
    if(el) setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"center"}),250);
    trackLot(selected);
  });
}
