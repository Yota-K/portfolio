<script lang="ts">
  import { onMount } from 'svelte';
  import animationData from '$lib/data/cat.json';

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

<section class="relative h-lvh flex flex-col items-center justify-center overflow-hidden">
  <div
    class="absolute inset-0 bg-gradient-to-br from-cyan-50 via-slate-50 to-violet-50 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950"
  ></div>

  <div
    class="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-400/10 rounded-full blur-3xl animate-float"
  ></div>
  <div
    class="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-400/20 dark:bg-violet-400/10 rounded-full blur-3xl animate-float"
    style="animation-delay: -3s;"
  ></div>

  <div class="relative z-10 text-center">
    {#if LottiePlayer}
      <div class="m-auto w-72 h-72 lg:w-80 lg:h-80">
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
    {:else}
      <div class="w-72 h-72 lg:w-80 lg:h-80"></div>
    {/if}

    <h2
      class="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
    >
      Karukichi Soejima
    </h2>
    <p class="mt-3 text-lg lg:text-xl text-slate-500 dark:text-slate-400 font-medium">
      Web Developer
    </p>
  </div>

  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <div
      class="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-500 flex justify-center pt-2"
    >
      <div class="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
    </div>
  </div>
</section>
