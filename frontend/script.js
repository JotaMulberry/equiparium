function showProducts(list) {
  const container = document.querySelector(".product-container");
  container.innerHTML = "";

  list.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("product");

    let extraDetails = "";

    if (product.category === "Weapons" || product.category === "Armor" || product.category === "Shields") {
      extraDetails = `
        <p><strong>Type:</strong> ${product.type}</p>
        <p><strong>Weight:</strong> ${product.weight}</p>
        <p><strong>Style:</strong> ${product.style}</p>
      `;
    } else if (product.category === "Potions" || product.category === "Magic Items") {
      extraDetails = `
        <p><strong>Rarity:</strong> ${product.rarity}</p>
        <p><strong>Effect:</strong> ${product.effect}</p>
        <p><strong>Element:</strong> ${product.element}</p>
      `;
    }

    item.innerHTML = `
      <img src="${product.image}" alt="${product.item}">
      <h3>${product.item}</h3>
      <p>${product.description}</p>
      ${extraDetails}
      <span class="price">GP$ ${product.price}</span>
      <button>Add to Cart</button>
    `;
    
    container.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      item: "Longsword",
      description: "A versatile weapon favored by knights.",
      price: 120,
      image: "assets/img/longsword.jpg",
      category: "Weapons",
      type: "Melee",
      weight: "Light",
      style: "Simple"
    },
    {
      id: 2,
      item: "Breast Plate",
      description: "Sturdy armor offering excellent protection.",
      price: 200,
      image: "assets/img/breast-plate.jpg",
      category: "Armor",
      type: "Medium",
      weight: "Light",
      style: "Reinforced"
    },
    {
      id: 3,
      item: "Kite Shield",
      description: "A large shield providing superior defense.",
      price: 95,
      image: "assets/img/kite-shield.jpg",
      category: "Shields",
      type: "Defensive",
      weight: "Heavy",
      style: "Tactical"
    },
    {
      id: 4,
      item: "Potion of Healing",
      description: "Cures minor wounds and restores vitality.",
      price: 15,
      image: "assets/img/healing-potion.jpg",
      category: "Potions",
      rarity: "Common",
      effect: "Healing",
      element: "Life"
    },
    {
      id: 5,
      item: "Cloak of Shadows",
      description: "Grants invisibility to the wearer.",
      price: 130,
      image: "assets/img/shadow-cloak.jpg",
      category: "Magic Items",
      rarity: "Epic",
      effect: "Invisibility",
      element: "Shadow",
      subtype: "Amulet"
    },
    {
      id: 6,
      item: "Winged Boots",
      description: "Allows the wearer to fly for short distances.",
      price: 250,
      image: "assets/img/winged-boots.jpg",
      category: "Magic Items",
      rarity: "Rare",
      effect: "Flight",
      element: "Air",
      subtype: "Boots"
    },
    {
      id: 7,
      item: "Winter quiver",
      description: "A quiver that enchants arrows with ice magic.",
      price: 180,
      image: "assets/img/winter-quiver.jpg",
      category: "Magic Items",
      rarity: "Uncommon",
      effect: "Ice Damage",
      element: "Ice",
      subtype: "Quiver"
    },
    {
      id: 8,
      item: "Elixir of Strength",
      description: "Temporarily boosts physical strength.",
      price: 30,
      image: "assets/img/strength-elixir.jpg",
      category: "Potions",
      rarity: "Uncommon",
      effect: "Strength Boost",
      element: "Earth"
    }
  ];
  showProducts(products);
});