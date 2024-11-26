import { buildConfig } from "payload";
import { postgresAdapter } from '@payloadcms/db-postgres';
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import sharp from "sharp";

const db = process.env.NODE_ENV === 'development' ? postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URI,
  },
}) : vercelPostgresAdapter()

export default buildConfig({
  db,
  sharp,
  secret: process.env.PAYLOAD_SECRET || '',
})