<script lang="ts">
	import BarChart from '../components/BarChart.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Running</title>
	<meta name="description" content={'Running records per user'} />
</svelte:head>

{#each data.users as user}
	{user.firstName}
	{user.lastName}
	{#each user.runRecords as record}
		<span>running record {user.id}-{record.id}:</span>
		<pre>
		{JSON.stringify(record, null, 2)}
	</pre>
	{/each}
{/each}

<BarChart />
