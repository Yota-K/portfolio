<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import { All_SKILLS } from '$lib/data/allSkills';
</script>

<SectionRoot heading="Skills">
  {#each All_SKILLS as item}
    <div class="mb-4">
      <h3 class="text-xl font-bold mb-2">{item.heading}</h3>
      <ul class="flex gap-4 flex-wrap">
        {#each item.skills as skill}
          <li>
            <span class="rounded-md px-4 py-2 text-sm font-medium bg-blue-100 text-blue-900">
              {skill.title}
            </span>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</SectionRoot>
