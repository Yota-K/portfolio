<script lang="ts">
	import DropDownMenu from '$lib/components/DropDownMenu.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<header
	class="px-4 backdrop-blur bg-white/60 dark:bg-black/60 shadow-lg border-b fixed top-0 left-0 w-full z-10"
>
	<div class="flex justify-between items-center mx-auto w-11/12 lg:w-7/12 h-14">
		<h1 class="inline-block lg:w-60">
			<Logo />
		</h1>
		<DropDownMenu />
	</div>
</header>
