# 🍽️ GMExpress - Plataforma de Servicios de Alimentación

## 📋 Descripción del Proyecto

GMExpress es un **mockup completo de plataforma e-commerce** especializada en servicios de alimentación corporativa y eventos. El proyecto simula una aplicación web completa con catálogo de productos, servicios, carrito de compras, sistema de autenticación y panel administrativo.

**Nota:** Este es un proyecto académico/mockup para presentación técnica. Las funcionalidades de backend (Firebase, pagos, etc.) están simuladas con LocalStorage.

---

## 🎯 Características Principales

### Para Usuarios
- ✅ **Catálogo de Productos**: 9 productos alimenticios con categorías y filtros
- ✅ **Catálogo de Servicios**: 8 servicios de catering y alimentación corporativa
- ✅ **Carrito de Compras**: Persistente con LocalStorage, gestión de cantidades
- ✅ **Sistema de Cotizaciones**: Formulario de contacto para servicios personalizados
- ✅ **Autenticación**: Login y registro de usuarios con validación
- ✅ **Responsive Design**: Adaptado para móviles, tablets y desktop

### Para Administradores
- ✅ **Dashboard Completo**: Panel con estadísticas en tiempo real
- ✅ **Gestión de Productos**: CRUD completo (Crear, Leer, Actualizar, Eliminar)
- ✅ **Gestión de Servicios**: CRUD completo con información detallada
- ✅ **Gestión de Ventas**: Visualización, filtrado y exportación a CSV
- ✅ **Control de Stock**: Actualización de inventarios
- ✅ **Acceso Protegido**: Solo usuarios autenticados pueden acceder

---

## 🛠️ Stack Tecnológico

### Frontend Framework
- **Astro 5.15.9**: Framework moderno con arquitectura de islas
- **TypeScript**: Tipado estático para mayor seguridad
- **CSS Modules**: Estilos con scope local

### Características de Astro Utilizadas
- **Static Site Generation (SSG)**: Pre-renderizado de páginas
- **Zero JS by Default**: JavaScript solo donde es necesario
- **Component Islands**: Hidratación selectiva de componentes interactivos
- **File-based Routing**: Enrutamiento automático basado en archivos

### Almacenamiento
- **LocalStorage**: Simulación de base de datos
  - `cart`: Carrito de compras
  - `adminProducts`: Productos del catálogo
  - `adminServices`: Servicios ofrecidos
  - `sales`: Historial de ventas
  - `users`: Usuarios registrados
  - `quotes`: Cotizaciones solicitadas
  - `adminSession`: Sesión del usuario
  - `isAuthenticated`: Estado de autenticación

### Integración Simulada
- **Firebase Authentication**: Sistema de login/registro mockup
- **Firebase Firestore**: Base de datos NoSQL simulada
- **Pasarela de Pagos**: Checkout simulado

---

## 📁 Estructura del Proyecto

```
hilarious-horizon/
├── public/                      # Archivos estáticos
├── src/
│   ├── assets/                  # Recursos (imágenes, iconos)
│   ├── components/              # Componentes reutilizables
│   │   ├── Header.astro         # Navegación principal
│   │   ├── Footer.astro         # Pie de página
│   │   ├── ProductCard.astro    # Tarjeta de producto
│   │   └── ServiceCard.astro    # Tarjeta de servicio
│   ├── data/                    # Datos mockup
│   │   ├── products.ts          # Catálogo de productos (9 items)
│   │   └── services.ts          # Catálogo de servicios (8 items)
│   ├── layouts/
│   │   └── Layout.astro         # Layout base con SEO
│   ├── pages/                   # Páginas (routing automático)
│   │   ├── index.astro          # Homepage
│   │   ├── productos.astro      # Catálogo productos
│   │   ├── servicios.astro      # Catálogo servicios
│   │   ├── carrito.astro        # Carrito de compras
│   │   ├── contacto.astro       # Formulario cotización
│   │   ├── login.astro          # Login/Registro
│   │   └── admin.astro          # Dashboard admin
│   └── scripts/
│       └── admin.ts             # Lógica del dashboard
├── astro.config.mjs             # Configuración Astro
├── tsconfig.json                # Configuración TypeScript
└── package.json                 # Dependencias
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js 18+ 
- npm o pnpm

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd hilarious-horizon

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:4321 (o el puerto indicado en consola)
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run astro        # CLI de Astro
```

