<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import { All_SKILLS } from '$lib/data/allSkills';
</script>

<SectionRoot heading="Skills">
  <div class="grid gap-6 lg:grid-cols-2">
    {#each All_SKILLS as item, i}
      <div
        class="glass-card p-6"
        class:lg:col-span-2={i === All_SKILLS.length - 1 && All_SKILLS.length % 2 !== 0}
        use:scrollReveal={{ delay: i * 100 }}
      >
        <h3 class="text-lg font-bold mb-4 text-slate-900 dark:text-white">{item.heading}</h3>
        <ul class="flex gap-2.5 flex-wrap">
          {#each item.skills as skill}
            <li>
              <span
                class="inline-block rounded-lg px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors"
              >
                {skill.title}
              </span>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</SectionRoot>
