import { relations, sql } from 'drizzle-orm';
import { integer, numeric, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	firstName: text('first_name'),
	lastName: text('last_name'),
	birthDate: text('birth_date')
});

export const usersRelations = relations(users, ({ many }) => ({
	runRecords: many(runRecord),
	excerciseRecords: many(excerciseRecord)
}));

export const runRecord = sqliteTable('runRecord', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	userId: integer('user_id')
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
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

export const excercises = sqliteTable('excercises', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull()
});

export const excerciseRecord = sqliteTable('excerciseRecord', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	userId: integer('user_id')
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
	excerciseId: integer('excercise_id')
		.references(() => excercises.id, { onDelete: 'cascade' })
		.notNull(),
	repetitions: text('repetitions').notNull(),
	date: text('date').$defaultFn(() => new Date().toISOString())
});

export const excercisesRelations = relations(excercises, ({ many }) => ({
	excerciseRecords: many(excerciseRecord)
}));

export const excerciseRecordRelations = relations(excerciseRecord, ({ one }) => ({
	user: one(users, {
		fields: [excerciseRecord.userId],
		references: [users.id]
	}),
	excercise: one(excercises, {
		fields: [excerciseRecord.excerciseId],
		references: [excercises.id]
	})
}));
