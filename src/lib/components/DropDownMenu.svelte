<script lang="ts">
  import { onMount } from 'svelte';
  import DarkMode from 'svelte-dark-mode';
  import { Moon, Sun } from 'lucide-svelte';
  import { DropdownMenu } from 'bits-ui';
  import type { Theme } from 'svelte-dark-mode/types/DarkMode.svelte';

  let theme: Theme = $state('light');
  let mounted = $state(false);

  const menuItems = [
    {
      label: 'Light',
      icon: Sun,
      iconColor: 'text-orange-500',
      targetTheme: 'light' as Theme
    },
    {
      label: 'Dark',
      icon: Moon,
      iconColor: 'text-yellow-500',
      targetTheme: 'dark' as Theme
    }
  ] as const;

  onMount(() => {
    mounted = true;
  });

  $effect(() => {
    if (mounted && theme) {
      document.documentElement.className = theme;
    }
  });
</script>

<DarkMode bind:theme />

{#if mounted}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger
      class={`p-2 rounded-full transition-all ${
        theme === 'dark' ? 'hover:bg-white/30' : 'hover:bg-black/10'
      }`}
    >
      {#if theme === 'dark'}
        <Moon class="text-yellow-500" size={20} />
      {:else}
        <Sun class="text-orange-500" size={20} />
      {/if}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      class="absolute right-[-11px] top-[11px] w-36 origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-1 py-1 z-50"
    >
      {#each menuItems as item}
        <DropdownMenu.Item
          class="group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white text-gray-900 hover:bg-gray-100 dark:hover:bg-violet-500 dark:hover:text-white focus:outline-none cursor-pointer"
          onSelect={() => {
            theme = item.targetTheme;
          }}
        >
          {@const IconComponent = item.icon}
          <IconComponent class="mr-2 {item.iconColor}" size={16} />
          <p>{item.label}</p>
        </DropdownMenu.Item>
      {/each}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
{/if}
