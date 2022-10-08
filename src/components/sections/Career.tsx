import React from 'react';
import SectionRoot from './SectionRoot';

const Career: React.FC = () => {
  return (
    <SectionRoot heading="Career">
      <div className="flex content-between">
        <h3 className="w-1/4 pb-2 pr-4 font-bold relative after:absolute after:top-0 after:-right-[11px] after:w-5 after:h-5 after:bg-blue-500 after:rounded-full">
          2018年 3月
        </h3>
        <div className="border-l-2 px-6 pb-6 w-[calc(100%_-_40px)]">
          <p className="lg:mb-10 mb-6">
            都内の私立大学を1年遅れで卒業。（留年）
            <br />
            卒業後はウェブ制作会社で簡単なHTML・CSSコーディングをしていました。
            <br />
            コーディング以外にも記事案の執筆も行っていました。
          </p>
        </div>
      </div>

      <div className="flex content-between">
        <h3 className="w-1/4 pt-2 pr-4 font-bold relative after:absolute after:top-2 after:-right-[11px] after:w-5 after:h-5 after:bg-blue-500 after:rounded-full">
          2020年
        </h3>
        <div className="border-l-2 px-6 pt-2 pb-6 w-[calc(100%_-_40px)]">
          <p className="lg:mb-10 mb-6">
            ウェブエンジニア1年目はWordPressを使ったサイト構築を主に行っていました。
            <br />
            WordPressを用いたサイト制作と並行して、Laravelを使った社内ツールの開発や、GatsbyJSを使ったサイトのフロントエンド・バックエンドの改修も行いました。
          </p>
        </div>
      </div>

      <div className="flex content-between">
        <h3 className="w-1/4 pt-2 pr-4 font-bold relative after:absolute after:top-2 after:-right-[11px] after:w-5 after:h-5 after:bg-blue-500 after:rounded-full">
          2021年 〜 現在
        </h3>
        <div className="border-l-2 px-6 pt-2 pb-6 w-[calc(100%_-_40px)]">
          <p>
            自社SaaSアプリを開発する企業に転職して、アプリケーションのフロントエンド開発を行っています。主にTypeScript、React、NextJSを使用しています。
            <br />
            バックエンドの人手が足りなかった時に一瞬Golangを使ったAPI開発にも携わりました。
          </p>
        </div>
      </div>
    </SectionRoot>
  );
};

export default Career;
