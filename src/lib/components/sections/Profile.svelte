<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
</script>

<SectionRoot heading="Profile">
  <div class="lg:mb-10 mb-6">
    <div class="mb-2">
      <span class="text-sm">カルキチ 副島</span>
      <h3 class="text-xl font-bold">Karukichi Soejima</h3>
    </div>
    <div class="lg:flex lg:justify-between">
      <div>
        <p>東京都で活動するウェブ開発者です。</p>
        <p>アイコンのキャラクターの名前が「カルキチ」と言います。</p>
      </div>
      <div class="lg:text-start lg:m-0 text-center my-4">
        <img
          src="/icon.png"
          alt="Karukichi"
          width={100}
          class="bg-white rounded-full border-gray-500 border m-auto"
        />
        <h4 class="text-sm mt-2">He is Karukichi.</h4>
      </div>
    </div>
  </div>
  <div class="lg:mb-10 mb-6">
    <h3 class="text-xl font-bold mb-2">自身の強み</h3>
    <p>ウェブのフロントエンド領域が比較的得意です。</p>
    <p>チームの状況に応じて、バックエンドやクラウド(主にAWS)周りの課題を解決することもできます。</p>
    <p>
      ウェブアプリケーションだけではなく、ウェブ制作の経験もあるので、ウェブ領域全般でバリューを発揮することができます。
    </p>
  </div>
  <div class="lg:mb-10 mb-6">
    <h3 class="text-xl font-bold mb-2">関心のある技術</h3>
    <ul class="list-disc ml-4">
      <li>Web Frontend (React)</li>
      <li>Backend (Node.js, Go)</li>
      <li>AWS・Google Cloud等のパブリッククラウド</li>
      <li>IaC (Infrastructure as Code)</li>
      <li>Cloudflare</li>
      <li>Vim (Neovim)</li>
    </ul>
  </div>
  <div>
    <h3 class="text-xl font-bold mb-2">趣味</h3>
    <p>ファッションが好きです。</p>
    <p>渋谷や表参道に服を買いに行くことが多いです。</p>
    <p>あとは、カフェに行ったりするのも好きです。</p>
  </div>
</SectionRoot>
