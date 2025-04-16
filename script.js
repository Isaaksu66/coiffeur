let produits = [];

function ajouterProduit() {
  const nom = document.getElementById("nomProduit").value.trim();
  const quantite = parseInt(document.getElementById("quantiteProduit").value);

  if (nom && !isNaN(quantite)) {
    produits.push({ nom, quantite });
    afficherProduits();
    document.getElementById("nomProduit").value = "";
    document.getElementById("quantiteProduit").value = "";
  }
}

function supprimerProduit(index) {
  produits.splice(index, 1);
  afficherProduits();
}

function afficherProduits() {
  const table = document.getElementById("tableProduits");
  table.innerHTML = "";
  produits.forEach((p, index) => {
    table.innerHTML += `
      <tr>
        <td>${p.nom}</td>
        <td>${p.quantite}</td>
        <td class="actions"><button onclick="supprimerProduit(${index})">Supprimer</button></td>
      </tr>
    `;
  });
}
