# API - Banana Milk MX

API backend construida con NestJS, Prisma y PostgreSQL para la administración de Banana Milk MX.

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- PostgreSQL 14+ (o Docker)
- npm o yarn

### Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar variables de entorno:**
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bananamilk?schema=public"
JWT_ACCESS_SECRET="tu-secret-access-key-super-seguro"
JWT_REFRESH_SECRET="tu-secret-refresh-key-super-seguro"
JWT_ACCESS_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
PORT=3000
CORS_ORIGIN="http://localhost:5173"
```

3. **Configurar base de datos:**

Si usas Docker:
```bash
docker run --name bananamilk-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=bananamilk -p 5432:5432 -d postgres:14
```

O crea una base de datos PostgreSQL localmente.

4. **Ejecutar migraciones:**
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. **Ejecutar seed (crear usuario admin de prueba):**
```bash
npm run prisma:seed
```

Esto creará un usuario admin con las siguientes credenciales:
- **Email:** `admin@bananamilk.mx`
- **Password:** `Admin123!`

6. **Iniciar servidor en desarrollo:**
```bash
npm run dev
```

La API estará disponible en `http://localhost:3000`
Swagger UI estará disponible en `http://localhost:3000/api/docs`

## 📚 Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo (watch)
- `npm run build` - Compila el proyecto
- `npm run start` - Inicia el servidor compilado
- `npm run start:prod` - Inicia en modo producción
- `npm run prisma:generate` - Genera el cliente de Prisma
- `npm run prisma:migrate` - Ejecuta migraciones
- `npm run prisma:seed` - Ejecuta el seed
- `npm run prisma:studio` - Abre Prisma Studio (GUI para la DB)

## 🔐 Endpoints de Autenticación

### POST /auth/login
Iniciar sesión con email y password.

**Request:**
```json
{
  "email": "admin@bananamilk.mx",
  "password": "Admin123!"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "admin@bananamilk.mx",
    "role": "ADMIN"
  }
}
```

### POST /auth/refresh
Refrescar el access token usando el refresh token.

**Request:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```json
{
  "accessToken": "nuevo-access-token",
  "refreshToken": "nuevo-refresh-token"
}
```

### POST /auth/logout
Cerrar sesión (requiere autenticación).

**Headers:**
```
Authorization: Bearer <accessToken>
```

## 👤 Endpoints de Usuario

### GET /users/me
Obtener información del usuario actual (requiere autenticación).

**Headers:**
```
Authorization: Bearer <accessToken>
```

**Response:**
```json
{
  "id": "uuid",
  "email": "admin@bananamilk.mx",
  "role": "ADMIN",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 🔒 Endpoints de Admin

### GET /admin/health-secure
Health check protegido solo para usuarios con rol ADMIN.

**Headers:**
```
Authorization: Bearer <accessToken>
```

## 🏥 Health Check

### GET /health
Endpoint público para verificar el estado de la API.

**Response:**
```json
{
  "status": "ok"
}
```

## 🛡️ Seguridad

- **Passwords:** Hasheados con Argon2
- **JWT:** Access tokens con expiración corta (15 min), refresh tokens con expiración larga (7 días)
- **Refresh Tokens:** Guardados como hash en la base de datos
- **Rotación de Refresh Tokens:** Se genera un nuevo refresh token en cada refresh
- **Rate Limiting:** 10 requests por minuto en endpoints de autenticación
- **CORS:** Configurado para permitir solo el origen del frontend
- **Helmet:** Protección de headers HTTP

## 📖 Documentación

La documentación completa de la API está disponible en Swagger UI cuando el servidor está corriendo:
- URL: `http://localhost:3000/api/docs`

## 🗄️ Base de Datos

El schema de Prisma está en `prisma/schema.prisma`. Para ver/modificar datos:
```bash
npm run prisma:studio
```

## 🔧 Troubleshooting

### Error: "Cannot find module '@prisma/client'"
Ejecuta: `npm run prisma:generate`

### Error de conexión a la base de datos
Verifica que PostgreSQL esté corriendo y que `DATABASE_URL` en `.env` sea correcta.

### Error: "JWT secret not found"
Asegúrate de tener `JWT_ACCESS_SECRET` y `JWT_REFRESH_SECRET` en tu archivo `.env`.


