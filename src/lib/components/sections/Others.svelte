<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaPen from 'svelte-icons/fa/FaPen.svelte';
  import FaSpeakerDeck from 'svelte-icons/fa/FaSpeakerDeck.svelte';

  const INFOS = [
    {
      name: '@karukichi_yah',
      componentName: FaTwitter,
      url: 'https://twitter.com/karukichi_yah'
    },
    {
      name: 'GitHub',
      componentName: FaGithub,
      url: 'https://github.com/Yota-K'
    },
    {
      name: 'Speaker Deck',
      componentName: FaSpeakerDeck,
      url: 'https://speakerdeck.com/soejima0124'
    },
    {
      name: 'Blog',
      componentName: FaPen,
      url: 'https://karukichi-blog.netlify.app/'
    }
  ] as const;
</script>

<SectionRoot heading="Others">
  <ul>
    {#each INFOS as info}
      <li class="items-center text-blue-600 last-of-type:pb-0">
        <a
          class="inline-block p-2 cursor-pointer font-bold hover:bg-blue-50 hover:rounded-lg"
          href={info.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="inline-block align-middle pr-1 h-4">
            <svelte:component this={info.componentName} />
          </span>
          <span>{info.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</SectionRoot>
