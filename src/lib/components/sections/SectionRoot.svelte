<script lang="ts">
	export let heading = '';
</script>

<section class="mt-8 mb-12">
	{#if heading !== ''}
		<h2
			class="relative lg:mb-6 mb-4 text-3xl font-bold before:bg-blue-700 before:absolute before:-bottom-1 before:left-0 before:w-10 before:h-1"
		>
			{heading}
		</h2>
	{/if}
	<slot />
</section>
