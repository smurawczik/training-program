import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id').primaryKey(),
	fullName: text('full_name'),
	phone: text('phone', { length: 256 })
});
