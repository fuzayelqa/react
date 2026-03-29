import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Target, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Globe,
  Award,
  ChevronDown
} from 'lucide-react';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'stats', 'experience', 'expertise', 'education'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Ad Spend Managed', value: '$1M+', icon: <Layers className="w-6 h-6" /> },
    { label: 'Revenue Generated', value: '$1.3M+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Consistent ROI', value: '30%+', icon: <BarChart3 className="w-6 h-6" /> },
  ];

  const tools = [
    "Maximixer", "Minit Media", "Pubpower", "Meta Ads Manager", "Tarzo", "Cortex"
  ];

  const NavItem = ({ id, label }) => (
    <button 
      onClick={() => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })}
      className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
        activeSection === id ? 'text-blue-400' : 'text-slate-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">FA</span>
            </div>
            <span>FAHIM ALAM</span>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-slate-900/50 rounded-full p-1 border border-slate-800">
            <NavItem id="home" label="Home" />
            <NavItem id="experience" label="Experience" />
            <NavItem id="expertise" label="Expertise" />
            <NavItem id="education" label="Education" />
          </div>
          <a 
            href="mailto:hello.fahimalom@gmail.com"
            className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20"
          >
            Contact Me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Strategic Leadership
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Lead <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Media Buyer</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Managing <span className="text-white font-semibold">$1,000,000+</span> in high-scale Meta advertising budgets with a focus on data-driven ROI and complex scaling strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                View My Impact <ChevronDown className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-6 px-4">
                <a href="mailto:hello.fahimalom@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail /></a>
                <a href="tel:+8801316305023" className="text-slate-400 hover:text-white transition-colors"><Phone /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin /></a>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="relative z-10 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">Performance_Metrics.json</div>
              </div>
              
              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="group p-4 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                        <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Card Behind */}
            <div className="absolute top-8 left-8 w-full h-full bg-blue-600/10 border border-blue-600/20 rounded-3xl -z-10 translate-x-4 translate-y-4 blur-sm"></div>
          </div>
        </div>
      </header>

      {/* Stats Summary */}
      <section id="stats" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Growth Engine</div>
              <h2 className="text-3xl font-bold italic">"Generating $1.3M+ in revenue through precise media scaling."</h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div className="p-6 border-l-2 border-blue-500/30">
                <div className="text-4xl font-bold mb-2">30%+</div>
                <p className="text-slate-400 text-sm">Consistent ROI benchmark achieved across all major client accounts through data-driven optimization.</p>
              </div>
              <div className="p-6 border-l-2 border-blue-500/30">
                <div className="text-4xl font-bold mb-2">$1M+</div>
                <p className="text-slate-400 text-sm">Total high-scale Facebook advertising budget managed with expert-level control over complex bidding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Professional Path</h2>
              <p className="text-slate-400 max-w-xl">Proven track record in high-stakes media buying environments, from digital agencies to senior performance roles.</p>
            </div>
            <Award className="w-12 h-12 text-blue-500/20 hidden md:block" />
          </div>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="relative pl-8 border-l border-slate-800 pb-12">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Lead Media Buyer</h3>
                  <div className="text-blue-400 font-medium">Anolipi Digital</div>
                </div>
                <div className="text-slate-500 text-sm font-mono mt-1">March 2023 – Present</div>
              </div>
              <ul className="space-y-4 text-slate-400 max-w-3xl">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 shrink-0"></div>
                  <span><strong className="text-slate-200">Strategic Leadership:</strong> Managing day-to-day advertising operations and overseeing multi-million dollar ad accounts with spend exceeding $1M.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 shrink-0"></div>
                  <span><strong className="text-slate-200">Performance Scaling:</strong> Executed full-funnel scaling strategies using Bid Cap, Cost Cap, and ROAS-based models.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 shrink-0"></div>
                  <span><strong className="text-slate-200">Tool Integration:</strong> Utilizing professional platforms like Maximixer, Minit Media, and Cortex to automate bidding.</span>
                </li>
              </ul>
            </div>

            {/* Previous Role */}
            <div className="relative pl-8 border-l border-slate-800">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-slate-700"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Senior Media Buyer</h3>
                </div>
                <div className="text-slate-500 text-sm font-mono mt-1">May 2021 – February 2023</div>
              </div>
              <ul className="space-y-4 text-slate-400 max-w-3xl">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2 shrink-0"></div>
                  <span><strong className="text-slate-200">Campaign Optimization:</strong> Monitored key performance metrics to ensure campaigns met growth objectives.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2 shrink-0"></div>
                  <span><strong className="text-slate-200">Market Analysis:</strong> Analyzed trends to identify new scaling opportunities for diverse brands.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Stack */}
      <section id="expertise" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Technical Arsenal</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Expert-level control over advertising algorithms and a comprehensive stack of scaling tools designed to automate high-frequency trading of digital ad inventory.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 group hover:border-blue-500/30 transition-all">
                  <Target className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="font-bold mb-2 text-white text-lg">Advanced Bidding</h4>
                  <p className="text-slate-500 text-sm">Bid Cap, Cost Cap, & Min ROAS Mastery</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 group hover:border-blue-500/30 transition-all">
                  <Cpu className="w-8 h-8 text-indigo-500 mb-4" />
                  <h4 className="font-bold mb-2 text-white text-lg">Data Analytics</h4>
                  <p className="text-slate-500 text-sm">Audience Segmentation & Conversion Tracking</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" /> Professional Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div 
                    key={tool} 
                    className="px-6 py-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all text-slate-300 font-medium flex items-center gap-2 shadow-inner"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {tool}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-800/50">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Languages & Communication</span>
                  <div className="flex gap-3">
                    <span className="text-white px-2 py-0.5 rounded bg-blue-500/20 text-xs">Bengali (Native)</span>
                    <span className="text-white px-2 py-0.5 rounded bg-blue-500/20 text-xs">English (Proficient)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 md:p-16 rounded-[40px] relative overflow-hidden">
            <Globe className="absolute top-[-20%] right-[-10%] w-96 h-96 text-blue-500/5 -z-0" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Education</h2>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">B.Sc. in Computer Science & Engineering</h3>
                  <p className="text-blue-400 font-medium">Leading University</p>
                  <p className="text-slate-500 font-mono text-sm">2024 – Present (Degree Candidate)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="text-slate-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Location</div>
                    <div className="text-slate-400">Pathantula, Sylhet, Bangladesh</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="text-slate-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Email</div>
                    <div className="text-slate-400">hello.fahimalom@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Fahim Alam. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;