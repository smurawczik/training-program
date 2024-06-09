<script lang="ts">
	import Button from '../../components/Button.svelte';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;

	let user: string;
	let excercise: string;
	let repetitions: string;
</script>

<svelte:head>
	<title>Training Program - Add new excercise</title>
	<meta name="description" content={'Track running records per user'} />
</svelte:head>

<div class="container mx-auto flex flex-col">
	<h1 class="text-2xl text-center">Add a user run record</h1>
	<div class="pt-4">
		<form method="POST" action="?/record">
			<div class="grid grid-cols-2 gap-4">
				<label class="flex justify-between items-center">
					user:
					<select
						name="user"
						id="user"
						class="p-1.5 border-blue-600 border-2 rounded-md"
						bind:value={user}
					>
						<option value="">none</option>
						{#each data.users as user}
							<option value={user.id}>{user.firstName} {user.lastName}</option>
						{/each}
					</select>
				</label>
				<label class="flex justify-between items-center">
					excercise:
					<select
						name="excercise"
						id="excercise"
						class="p-1.5 border-blue-600 border-2 rounded-md"
						bind:value={excercise}
					>
						<option value="">none</option>
						{#each data.excercises as excercise}
							<option value={excercise.id}>{excercise.name}</option>
						{/each}
					</select>
				</label>
				<label class="flex justify-between items-center">
					repetitions:
					<input
						type="number"
						name="repetitions"
						class="p-1 border-blue-600 border-2 rounded-md"
						bind:value={repetitions}
					/>
				</label>
			</div>
			<div class="flex w-full justify-end pt-4">
				<Button disabled={!user || !excercise || !repetitions}>add excercise record serie</Button>
			</div>
		</form>
		{#if form?.success}
			<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
			<p>Added excercise record: {JSON.stringify(form, null, 2)}</p>
		{/if}
	</div>
</div>
