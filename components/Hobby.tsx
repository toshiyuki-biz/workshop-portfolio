import React from 'react';

const Hobby: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-2">
          <span className="text-teal-500">☕️</span> Off Time
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <div className="flex-1 bg-slate-50 rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-300">
            <div className="text-4xl mb-4">⚽️</div>
            <h3 className="font-bold text-slate-800 mb-2">サッカー観戦</h3>
            <p className="text-sm text-slate-600">
              週末の楽しみです。戦術を分析しながら見るのも好きですが、スタジアムの熱気を感じるのが一番のリフレッシュです。
            </p>
          </div>
          <div className="flex-1 bg-slate-50 rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-300">
            <div className="text-4xl mb-4">🎱</div>
            <h3 className="font-bold text-slate-800 mb-2">ビリヤード</h3>
            <p className="text-sm text-slate-600">
              たまにやります。配置を見て次の手を考えるところは、意外と仕事の頭の使い方に似ているかもしれません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobby;