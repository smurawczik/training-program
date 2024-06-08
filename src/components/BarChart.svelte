<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	let chartData;

	let chartValues = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	let chartCanvas: HTMLCanvasElement;

	onMount(async () => {
		new Chart(chartCanvas, {
			type: 'bubble',
			data: {
				labels: chartLabels,
				datasets: [
					{
						label: 'Revenue',
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: chartValues
					}
				]
			}
		});
	});
</script>

<div style="width: 600px; height: 300px">
	<canvas bind:this={chartCanvas} width="600" height="300" id="myChart"></canvas>
</div>
