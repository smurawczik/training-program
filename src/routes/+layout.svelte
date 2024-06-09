<script lang="ts">
	import { goto } from '$app/navigation';
	import '../app.css';
	import Header from '../components/Header.svelte';

	function goTo(e: KeyboardEvent) {
		// switch (e.key) {
		// 	case '1':
		// 		return goto('/');
		// 	case '2':
		// 		return goto('/run-record');
		// 	case '3':
		// 		return goto('/excercise-record');
		// 	default:
		// 		break;
		// }
	}
</script>

<svelte:window on:keypress={goTo} />

<div class="h-full">
	<Header />
	<slot />
</div>
