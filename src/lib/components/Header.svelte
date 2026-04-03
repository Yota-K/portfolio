<script lang="ts">
  import DropDownMenu from '$lib/components/DropDownMenu.svelte';
  import Logo from '$lib/components/Logo.svelte';
</script>

<header
  class="px-4 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 shadow-sm border-b border-slate-200/50 dark:border-slate-700/50 fixed top-0 left-0 w-full z-50"
>
  <div class="flex justify-between items-center max-w-4xl mx-auto px-2 h-16">
    <h1 class="inline-block lg:w-60">
      <Logo />
    </h1>
    <DropDownMenu />
  </div>
</header>
