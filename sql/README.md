# Scripts SQL

Este directorio puede contener scripts SQL adicionales para la base de datos.

## Nota

El proyecto usa Prisma ORM para gestionar el esquema de la base de datos. Las migraciones se encuentran en:
- `api/prisma/migrations/`

Para crear la base de datos manualmente (si no usas Prisma migrations):

```sql
CREATE DATABASE bananamilk;
```

Luego ejecuta las migraciones de Prisma:
```bash
cd api
npm run prisma:migrate
```


