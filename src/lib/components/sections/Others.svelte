<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import { Icon } from 'svelte-icons-pack';
  import { BsTwitterX, BsGithub, BsPen } from 'svelte-icons-pack/dist/bs';
  import { FaBrandsSpeakerDeck } from 'svelte-icons-pack/dist/fa';
  import { SiNotion } from 'svelte-icons-pack/dist/si';
  import type { IconType } from 'svelte-icons-pack';

  const INFOS = [
    {
      name: '@karukichi_yah',
      componentName: BsTwitterX,
      url: 'https://twitter.com/karukichi_yah'
    },
    {
      name: 'GitHub',
      componentName: BsGithub,
      url: 'https://github.com/Yota-K'
    },
    {
      name: 'Speaker Deck',
      componentName: FaBrandsSpeakerDeck,
      url: 'https://speakerdeck.com/soejima0124'
    },
    {
      name: 'Blog',
      componentName: BsPen,
      url: 'https://karukichi-blog.netlify.app/'
    },
    {
      name: 'Resume',
      componentName: SiNotion,
      url: 'https://www.notion.so/1c12a367e430809bb589e935cfb58285'
    }
  ] as const satisfies { name: string; componentName: IconType; url: string }[];
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
            <Icon src={info.componentName} />
          </span>
          <span>{info.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</SectionRoot>
