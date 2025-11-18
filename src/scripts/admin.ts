// Admin Dashboard Script

// Función para reinicializar datos (útil para debugging)
(window as any).resetAdminData = function() {
  if (confirm('¿Estás seguro de que quieres reinicializar todos los datos? Esto eliminará todos los productos, servicios, ventas y cotizaciones actuales.')) {
    localStorage.removeItem('adminProducts');
    localStorage.removeItem('adminServices');
    localStorage.removeItem('sales');
    localStorage.removeItem('quotes');
    location.reload();
  }
};

// Inicializar datos mock si no existen
function initializeMockData() {
  if (!localStorage.getItem('adminProducts')) {
    const defaultProducts = [
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
    localStorage.setItem('adminProducts', JSON.stringify(defaultProducts));
  }

  if (!localStorage.getItem('adminServices')) {
    const defaultServices = [
      {
        id: 1,
        name: "Servicio de Alimentación Tradicional",
        description: "Servicio completo de alimentación diaria para empresas con menús balanceados y variados",
        price: 0,
        icon: "🍽️",
        duration: "Cotización",
        features: ["Menús balanceados y nutritivos", "Variedad diaria de platos", "Personal capacitado", "Cumplimiento normas sanitarias", "Adaptación a requerimientos especiales"]
      },
      {
        id: 2,
        name: "Servicio Transportado",
        description: "Transporte de alimentos con vehículos especialmente acondicionados manteniendo temperatura y calidad",
        price: 0,
        icon: "🚚",
        duration: "Cotización",
        features: ["Vehículos con control de temperatura", "Cumplimiento cadena de frío", "Entregas puntuales", "Trazabilidad del servicio", "Cobertura regional"]
      },
      {
        id: 3,
        name: "Concesión de Casinos",
        description: "Administración integral de casinos corporativos con gestión completa de infraestructura y personal",
        price: 0,
        icon: "🏢",
        duration: "Cotización",
        features: ["Gestión completa del casino", "Personal especializado", "Equipamiento incluido", "Planificación de menús", "Control de calidad permanente", "Reportes mensuales"]
      },
      {
        id: 4,
        name: "Eventos Corporativos - Recepciones",
        description: "Organización completa de recepciones corporativas con servicio de catering de alta calidad",
        price: 0,
        icon: "🎉",
        duration: "Cotización",
        features: ["Menú personalizado", "Montaje y decoración", "Personal de servicio", "Vajilla y mantelería", "Coordinación integral"]
      },
      {
        id: 5,
        name: "Eventos Corporativos - Catering",
        description: "Servicio de catering premium para eventos empresariales de cualquier magnitud",
        price: 0,
        icon: "🍴",
        duration: "Cotización",
        features: ["Variedad de opciones gastronómicas", "Presentación gourmet", "Servicio profesional", "Adaptación a presupuestos", "Opciones vegetarianas y veganas"]
      },
      {
        id: 6,
        name: "Coffee Break & Brunch",
        description: "Servicio de coffee break y brunch para reuniones, capacitaciones y eventos matinales",
        price: 0,
        icon: "☕",
        duration: "Cotización",
        features: ["Variedad de cafés y tés", "Pastelería y snacks", "Frutas frescas", "Opciones dulces y saladas", "Montaje incluido"]
      },
      {
        id: 7,
        name: "Aniversarios y Cumpleaños Corporativos",
        description: "Celebraciones especiales con catering personalizado para fechas importantes de la empresa",
        price: 0,
        icon: "🎂",
        duration: "Cotización",
        features: ["Torta personalizada", "Decoración temática", "Buffet variado", "Coordinación del evento", "Fotografía opcional"]
      },
      {
        id: 8,
        name: "Servicios Complementarios",
        description: "Servicios adicionales de apoyo logístico y operacional para empresas",
        price: 0,
        icon: "⚙️",
        duration: "Cotización",
        features: ["Limpieza de áreas comunes", "Mantención de equipos", "Gestión de residuos", "Reposición de insumos", "Servicios personalizados"]
      }
    ];
    localStorage.setItem('adminServices', JSON.stringify(defaultServices));
  }

  if (!localStorage.getItem('sales')) {
    const defaultSales = [
      {
        id: 'SALE-001',
        date: new Date().toISOString(),
        customer: "Empresa ABC S.A.",
        items: [
          { name: "Menú Ejecutivo", quantity: 20, price: 6500 }
        ],
        total: 130000,
        status: "completed"
      }
    ];
    localStorage.setItem('sales', JSON.stringify(defaultSales));
  }

  // No inicializar quotes por defecto, se crean desde el formulario
  if (!localStorage.getItem('quotes')) {
    localStorage.setItem('quotes', JSON.stringify([]));
  }
}

// Tab Navigation
function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetTab)?.classList.add('active');

      // Cargar datos según la pestaña
      if (targetTab === 'dashboard') loadDashboard();
      if (targetTab === 'products') loadProducts();
      if (targetTab === 'services') loadServices();
      if (targetTab === 'sales') loadSales();
      if (targetTab === 'quotes') loadQuotes();
    });
  });
}