---

## 👤 Credenciales de Acceso

### Usuario Administrador
- **Email**: `admin@gmexpress.com`
- **Contraseña**: `admin123`
- **Rol**: Admin (acceso completo al dashboard)

### Usuarios Regulares
- Pueden registrarse desde `/login`
- Acceso al catálogo y carrito
- Sin acceso al panel administrativo

---

## 🔐 Sistema de Autenticación (Mockup)

### Arquitectura Simulada Firebase Auth

**En Producción (No Implementado):**
```typescript
// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "gmexpress.firebaseapp.com",
  projectId: "gmexpress",
  storageBucket: "gmexpress.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

**Mockup Actual (LocalStorage):**
```typescript
// Login simulado
const mockUser = {
  uid: 'mock-uid-12345',
  email: email,
  displayName: 'Administrador GMExpress',
  role: 'admin',
  loginTime: new Date().toISOString()
};
localStorage.setItem('adminSession', JSON.stringify(mockUser));
```

### Flujo de Autenticación

1. **Registro**: Usuario completa formulario → Datos guardados en `localStorage.users`
2. **Login**: Validación contra datos locales → Sesión guardada en `localStorage.adminSession`
3. **Protección de Rutas**: `/admin` verifica `localStorage.isAuthenticated`
4. **Logout**: Limpieza de sesión y redirección a `/`

---

## 🗃️ Modelo de Datos

### Product (Productos)
```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;       // URL de Unsplash
  category: string;    // Menús, Snacks, Bebidas, etc.
  stock: number;
}
```

### Service (Servicios)
```typescript
interface Service {
  id: number;
  name: string;
  description: string;
  price: number;       // 0 para cotización
  duration: string;    // "Cotización" para servicios personalizados
  features: string[];  // Lista de características
  icon: string;        // Emoji decorativo
}
```

### Sale (Ventas)
```typescript
interface Sale {
  id: string;
  date: string;        // ISO timestamp
  customer: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: string;      // Completado, Pendiente, Cancelado
}
```

### Quote (Cotizaciones)
```typescript
interface Quote {
  fullName: string;
  email: string;
  phone: string;
  rut: string;
  company: string;
  service: string;
  people: number;
  message: string;
  date: string;
}
```

### User (Usuarios)
```typescript
interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  password: string;    // En producción usaría hash
  role: 'admin' | 'user';
  createdAt: string;
}
```

---

## 🎨 Diseño y UI/UX

### Paleta de Colores
```css
/* Gradientes principales */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-secondary: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);

