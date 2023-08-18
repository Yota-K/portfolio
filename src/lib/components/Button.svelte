<script lang="ts">
	// `class` はJavaScriptの予約語なので、
	// 型キャストを使って `class` プロパティを作る
	let className: string;
	export { className as class };

	export let fontSize: string | null = null;
	export let fontWeight: string | null = null;
</script>

<button
	on:click
	class={`rounded-md px-4 py-2 ${fontSize === null ? 'text-sm' : fontSize} ${
		fontWeight === null ? 'font-medium' : fontWeight
	} transition-all duration-300 ${className}`}
>
	<slot />
</button>
