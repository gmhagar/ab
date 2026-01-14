
import React from 'react';
import { COVERAGE_DATA, COVERAGE_GROUPS } from './constants';
import CoverageCard from './components/CoverageCard';
import { 
  Layers,
  ChevronDown,
  List
} from 'lucide-react';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 20; // Reduced offset since sticky header is gone
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#373737] flex flex-col scroll-smooth">
      {/* Main Content Only */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#FF8C11]/10 text-[#FF8C11] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-4">Coverage Reference</span>
            <h2 className="text-4xl font-black text-[#003359] mb-4">Benefit Reference Catalog</h2>
            <p className="text-xl text-gray-500 font-medium">Comprehensive comparison of coverage levels effective July 1, 2026.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:sticky lg:top-8 w-full lg:w-72 shrink-0">
              <div className="bg-[#f8fafc] border border-[#D8DCDB] rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6 px-2">
                  <div className="bg-[#003359] p-2 rounded-lg text-white">
                    <List size={18} />
                  </div>
                  <span className="font-black text-[#003359] uppercase text-[10px] tracking-widest">Quick Navigation</span>
                </div>
                <nav className="space-y-2">
                  {COVERAGE_GROUPS.map((group) => (
                    <button
                      key={group}
                      onClick={() => scrollToSection(group.replace(/\s+/g, '-'))}
                      className="w-full text-left p-4 rounded-lg text-sm font-bold text-gray-500 hover:bg-white hover:text-[#007db3] hover:shadow-sm border border-transparent hover:border-[#D8DCDB] transition-all flex justify-between items-center group"
                    >
                      <span className="line-clamp-1">{group}</span>
                      <ChevronDown size={14} className="opacity-0 group-hover:opacity-100 -rotate-90 transition-all" />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Coverage Content */}
            <div className="flex-grow space-y-20">
              {COVERAGE_GROUPS.map(groupName => (
                <section 
                  key={groupName} 
                  id={groupName.replace(/\s+/g, '-')} 
                  className="space-y-6 scroll-mt-8"
                >
                  <div className="flex items-center space-x-4 border-b-4 border-[#003359] pb-4">
                    <div className="bg-[#003359] p-3 rounded-lg text-white">
                      <Layers size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-[#003359] tracking-tight">{groupName}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {COVERAGE_DATA
                      .filter(item => item.group === groupName)
                      .map(coverage => (
                        <CoverageCard key={coverage.id} coverage={coverage} />
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