// Dashboard
function loadDashboard() {
  const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
  const services = JSON.parse(localStorage.getItem('adminServices') || '[]');
  const sales = JSON.parse(localStorage.getItem('sales') || '[]');
  const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');

  const totalRevenue = sales.reduce((sum: number, sale: any) => sum + sale.total, 0);

  document.getElementById('totalProducts')!.textContent = products.length.toString();
  document.getElementById('totalServices')!.textContent = services.length.toString();
  document.getElementById('totalSales')!.textContent = sales.length.toString();
  document.getElementById('totalQuotes')!.textContent = quotes.length.toString();
  document.getElementById('totalRevenue')!.textContent = `$${totalRevenue.toLocaleString('es-CL')}`;

  // Actividad reciente
  const activityList = document.getElementById('activityList');
  if (activityList) {
    const recentActivity = [];
    
    // Agregar ventas
    sales.slice(-3).reverse().forEach((sale: any) => {
      recentActivity.push({
        type: 'sale',
        date: new Date(sale.date),
        text: `💰 Venta ${sale.id} - ${sale.customer} - $${sale.total.toLocaleString('es-CL')}`
      });
    });

    // Agregar cotizaciones
    quotes.slice(-3).reverse().forEach((quote: any) => {
      recentActivity.push({
        type: 'quote',
        date: new Date(quote.date),
        text: `📋 Cotización - ${quote.fullName} (${quote.company}) - ${quote.service}`
      });
    });

    // Ordenar por fecha
    recentActivity.sort((a, b) => b.date.getTime() - a.date.getTime());

    if (recentActivity.length === 0) {
      activityList.innerHTML = '<p class="no-data">No hay actividad reciente</p>';
    } else {
      activityList.innerHTML = recentActivity.slice(0, 5).map(activity => `
        <div class="activity-item">
          ${activity.text}
          <br><small>${activity.date.toLocaleString('es-CL')}</small>
        </div>
      `).join('');
    }
  }
}

// Products CRUD
function loadProducts() {
  const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
  const tbody = document.querySelector('#productsTable tbody');

  console.log('Loading products:', products.length, 'products found');
  console.log('Products tbody element:', tbody);

  if (tbody) {
    if (products.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem;">No hay productos registrados</td></tr>';
    } else {
      tbody.innerHTML = products.map((product: any) => `
        <tr>
          <td>${product.id}</td>
          <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;" /></td>
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>$${product.price.toLocaleString('es-CL')}</td>
          <td>${product.stock}</td>
          <td>
            <button class="action-btn edit-btn" onclick="editProduct(${product.id})">✏️ Editar</button>
            <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">🗑️</button>
          </td>
        </tr>
      `).join('');
      console.log('Products loaded successfully');
    }
  } else {
    console.error('Products tbody not found!');
  }
}

