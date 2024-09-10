<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import Icon from '@iconify/svelte';

  const INFOS = [
    {
      name: '@karukichi_yah',
      componentName: 'prime:twitter',
      url: 'https://twitter.com/karukichi_yah'
    },
    {
      name: 'GitHub',
      componentName: 'bi:github',
      url: 'https://github.com/Yota-K'
    },
    {
      name: 'Speaker Deck',
      componentName: 'simple-icons:speakerdeck',
      url: 'https://speakerdeck.com/soejima0124'
    },
    {
      name: 'Blog',
      componentName: 'solar:pen-bold',
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
            <Icon icon={info.componentName} />
          </span>
          <span>{info.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</SectionRoot>
