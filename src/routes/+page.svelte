<script lang="ts">
	import BarChart from '../components/BarChart.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	export let user = data.users[0];
</script>

<svelte:head>
	<title>Running</title>
	<meta name="description" content={'Running records per user'} />
</svelte:head>

<BarChart
	chartData={{
		labels: Array.from({ length: user.runRecords.length ?? 0 }).fill('(km) - (minutes)'),
		datasets: [
			{
				label: '(n)km in (min)time',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: (user ?? { runRecords: [] }).runRecords.map((runRecord) => ({
					x: parseFloat(runRecord.kmRun ?? '0'),
					y: parseFloat(runRecord.timeTaken ?? '0'),
					r: 5
				}))
			}
		]
	}}
/>