(window as any).editProduct = function(id: number) {
  const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
  const product = products.find((p: any) => p.id === id);

  if (product) {
    (document.getElementById('productId') as HTMLInputElement).value = product.id;
    (document.getElementById('productName') as HTMLInputElement).value = product.name;
    (document.getElementById('productDescription') as HTMLTextAreaElement).value = product.description;
    (document.getElementById('productPrice') as HTMLInputElement).value = product.price;
    (document.getElementById('productStock') as HTMLInputElement).value = product.stock;
    (document.getElementById('productCategory') as HTMLInputElement).value = product.category;
    (document.getElementById('productImage') as HTMLInputElement).value = product.image;

    document.getElementById('productModalTitle')!.textContent = 'Editar Producto';
    document.getElementById('productModal')?.classList.add('active');
  }
};

(window as any).deleteProduct = function(id: number) {
  if (confirm('¿Estás seguro de eliminar este producto?')) {
    let products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
    products = products.filter((p: any) => p.id !== id);
    localStorage.setItem('adminProducts', JSON.stringify(products));
    loadProducts();
  }
};

function setupProductModal() {
  const modal = document.getElementById('productModal');
  const addBtn = document.getElementById('addProductBtn');
  const closeBtn = document.getElementById('closeProductModal');
  const cancelBtn = document.getElementById('cancelProductBtn');
  const form = document.getElementById('productForm');

  addBtn?.addEventListener('click', () => {
    form?.reset();
    (document.getElementById('productId') as HTMLInputElement).value = '';
    document.getElementById('productModalTitle')!.textContent = 'Nuevo Producto';
    modal?.classList.add('active');
  });

  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  cancelBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
    const id = (document.getElementById('productId') as HTMLInputElement).value;

    const productData = {
      id: id ? parseInt(id) : Math.max(0, ...products.map((p: any) => p.id)) + 1,
      name: (document.getElementById('productName') as HTMLInputElement).value,
      description: (document.getElementById('productDescription') as HTMLTextAreaElement).value,
      price: parseFloat((document.getElementById('productPrice') as HTMLInputElement).value),
      stock: parseInt((document.getElementById('productStock') as HTMLInputElement).value),
      category: (document.getElementById('productCategory') as HTMLInputElement).value,
      image: (document.getElementById('productImage') as HTMLInputElement).value
    };

    if (id) {
      // Actualizar
      const index = products.findIndex((p: any) => p.id === parseInt(id));
      products[index] = productData;
    } else {
      // Crear
      products.push(productData);
    }

    localStorage.setItem('adminProducts', JSON.stringify(products));
    modal?.classList.remove('active');
    loadProducts();
  });
}

// Services CRUD
function loadServices() {
  const services = JSON.parse(localStorage.getItem('adminServices') || '[]');
  const tbody = document.querySelector('#servicesTable tbody');

  console.log('Loading services:', services.length, 'services found');
  console.log('Services tbody element:', tbody);

  if (tbody) {
    if (services.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem;">No hay servicios registrados</td></tr>';
    } else {
      tbody.innerHTML = services.map((service: any) => `
        <tr>
          <td>${service.id}</td>
          <td style="font-size: 2rem;">${service.icon}</td>
          <td>${service.name}</td>
          <td>${service.price === 0 ? 'Cotización' : '$' + service.price.toLocaleString('es-CL')}</td>
          <td>${service.duration}</td>
          <td>
            <button class="action-btn edit-btn" onclick="editService(${service.id})">✏️ Editar</button>
            <button class="action-btn delete-btn" onclick="deleteService(${service.id})">🗑️</button>
          </td>
        </tr>
      `).join('');
      console.log('Services loaded successfully');
    }
  } else {
    console.error('Services tbody not found!');
  }
}

