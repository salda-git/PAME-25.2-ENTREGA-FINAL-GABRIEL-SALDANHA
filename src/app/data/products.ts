export type Product = {
  id: number;
  name: string;
  flavor: string;
  description: string;
  price: number;
  icon: string;
  imageUrl: string;
  cardColor: string; // <-- 1. ADICIONE ESTA LINHA
  composition: string[];
  nutritionalFacts: { [key: string]: string };
};

export const products: Product[] = [
  {
    id: 1,
    name: "Pirulito Cereja",
    flavor: "Cereja",
    description: "Delicioso pirulito sabor Cereja",
    price: 2.50,
    icon: "🍓",
    imageUrl: "/cherryDEF.jpg", // Verifique se o nome do seu arquivo é este
    cardColor: 'bg-red-300', // <-- 2. ADICIONE A COR AQUI
    composition: ["Açúcar", "Xarope de Glicose", "Ácido Cítrico", "Aroma Artificial de Cereja", "Corante Vermelho 40"],
    nutritionalFacts: { /* ... */ },
  },
  {
    id: 2,
    name: "Pirulito Blueberry",
    flavor: "Blueberry",
    description: "Pirulito cremoso de Blueberry",
    price: 3.00,
    icon: "🍫",
    imageUrl: "/blueBerryDEF2.png", // Verifique se o nome do seu arquivo é este
    cardColor: 'bg-blue-100', // <-- 2. ADICIONE A COR AQUI
    composition: ["Açúcar", "Massa de Cacau", "Manteiga de Cacau", "Leite em Pó", "Lecitina de Soja"],
    nutritionalFacts: { /* ... */ },
  },
  {
    id: 3,
    name: "Pirulito Maçã Verde",
    flavor: "Maçã Verde",
    description: "Pirulito azedinho de Maçã Verde",
    price: 2.50,
    icon: "🍋",
    imageUrl: "/GreenAppleDEF2.png", // Verifique se o nome do seu arquivo é este
    cardColor: 'bg-green-100', // <-- 2. ADICIONE A COR AQUI
    composition: ["Açúcar", "Xarope de Glicose", "Ácido Cítrico", "Aroma Natural de Maçã Verde", "Corante Amarelo"],
    nutritionalFacts: { /* ... */ },
  },
];