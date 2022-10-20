export type SkillInfo = {
  title: string;
  yearsOfExperience: string;
  content: string;
};

// Skillsというセクションで使用するスキルごとの情報をまとめた配列
export const allSkills: {
  heading: string;
  skills: SkillInfo[];
}[] = [
  {
    heading: 'Languages',
    skills: [
      {
        title: 'HTML・CSS',
        yearsOfExperience: '経験年数: 4年',
        content: `
<p>基本的な部分は抑えています。</p>
<br />
<p>HTMLに関しては、読みやすさと意味にあった適切なタグを使用したコーディングを心がけています。</p>
<br />
<p>CSSに関しては、保守と運用のしやすさを考慮したCSS設計を取り入れて、コーディングをすることができます。</p>
<p>最近は、Reactを使って開発をすることが多いので、Scoped CSSを実現できるCSS in JS系のライブラリをよく使います。</p>
<br />
<p>積極的には導入しませんが、CSSメタ言語（SCSS）の実務経験もあります。</p>
        `,
      },
      {
        title: 'JavaScript',
        yearsOfExperience: '経験年数: 3年',
        content: `
<p>基本的な部分は抑えています。</p>
<p>最近はTypeScriptを使うことがほとんどなので、ピュアなJSを使用する機会はほぼありません。</p>
        `,
      },
      {
        title: 'TypeScript',
        yearsOfExperience: '経験年数: 2年',
        content: `
<p>最も使用頻度の高い言語です。</p>
<p>フロントエンド・バックエンド開発問わずよく使用します。</p>
        `,
      },
      {
        title: 'PHP',
        yearsOfExperience: '経験年数: 3年',
        content: `
<p>基本的な部分は抑えています。</p>
<p>フレームワークだと、Laravelの実務経験があります。</p>
<br />
<p>WordPressを業務で使っていた時はよく書いていましたが、最近はほとんど使う機会がありません。</p>
        `,
      },
      {
        title: 'Golang',
        yearsOfExperience: '経験年数: 2〜3ヶ月',
        content: `
<p>実務でAPIを開発した経験はありますが、詳しくはありません。</p>
<p>実務で使用した時はググりまくって、なんとか乗り切りました。</p>
        `,
      },
    ],
  },
  {
    heading: 'Technologies',
    skills: [
      {
        title: 'React',
        yearsOfExperience: '経験年数: 3年',
        content: `
<p>アプリケーション開発、ウェブ制作どちらの実務経験もあります。</p>
<br />
<p>SPAを構築するときは、ViteをSGやSSRが必要な時はNext.jsを使用する機会が多いです。</p>
<br />
<p>JestやVitestを用いた単体テストの実装経験もあります。</p>
        `,
      },
      {
        title: 'Vue.js',
        yearsOfExperience: '経験年数: 1年',
        content: `
<p>Vue3系のComposition APIを用いたSPAの構築経験があります。</p>
<p>2系の実務経験はありませんが、読めはします。</p>
        `,
      },
      {
        title: 'Node.js',
        yearsOfExperience: '経験年数: 2年',
        content: `
<p>Serverless Frameworkを使用したマイクロサービスの改修経験があります。</p>
<p>AWS SESを使ったメール送信を行う処理の実装経験もあります。</p>
<p>個人の開発では、NestJSやPrismaを使用した経験があります。</p>
        `,
      },
      {
        title: 'Laravel',
        yearsOfExperience: '経験年数: 1年',
        content: `
<p>実務で社内ツールの開発経験を行った経験があります。</p>
<p>ジョブとキューを使ったバッチ処理の実装経験もあります。</p>
        `,
      },
      {
        title: 'WordPress',
        yearsOfExperience: '経験年数: 4年',
        content: `
<p>テーマの制作や、管理画面のカスタマイズ、プラグイン開発の実務経験があります。</p>
<br />
<p>個人の開発では、Gutenbergのカスタムブロックを開発した経験もあります。</p>
        `,
      },
      {
        title: 'MySQL',
        yearsOfExperience: '経験年数: 2年',
        content: `
<p>複雑なクエリを書くのは苦手ですが、実務で困らない程度には書けます。</p>
        `,
      },
      {
        title: 'Docker',
        yearsOfExperience: '経験年数: 2年',
        content: `
<p>LAMP環境くらいならサクッと構築できます。</p>
        `,
      },
      {
        title: 'AWS',
        yearsOfExperience: '経験年数: 2年',
        content: `
<p>基礎の基礎レベルは抑えています。</p>
<p>S3・CloudFront・Lambda・API Gateway・Amplify・WAFあたりは実務で構築・設定を行った経験があります。</p>
<p>あまり得意ではありません。</p>
        `,
      },
    ],
  },
  {
    heading: 'Editor',
    skills: [
      {
        title: 'Neovim',
        yearsOfExperience: '経験年数: 3年',
        content: `
<p>プログラミングを学習し始めた2019年頃からずっとVimを使って開発を行っています。</p>
<br />
<p>2021年の冬ごろに、より先進的な機能を求めてNeovimに移行しました。</p>
        `,
      },
    ],
  },
];
