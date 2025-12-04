# Monttreal - E-commerce de Vestuario

E-commerce completo de vestuario desarrollado con Next.js 14, TypeScript y MongoDB.

## Tecnologías

- **Frontend**: Next.js 14 (App Router), TypeScript, TailwindCSS, SCSS Modules, HeroUI
- **Backend**: Next.js API Routes, Server Actions
- **Base de datos**: MongoDB con Mongoose
- **Autenticación**: NextAuth.js (Google + Credentials)
- **Almacenamiento de imágenes**: Cloudinary
- **Emails**: Nodemailer
- **Notificaciones**: react-toastify
- **Validaciones**: Yup
- **Internacionalización**: next-intl (Español/Inglés)
- **Testing**: Jest + Cypress

## Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env.local` con las siguientes variables:

```env
# MongoDB
MONGODB_URI=mongodb+srv://...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu-secret-aqui

# Google OAuth
GOOGLE_CLIENT_ID=tu-client-id
GOOGLE_CLIENT_SECRET=tu-client-secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=tu-cloud-name
CLOUDINARY_API_KEY=tu-api-key
CLOUDINARY_API_SECRET=tu-api-secret

# Nodemailer (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password
EMAIL_FROM=Monttreal <noreply@monttreal.com>

# Admin Email (para cron job)
ADMIN_EMAIL=admin@monttreal.com

# Cron Secret (opcional)
CRON_SECRET=tu-cron-secret
```

### 3. Iniciar en desarrollo

```bash
npm run dev
```

### 4. Seed de datos (opcional)

Visita `http://localhost:3000/api/seed` para poblar la base de datos con productos de ejemplo.

**Credenciales de admin por defecto:**
- Email: admin@monttreal.com
- Password: admin123

## Estructura del Proyecto

```
/app
  layout.tsx
  page.tsx                    # Landing
  /shop/page.tsx              # Tienda
  /product/[id]/page.tsx      # Detalle de producto
  /cart/page.tsx              # Carrito
  /auth
    /login/page.tsx
    /register/page.tsx
  /orders/page.tsx            # Órdenes del usuario
  /dashboard
    page.tsx                  # Dashboard admin
    /products/page.tsx        # Lista de productos
    /products/new/page.tsx    # Crear producto
    /products/[id]/page.tsx   # Editar producto
  /api
    /auth/*                   # NextAuth endpoints
    /products/*               # CRUD productos
    /cart/*                   # Carrito
    /orders/*                 # Órdenes
    /upload                   # Subida de imágenes
    /cron                     # Job diario
    /seed                     # Seed de datos

/components
  /Navbar
  /Footer
  /ProductCard
  /ProductModal
  /providers

/lib
  mongodb.ts                  # Conexión a MongoDB
  auth.ts                     # Configuración NextAuth
  validations.ts              # Esquemas Yup
  cloudinary.ts               # Configuración Cloudinary
  nodemailer.ts               # Configuración email
  cart-context.tsx            # Context del carrito
  seed.ts                     # Datos de seed

/messages
  es.json                     # Traducciones español
  en.json                     # Traducciones inglés
```

## Scripts

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Tests unitarios
npm test

# Tests E2E
npm run cypress:open
npm run cypress:run
```

## Funcionalidades

### Públicas
- Landing page con banner
- Tienda con filtros y paginación
- Detalle de producto
- Carrito (localStorage)

### Autenticadas
- Login/Registro
- Ver órdenes
- Checkout

### Admin
- Dashboard con estadísticas
- CRUD de productos
- Subida de imágenes a Cloudinary

## Paleta de Colores

- **Principal**: Verde esmeralda (#009879)
- **Hover**: #007a61
- **Light**: #00b894

## Licencia

MIT
