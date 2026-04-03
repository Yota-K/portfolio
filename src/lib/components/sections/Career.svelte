<script lang="ts">
  import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal';
</script>

<SectionRoot heading="Career">
  <div class="mb-6">
    <p class="text-slate-600 dark:text-slate-300">
      詳しい経歴を知りたい方は
      <a
        class="text-cyan-600 dark:text-cyan-400 hover:underline underline-offset-4"
        href="https://www.notion.so/1c12a367e430809bb589e935cfb58285"
        target="_blank"
        rel="noopener noreferrer"
      >
        こちら
      </a>
      をご確認ください。
    </p>
  </div>

  <div class="relative pl-8">
    <div class="absolute left-[7px] top-2 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

    <div class="relative pb-12" use:scrollReveal={{ delay: 0 }}>
      <div
        class="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 ring-4 ring-slate-50 dark:ring-slate-900"
      />
      <span class="text-sm font-semibold text-cyan-600 dark:text-cyan-400">2017年8月</span>
      <div class="mt-3 glass-card p-5">
        <p class="text-slate-600 dark:text-slate-300">
          大学5年生の時に一般教養科目を取っていなかったことに気づき、単位を取る目的でHTML・CSS基礎という授業を履修。
          夏季集中講座という形で履修したので、学習期間は1ヶ月ちょっとくらいの期間でしたが、この期間でHTML・CSSの基礎を学習しました。
          今思えば、これが自分のウェブのキャリアの始まりでした。
        </p>
      </div>
    </div>

    <div class="relative pb-12" use:scrollReveal={{ delay: 100 }}>
      <div
        class="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 ring-4 ring-slate-50 dark:ring-slate-900"
      />
      <span class="text-sm font-semibold text-cyan-600 dark:text-cyan-400">2018年3月</span>
      <div class="mt-3 glass-card p-5">
        <p class="text-slate-600 dark:text-slate-300">
          都内の私立大学を1年遅れ（留年）で卒業。
          卒業後はウェブ制作会社で簡単なHTML・CSSコーディングをしていました。
          コーディング以外だと、記事案の見出しを考えてライターさんに発注する業務も行っていました。
        </p>
      </div>
    </div>

    <div class="relative pb-12" use:scrollReveal={{ delay: 200 }}>
      <div
        class="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 ring-4 ring-slate-50 dark:ring-slate-900"
      />
      <span class="text-sm font-semibold text-cyan-600 dark:text-cyan-400"
        >2020年4月 〜 2021年4月</span
      >
      <div class="mt-3 glass-card p-5">
        <p class="text-slate-600 dark:text-slate-300">
          ウェブエンジニアとしてのキャリアをスタートしました。
          エンジニア1年目はWordPressを使った自社メディアの構築やLPの制作を主に行っていました。
          サイト制作以外にも、Laravelを使った社内ツールの開発や、GatsbyJSを使ったサイトのフロントエンド・バックエンド（Serverless
          Frameworkを使用したマイクロサービス）の改修も行いました。
        </p>
      </div>
    </div>

    <div class="relative pb-12" use:scrollReveal={{ delay: 300 }}>
      <div
        class="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 ring-4 ring-slate-50 dark:ring-slate-900"
      />
      <span class="text-sm font-semibold text-cyan-600 dark:text-cyan-400"
        >2021年4月 〜 2023年9月</span
      >
      <div class="mt-3 glass-card p-5">
        <p class="text-slate-600 dark:text-slate-300">
          自社SaaSアプリを開発する企業に転職して、アプリケーションのフロントエンド開発を行っていました。
          主にTypeScript、React、Vite、Next.jsを使用していました。
          IaCを用いたインフラの構築経験や、バックエンドの人手が足りなかった時にGoを使ったAPI開発にも携わりました。
        </p>
      </div>
    </div>

    <div class="relative pb-4" use:scrollReveal={{ delay: 400 }}>
      <div
        class="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 ring-4 ring-slate-50 dark:ring-slate-900"
      />
      <span class="text-sm font-semibold text-cyan-600 dark:text-cyan-400">2023年10月 〜</span>
      <div class="mt-3 glass-card p-5">
        <p class="text-slate-600 dark:text-slate-300">
          会社を辞めて、フリーランスエンジニアになりました。主に以下のような開発に携わった経験があります。
        </p>
        <ul class="list-disc ml-4 mt-3 text-slate-600 dark:text-slate-300">
          <li>
            TypeScript・React・Vite・GraphQLを使ったtoBe向けアプリケーションのフロントエンドの実装
          </li>
          <li>NestJSを使ったAPIや認証・認可周りの設計・実装</li>
          <li>GitHub Actionsを使ったCI/CDの構築</li>
          <li>AWS Cognitoを使った認証基盤の構築、DBのmigration基盤の構築</li>
        </ul>
      </div>
    </div>
  </div>
</SectionRoot>
