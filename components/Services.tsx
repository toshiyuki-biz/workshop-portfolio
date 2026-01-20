import React from 'react';
import { Smartphone, LineChart, PenTool, BarChart3, TrendingUp, Users, Search } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const AchievementItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 text-slate-700">
    <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
      <TrendingUp size={12} />
    </div>
    <span>{text}</span>
  </li>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What I Can Do</h2>
          <p className="text-slate-500 mt-2">データと動画で、ビジネスを加速させます</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <ServiceCard 
            icon={<Smartphone size={24} />}
            title="AIショート動画集客"
            description="TikTok, Reels, Shorts向けの動画をAIを活用して制作。認知拡大から集客までの導線を設計します。"
          />
          <ServiceCard 
            icon={<PenTool size={24} />}
            title="SNS運用・企画"
            description="ただ投稿するだけでなく、「誰に・何を・どう届けるか」という戦略に基づいたコンテンツ企画を行います。"
          />
          <ServiceCard 
            icon={<BarChart3 size={24} />}
            title="データドリブン改善"
            description="20年の分析経験を活かし、感覚ではなく数字に基づいて施策のPDCAを回し、確実な改善へ導きます。"
          />
          <ServiceCard 
            icon={<Users size={24} />}
            title="感情×論理マーケ設計"
            description="ストーリーで感情を動かし、ロジックで納得させる。購買心理に基づいた全体設計が得意です。"
          />
        </div>

        {/* Achievements Section - A softer "Proven Track Record" */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">実績ハイライト</h3>
              <p className="text-slate-500 text-sm mb-4">（過去の成果の一例です）</p>
              <div className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm text-teal-700 font-bold text-sm border border-teal-100">
                数字で結果を出すこだわり
              </div>
            </div>
            
            <div className="md:w-2/3 w-full">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-xs text-slate-400 mb-1">店舗集客</div>
                  <div className="font-bold text-slate-800">赤字だった教室を<br/>Web集客で<span className="text-teal-600">黒字化</span></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-xs text-slate-400 mb-1">LP改善（CVR）</div>
                  <div className="font-bold text-slate-800">改善施策により<br/>3%から<span className="text-teal-600">7%へ向上</span></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-xs text-slate-400 mb-1">SEO・広告</div>
                  <div className="font-bold text-slate-800">検索・広告の両軸で<br/>安定的な<span className="text-teal-600">集客基盤を構築</span></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                   <p className="text-sm text-slate-400 text-center">...and more</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;