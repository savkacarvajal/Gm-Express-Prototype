export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  duration: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    name: "Servicio de Alimentación Tradicional",
    description: "Servicio completo de alimentación diaria para empresas con menús balanceados y variados",
    price: 0,
    icon: "🍽️",
    duration: "Cotización",
    features: [
      "Menús balanceados y nutritivos",
      "Variedad diaria de platos",
      "Personal capacitado",
      "Cumplimiento normas sanitarias",
      "Adaptación a requerimientos especiales"
    ]
  },
  {
    id: 2,
    name: "Servicio Transportado",
    description: "Transporte de alimentos con vehículos especialmente acondicionados manteniendo temperatura y calidad",
    price: 0,
    icon: "🚚",
    duration: "Cotización",
    features: [
      "Vehículos con control de temperatura",
      "Cumplimiento cadena de frío",
      "Entregas puntuales",
      "Trazabilidad del servicio",
      "Cobertura regional"
    ]
  },
  {
    id: 3,
    name: "Concesión de Casinos",
    description: "Administración integral de casinos corporativos con gestión completa de infraestructura y personal",
    price: 0,
    icon: "🏢",
    duration: "Cotización",
    features: [
      "Gestión completa del casino",
      "Personal especializado",
      "Equipamiento incluido",
      "Planificación de menús",
      "Control de calidad permanente",
      "Reportes mensuales"
    ]
  },
  {
    id: 4,
    name: "Eventos Corporativos - Recepciones",
    description: "Organización completa de recepciones corporativas con servicio de catering de alta calidad",
    price: 0,
    icon: "🎉",
    duration: "Cotización",
    features: [
      "Menú personalizado",
      "Montaje y decoración",
      "Personal de servicio",
      "Vajilla y mantelería",
      "Coordinación integral"
    ]
  },
  {
    id: 5,
    name: "Eventos Corporativos - Catering",
    description: "Servicio de catering premium para eventos empresariales de cualquier magnitud",
    price: 0,
    icon: "🍴",
    duration: "Cotización",
    features: [
      "Variedad de opciones gastronómicas",
      "Presentación gourmet",
      "Servicio profesional",
      "Adaptación a presupuestos",
      "Opciones vegetarianas y veganas"
    ]
  },
  {
    id: 6,
    name: "Coffee Break & Brunch",
    description: "Servicio de coffee break y brunch para reuniones, capacitaciones y eventos matinales",
    price: 0,
    icon: "☕",
    duration: "Cotización",
    features: [
      "Variedad de cafés y tés",
      "Pastelería y snacks",
      "Frutas frescas",
      "Opciones dulces y saladas",
      "Montaje incluido"
    ]
  },
  {
    id: 7,
    name: "Aniversarios y Cumpleaños Corporativos",
    description: "Celebraciones especiales con catering personalizado para fechas importantes de la empresa",
    price: 0,
    icon: "🎂",
    duration: "Cotización",
    features: [
      "Torta personalizada",
      "Decoración temática",
      "Buffet variado",
      "Coordinación del evento",
      "Fotografía opcional"
    ]
  },
  {
    id: 8,
    name: "Servicios Complementarios",
    description: "Servicios adicionales de apoyo logístico y operacional para empresas",
    price: 0,
    icon: "⚙️",
    duration: "Cotización",
    features: [
      "Limpieza de áreas comunes",
      "Mantención de equipos",
      "Gestión de residuos",
      "Reposición de insumos",
      "Servicios personalizados"
    ]
  }
];
