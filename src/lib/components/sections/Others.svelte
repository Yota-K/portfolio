<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import { X, Github, Presentation, Pen, FileText } from 'lucide-svelte';

  const INFOS = [
    {
      name: '@karukichi_yah',
      componentName: X,
      url: 'https://twitter.com/karukichi_yah'
    },
    {
      name: 'GitHub',
      componentName: Github,
      url: 'https://github.com/Yota-K'
    },
    {
      name: 'Speaker Deck',
      componentName: Presentation,
      url: 'https://speakerdeck.com/soejima0124'
    },
    {
      name: 'Blog',
      componentName: Pen,
      url: 'https://karukichi-blog.netlify.app/'
    },
    {
      name: 'Resume',
      componentName: FileText,
      url: 'https://www.notion.so/1c12a367e430809bb589e935cfb58285'
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
          <span class="inline-block align-middle pr-1">
            <svelte:component this={info.componentName} size={16} />
          </span>
          <span>{info.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</SectionRoot>
