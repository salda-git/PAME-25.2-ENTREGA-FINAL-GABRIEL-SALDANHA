
export type Product = {
  id: number;
  name: string;
  flavor: string;
  description: string;
  price: number;
  icon: string; 
};

export const products: Product[] = [
  {
    id: 1,
    name: "Pirulito Morango",
    flavor: "Morango",
    description: "Delicioso pirulito sabor morango",
    price: 2.50,
    icon: "🍓",
  },
  {
    id: 2,
    name: "Pirulito Chocolate",
    flavor: "Chocolate",
    description: "Pirulito cremoso de chocolate",
    price: 3.00,
    icon: "🍫",
  },
  {
    id: 3,
    name: "Pirulito Limão",
    flavor: "Limão",
    description: "Pirulito azedinho de limão",
    price: 2.50,
    icon: "🍋",
  },
];