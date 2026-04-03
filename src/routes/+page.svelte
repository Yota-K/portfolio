<script lang="ts">
  import { title } from '$lib/config';
  import Cat from '$lib/components/sections/Cat.svelte';
  import Profile from '$lib/components/sections/Profile.svelte';
  import Career from '$lib/components/sections/Career.svelte';
  import Skills from '$lib/components/sections/Skills.svelte';
  import Others from '$lib/components/sections/Others.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="Karukichi Soejima's portfolio site." />
</svelte:head>

<Cat />
<div class="max-w-4xl mx-auto px-6">
  <Profile />
  <Career />
  <Skills />
  <Others />
  <Contact />
</div>
