import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TimelineDay from './components/TimelineDay';
import CurrencyConverter from './components/CurrencyConverter';
import Checklist from './components/Checklist';
import SurvivalGuide from './components/SurvivalGuide';
import GithubDeployGuide from './components/GithubDeployGuide';
import Footer from './components/Footer';

import { PHU_QUOC_TRIP } from './data/phuquocData';

export default function App() {
  const [activeTab, setActiveTab] = useState('itinerary'); // itinerary | converter | checklist | guide | deploy
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1d] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        activeDay={selectedDayIndex}
        setActiveDay={setSelectedDayIndex}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6">
        {/* Banner Hero */}
        <Hero 
          data={PHU_QUOC_TRIP} 
          onExploreClick={() => setActiveTab('itinerary')}
        />

        {/* Tab Views */}
        {activeTab === 'itinerary' && (
          <TimelineDay 
            dayData={PHU_QUOC_TRIP.days[selectedDayIndex]}
            allDays={PHU_QUOC_TRIP.days}
            selectedDayIndex={selectedDayIndex}
            setSelectedDayIndex={setSelectedDayIndex}
          />
        )}

        {activeTab === 'converter' && (
          <CurrencyConverter />
        )}

        {activeTab === 'checklist' && (
          <Checklist categoriesData={PHU_QUOC_TRIP.packingChecklist} />
        )}

        {activeTab === 'guide' && (
          <SurvivalGuide guideData={PHU_QUOC_TRIP.survivalGuide} />
        )}

        {activeTab === 'deploy' && (
          <GithubDeployGuide deployData={PHU_QUOC_TRIP.deployGuide} />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