(window as any).editService = function(id: number) {
  const services = JSON.parse(localStorage.getItem('adminServices') || '[]');
  const service = services.find((s: any) => s.id === id);

  if (service) {
    (document.getElementById('serviceId') as HTMLInputElement).value = service.id;
    (document.getElementById('serviceName') as HTMLInputElement).value = service.name;
    (document.getElementById('serviceDescription') as HTMLTextAreaElement).value = service.description;
    (document.getElementById('servicePrice') as HTMLInputElement).value = service.price;
    (document.getElementById('serviceDuration') as HTMLInputElement).value = service.duration;
    (document.getElementById('serviceIcon') as HTMLInputElement).value = service.icon;
    (document.getElementById('serviceFeatures') as HTMLTextAreaElement).value = service.features.join(', ');

    document.getElementById('serviceModalTitle')!.textContent = 'Editar Servicio';
    document.getElementById('serviceModal')?.classList.add('active');
  }
};

(window as any).deleteService = function(id: number) {
  if (confirm('¿Estás seguro de eliminar este servicio?')) {
    let services = JSON.parse(localStorage.getItem('adminServices') || '[]');
    services = services.filter((s: any) => s.id !== id);
    localStorage.setItem('adminServices', JSON.stringify(services));
    loadServices();
  }
};

function setupServiceModal() {
  const modal = document.getElementById('serviceModal');
  const addBtn = document.getElementById('addServiceBtn');
  const closeBtn = document.getElementById('closeServiceModal');
  const cancelBtn = document.getElementById('cancelServiceBtn');
  const form = document.getElementById('serviceForm');

  addBtn?.addEventListener('click', () => {
    form?.reset();
    (document.getElementById('serviceId') as HTMLInputElement).value = '';
    document.getElementById('serviceModalTitle')!.textContent = 'Nuevo Servicio';
    modal?.classList.add('active');
  });

  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  cancelBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const services = JSON.parse(localStorage.getItem('adminServices') || '[]');
    const id = (document.getElementById('serviceId') as HTMLInputElement).value;

    const serviceData = {
      id: id ? parseInt(id) : Math.max(0, ...services.map((s: any) => s.id)) + 1,
      name: (document.getElementById('serviceName') as HTMLInputElement).value,
      description: (document.getElementById('serviceDescription') as HTMLTextAreaElement).value,
      price: parseFloat((document.getElementById('servicePrice') as HTMLInputElement).value),
      duration: (document.getElementById('serviceDuration') as HTMLInputElement).value,
      icon: (document.getElementById('serviceIcon') as HTMLInputElement).value,
      features: (document.getElementById('serviceFeatures') as HTMLTextAreaElement).value.split(',').map(f => f.trim())
    };

    if (id) {
      const index = services.findIndex((s: any) => s.id === parseInt(id));
      services[index] = serviceData;
    } else {
      services.push(serviceData);
    }

    localStorage.setItem('adminServices', JSON.stringify(services));
    modal?.classList.remove('active');
    loadServices();
  });
}

// Sales
function loadSales() {
  let sales = JSON.parse(localStorage.getItem('sales') || '[]');
  const dateFilter = (document.getElementById('dateFilter') as HTMLInputElement)?.value;
  const statusFilter = (document.getElementById('statusFilter') as HTMLSelectElement)?.value;

  // Aplicar filtros
  if (dateFilter) {
    sales = sales.filter((s: any) => {
      const saleDate = new Date(s.date).toISOString().split('T')[0];
      return saleDate === dateFilter;
    });
  }
  if (statusFilter && statusFilter !== 'all') {
    sales = sales.filter((s: any) => s.status === statusFilter);
  }

  const tbody = document.querySelector('#salesTable tbody');

  if (tbody) {
    if (sales.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem;">No hay ventas registradas</td></tr>';
    } else {
      tbody.innerHTML = sales.map((sale: any, index: number) => `
        <tr>
          <td>${sale.id}</td>
          <td>${new Date(sale.date).toLocaleDateString('es-CL')}</td>
          <td>${sale.customer}</td>
          <td>${sale.items.length || 0}</td>
          <td>$${sale.total.toLocaleString('es-CL')}</td>
          <td><span class="status-badge status-${sale.status}">${getStatusText(sale.status)}</span></td>
          <td>
            <button class="action-btn view-btn" onclick="viewSale('${sale.id}')">👁️ Ver</button>
            <button class="action-btn delete-btn" onclick="deleteSale('${sale.id}')">🗑️</button>
          </td>
        </tr>
      `).join('');
    }
  }
}

