import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Crear usuario admin de prueba
  const adminEmail = 'admin@bananamilk.mx';
  const adminPassword = 'Admin123!';

  // Verificar si ya existe
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log('✅ Usuario admin ya existe, actualizando password...');
    const passwordHash = await argon2.hash(adminPassword);
    await prisma.user.update({
      where: { email: adminEmail },
      data: { passwordHash },
    });
    console.log('✅ Password actualizado');
  } else {
    console.log('📝 Creando usuario admin...');
    const passwordHash = await argon2.hash(adminPassword);
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        role: 'ADMIN',
      },
    });
    console.log('✅ Usuario admin creado');
  }

  console.log('\n📋 Credenciales de prueba:');
  console.log(`   Email: ${adminEmail}`);
  console.log(`   Password: ${adminPassword}`);
  console.log('\n✅ Seed completado!');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


