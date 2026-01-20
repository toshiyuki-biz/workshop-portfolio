import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Profile Image Area - Using placeholder logic but styled nicely */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-slate-100 relative z-10">
                <img 
                  src="https://picsum.photos/400/400?grayscale" 
                  alt="Toshiyuki Konno" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-teal-100 rounded-2xl -z-0"></div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">としゆき <span className="text-lg font-normal text-slate-500 ml-2">(Toshiyuki Konno)</span></h2>
            <p className="text-teal-600 font-medium mb-6">AIショート動画 × SNS集客 / データ分析家</p>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                はじめまして。製薬業界で約20年間、臨床試験のデータ分析やプログラミングに向き合ってきました。
              </p>
              <p>
                根っからの「数字やロジックが好き」な人間ですが、同時に「良いものをどう伝えるか」という課題にもずっと関心がありました。現在はその経験を活かし、生成AIと動画マーケティングを組み合わせた新しい集客支援を行っています。
              </p>
              <p>
                私の強みは、<span className="font-bold text-slate-800 bg-teal-50 px-1">データ分析 × コンテンツ × 動画</span> の掛け合わせです。
                感覚だけに頼らない、再現性のある改善サイクルを回すことで、良い商品やサービスが「本当に必要としている人」に届く世界を作りたいと考えています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;