function getStatusText(status: string): string {
  const statusMap: any = {
    'pending': 'Pendiente',
    'completed': 'Completado',
    'cancelled': 'Cancelado'
  };
  return statusMap[status] || status;
}

(window as any).viewSale = function(id: string) {
  const sales = JSON.parse(localStorage.getItem('sales') || '[]');
  const sale = sales.find((s: any) => s.id === id);
  if (sale) {
    const itemsList = sale.items.map((item: any) => 
      `${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString('es-CL')}`
    ).join('\n');
    alert(`Detalles de la Venta ${sale.id}\n\nCliente: ${sale.customer}\nFecha: ${new Date(sale.date).toLocaleString('es-CL')}\n\nProductos:\n${itemsList}\n\nTotal: $${sale.total.toLocaleString('es-CL')}\nEstado: ${getStatusText(sale.status)}`);
  }
};

(window as any).deleteSale = function(id: string) {
  if (confirm('¿Estás seguro de eliminar esta venta?')) {
    let sales = JSON.parse(localStorage.getItem('sales') || '[]');
    sales = sales.filter((s: any) => s.id !== id);
    localStorage.setItem('sales', JSON.stringify(sales));
    loadSales();
    loadDashboard();
  }
};

function setupSalesFilters() {
  const dateFilter = document.getElementById('dateFilter');
  const statusFilter = document.getElementById('statusFilter');

  dateFilter?.addEventListener('change', loadSales);
  statusFilter?.addEventListener('change', loadSales);

  const exportBtn = document.getElementById('exportSalesBtn');
  exportBtn?.addEventListener('click', () => {
    const sales = JSON.parse(localStorage.getItem('sales') || '[]');
    const csv = 'ID,Fecha,Cliente,Total,Estado\n' + 
                sales.map((s: any) => `${s.id},${new Date(s.date).toLocaleDateString('es-CL')},${s.customer},${s.total},${s.status}`).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ventas_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  });
}

