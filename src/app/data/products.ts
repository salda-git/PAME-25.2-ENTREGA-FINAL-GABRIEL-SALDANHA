export type Product = {
  id: number;
  name: string;
  flavor: string;
  description: string;
  price: number;
  icon: string;
  imageUrl: string;
  cardColor: string;
  composition: string[];
  nutritionalFacts: { [key: string]: string };
};

export const products: Product[] = [
  {
    id: 1,
    name: "Pirulito Diet Cereja Doce Vida",
    flavor: "Cereja",
    description: "Delicioso pirulito sabor cereja sem adição de açúcares",
    price: 4.00,
    icon: "",
    imageUrl: "/cherryDEF2.png",
    cardColor: 'bg-red-100',

    composition: [
      "Isomalte",
      "Eritritol",
      "Essência de cereja",
      "Corante artificial vermelho Ponceau"
    ],

    nutritionalFacts: {
      "Calorias": "30",
      "Gordura Total": "0g",
      "Gordura Saturada": "0g",
      "Gordura Trans": "0g",
      "Colesterol": "0mg",
      "Sódio": "0mg",
      "Carboidratos Totais": "15g",
      "Fibra Alimentar": "8g",
      "Açúcares Totais": "0g",
      "Álcool de Açúcar": "5g",
      "Proteína": "0g",
      "Vitamina C": "120mg",
    },
  },
  {
    id: 2,
    name: "Pirulito Blueberry",
    flavor: "Blueberry",
    description: "Pirulito cremoso de Blueberry sem adição de açúcares",
    price: 4.00,
    icon: "",
    imageUrl: "/blueBerryDEF2.png",
    cardColor: 'bg-blue-100',
    composition: ["Açúcar", "Massa de Cacau", "Manteiga de Cacau", "Leite em Pó", "Lecitina de Soja"],
    nutritionalFacts: {
      "Calorias": "30",
      "Gordura Total": "0g",
      "Gordura Saturada": "0g",
      "Gordura Trans": "0g",
      "Colesterol": "0mg",
      "Sódio": "0mg",
      "Carboidratos Totais": "15g",
      "Fibra Alimentar": "8g",
      "Açúcares Totais": "0g",
      "Álcool de Açúcar": "5g",
      "Proteína": "0g",
      "Vitamina C": "120mg",
    },
  },
  {
    id: 3,
    name: "Pirulito Maçã Verde",
    flavor: "Maçã Verde",
    description: "Pirulito azedinho de Maçã Verde sem adição de açúcares",
    price:4.00,
    icon: "🍏",
    imageUrl: "/GreenAppleDEF2.png",
    cardColor: 'bg-green-100',
    composition: ["Açúcar", "Xarope de Glicose", "Ácido Cítrico", "Aroma Natural de Maçã Verde", "Corante Amarelo"],
    nutritionalFacts: {
      "Calorias": "30",
      "Gordura Total": "0g",
      "Gordura Saturada": "0g",
      "Gordura Trans": "0g",
      "Colesterol": "0mg",
      "Sódio": "0mg",
      "Carboidratos Totais": "15g",
      "Fibra Alimentar": "8g",
      "Açúcares Totais": "0g",
      "Álcool de Açúcar": "5g",
      "Proteína": "0g",
      "Vitamina C": "120mg",
    },
  },
];