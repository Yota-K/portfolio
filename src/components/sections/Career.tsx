import React from 'react';
import SectionRoot from './SectionRoot';

const Career: React.FC = () => {
  return (
    <SectionRoot heading="Career">
      <p className="lg:mb-10 mb-6">2018年: 都内の私立大学を1年遅れで卒業。（留年）</p>
      <p className="lg:mb-10 mb-6">
        2018年 〜 2019年:
        ウェブ制作会社で簡単なHTML・CSSコーディングをしていました。コーディング以外にも記事案の執筆も行っていました。
      </p>
      <p className="lg:mb-10 mb-6">
        2020年 〜 2021年:
        ウェブエンジニア1年目はWordPressを使ったサイト構築を主に行っていました。WordPressを用いたサイト制作と並行して、Laravelを使った社内ツールの開発や、GatsbyJSを使ったサイトのフロントエンド・バックエンドの改修も行いました。
      </p>
      <p>
        2022年 〜:
        自社SaaSアプリを開発する企業に転職して、アプリケーションのフロントエンド開発を行っています。主にTypeScript、React、NextJSを使用しています。
        <br />
        バックエンドの人手が足りなかった時に一瞬Golangを使ったAPI開発にも携わりました。
      </p>
    </SectionRoot>
  );
};

export default Career;
