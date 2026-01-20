import React from 'react';
import { Video, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl -z-10 opacity-70"></div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
          AI Short Video × SNS Marketing
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          良い商品を<br className="md:hidden" />
          <span className="text-teal-600">ストーリー</span>で正しく届ける<br />
          動画マーケティング
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          製薬業界での分析経験と最新の生成AI活用により、<br className="hidden md:inline" />
          再現性のあるSNS集客と改善を実現します。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
          >
            話をきいてみる
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors"
          >
            プロフィールを見る
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-slate-400">
           {/* Visual cues for profile types */}
           <div className="flex flex-col items-center gap-2">
             <div className="p-3 bg-white rounded-2xl shadow-sm text-teal-600">
               <Video size={24} />
             </div>
             <span className="text-xs font-medium">Video Marketing</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
               <TrendingUp size={24} />
             </div>
             <span className="text-xs font-medium">Data Analysis</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;