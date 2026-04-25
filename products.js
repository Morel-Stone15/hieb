const products = [
    {
        id: 1,
        nom: "Chemise Slim Fit",
        description: "Chemise élégante pour homme, idéale pour le bureau.",
        prix: 15000,
        categorie: "Vêtements Homme",
        vendeur: "Hieb Store",
        image: "https://picsum.photos/300/240?random=1"
    },
    {
        id: 2,
        nom: "Robe d'été",
        description: "Robe légère et fleurie pour femme.",
        prix: 12000,
        categorie: "Vêtements Femme",
        vendeur: "Hieb Store",
        image: "https://picsum.photos/300/240?random=2"
    },
    {
        id: 3,
        nom: "Baskets Sport",
        description: "Chaussures confortables pour la marche et le sport.",
        prix: 25000,
        categorie: "Chaussures Homme",
        vendeur: "Foot Gear",
        image: "https://picsum.photos/300/240?random=3"
    },
    {
        id: 4,
        nom: "Talons Élégants",
        description: "Chaussures à talons pour soirées.",
        prix: 30000,
        categorie: "Chaussures Femme",
        vendeur: "Foot Gear",
        image: "https://picsum.photos/300/240?random=4"
    },
    {
        id: 5,
        nom: "Rouge à Lèvres",
        description: "Rouge à lèvres longue tenue.",
        prix: 5000,
        categorie: "Cosmétiques",
        vendeur: "Glow Up",
        image: "https://picsum.photos/300/240?random=5"
    },
    {
        id: 6,
        nom: "Huile d'Olive",
        description: "Huile d'olive extra vierge 1L.",
        prix: 8000,
        categorie: "Aliments",
        vendeur: "Hieb Store",
        image: "https://picsum.photos/300/240?random=6"
    }
];

const categories = [
    { nom: "Vêtements Homme", icon: "👔" },
    { nom: "Vêtements Femme", icon: "👗" },
    { nom: "Chaussures Homme", icon: "👟" },
    { nom: "Chaussures Femme", icon: "👠" },
    { nom: "Cosmétiques", icon: "💄" },
    { nom: "Aliments", icon: "🥑" },
    { nom: "Nettoyage", icon: "🧼" },
    { nom: "Produits de Seconde Main", icon: "♻️" }
];

export { products, categories };
