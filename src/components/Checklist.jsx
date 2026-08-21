import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckSquare, Sparkles, RefreshCw, CheckCircle2, Circle } from 'lucide-react';

export default function Checklist({ categoriesData }) {
  // Load initial checked states from localStorage if available
  const [itemsState, setItemsState] = useState(() => {
    const saved = localStorage.getItem('phuquoc_checklist_items');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    // Default checked states from categoriesData
    const defaultState = {};
    categoriesData.forEach(cat => {
      cat.items.forEach(item => {
        defaultState[item.id] = item.checked;
      });
    });
    return defaultState;
  });

  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    localStorage.setItem('phuquoc_checklist_items', JSON.stringify(itemsState));
  }, [itemsState]);

  const toggleItem = (id) => {
    setItemsState(prev => {
      const next = { ...prev, [id]: !prev[id] };
      
      // Check if 100% complete
      const totalCount = Object.keys(next).length;
      const checkedCount = Object.values(next).filter(Boolean).length;
      if (checkedCount === totalCount && totalCount > 0) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
      return next;
    });
  };

  const resetChecklist = () => {
    const reset = {};
    categoriesData.forEach(cat => {
      cat.items.forEach(item => {
        reset[item.id] = false;
      });
    });
    setItemsState(reset);
  };

  // Calculations
  const allItems = categoriesData.flatMap(cat => cat.items);
  const totalCount = allItems.length;
  const checkedCount = allItems.filter(item => itemsState[item.id]).length;
  const progressPercent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  const filteredCategories = selectedCategory === 'ALL'
    ? categoriesData
    : categoriesData.filter(cat => cat.category.includes(selectedCategory));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Title & Progress Header */}
      <div className="glass-card border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-2">
              <CheckSquare className="w-3.5 h-3.5" />
              行李與出國清單 (自動存檔)
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              富國島渡假隨身檢查表
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              免簽機票、eSIM、Grab綁卡、渡假洋裝、防曬乳與個人藥品一項不漏！
            </p>
          </div>

          <button
            onClick={resetChecklist}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-white/30 transition-all shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            重置清單
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400">準備進度</span>
            <span className="text-emerald-400 font-mono text-sm">{checkedCount} / {totalCount} ({progressPercent}%)</span>
          </div>
          <div className="w-full h-3 bg-slate-900/90 rounded-full overflow-hidden border border-white/10 p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedCategory === 'ALL'
              ? 'bg-emerald-500 text-slate-950 shadow-lg glow-emerald'
              : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:text-white'
          }`}
        >
          全部類別 ({totalCount})
        </button>
        {categoriesData.map(cat => {
          const catNameShort = cat.category.split(' ')[1] || cat.category;
          return (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(catNameShort)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === catNameShort
                  ? 'bg-emerald-500 text-slate-950 shadow-lg glow-emerald'
                  : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Items List */}
      <div className="space-y-6">
        {filteredCategories.map(cat => (
          <div key={cat.category} className="glass-card border border-white/10 rounded-3xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 border-b border-white/10 pb-3">
              {cat.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.items.map(item => {
                const isChecked = !!itemsState[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                      isChecked
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                        : 'bg-slate-900/60 border-white/5 hover:border-white/20 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 text-emerald-400">
                        {isChecked ? (
                          <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-slate-950" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                      <span className={`text-sm font-medium ${isChecked ? 'line-through opacity-70' : ''}`}>
                        {item.name}
                      </span>
                    </div>

                    {item.required && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 shrink-0">
                        必備
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
