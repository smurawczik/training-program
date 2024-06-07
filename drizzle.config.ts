import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'sqlite', // "postgresql" | "mysql"
	schema: './src/lib/server/schema.ts',
	dbCredentials: {
		url: 'training.db'
	}
});
