const lots = [
  {
    "id": 1,
    "partie": "Partie 1",
    "title": "Lot n°1",
    "desc": "N° partie",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 2,
    "partie": "Partie 1",
    "title": "Lot n°2",
    "desc": "1 ligne",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 3,
    "partie": "Partie 1",
    "title": "Lot n°3",
    "desc": "2 lignes",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 4,
    "partie": "Partie 2",
    "title": "Lot n°4",
    "desc": "3 lignes",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 5,
    "partie": "Partie 2",
    "title": "Lot n°5",
    "desc": "1",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 6,
    "partie": "Partie 2",
    "title": "Lot n°6",
    "desc": "Bon 7€ sur un entremet de 6 personnes offert par Boulangerie Cantore\n+ 1 menu acheté = 1 menu offert par Kebab (Faverney)",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 7,
    "partie": "Partie 3",
    "title": "Lot n°7",
    "desc": "1 Bijou offert par Presse Faverney + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 8,
    "partie": "Partie 3",
    "title": "Lot n°8",
    "desc": "Raclette Grill offert par l'AAPPMA",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 9,
    "partie": "Partie 3",
    "title": "Lot n°9",
    "desc": "2",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 10,
    "partie": "Partie 4",
    "title": "Lot n°10",
    "desc": "5l jus de pomme offert par le Verger Bio de Fouchécourt + 1 bon pour une brioche offert par Boulangerie Champion",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 11,
    "partie": "Partie 4",
    "title": "Lot n°11",
    "desc": "Cadre photo offert par QYYP + 1 bain douche offert par la Pharmacie de Jussey + 1 bon de 5€ offert par rotisserie d'Adrien + 1 bon cadeau album photo offert par Isa Photo",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 12,
    "partie": "Partie 4",
    "title": "Lot n°12",
    "desc": "1 ensemble de saladiers offerts par Gantois Electroménager + Vinaigre de cidre offert par le Verger Bio de Fouchécourt",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 13,
    "partie": "Partie 5",
    "title": "Lot n°13",
    "desc": "3",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 14,
    "partie": "Partie 5",
    "title": "Lot n°14",
    "desc": "Le pêché sucré",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 15,
    "partie": "Partie 5",
    "title": "Lot n°15",
    "desc": "Pharmacie Amance + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 16,
    "partie": "Partie 6",
    "title": "Lot n°16",
    "desc": "Bon 30€ offert par le Petit Port de Fouchécourt",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 17,
    "partie": "Partie 6",
    "title": "Lot n°17",
    "desc": "PAUSE (environ 15 minutes)",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 18,
    "partie": "Partie 6",
    "title": "Lot n°18",
    "desc": "4",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 19,
    "partie": "Partie 7",
    "title": "Lot n°19",
    "desc": "Bon de 15€ offert par boucherie Juséenne + 1\n bon pour une brioche offert par Boulangerie Champion",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 20,
    "partie": "Partie 7",
    "title": "Lot n°20",
    "desc": "1 bon coiffure homme ou femme offert par Art coiffure + 1 bon de 5€ offert par rotisserie d'Adrien + 1 brioche offert par la boulangerie Champion",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 21,
    "partie": "Partie 7",
    "title": "Lot n°21",
    "desc": "Veste + pantalon offert par Epagri",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 22,
    "partie": "Partie 8",
    "title": "Lot n°22",
    "desc": "5",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 23,
    "partie": "Partie 8",
    "title": "Lot n°23",
    "desc": "1 bon pour une grande Brioche offert par la boulangerie Sponem + 1 bon 10€ offert par fromagerie Port",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 24,
    "partie": "Partie 8",
    "title": "Lot n°24",
    "desc": "1 bon pour gateau 6 personnes offert par la boulagerie La superbe HUGOT + 1 Kebab offert à Jussey + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 25,
    "partie": "Partie 9",
    "title": "Lot n°25",
    "desc": "Bijoux offert par la bijouterie PINTO Ophélie",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 26,
    "partie": "Partie 9",
    "title": "Lot n°26",
    "desc": "6",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 27,
    "partie": "Partie 9",
    "title": "Lot n°27",
    "desc": "1 bon pour une coupe offert par Salon Chrystyl",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 28,
    "partie": "Partie 10",
    "title": "Lot n°28",
    "desc": "1 bon 25€ offert par restaurant l' Eucalyptus + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 29,
    "partie": "Partie 10",
    "title": "Lot n°29",
    "desc": "Maxi plancha offert par l'AAPPMA",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 30,
    "partie": "Partie 10",
    "title": "Lot n°30",
    "desc": "7",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 31,
    "partie": "Partie 11",
    "title": "Lot n°31",
    "desc": "1 bon de 20€ pour 40€ d'achat offert par Gantois bricolage",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 32,
    "partie": "Partie 11",
    "title": "Lot n°32",
    "desc": "1 bon de 30€ à partir 60€ d'achat offert par Elle et Lui + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 33,
    "partie": "Partie 11",
    "title": "Lot n°33",
    "desc": "1 Nuit en roulotte offert par la communauté de communes",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 34,
    "partie": "Partie 12",
    "title": "Lot n°34",
    "desc": "PAUSE (environ 30/45 minutes)",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 35,
    "partie": "Partie 12",
    "title": "Lot n°35",
    "desc": "8",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 36,
    "partie": "Partie 12",
    "title": "Lot n°36",
    "desc": "1 bon pour 20€ sur une prestation offert par Jussey Coiffure",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 37,
    "partie": "Partie 13",
    "title": "Lot n°37",
    "desc": "1 Gourde offerte par Epicerie d'Adele + 1 jus de pomme offert par le Verger Bio de Fouchécourt + 1 bon de 5€ offert par rotisserie d'Adrien",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 38,
    "partie": "Partie 13",
    "title": "Lot n°38",
    "desc": "Machine à pizza offert par l'AAPPMA",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 39,
    "partie": "Partie 13",
    "title": "Lot n°39",
    "desc": "9",
    "value": "Lot à gagner",
    "emoji": "🎁"
  },
  {
    "id": 40,
    "partie": "🏆 Super Partie",
    "title": "SUPER LOT",
    "desc": "robot pétrin + Air Fryer + Tireuse bière offerts par l'AAPPMA + Téléphone Redmi Note 10 Pro + verre + coque offerts par QYYP + bon achat 50€ offert par Atherme +\n plaque décorative en résine offert par Créazabou + papa Amandine + Verres ricard / perrier offert par Le Chalet de la Plage + paniers à frites offert par QYYP",
    "value": "Super lot",
    "emoji": "🏆"
  }
];


