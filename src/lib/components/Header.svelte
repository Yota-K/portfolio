<script lang="ts">
	import DropDownMenu from '$lib/components/DropDownMenu.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<header
	class="py-2 backdrop-blur bg-white/60 dark:bg-black/60 shadow-lg border-b fixed w-full z-40"
>
	<div class="flex justify-between items-center mx-auto w-11/12 lg:w-7/12">
		<h1 class="inline-block lg:w-60 py-2">
			<Logo />
		</h1>
		<DropDownMenu />
	</div>
</header>
