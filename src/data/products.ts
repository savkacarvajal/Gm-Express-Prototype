export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Menú Ejecutivo Individual",
    description: "Almuerzo completo: entrada, plato principal, ensalada, postre y bebida",
    price: 6500,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
    category: "Menús",
    stock: 100
  },
  {
    id: 2,
    name: "Box Lunch Premium",
    description: "Box con sándwich gourmet, snack, fruta, postre y bebida para eventos",
    price: 4500,
    image: "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=500&h=500&fit=crop",
    category: "Box Lunch",
    stock: 150
  },
  {
    id: 3,
    name: "Menú Vegetariano",
    description: "Opción vegetariana completa con proteínas vegetales y productos orgánicos",
    price: 6000,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop",
    category: "Menús",
    stock: 80
  },
  {
    id: 4,
    name: "Bandeja de Sushi (30 piezas)",
    description: "Variedad de rolls y nigiri premium con wasabi, jengibre y salsa de soya",
    price: 18000,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=500&fit=crop",
    category: "Eventos",
    stock: 25
  },
  {
    id: 5,
    name: "Cocktail Party para 20 personas",
    description: "Variedad de canapés, mini quiches, brochetas y bocadillos gourmet",
    price: 45000,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=500&h=500&fit=crop",
    category: "Eventos",
    stock: 15
  },
  {
    id: 6,
    name: "Torta Corporativa Personalizada",
    description: "Torta de 2kg personalizada con logo de empresa y decoración premium",
    price: 35000,
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&h=500&fit=crop",
    category: "Pastelería",
    stock: 30
  },
  {
    id: 7,
    name: "Set Coffee Break (10 personas)",
    description: "Café, té, jugos, galletas, pasteles y frutas frescas",
    price: 25000,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    category: "Coffee Break",
    stock: 40
  },
  {
    id: 8,
    name: "Bandeja de Empanadas (12 unidades)",
    description: "Empanadas artesanales de pino, queso y pollo con variedad de sabores",
    price: 12000,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=500&fit=crop",
    category: "Pastelería",
    stock: 60
  },
  {
    id: 9,
    name: "Ensalada de Frutas Premium (1kg)",
    description: "Mezcla fresca de frutas de estación, perfecta para eventos saludables",
    price: 8500,
    image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=500&h=500&fit=crop",
    category: "Saludable",
    stock: 50
  }
];
