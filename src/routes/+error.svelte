<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div>
	{#if $page.status === 404}
		<h1 class="text-3xl font-bold mb-3">Page not found</h1>
	{:else}
		<h1 class="text-3xl font-bold mb-3">Something went wrong</h1>
	{/if}
	<a class="text-blue-600" href="/">Go home</a>
</div>