// Quotes (Cotizaciones)
function loadQuotes() {
  let quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
  const searchFilter = (document.getElementById('searchQuote') as HTMLInputElement)?.value.toLowerCase();
  const serviceFilter = (document.getElementById('serviceFilter') as HTMLSelectElement)?.value;

  // Aplicar filtros
  if (searchFilter) {
    quotes = quotes.filter((q: any) => 
      q.fullName.toLowerCase().includes(searchFilter) ||
      q.company.toLowerCase().includes(searchFilter)
    );
  }
  if (serviceFilter && serviceFilter !== 'all') {
    quotes = quotes.filter((q: any) => q.service === serviceFilter);
  }

  const tbody = document.querySelector('#quotesTable tbody');

  if (tbody) {
    if (quotes.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem;">No hay cotizaciones registradas</td></tr>';
    } else {
      tbody.innerHTML = quotes.reverse().map((quote: any, index: number) => {
        const serviceName = getServiceName(quote.service);
        return `
          <tr>
            <td>${new Date(quote.date).toLocaleDateString('es-CL')}</td>
            <td>${quote.fullName}</td>
            <td>${quote.company}</td>
            <td>${serviceName}</td>
            <td>${quote.people || 'N/A'}</td>
            <td>
              <small>📧 ${quote.email}</small><br>
              <small>📱 ${quote.phone}</small>
            </td>
            <td>
              <button class="action-btn view-btn" onclick="viewQuote(${quotes.length - index - 1})">👁️ Ver</button>
              <button class="action-btn delete-btn" onclick="deleteQuote(${quotes.length - index - 1})">🗑️</button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }
}

function getServiceName(serviceKey: string): string {
  const serviceNames: any = {
    'alimentacion-tradicional': 'Alimentación Tradicional',
    'servicio-transportado': 'Servicio Transportado',
    'concesion-casinos': 'Concesión de Casinos',
    'recepciones': 'Recepciones',
    'catering': 'Catering',
    'coffee-break': 'Coffee Break',
    'aniversarios': 'Aniversarios',
    'complementarios': 'Complementarios',
    'otro': 'Otro'
  };
  return serviceNames[serviceKey] || serviceKey;
}

(window as any).viewQuote = function(index: number) {
  const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
  const quote = quotes[index];
  
  if (quote) {
    const modal = document.getElementById('quoteDetailModal');
    const content = document.getElementById('quoteDetailContent');
    
    if (content) {
      content.innerHTML = `
        <div style="display: grid; gap: 1rem;">
          <div>
            <strong>👤 Nombre:</strong> ${quote.fullName}
          </div>
          <div>
            <strong>🏢 Empresa:</strong> ${quote.company}
          </div>
          <div>
            <strong>🆔 RUT:</strong> ${quote.rut}
          </div>
          <div>
            <strong>📧 Email:</strong> ${quote.email}
          </div>
          <div>
            <strong>📱 Teléfono:</strong> ${quote.phone}
          </div>
          <div>
            <strong>⚙️ Servicio:</strong> ${getServiceName(quote.service)}
          </div>
          <div>
            <strong>👥 Cantidad de Personas:</strong> ${quote.people || 'No especificado'}
          </div>
          <div>
            <strong>📝 Descripción:</strong><br>
            <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px; margin-top: 0.5rem;">
              ${quote.message}
            </div>
          </div>
          <div>
            <strong>📅 Fecha de Solicitud:</strong> ${new Date(quote.date).toLocaleString('es-CL')}
          </div>
        </div>
      `;
    }
    
    modal?.classList.add('active');
  }
};

(window as any).deleteQuote = function(index: number) {
  if (confirm('¿Estás seguro de eliminar esta cotización?')) {
    let quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    quotes.splice(index, 1);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    loadQuotes();
    loadDashboard();
  }
};

function setupQuotesFilters() {
  const searchFilter = document.getElementById('searchQuote');
  const serviceFilter = document.getElementById('serviceFilter');

  searchFilter?.addEventListener('input', loadQuotes);
  serviceFilter?.addEventListener('change', loadQuotes);

  const exportBtn = document.getElementById('exportQuotesBtn');
  exportBtn?.addEventListener('click', () => {
    const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    const csv = 'Fecha,Nombre,Empresa,RUT,Email,Teléfono,Servicio,Personas,Mensaje\n' + 
                quotes.map((q: any) => 
                  `${new Date(q.date).toLocaleDateString('es-CL')},"${q.fullName}","${q.company}",${q.rut},${q.email},${q.phone},"${getServiceName(q.service)}",${q.people || 'N/A'},"${q.message}"`
                ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cotizaciones_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  });

  // Setup modal close buttons
  const closeBtn = document.getElementById('closeQuoteDetailModal');
  const closeBtn2 = document.getElementById('closeQuoteDetailBtn');
  const modal = document.getElementById('quoteDetailModal');

  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  closeBtn2?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - Initializing admin dashboard');
  
  initializeMockData();
  console.log('Mock data initialized');
  
  setupTabs();
  setupProductModal();
  setupServiceModal();
  setupSalesFilters();
  setupQuotesFilters();
  
  console.log('Starting to load data...');
  
  // Cargar todas las vistas inicialmente
  loadDashboard();
  loadProducts();
  loadServices();
  loadSales();
  loadQuotes();
  
  console.log('All data loading functions called');
});
