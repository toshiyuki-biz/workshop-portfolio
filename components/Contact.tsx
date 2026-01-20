import React from 'react';
import { Mail, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-slate-300 mb-12 max-w-xl mx-auto">
          少しでも興味を持っていただけたら、お気軽にSNSでメッセージをください。<br />
          「動画のことについて聞きたい」「データ分析の話がしたい」など、カジュアルな話題で大歓迎です。
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="#" 
            className="flex items-center gap-3 bg-slate-800 hover:bg-blue-400 hover:text-white px-6 py-4 rounded-xl transition-all duration-300 group"
          >
            <Twitter className="w-6 h-6 text-slate-400 group-hover:text-white" />
            <span className="font-medium">X (Twitter)</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 bg-slate-800 hover:bg-blue-700 hover:text-white px-6 py-4 rounded-xl transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-white" />
            <span className="font-medium">LinkedIn</span>
          </a>

           {/* Placeholder for other contacts if needed */}
           <button 
             disabled
             className="flex items-center gap-3 bg-slate-800/50 text-slate-500 px-6 py-4 rounded-xl cursor-not-allowed"
           >
             <Mail className="w-6 h-6" />
             <span className="font-medium">Email (準備中)</span>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;