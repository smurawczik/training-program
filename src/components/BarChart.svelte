<script lang="ts">
	import Chart, { type ChartConfiguration } from 'chart.js/auto';
	import { onMount } from 'svelte';

	let chartValues = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	let chartCanvas: HTMLCanvasElement;

	onMount(async () => {
		new Chart(chartCanvas, {
			type: 'bubble',
			data: chartData
		});
	});

	export let chartData: ChartConfiguration['data'];
</script>

<div style="height: 300px" class="w-full">
	<canvas bind:this={chartCanvas} class="w-full mx-auto" height="300" id="myChart"></canvas>
</div>
