export type Product = {
  id: number;
  name: string;
  flavor: string;
  description: string;
  price: number;
  icon: string;
  composition: string[]; 
  nutritionalFacts: { [key: string]: string }; 
};

export const products: Product[] = [
  {
    id: 1,
    name: "Pirulito Morango",
    flavor: "Morango",
    description: "Delicioso pirulito sabor morango",
    price: 2.50,
    icon: "🍓",
    composition: ["Açúcar", "Xarope de Glicose", "Ácido Cítrico", "Aroma Artificial de Morango", "Corante Vermelho 40"],
    nutritionalFacts: {
      "Porção": "15g (1 unidade)",
      "Calorias": "58 kcal",
      "Carboidratos": "14g",
      "Açúcares": "11g",
    },
  },
  {
    id: 2,
    name: "Pirulito Chocolate",
    flavor: "Chocolate",
    description: "Pirulito cremoso de chocolate",
    price: 3.00,
    icon: "🍫",
    composition: ["Açúcar", "Massa de Cacau", "Manteiga de Cacau", "Leite em Pó", "Lecitina de Soja"],
    nutritionalFacts: {
      "Porção": "20g (1 unidade)",
      "Calorias": "95 kcal",
      "Gorduras Totais": "5g",
      "Proteínas": "1g",
    },
  },
  {
    id: 3,
    name: "Pirulito Limão",
    flavor: "Limão",
    description: "Pirulito azedinho de limão",
    price: 2.50,
    icon: "🍋",
    composition: ["Açúcar", "Xarope de Glicose", "Ácido Cítrico", "Aroma Natural de Limão", "Corante Amarelo"],
    nutritionalFacts: {
      "Porção": "15g (1 unidade)",
      "Calorias": "55 kcal",
      "Carboidratos": "13g",
      "Sódio": "3mg",
    },
  },
];