/* Colores de estado */
--success: #10b981;
--warning: #ffc107;
--error: #ef4444;
--info: #3b82f6;
```

### Tipografía
- **Familia**: System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI")
- **Pesos**: 400 (regular), 600 (semi-bold), 700 (bold), 900 (black)

### Componentes de UI
- **Cards**: Box-shadow con hover effects
- **Buttons**: Gradientes con transformaciones 3D
- **Forms**: Inputs con focus states y validación visual
- **Modals**: Overlays con animaciones de entrada/salida
- **Badges**: Contadores con notificaciones en tiempo real

---

## 📄 Páginas y Funcionalidades

### 1. Homepage (`/`)
- Hero section con CTA
- Productos destacados (primeros 3)
- Servicios destacados (primeros 3)
- Sección de contacto

### 2. Productos (`/productos`)
- Grid responsivo de productos
- Filtros por categoría
- Botón "Agregar al carrito"
- Gestión de stock

### 3. Servicios (`/servicios`)
- Grid de servicios disponibles
- Cada servicio enlaza a `/contacto`
- Etiqueta "Solicitar Cotización"
- Sin funcionalidad de carrito

### 4. Carrito (`/carrito`)
- Lista de productos agregados
- Control de cantidades (+ / -)
- Cálculo de subtotal, IVA (19%), total
- Botón "Proceder al Pago" (simulado)
- Persistencia en LocalStorage

### 5. Contacto (`/contacto`)
- Formulario completo de cotización
- Campos: nombre, email, teléfono, RUT, empresa, servicio, personas, descripción
- Validación frontend
- Guardado en `localStorage.quotes`
- Mensaje de confirmación

### 6. Login (`/login`)
- **Tabs**: Iniciar Sesión / Crear Cuenta
- **Login**: Email + contraseña
- **Registro**: Formulario completo con validación
- Credenciales demo visibles
- Redirección automática según rol

### 7. Admin Dashboard (`/admin`)
- **Protegido**: Requiere autenticación
- **4 Tabs**: Dashboard, Productos, Servicios, Ventas
- **Dashboard**: Tarjetas con estadísticas
- **Productos**: Tabla + CRUD (crear, editar, eliminar)
- **Servicios**: Tabla + CRUD
- **Ventas**: Filtros + exportación CSV
- **Logout**: Botón para cerrar sesión

---

## 🔄 Flujos de Usuario

### Flujo de Compra (Productos)
1. Usuario visita `/productos`
2. Filtra por categoría (opcional)
3. Click en "Agregar al Carrito"
4. Badge del carrito se actualiza
5. Visita `/carrito`
6. Ajusta cantidades
7. Click en "Proceder al Pago"
8. Simulación de checkout exitoso

### Flujo de Cotización (Servicios)
1. Usuario visita `/servicios`
2. Click en "Solicitar Cotización"
3. Redirige a `/contacto`
4. Completa formulario con datos
5. Envío exitoso
6. Cotización guardada en LocalStorage
7. Admin puede ver cotizaciones en dashboard

### Flujo de Administración
1. Admin visita `/login`
2. Ingresa credenciales (admin@gmexpress.com / admin123)
3. Sistema valida y crea sesión
4. Redirige a `/admin`
5. Puede gestionar productos, servicios, ventas
6. Exportar datos a CSV
7. Cerrar sesión

---

## 🎓 Conceptos Técnicos Implementados

### Astro Islands Architecture
- **Hidratación Parcial**: Solo componentes interactivos cargan JS
- **Zero JS by Default**: Páginas estáticas por defecto
- **Performance**: Tiempo de carga optimizado

### TypeScript
- **Interfaces**: Definición de tipos para Product, Service, Sale
- **Type Safety**: Prevención de errores en tiempo de desarrollo
- **IntelliSense**: Autocompletado en IDE

### Component-Based Architecture
- **Reutilización**: Header, Footer, ProductCard, ServiceCard
- **Separación de Responsabilidades**: Lógica separada de presentación
- **Mantenibilidad**: Cambios localizados

### State Management
- **LocalStorage**: Persistencia cliente-side
- **Event System**: Comunicación entre componentes
- **Session Management**: Control de autenticación

### Responsive Design
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: 480px, 768px, 968px, 1200px
- **Grid System**: CSS Grid y Flexbox

---

## 📊 Datos de Ejemplo

### Productos (9 items)
1. Menú Ejecutivo - $6,500
2. Box Lunch Premium - $4,500
3. Sushi Variado - $18,000
4. Empanadas Gourmet - $2,500
5. Sandwich Triple - $3,800
6. Ensalada César - $5,200
7. Bebidas Variadas - $1,500
8. Postres Artesanales - $3,000
9. Café Premium - $2,200

### Servicios (8 items)
1. Servicio de Alimentación Tradicional
2. Servicio Transportado
3. Concesión de Casinos
4. Eventos Corporativos - Recepciones
5. Eventos Corporativos - Catering
6. Coffee Break & Brunch
7. Aniversarios y Cumpleaños
8. Servicios Complementarios

---

## 🚀 Despliegue en Producción

### Opciones de Hosting

#### Vercel (Recomendado)
```bash
npm install -g vercel
vercel login
vercel
```

#### Netlify
```bash
npm run build
# Arrastra carpeta dist/ a Netlify Drop
```

#### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages desde /dist
```

