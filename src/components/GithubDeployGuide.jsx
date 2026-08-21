import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, Globe, ExternalLink, Sparkles, Rocket } from 'lucide-react';

export default function GithubDeployGuide({ deployData }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <div className="glass-card border border-rose-500/30 rounded-3xl p-6 md:p-8 text-center space-y-3 relative overflow-hidden glow-rose">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -z-10" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold">
          <Rocket className="w-3.5 h-3.5" />
          一鍵發佈至 GitHub Server
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          把行程上傳到 GitHub Pages 做免費隨身網址
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          跟著下面 4 個簡單步驟，只要幾分鐘就能擁有專屬線上網址，出國用手機隨時開啟！
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        {deployData.steps.map((s, idx) => (
          <div key={idx} className="glass-card border border-white/10 rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center justify-center font-extrabold text-sm shrink-0">
                {s.step}
              </div>
              <h3 className="font-bold text-base text-white">
                {s.title}
              </h3>
            </div>

            <div className="relative">
              <pre className="bg-slate-950 p-4 rounded-2xl border border-white/10 font-mono text-xs text-rose-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {s.cmd}
              </pre>
              <button
                onClick={() => handleCopy(s.cmd, idx)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-xs flex items-center gap-1"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">已複製</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製指令</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Banner */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-cyan-500/30 space-y-2">
        <h4 className="font-bold text-sm text-cyan-300 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          發佈成功後的專屬網址格式：
        </h4>
        <p className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl border border-white/10">
          https://<span className="text-cyan-400">YOUR_GITHUB_USERNAME</span>.github.io/<span className="text-rose-400">phuquoc-trip-2026</span>/
        </p>
        <p className="text-xs text-slate-400 pt-1">
          💡 打開手機 Safari / Chrome 瀏覽器輸入該網址，還可以點選「加入主畫面 (Add to Home Screen)」，變身手機 App 方便出國使用！
        </p>
      </div>
    </div>
  );
}
