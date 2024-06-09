<script lang="ts">
	export let disabled: boolean = false;
</script>

<button
	class="py-2 px-4 rounded-md bg-blue-600 text-white capitalize disabled:bg-gray-500 disabled:cursor-not-allowed"
	{disabled}
>
	<slot />
</button>

<style>
	button:focus-visible {
		color: theme('colors.blue.200');
	}
</style>