const container = document.querySelector(".lots-grid");
const params = new URLSearchParams(location.search);
const selectedPartie = params.get("partie");
const selectedLot = params.get("lot");

function partieNumber(value) {
  const m = String(value).match(/(\d+)/);
  return m ? Number(m[1]) : 999;
}

function renderLots() {
  let visibleLots = lots;

  // Si un QR de partie est utilisé, on n'affiche que les 3 lots de cette partie.
  if (selectedPartie) {
    const n = Number(selectedPartie);
    visibleLots = lots.filter(lot => partieNumber(lot.partie) === n);
  } else if (selectedLot) {
    visibleLots = lots;
  }

  if (!visibleLots.length) {
    container.innerHTML = `
      <section class="intro">
        <h2>Partie introuvable</h2>
        <p>Le lien utilisé ne correspond pas à une partie du loto.</p>
        <p><a href="./">Voir tous les lots</a></p>
      </section>`;
    return;
  }

  const title = selectedPartie
    ? `<div class="partie-focus"><h2>🎉 Partie ${selectedPartie}</h2><p>Découvrez les 3 lots à gagner dans cette partie</p></div>`
    : "";

  container.innerHTML = title + visibleLots.map(lot => `
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

  if (selectedLot) {
    const el = document.getElementById("lot-" + selectedLot);
    if (el) setTimeout(() => el.scrollIntoView({behavior:"smooth", block:"center"}), 250);
  }
}

function track() {
  if (typeof gtag !== "function") return;
  if (selectedPartie) {
    gtag("event", "partie_consultation", {
      partie_id: String(selectedPartie),
      event_category: "loto"
    });
  } else if (selectedLot) {
    gtag("event", "lot_consultation", {
      lot_id: String(selectedLot),
      event_category: "loto"
    });
  }
}

renderLots();
window.addEventListener("load", track);
