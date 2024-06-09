<script lang="ts">
	import Button from '../../components/Button.svelte';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;

	let excerciseNames = data.excercises.map((excercise) => excercise.name);

	let excerciseName: string;
</script>

<svelte:head>
	<title>Training Program - Add new excercise</title>
	<meta name="description" content={'Track running records per user'} />
</svelte:head>

<div class="container mx-auto flex flex-col">
	<h1 class="text-2xl text-center">Add a new excercise</h1>
	<div class="flex items-center gap-2 my-2">
		<span>existing excercises: </span>
		{#each data.excercises as excercise}
			<div class="py-1 px-2 bg-purple-900 text-white rounded-md">{excercise.name}</div>
		{/each}
	</div>
	<div class="pt-4">
		<form method="POST" action="?/record">
			<label class="flex justify-between items-center">
				excercise name:
				<input
					type="text"
					name="excerciseName"
					class="p-1 border-blue-600 border-2 rounded-md"
					bind:value={excerciseName}
					tabindex="0"
				/>
			</label>
			<div class="flex w-full justify-end pt-4">
				<Button disabled={!excerciseName || excerciseNames.includes(excerciseName)}
					>add excercise</Button
				>
			</div>
		</form>
		{#if form?.success}
			<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
			<p>Added excercise: {JSON.stringify(form, null, 2)}</p>
		{/if}
	</div>
</div>
