<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<div class="flex flex-col h-screen bg-red-200">
  <Header />
  <main class="flex-1 bg-amber-50 pt-20 dark:bg-gray-900 dark:text-white">
    <div class="mx-auto w-10/12 lg:w-6/12 ">
      <slot />
    </div>
  </main>
  <Footer />
</div>
