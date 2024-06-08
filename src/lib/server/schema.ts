import { relations, sql } from 'drizzle-orm';
import { integer, numeric, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	firstName: text('first_name'),
	lastName: text('last_name'),
	birthDate: text('birth_date')
});

export const usersRelations = relations(users, ({ many }) => ({
	runRecord: many(runRecord)
}));

export const runRecord = sqliteTable('runRecord', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	userId: integer('user_id').references(() => users.id),
	kmRun: text('km_run'),
	timeTaken: text('time_taken'),
	date: text('date').$defaultFn(() => new Date().toISOString())
});

export const runRecordRelations = relations(runRecord, ({ one }) => ({
	user: one(users, {
		fields: [runRecord.userId],
		references: [users.id]
	})
}));
