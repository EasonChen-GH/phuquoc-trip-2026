import React from 'react';
import * as Icons from 'lucide-react';

export default function SurvivalGuide({ guideData }) {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.ShieldCheck;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <div className="glass-card border border-white/10 rounded-3xl p-6 md:p-8 text-center space-y-3 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold">
          <Icons.ShieldCheck className="w-3.5 h-3.5" />
          出國隨身避雷錦囊
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          富國島自由行 Survival Guide
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          包含免簽入境特權、Grab 叫車技巧、換錢與小費行情，幫你安心無憂出國度假！
        </p>
      </div>

      {/* Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guideData.map((item, idx) => (
          <div
            key={idx}
            className="glass-card border border-white/10 rounded-3xl p-6 hover:border-purple-400/40 transition-all duration-300 space-y-4 group hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      {/* Emergency Phone & Quick Reference Card */}
      <div className="glass-card border border-rose-500/30 rounded-3xl p-6 bg-gradient-to-r from-rose-950/30 to-purple-950/30 space-y-3">
        <h4 className="text-sm font-bold text-rose-300 flex items-center gap-2">
          <Icons.PhoneCall className="w-4 h-4" />
          緊急聯絡與救援資訊 (Emergency Contacts)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
            <span className="text-slate-400 block mb-1">駐越南代表處緊急電話</span>
            <span className="font-mono font-bold text-rose-400">+84-913-219-986</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
            <span className="text-slate-400 block mb-1">越南報警電話</span>
            <span className="font-mono font-bold text-white">113</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
            <span className="text-slate-400 block mb-1">越南救護車</span>
            <span className="font-mono font-bold text-white">115</span>
          </div>
        </div>
      </div>
    </div>
  );
}
