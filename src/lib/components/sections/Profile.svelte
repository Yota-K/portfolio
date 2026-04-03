<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';
</script>

<SectionRoot heading="Profile">
  <div class="lg:mb-10 mb-6">
    <div class="lg:flex lg:justify-between lg:items-center">
      <div>
        <span class="text-sm text-slate-500 dark:text-slate-400">カルキチ 副島</span>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Karukichi Soejima</h3>
        <p class="text-slate-600 dark:text-slate-300">東京都で活動するウェブ開発者です。</p>
        <p class="text-slate-600 dark:text-slate-300">
          アイコンのキャラクターの名前が「カルキチ」と言います。
        </p>
      </div>
      <div class="lg:text-start lg:m-0 text-center my-4">
        <img
          src="/icon.png"
          alt="Karukichi"
          width={100}
          class="bg-white rounded-full ring-4 ring-cyan-400/30 dark:ring-cyan-400/20 m-auto"
        />
        <h4 class="text-sm mt-2 text-slate-500 dark:text-slate-400">He is Karukichi.</h4>
      </div>
    </div>
  </div>

  <div class="grid gap-6 lg:grid-cols-2">
    <div class="glass-card p-6" use:scrollReveal={{ delay: 0 }}>
      <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">自身の強み</h3>
      <p class="text-slate-600 dark:text-slate-300">ウェブのフロントエンド領域が比較的得意です。</p>
      <p class="text-slate-600 dark:text-slate-300">
        チームの状況に応じて、バックエンドやクラウド(主にAWS)周りの課題を解決することもできます。
      </p>
      <p class="text-slate-600 dark:text-slate-300">
        ウェブアプリケーションだけではなく、ウェブ制作の経験もあるので、ウェブ領域全般でバリューを発揮することができます。
      </p>
    </div>

    <div class="glass-card p-6" use:scrollReveal={{ delay: 100 }}>
      <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">関心のある技術</h3>
      <ul class="list-disc ml-4 text-slate-600 dark:text-slate-300">
        <li>Web Frontend (React)</li>
        <li>Backend (Node.js, Go)</li>
        <li>AWS・Google Cloud等のパブリッククラウド</li>
        <li>IaC (Infrastructure as Code)</li>
        <li>Cloudflare</li>
        <li>Vim (Neovim)</li>
      </ul>
    </div>

    <div class="glass-card p-6 lg:col-span-2" use:scrollReveal={{ delay: 200 }}>
      <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">趣味</h3>
      <p class="text-slate-600 dark:text-slate-300">ファッションが好きです。</p>
      <p class="text-slate-600 dark:text-slate-300">渋谷や表参道に服を買いに行くことが多いです。</p>
      <p class="text-slate-600 dark:text-slate-300">あとは、カフェに行ったりするのも好きです。</p>
    </div>
  </div>
</SectionRoot>
