<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  export let heading = '';
</script>

<section class="py-16 lg:py-24" use:scrollReveal>
  {#if heading !== ''}
    <h2
      class="relative lg:mb-10 mb-6 text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
    >
      {heading}
      <span
        class="absolute -bottom-2 left-0 w-12 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
      ></span>
    </h2>
  {/if}
  <slot />
</section>
