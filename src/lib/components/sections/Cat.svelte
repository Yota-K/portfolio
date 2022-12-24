<script lang="ts">
	/* 
  document is not defined ReferenceError: document is not definedを防ぐために
  コンポーネントがレンダリングされたときにブラウザでのみ実行されるonMount関数を使用する
  */
	import { onMount } from 'svelte';
	import animationData from '$lib/data/cat.json';
	import SectionRoot from '$lib/components/sections/SectionRoot.svelte';

	// ライブラリ自体に型定義が存在せず、型が不明なのでanyを使用する
	let LottiePlayer: any;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});

	const controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

{#if LottiePlayer}
	<SectionRoot>
		<div class="m-auto w-72 h-72">
			<LottiePlayer
				src={animationData}
				autoplay={true}
				loop={true}
				controls={false}
				renderer="svg"
				background="transparent"
				width={0}
				height={0}
				{controlsLayout}
			/>
		</div>
	</SectionRoot>
{:else}
	<div class="w-72 h-72 lg:my-6 my-4" />
{/if}
