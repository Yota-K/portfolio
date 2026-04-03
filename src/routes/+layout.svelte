<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1 bg-slate-50 dark:bg-slate-900 dark:text-slate-100 text-slate-800">
    <slot />
  </main>
  <Footer />
</div>
