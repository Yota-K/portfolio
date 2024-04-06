<script lang="ts">
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    Transition,
    TransitionChild
  } from '@rgossiaux/svelte-headlessui';
  import Button from '$lib/components/Button.svelte';

  export let title: string;
  export let subTitle: string;
  export let content: string;
  export let isOpen: boolean;
  export let closeModal: () => boolean;
</script>

<!-- This example uses Tailwind's transition classes -->
<!-- Use the `Transition` component at the root level -->
<Transition appear show={isOpen}>
  <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" on:close={closeModal}>
    <!-- Use one `TransitionChild` to apply one transition to the overlay... -->
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <DialogOverlay
        class="fixed inset-0 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-25"
      />
    </TransitionChild>

    <!-- ...and another `TransitionChild` to apply a separate transition to the contents -->
    <div class="flex min-h-full items-center justify-center p-4 text-center">
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
        >
          <DialogTitle as="h2" class="text-lg font-medium leading-6 text-gray-900"
            >{title}</DialogTitle
          >
          <div class="mt-2">
            <DialogDescription as="h3">{subTitle}</DialogDescription>
            <div class="text-sm text-gray-500">{@html content}</div>
          </div>

          <div class="mt-4">
            <Button
              class="border border-blue-400 text-blue-900 hover:border-blue-900 hover:bg-blue-50"
              on:click={closeModal}
            >
              閉じる
            </Button>
          </div>
        </div>
      </TransitionChild>
    </div>
  </Dialog>
</Transition>
