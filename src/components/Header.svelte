<script>
	import Link from './Link.svelte';
</script>

<div class="container mx-auto py-2 flex justify-between items-center">
	<div class="flex gap-2">
		<Link href="/">Home</Link>
		<Link href="run-record">Add run record</Link>
		<Link href="excercise-record">Add excercise record</Link>
	</div>
	<div class="flex gap-2">
		<Link href="excercise">Add new excercise</Link>
	</div>
</div>
