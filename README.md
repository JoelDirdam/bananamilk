# Banana Milk MX

Sistema de administración para Banana Milk MX con autenticación JWT y RBAC.

## 📁 Estructura del Proyecto

```
bananamilkmx/
├── api/          # Backend NestJS + Prisma + PostgreSQL
├── frontend/     # Frontend React + Vite
└── sql/          # Scripts SQL (opcional)
```

## 🚀 Inicio Rápido

### Backend (API)

1. **Navegar a la carpeta api:**
```bash
cd api
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

4. **Configurar base de datos PostgreSQL:**
   - Opción 1: Docker
   ```bash
   docker run --name bananamilk-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=bananamilk -p 5432:5432 -d postgres:14
   ```
   - Opción 2: PostgreSQL local

5. **Ejecutar migraciones y seed:**
```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

6. **Iniciar servidor:**
```bash
npm run dev
```

La API estará en `http://localhost:3000`
Swagger UI en `http://localhost:3000/api/docs`

### Frontend

1. **Navegar a la carpeta frontend:**
```bash
cd frontend
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
```bash
# Crear .env.local con:
VITE_API_URL=http://localhost:3000
```

4. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

El frontend estará en `http://localhost:5173`

## 🔐 Credenciales de Prueba

Después de ejecutar el seed del backend:

- **Email:** `admin@bananamilk.mx`
- **Password:** `Admin123!`

## 📚 Documentación

- **Backend:** Ver `api/README.md` para documentación completa de la API
- **Swagger:** `http://localhost:3000/api/docs` (cuando el backend esté corriendo)

## 🛠️ Tecnologías

### Backend
- NestJS
- Prisma ORM
- PostgreSQL
- JWT (Access + Refresh Tokens)
- Argon2 (hashing de passwords)
- Swagger

### Frontend
- React
- Vite
- React Router
- Tailwind CSS

## 🔒 Seguridad

- Passwords hasheados con Argon2
- JWT con rotación de refresh tokens
- Refresh tokens guardados como hash en DB
- Rate limiting en endpoints de auth
- CORS configurado
- Helmet para protección de headers

## 📝 Notas

- La Home actual (`/`) sigue funcionando normalmente
- Las rutas `/login` y `/admin` están separadas del layout principal
- El sistema de autenticación está completamente funcional con refresh automático de tokens


