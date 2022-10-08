import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SectionRoot from './SectionRoot';

const Profile: React.FC = () => {
  return (
    <SectionRoot heading="Profile">
      <div className="lg:mb-10 mb-6">
        <h3 className="font-bold text-xl">Karukichi Soejima（カルキチ副島）</h3>
        <div className="lg:flex lg:justify-between items-center">
          <div>
            <p>東京都で活動するウェブ開発者です。</p>
            <p>アイコンのキャラクターの名前が「カルキチ」って言います。</p>
            <p>彼は、カンガルーとキウィのハーフです。</p>
          </div>
          <div className="lg:text-start lg:m-0 text-center my-4">
            <StaticImage
              src="../../images/icon.png"
              alt="Karukichi"
              width={100}
              className="rounded-full border-gray-500 border"
            />
            <h4 className="text-sm mt-2">He is Karukichi.</h4>
          </div>
        </div>
      </div>
      <div className="lg:mb-10 mb-6">
        <h3 className="font-bold">得意な領域</h3>
        <p>ウェブのフロントエンド領域が比較的得意です。</p>
        <p>アプリケーション・ウェブサイト両方の設計・構築が可能です。</p>
      </div>
      <div className="lg:mb-10 mb-6">
        <h3 className="font-bold">好きな技術</h3>
        <p>特に、TypeScript・React・Jamstack・CSS・サーバレス・Vim (Neovim)あたりが好きです。</p>
        <p>最近はデザインにも興味が出てきました。</p>
      </div>
      <div>
        <h3 className="font-bold">趣味</h3>
        <p>ファッションが好きです。</p>
        <p>渋谷や表参道に服を買いに行くことが多いです。</p>
        <p>あとは、カフェに行ったりするのも好きです。</p>
      </div>
    </SectionRoot>
  );
};

export default Profile;
