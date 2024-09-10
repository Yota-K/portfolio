export type SkillInfo = {
  title: string;
  content: string;
};

// Skillsというセクションで使用するスキルごとの情報をまとめた配列
export const All_SKILLS: {
  heading: string;
  skills: SkillInfo[];
}[] = [
  {
    heading: 'Languages',
    skills: [
      {
        title: 'HTML・CSS',
        content: `
<p>HTMLに関しては読みやすさと用途に合った適切なタグを使用したコーディングを心がけています。</p>
<br />
<p>CSSに関しては保守と運用のしやすさを考慮したCSS設計を取り入れて、コーディングをすることができます。</p>
<br />
<p>最近は積極的には導入しませんが、CSSメタ言語（SCSS）の実務経験もあります。</p>
        `
      },
      {
        title: 'JavaScript',
        content: `
<p>基本的な部分は抑えています。</p>
<p>最近はTypeScriptを使うことがほとんどなので、ピュアなJSを使用する機会はほとんどありません。</p>
        `
      },
      {
        title: 'TypeScript',
        content: `
<p>メインで使用しているプログラミング言語です。</p>
<p>フロントエンド・バックエンド、ウェブ制作・ウェブ開発問わずよく使用します。</p>
        `
      },
      {
        title: 'PHP',
        content: `
<p>基本的な部分は抑えています。</p>
<p>フレームワークだと、Laravelの実務経験があります。</p>
<br />
<p>WordPressを実務で使用していた時はよく書いていましたが、最近はほとんど使用する機会がありません。</p>
        `
      },
      {
        title: 'Golang',
        content: `
<p>実務でAPIを開発した経験があります。</p>
<p>個人的に好きな言語なので、実務経験をもっと積みたいと密かに思っています。</p>
        `
      },
      {
        title: 'Lua',
        content: `
<p>実務では使いませんが、OSSにコントリビュートした経験があります。</p>
        `
      }
    ]
  },
  {
    heading: 'Technologies',
    skills: [
      {
        title: 'React',
        content: `
<p>ウェブ開発、ウェブ制作どちらの実務経験もあります。</p>
<br />
<p>SPAを構築するときはViteをSGやSSR、SEOを意識する必要がある時はNext.jsを使用することが多いです。</p>
<br />
<p>JestやVitestを用いた単体テストの実装経験や、storybookのplay functionを活用したインタラクションテストの実装経験もあります。</p>
        `
      },
      {
        title: 'Vue.js',
        content: `
<p>実務ではVue3系のComposition APIを用いたSPAの構築経験があります。</p>
<p>2系の実務経験はありませんが、読めはします。</p>
        `
      },
      {
        title: 'Node.js',
        content: `
<p>APIの開発実装や、Serverless Frameworkを使用したマイクロサービスの改修経験があります。</p>
<br />
<p>プレゼンテーション層、ビジネスロジック層、データアクセス層を取り入れた、いわゆる3層アーキテクチャに慣れ親しんでいます。</p>
        `
      },
      {
        title: 'SQL',
        content: `
<p>実務では、MySQLとPostgreSQLを使用した経験があります。</p>
<p>複雑なクエリを書くのは苦手ですが、実務で困らない程度には書けます。</p>
        `
      },
      {
        title: 'GraphQL',
        content: `
<p>フロントエンドでの実務経験があります。</p>
<br />
<p>Fragment Colocationを活用したコンポーネント設計を行った経験があります。</p>
<br />
<p>サーバ側は趣味レベルで書いたことがある程度です。</p>
        `
      },
      {
        title: 'Laravel',
        content: `
<p>実務で社内ツールの開発経験を行った経験があります。</p>
<p>ジョブとキューを使ったバッチ処理の実装経験もあります。</p>
        `
      },
      {
        title: 'WordPress',
        content: `
<p>エンジニアになる前から触っていたので経験年数は長いです。</p>
<p>実務ではテーマの開発や、管理画面のカスタマイズ、プラグイン開発の実務経験があります。</p>
<br />
<p>個人の開発では、Gutenbergのカスタムブロックを開発した経験もあります。</p>
        `
      },
      {
        title: 'Docker',
        content: `
<p>WordPress、LaravelなどのLAMP環境や、React、Vue.jsなどを用いたフロントエンド、AWS CDKの実行環境などの環境構築を行なった経験があります。</p>
<br />
<p>ECS上で動作するコンテナイメージの作成を行った経験もあります</p>
        `
      },
      {
        title: 'AWS',
        content: `
<p>AWS Certified Solutions Architect - Associate(SAA-C03)を持っています。</p>
<br />
<p>実務ではIAM・S3・CloudFront・Cognito・Lambda・API Gateway・Aurora・DynamoDB・Amplify・WAFなどを使用・構築した経験があります。</p>
<br />
<p>CloudFront・S3のシンプルな環境ではありますが、IaCを使ったインフラ構築の経験もあります。</p>
        `
      },
      {
        title: 'Figma',
        content: `
<p>簡単なデザインのモックやコンポーネントレベルなら作ることができます。</p>
        `
      }
    ]
  },
  {
    heading: 'Editor',
    skills: [
      {
        title: 'Vim・Neovim',
        content: `
<p>プログラミングを学習し始めた2019年頃からずっとVimを使って開発を行っています。</p>
<br />
<p>2021年の冬ごろに、より先進的な機能を求めてNeovimに移行しました。</p>
        `
      }
    ]
  }
];
