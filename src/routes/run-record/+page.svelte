<script lang="ts">
	import Button from '../../components/Button.svelte';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;

	let user: string;
	let kmRun: string;
	let timeTaken: string;
</script>

<svelte:head>
	<title>Training Program - Run Record</title>
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
					km run:
					<input
						type="number"
						name="km_run"
						step="0.5"
						class="p-1 border-blue-600 border-2 rounded-md"
						bind:value={kmRun}
					/>
				</label>
				<label class="flex justify-between items-center">
					time taken:
					<input
						type="text"
						name="time_taken"
						class="p-1 border-blue-600 border-2 rounded-md"
						bind:value={timeTaken}
					/>
				</label>
			</div>
			<div class="flex w-full justify-end pt-4">
				<Button disabled={!user || !kmRun || !timeTaken}>add record</Button>
			</div>
		</form>
		{#if form?.success}
			<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
			<p>Added run record: {JSON.stringify(form, null, 2)}</p>
		{/if}
	</div>
</div>
