import type { excerciseRecord, excercises, runRecord } from './schema';

export type InsertRunRecord = typeof runRecord.$inferInsert;

export type InsertExcercise = typeof excercises.$inferInsert;

export type InsertExcerciseRecord = typeof excerciseRecord.$inferInsert;
