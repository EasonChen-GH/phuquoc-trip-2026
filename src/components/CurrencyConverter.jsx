import React, { useState } from 'react';
import { Calculator, ArrowRightLeft, Sparkles, RefreshCw, Zap } from 'lucide-react';

export default function CurrencyConverter() {
  // 1 VND ≈ 0.0013 TWD (or ~770 VND = 1 TWD)
  const RATE_VND_TO_TWD = 0.0013;
  const RATE_TWD_TO_VND = 1 / RATE_VND_TO_TWD;

  const [vndInput, setVndInput] = useState('500000');
  const [twdInput, setTwdInput] = useState('650');

  const handleVndChange = (val) => {
    setVndInput(val);
    const num = parseFloat(val) || 0;
    setTwdInput(Math.round(num * RATE_VND_TO_TWD).toString());
  };

  const handleTwdChange = (val) => {
    setTwdInput(val);
    const num = parseFloat(val) || 0;
    setVndInput(Math.round(num * RATE_TWD_TO_VND).toString());
  };

  const presets = [
    { label: "☕ 越式滴漏咖啡", vnd: 40000, desc: "約 NT$52" },
    { label: "🍜 越式河粉 / 米粉", vnd: 75000, desc: "約 NT$98" },
    { label: "🍧 陽東夜市現捏炒冰", vnd: 35000, desc: "約 NT$45" },
    { label: "🦞 夜市奶油碳烤龍蝦", vnd: 600000, desc: "約 NT$780" },
    { label: "🚗 Grab 陽東 -> 日落小鎮", vnd: 250000, desc: "約 NT$325" },
    { label: "🚠 香島纜車+樂園門票", vnd: 700000, desc: "約 NT$910" },
    { label: "💆‍♀️ 60分鐘全身草本精油Spa", vnd: 450000, desc: "約 NT$585" }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Title Header */}
      <div className="glass-card border border-white/10 rounded-3xl p-6 md:p-8 text-center space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
          <Calculator className="w-3.5 h-3.5" />
          出國隨身即時算盤
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          越南盾 ↔ 新台幣 匯率算盤
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          出國血拼、逛夜市、吃海鮮必備！即時雙向計算，附帶超實用快捷心算法則。
        </p>
      </div>

      {/* Main Converter Inputs */}
      <div className="glass-card border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl glow-amber space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* VND Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>越南盾 (VND ₫)</span>
              <span className="text-amber-400 font-mono">10,000 ₫ ≈ NT$13</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={vndInput}
                onChange={(e) => handleVndChange(e.target.value)}
                placeholder="輸入越南盾金額"
                className="w-full bg-slate-900/90 border border-white/15 rounded-2xl px-4 py-4 text-2xl font-mono font-bold text-amber-300 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
              />
              <span className="absolute right-4 top-4 text-slate-500 font-bold">₫</span>
            </div>
            <div className="text-xs text-slate-400 pl-1 font-mono">
              心算口訣：{vndInput ? `(${vndInput} 去 3 個 0) × 1.3 ≈ NT$ ${Math.round((parseFloat(vndInput)||0)/1000 * 1.3)}` : '去 3 個 0 × 1.3'}
            </div>
          </div>

          {/* TWD Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>新台幣 (TWD NT$)</span>
              <span className="text-cyan-400 font-mono">NT$100 ≈ 77,000 ₫</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={twdInput}
                onChange={(e) => handleTwdChange(e.target.value)}
                placeholder="輸入新台幣金額"
                className="w-full bg-slate-900/90 border border-white/15 rounded-2xl px-4 py-4 text-2xl font-mono font-bold text-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <span className="absolute right-4 top-4 text-slate-500 font-bold">NT$</span>
            </div>
            <div className="text-xs text-slate-400 pl-1 font-mono">
              心算口訣：{twdInput ? `(NT$ ${twdInput} ÷ 1.3) × 1000 ≈ ${Math.round((parseFloat(twdInput)||0)/1.3 * 1000).toLocaleString()} ₫` : '台幣 ÷ 1.3 × 1000'}
            </div>
          </div>
        </div>

        {/* Quick Rule Banner */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-200 leading-relaxed">
            <span className="font-bold text-amber-300">💡 3秒速查心算法則：</span>
            看到越南盾標價時，先把價格<span className="text-white font-bold underline">砍掉最後3個零</span>，然後<span className="text-white font-bold underline">乘以 1.3</span>，就是大概的台幣金額！
            （例：500,000 ₫ ➔ 500 × 1.3 = NT$ 650）
          </div>
        </div>
      </div>

      {/* Preset Chips */}
      <div className="glass-card border border-white/10 rounded-3xl p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          富國島常見消費快速預設（點擊帶入算盤）
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {presets.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleVndChange(item.vnd.toString())}
              className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-400/50 hover:bg-slate-800/80 text-left transition-all group flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.label}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  {item.vnd.toLocaleString()} ₫
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 shrink-0">
                {item.desc}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
