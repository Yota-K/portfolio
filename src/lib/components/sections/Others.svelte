<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';
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
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
    {#each INFOS as info, i}
      <a
        class="glass-card p-5 flex flex-col items-center gap-3 text-center group hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300"
        href={info.url}
        target="_blank"
        rel="noopener noreferrer"
        use:scrollReveal={{ delay: i * 80 }}
      >
        <span
          class="text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 transition-colors"
        >
          <svelte:component this={info.componentName} size={24} />
        </span>
        <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{info.name}</span>
      </a>
    {/each}
  </div>
</SectionRoot>
