<script lang="ts">
	// `class` はJavaScriptの予約語なので、
	// 型キャストを使って `class` プロパティを作る
	let className: string;
	export { className as class };
</script>

<button
	on:click
	class={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${className}`}
>
	<slot />
</button>
