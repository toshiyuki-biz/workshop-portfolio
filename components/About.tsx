import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Profile Image Area - Keeping the monochrome cafe workspace aesthetic */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-slate-100 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop&grayscale=true" 
                  alt="Monochrome cafe workspace" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-slate-200 rounded-2xl -z-0"></div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">としゆき <span className="text-lg font-normal text-slate-500 ml-2">(Toshiyuki)</span></h2>
            <p className="text-teal-600 font-medium mb-6">AIショート動画 × SNS集客 / データ分析家</p>
            
            <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base">
              <p className="font-bold text-slate-800 text-lg">はじめまして、としゆきです。</p>
              
              <p>
                製薬業界で約20年間、データの分析やプログラミングの世界に身を置いてきました。 長年「数字」と向き合ってきた私ですが、一番大切だと感じているのは、その数字の裏側にある「どうすれば人の心に届くか？」というストーリーです。
              </p>
              
              <p>
                現在は、生成AIを活用したショート動画（アニメや実写合成）を通じて、商品やサービスの魅力を「伝わる形」にするお手伝いをしています。
              </p>
              
              <p>
                「分析」は、魔法の杖ではありません。 私は、分析を「すぐに結果を出すための道具」ではなく、顧客の心に響くストーリーを組み立てるための「確かな土台」だと考えています。
              </p>
              
              <p>
                「良いものを作っているのに、なかなか魅力が伝わらない」 そんな悩みに対し、ロジックという裏付けを持ちつつも、泥臭く検証と改善を繰り返していく。ときには試行錯誤や失敗も隠さず共有しながら、伴走者として「本当に必要としている人」に届くルートを一緒に探していきたい。
              </p>
              
              <p>
                AIという最新のツールを使いながらも、一番大切にしたいのは、血の通ったコミュニケーションと、納得感のあるコンテンツ作りです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;