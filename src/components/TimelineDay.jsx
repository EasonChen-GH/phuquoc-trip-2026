import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export default function TimelineDay({ dayData, allDays, selectedDayIndex, setSelectedDayIndex }) {
  const [filterCategory, setFilterCategory] = useState('ALL');

  const categories = ['ALL', ...new Set(dayData.activities.map(a => a.category))];

  const filteredActivities = filterCategory === 'ALL'
    ? dayData.activities
    : dayData.activities.filter(a => a.category === filterCategory);

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.MapPin;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <div className="space-y-6">
      {/* Day selector tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {allDays.map((d, index) => {
          const isActive = index === selectedDayIndex;
          return (
            <button
              key={d.day}
              onClick={() => setSelectedDayIndex(index)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'glass-card border-cyan-400/60 shadow-xl glow-cyan scale-[1.02]'
                  : 'bg-slate-900/40 border-white/5 hover:bg-slate-900/80 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {d.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">{d.dateLabel}</span>
              </div>
              <h3 className="font-bold text-sm text-slate-100 line-clamp-1">{d.title.split('‧')[1] || d.title}</h3>
            </button>
          );
        })}
      </div>

      {/* Day Overview Banner */}
      <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                {dayData.tag} ‧ {dayData.dateLabel}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              {dayData.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {dayData.summary}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 shrink-0 bg-slate-950/60 p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  filterCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat === 'ALL' ? '全部行程' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Timeline */}
      <div className="relative pl-4 md:pl-8 space-y-8 before:absolute before:left-3 md:before:left-7 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-pink-500">
        {filteredActivities.map((act, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[23px] md:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all z-10">
              {getIcon(act.icon)}
            </div>

            {/* Card Content */}
            <div className="glass-card border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group-hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="md:col-span-4 relative min-h-[180px] md:min-h-full overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 md:bg-gradient-to-r md:from-transparent md:to-slate-950/90" />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-mono font-bold text-cyan-300">
                    ⏰ {act.time}
                  </div>
                </div>

                {/* Info Section */}
                <div className="md:col-span-8 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {act.category}
                      </span>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                      >
                        <Icons.MapPin className="w-3.5 h-3.5" />
                        {act.location}
                        <Icons.ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {act.title}
                    </h4>

                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {act.description}
                    </p>
                  </div>

                  {act.tips && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed flex items-start gap-2">
                      <Icons.Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>{act.tips}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
