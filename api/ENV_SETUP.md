# Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz de `/api` con el siguiente contenido:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bananamilk?schema=public"

# JWT
JWT_ACCESS_SECRET="your-super-secret-access-key-change-in-production"
JWT_REFRESH_SECRET="your-super-secret-refresh-key-change-in-production"
JWT_ACCESS_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"

# Server
PORT=3000
CORS_ORIGIN="http://localhost:5173"

# Environment
NODE_ENV="development"
```

## Explicación de Variables

- **DATABASE_URL**: URL de conexión a PostgreSQL. Ajusta usuario, password, host y nombre de base de datos según tu configuración.
- **JWT_ACCESS_SECRET**: Secreto para firmar access tokens. **IMPORTANTE:** Cambia esto en producción.
- **JWT_REFRESH_SECRET**: Secreto para firmar refresh tokens. **IMPORTANTE:** Cambia esto en producción.
- **JWT_ACCESS_EXPIRES_IN**: Tiempo de expiración del access token (formato: `15m`, `1h`, etc.)
- **JWT_REFRESH_EXPIRES_IN**: Tiempo de expiración del refresh token (formato: `7d`, `30d`, etc.)
- **PORT**: Puerto donde correrá la API (default: 3000)
- **CORS_ORIGIN**: Origen permitido para CORS (debe coincidir con la URL del frontend)
- **NODE_ENV**: Entorno de ejecución (`development` o `production`)

## Generar Secrets Seguros

Para generar secrets seguros en producción, puedes usar:

```bash
# En Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

O usar herramientas online como: https://randomkeygen.com/


