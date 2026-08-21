import React from 'react';
import { Palmtree, Calendar, Calculator, CheckSquare, ShieldCheck, Globe, Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, activeDay, setActiveDay }) {
  return (
    <header className="sticky top-0 z-50 glass-nav px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand logo */}
        <div 
          onClick={() => setActiveTab('itinerary')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Palmtree className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white flex items-center gap-2">
              富國島 4D3N 奢華渡假
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Phú Quốc
              </span>
            </h1>
            <p className="text-xs text-slate-400">出國隨身行程 ‧ 地圖 ‧ 換算算盤</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'itinerary'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            行程時間軸
          </button>

          <button
            onClick={() => setActiveTab('converter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'converter'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            匯率算盤
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'checklist'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            行李清單
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'guide'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            避雷指南
          </button>

          <button
            onClick={() => setActiveTab('deploy')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'deploy'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            發佈至GitHub
          </button>
        </nav>
      </div>
    </header>
  );
}
