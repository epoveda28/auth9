// src/database/data-source.ts
import { config as loadEnv } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { enviroments } from '../enviroments';

// 1. Carga el .env correcto según NODE_ENV (igual que ConfigModule.forRoot en app.module.ts)
const envFile =
  enviroments[(process.env.NODE_ENV as keyof typeof enviroments) ?? 'dev'] || '.env';

loadEnv({ path: envFile });

// 2. Opciones comunes, sin importar el entorno
const commonOptions = {
  entities: [User],
  migrations: ['src/database/migrations/*.{ts,js}'],
  synchronize: false,
};

// 3. Si existe DATABASE_URL (Neon / Render) -> se usa esa conexión completa
//    Si no, se arma con variables sueltas (Postgres local / Docker)
const dataSourceOptions: DataSourceOptions = process.env.DATABASE_URL
  ? {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Obligatorio para la conexión SSL de Neon
      },
      ...commonOptions,
    }
  : {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      ...commonOptions,
    };

export default new DataSource(dataSourceOptions);