### Variables de Entorno (Producción)
```env
PUBLIC_FIREBASE_API_KEY=your_api_key
PUBLIC_FIREBASE_AUTH_DOMAIN=gmexpress.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=gmexpress
PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
```

---

## 🔒 Seguridad

### Implementaciones Mockup
- ⚠️ **Contraseñas sin hash**: LocalStorage en texto plano
- ⚠️ **Sin HTTPS**: Desarrollo local
- ⚠️ **Sin JWT**: Sesión simple en localStorage

### Para Producción Real
```typescript
// Hash de contraseñas
import bcrypt from 'bcrypt';
const hashedPassword = await bcrypt.hash(password, 10);

// JWT Tokens
import jwt from 'jsonwebtoken';
const token = jwt.sign({ userId }, process.env.JWT_SECRET);

// CORS configurado
app.use(cors({
  origin: 'https://gmexpress.com',
  credentials: true
}));
```

---

## 🧪 Testing (No Implementado - Propuesta)

### Unit Tests con Vitest
```typescript
import { describe, it, expect } from 'vitest';
import { calculateTotal } from './utils';

describe('Cart Calculations', () => {
  it('should calculate total with IVA', () => {
    const subtotal = 10000;
    const total = calculateTotal(subtotal);
    expect(total).toBe(11900); // 10000 + 19% IVA
  });
});
```

### E2E Tests con Playwright
```typescript
test('user can add product to cart', async ({ page }) => {
  await page.goto('http://localhost:4321/productos');
  await page.click('button:has-text("Agregar al Carrito")');
  await expect(page.locator('.cart-badge')).toHaveText('1');
});
```

---

## 📝 TODOs y Mejoras Futuras

### Backend Real
- [ ] Implementar Firebase Authentication
- [ ] Conectar Firestore Database
- [ ] API REST con Express/Fastify
- [ ] Integración de pasarela de pagos (Stripe/WebPay)

### Features
- [ ] Sistema de notificaciones push
- [ ] Chat en vivo para soporte
- [ ] Sistema de reviews y ratings
- [ ] Seguimiento de pedidos en tiempo real
- [ ] Panel de analytics avanzado

### Optimizaciones
- [ ] Image optimization con Astro Assets
- [ ] Lazy loading de imágenes
- [ ] Service Worker para PWA
- [ ] Caché de API calls
- [ ] Compresión Brotli/Gzip

---

## 👨‍💻 Autor

**Proyecto Académico - INACAP**  
Carrera: Ingeniería en Software  
Curso: Mockup y Presentación Técnica

---

## 📄 Licencia

MIT License - Uso educativo y de demostración.

---

## 🙏 Agradecimientos

- **Astro Team**: Por el framework increíble
- **Unsplash**: Imágenes de productos
- **Google Fonts**: Tipografías
- **INACAP**: Apoyo académico

---

## 📞 Contacto (Ficticio)

- **Web**: https://gmexpress.com
- **Email**: contacto@gmexpress.com
- **Teléfono**: +56 9 1234 5678
- **Dirección**: Santiago, Chile

---

**¿Preguntas? ¿Sugerencias?**  
Abre un issue en el repositorio o contacta al equipo de desarrollo.

**⭐ Si te gustó el proyecto, dale una estrella en GitHub!**
