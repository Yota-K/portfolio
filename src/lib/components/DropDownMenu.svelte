<script lang="ts">
  import { afterUpdate } from 'svelte';
  import DarkMode from 'svelte-dark-mode';
  import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
  import FaSun from 'svelte-icons/fa/FaSun.svelte';
  import FaTv from 'svelte-icons/fa/FaTv.svelte';
  import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';
  import type { Theme } from 'svelte-dark-mode/types/DarkMode.svelte';

  let theme: Theme;
  let mounted = false;

  const LOCAL_STORAGE_KEY = 'theme' as const;

  const changeSystemSettings = () => {
    if (window.localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  };

  afterUpdate(() => {
    if (!mounted) mounted = true;
    document.documentElement.className = theme;
  });
</script>

<DarkMode bind:theme />

<Menu class="relative inline-block text-left">
  {#if mounted}
    <MenuButton
      class={`p-2 rounded-full transition-all ${
        theme === 'dark' ? 'hover:bg-white/30' : 'hover:bg-black/10'
      }`}
    >
      {#if theme === 'dark'}
        <div class="w-5 h-5 text-yellow-500">
          <FaMoon />
        </div>
      {/if}
      {#if theme === 'light'}
        <div class="w-5 h-5 text-orange-500">
          <FaSun />
        </div>
      {/if}
    </MenuButton>
  {/if}

  <MenuItems
    class="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-1 py-1"
  >
    <MenuItem let:active>
      <button
        class={`${
          active ? 'bg-gray-100 dark:bg-violet-500 dark:text-white' : 'text-gray-900'
        } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white `}
        on:click={() => {
          theme = 'light';
        }}
      >
        <div class="w-5 h-5 mr-2 text-orange-500">
          <FaSun />
        </div>
        Light
      </button>
    </MenuItem>
    <MenuItem let:active>
      <button
        class={`${
          active ? 'bg-gray-100 dark:bg-violet-500 dark:text-white' : 'text-gray-900'
        } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white `}
        on:click={() => {
          theme = 'dark';
        }}
      >
        <div class="w-5 h-5 mr-2 text-yellow-500">
          <FaMoon />
        </div>
        Dark
      </button>
    </MenuItem>
    <MenuItem let:active>
      <button
        class={`${
          active ? 'bg-gray-100 dark:bg-violet-500 dark:text-white' : 'text-gray-900'
        } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white `}
        on:click={() => changeSystemSettings()}
      >
        <div class="w-5 h-5 mr-2 text-gray-500">
          <FaTv />
        </div>
        System
      </button>
    </MenuItem>
  </MenuItems>
</Menu>
