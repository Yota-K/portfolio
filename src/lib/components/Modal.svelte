<script lang="ts">
  import { Dialog } from 'bits-ui';
  import Button from '$lib/components/Button.svelte';

  export let title: string;
  export let content: string;
  export let isOpen: boolean;
  export let closeModal: () => boolean;
</script>

<Dialog.Root bind:open={isOpen} onOpenChange={(open) => !open && closeModal}>
  <Dialog.Portal>
    <Dialog.Overlay
      class="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-25"
    />
    <Dialog.Content
      class="data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6 overflow-hidden text-left align-middle bg-white shadow-xl rounded-2xl outline-none"
    >
      <Dialog.Title class="text-lg font-medium leading-6 text-gray-900">{title}</Dialog.Title>
      <Dialog.Description class="mt-2">
        <div class="text-sm text-gray-500">{@html content}</div>
      </Dialog.Description>

      <div class="mt-4">
        <Button
          class="border border-blue-400 text-blue-900 hover:border-blue-900 hover:bg-blue-50"
          on:click={closeModal}
        >
          閉じる
        </Button>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
