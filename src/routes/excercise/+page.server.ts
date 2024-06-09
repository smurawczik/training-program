import { db } from '$lib/server/db';
import { excercises, runRecord } from '$lib/server/schema';
import type { InsertExcercise, InsertRunRecord } from '$lib/server/types.js';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const excercises = await db.query.excercises.findMany();
	return { excercises };
};

export const actions = {
	record: async function ({ request }) {
		const data = await request.formData();

		const excerciseName = data.get('excerciseName') ?? null;

		if (!excerciseName) return fail(400, { error: 'missing fields' });

		try {
			const newRecordObject: InsertExcercise = {
				name: excerciseName.toString()
			};

			const newExcercise = (await db.insert(excercises).values(newRecordObject).returning()).at(0);

			return { success: true, newExcercise };
		} catch (e) {
			return fail(400, { e });
		}
	}
	// other actions...
} satisfies Actions;
