import React from 'react';
import { Heart, Brain, SearchCheck, MessageCircle } from 'lucide-react';

const ValueItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm mb-4 border border-teal-50">
      {icon}
    </div>
    <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-teal-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Philosophy</h2>
          <p className="text-slate-500 mt-2">大切にしていること</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-teal-900/5 p-8 md:p-12 relative overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 relative z-10">
            <ValueItem 
              icon={<Heart size={28} />}
              title="顧客目線"
              description="ひとりよがりな発信はしません。常に「受け手がどう感じるか」「何に困っているか」を起点に考えます。"
            />
            <ValueItem 
              icon={<SearchCheck size={28} />}
              title="データに基づく判断"
              description="経験則も大切ですが、数字は嘘をつきません。客観的なデータに基づいて、確実な一手を打ちます。"
            />
            <ValueItem 
              icon={<Brain size={28} />}
              title="売るためだけのマーケはNO"
              description="価値のないものを無理やり売ることはしません。本当に良い商品が必要な人に届くお手伝いをします。"
            />
            <ValueItem 
              icon={<MessageCircle size={28} />}
              title="共感と納得"
              description="ストーリーで「共感」を生み、ロジックで「納得」を得る。この両輪が揃って初めて人は動きます。"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;