import React from 'react';
import { Compass, Sparkles, Sun, ShieldAlert, Coins } from 'lucide-react';

export default function Hero({ data, onExploreClick }) {
  return (
    <div className="relative overflow-hidden rounded-3xl mb-8 border border-white/10 glass-card">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.heroImage} 
          alt="Phu Quoc Sunset" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-12 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          {data.dateRange}
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl text-cyan-200 font-light mb-6">
          {data.subtitle}
        </p>

        {/* Feature Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">入境特權</div>
              <div className="text-xs font-medium text-slate-200">{data.overview.flightTip}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">心算快捷口訣</div>
              <div className="text-xs font-medium text-amber-300">{data.overview.quickRule}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">氣候指南</div>
              <div className="text-xs font-medium text-slate-200">{data.overview.weather}</div>
            </div>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={onExploreClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all"
        >
          <Compass className="w-5 h-5" />
          開啟行程時間軸
        </button>
      </div>
    </div>
  );
}
