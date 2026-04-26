const products = [
    {
        id: 1,
        nom: "Chemise Slim Fit",
        description: "Chemise élégante pour homme, idéale pour le bureau.",
        prix: 15000,
        categorie: "Vêtements Homme",
        vendeur: "Hieb Store",
        vendeurPhone: "24176483527",
        image: "uploads/1775300102_img1.jpeg"
    },
    {
        id: 2,
        nom: "Robe d'été",
        description: "Robe légère et fleurie pour femme.",
        prix: 12000,
        categorie: "Vêtements Femme",
        vendeur: "Hieb Store",
        image: "uploads/1775307808_img2.jpeg"
    },
    {
        id: 3,
        nom: "Baskets Sport",
        description: "Chaussures confortables pour la marche et le sport.",
        prix: 25000,
        categorie: "Chaussures Homme",
        vendeur: "Foot Gear",
        vendeurPhone: "24100000000",
        image: "uploads/1775337156_heib tenue sten.jpeg"
    },
    {
        id: 4,
        nom: "Talons Élégants",
        description: "Chaussures à talons pour soirées.",
        prix: 30000,
        categorie: "Chaussures Femme",
        vendeur: "Foot Gear",
        image: "uploads/1775337336_WhatsApp Image 2026-04-04 at 17.41.30.jpeg"
    },
    {
        id: 5,
        nom: "Rouge à Lèvres",
        description: "Rouge à lèvres longue tenue.",
        prix: 5000,
        categorie: "Cosmétiques",
        vendeur: "Glow Up",
        vendeurPhone: "24111111111",
        image: "uploads/1775337429_WhatsApp Image 2026-04-04 at 17.41.31.jpeg"
    },
    {
        id: 6,
        nom: "Huile d'Olive",
        description: "Huile d'olive extra vierge 1L.",
        prix: 8000,
        categorie: "Aliments",
        vendeur: "Hieb Store",
        image: "uploads/1775337617_WhatsApp Image 2026-04-04 at 17.54.48.jpeg"
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
