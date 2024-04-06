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
<Profile />
<Career />
<Skills />
<Others />
<Contact />
