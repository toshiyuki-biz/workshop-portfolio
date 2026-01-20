import React from 'react';
import { Briefcase, Activity, Database, Zap } from 'lucide-react';

const CareerItem: React.FC<{
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}> = ({ year, title, description, icon, isLast }) => (
  <div className="flex gap-4 sm:gap-6">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-teal-100 flex items-center justify-center text-teal-600 shadow-sm shrink-0 z-10">
        {icon}
      </div>
      {!isLast && <div className="w-0.5 h-full bg-slate-200 my-2"></div>}
    </div>
    <div className="pb-10 pt-1 sm:pt-2">
      <span className="text-sm font-bold text-teal-600 tracking-wider uppercase mb-1 block">{year}</span>
      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const Career: React.FC = () => {
  return (
    <section id="career" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Career</h2>
          <p className="text-slate-500 mt-2">これまでの歩み（ざっくりと）</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <CareerItem 
            year="Early Career"
            title="自動車メーカー"
            description="製造現場の厳しさと面白さを経験。技術教育にも携わり、「人に教える・伝える」ことの基礎をここで学びました。"
            icon={<Briefcase size={20} />}
          />
          <CareerItem 
            year="Next Step"
            title="IT業界へ転身"
            description="システム開発エンジニアとして従事し、チームリーダーも経験。論理的思考力とプロジェクト推進力を磨きました。"
            icon={<Zap size={20} />}
          />
          <CareerItem 
            year="20+ Years"
            title="製薬業界でのデータ分析・事業開発"
            description="約20年間、新薬開発（臨床試験）を中心にデータ分析・統計解析・事業開発などを担当。人の命に関わるデータの正確性と、そこから導き出されるロジックの重要性を徹底的に叩き込まれました。自己研鑽を通じてWEBマーケティングの基礎も習得。"
            icon={<Database size={20} />}
          />
          <CareerItem 
            year="Current"
            title="Webマーケター × AI動画クリエイター"
            description="自己研鑽や会社員時代にWebマーケティング（SEO、広告、LP改善など）を開始。現在は生成AIを活用したショートアニメ（フェイススワップを使った実写動画も対応可能）動画集客に注力し、SNS集客（運用代行）とマーケティングの両軸で支援を行っています。"
            icon={<Activity size={20} />}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Career;