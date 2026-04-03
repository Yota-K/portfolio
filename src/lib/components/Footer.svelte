<script lang="ts">
  import { title } from '$lib/config';
</script>

<footer
  class="py-8 text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
>
  <span class="text-sm text-slate-500 dark:text-slate-400">
    &copy; {new Date().getFullYear()}
    {title}
  </span>
</footer>
