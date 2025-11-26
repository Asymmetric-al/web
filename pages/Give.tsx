
import React, { useState, useCallback } from 'react';
import { Section, Button, TechPanel, Reveal, DitherGrid, ScrambleText, SpotlightCard, DitherGlobe } from '../components/UI';
import { ShieldCheck, ArrowRight, Lock, HeartHandshake, HelpCircle, type LucideIcon, Check } from 'lucide-react';

// --- Types ---

interface PitchPoint {
  readonly title: string;
  readonly desc: string;
}

interface FaqItem {
  readonly q: string;
  readonly a: string;
}

// --- Static Data ---

const AMOUNTS = [50, 100, 250, 500, 1000] as const;

const PITCH_POINTS: readonly PitchPoint[] = [
    { title: "Open Source", desc: "Code is public. Contributions accelerate the entire ecosystem." },
    { title: "Stewardship", desc: "Operating under Global Fellowship Inc. Fully tax-deductible." },
    { title: "Efficiency", desc: "We build shared rails so individual ministries don't have to." },
    { title: "Scale", desc: "One platform serving many agencies multiplies your impact." }
];

const FAQ_ITEMS: readonly FaqItem[] = [
    { q: "Is my gift tax-deductible?", a: "Yes. All gifts are processed through our covering nonprofit, Global Fellowship Inc. (EIN 68-0214543), and are fully tax-deductible in the US." },
    { q: "Do you charge a margin?", a: "No. Ministries keep their own Stripe accounts. We charge only at-cost for hosting and licensing. Our aim is global impact, not profit." },
    { q: "Will you stay open source?", a: "Yes. We build on and contribute to open-source. We will keep publishing our forks and patches to ensure no vendor lock-in." },
    { q: "What does my gift fund?", a: "Core engineering, security reviews, data residency work, and early onboarding for pilot organizations." },
    { q: "Can I give via Check or DAF?", a: "Yes. Checks payable to 'Global Fellowship Inc' (Memo: Asymmetric.al) can be mailed to: PO Box 1, Meadow Vista, CA 95722. Contact us at info@asymmetric.al for wire instructions." },
    { q: "Who controls the funds?", a: "Asymmetric.al operates as a project under the governance of the Global Fellowship board, ensuring financial accountability." }
];

// --- Sub-Components ---

const PitchItem: React.FC<{ item: PitchPoint; index: number }> = ({ item, index }) => (
    <div className="group border-l border-white/10 pl-6 hover:border-white/30 transition-colors duration-300">
        <h3 className="text-white font-display font-bold text-xl mb-3 tracking-tight group-hover:text-primary transition-colors">
            {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed text-balance font-light">
            {item.desc}
        </p>
    </div>
);

const FaqItemPanel: React.FC<{ item: FaqItem }> = ({ item }) => (
    <TechPanel className="h-full bg-black hover:border-white/30 transition-colors group">
        <h4 className="text-white font-bold font-display text-lg mb-4 group-hover:text-primary transition-colors tracking-tight">
            {item.q}
        </h4>
        <p className="text-sm text-gray-400 leading-relaxed text-balance font-light">
            {item.a}
        </p>
    </TechPanel>
);

const DonationCard: React.FC = () => {
    const [amount, setAmount] = useState<number>(100);
    const [frequency, setFrequency] = useState<'monthly' | 'onetime'>('monthly');
    const [customAmount, setCustomAmount] = useState<string>('');

    const handleAmountSelect = (val: number) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        if (Number(e.target.value)) {
            setAmount(Number(e.target.value));
        }
    };

    return (
        <SpotlightCard className="bg-white/[0.02] border-white/10 group rounded-sm">
            <div className="bg-black p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden rounded-sm h-full">
                
                {/* Header */}
                <div className="flex justify-between items-start border-b border-white/10 pb-6">
                    <div>
                        <div className="flex items-center gap-2 text-white mb-1">
                            <HeartHandshake size={18} className="text-success" />
                            <span className="font-display font-bold text-lg tracking-tight">Secure Donation</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                            Power the infrastructure
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-sm border border-white/5 text-[10px] font-mono text-success uppercase tracking-widest">
                        <Lock size={10} />
                        Encrypted
                    </div>
                </div>

                {/* Frequency Segmented Control */}
                <div className="flex p-1 bg-white/5 rounded-sm border border-white/10">
                    <button 
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`flex-1 py-2.5 text-[10px] font-mono uppercase tracking-widest rounded-sm transition-all duration-300 ${
                            frequency === 'monthly' 
                            ? 'bg-white text-black font-bold shadow-sm' 
                            : 'text-gray-500 hover:text-white'
                        }`}
                    >
                        Monthly
                    </button>
                    <button 
                        type="button"
                        onClick={() => setFrequency('onetime')}
                        className={`flex-1 py-2.5 text-[10px] font-mono uppercase tracking-widest rounded-sm transition-all duration-300 ${
                            frequency === 'onetime' 
                            ? 'bg-white text-black font-bold shadow-sm' 
                            : 'text-gray-500 hover:text-white'
                        }`}
                    >
                        One-Time
                    </button>
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-3 gap-3">
                    {AMOUNTS.map(val => (
                        <button 
                            key={val}
                            type="button"
                            onClick={() => handleAmountSelect(val)}
                            className={`
                                relative h-14 font-mono text-sm border rounded-sm transition-all duration-200 overflow-hidden group/btn
                                ${amount === val && !customAmount
                                    ? 'bg-white border-white text-black font-bold' 
                                    : 'bg-black border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}
                            `}
                        >
                            ${val}
                            {amount === val && !customAmount && (
                                <div className="absolute top-1 right-1 text-black">
                                    <Check size={10} />
                                </div>
                            )}
                        </button>
                    ))}
                    
                    {/* Custom Amount Input */}
                    <div className={`
                        relative col-span-1 h-14 border rounded-sm transition-all duration-200
                        ${customAmount 
                            ? 'border-white bg-white/5' 
                            : 'border-white/10 bg-black hover:border-white/30'}
                    `}>
                        <span className={`
                            absolute left-3 top-1/2 -translate-y-1/2 text-sm font-mono transition-colors
                            ${customAmount ? 'text-white' : 'text-gray-500'}
                        `}>$</span>
                        <input 
                            type="number" 
                            placeholder="Custom"
                            min="1"
                            value={customAmount}
                            onChange={handleCustomChange}
                            className={`
                                w-full h-full bg-transparent text-white font-mono text-sm pl-7 pr-2 
                                focus:outline-none placeholder:text-gray-600 transition-colors
                                ${customAmount ? 'font-bold' : 'font-normal'}
                            `}
                        />
                    </div>
                </div>

                {/* Total Display */}
                <div className="py-6 px-6 text-center border border-white/10 bg-white/[0.02] rounded-sm">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">
                        Total Contribution
                    </span>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
                            ${amount}
                        </span>
                        <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                           USD
                        </span>
                    </div>
                    <span className="text-xs text-gray-500 block mt-2 font-light">
                        {frequency === 'monthly' ? 'Billed monthly' : 'Single transaction'}
                    </span>
                </div>

                <Button className="w-full h-14 bg-white hover:bg-primary hover:text-white border-none text-black font-bold tracking-wide" icon={<ArrowRight size={16} />}>
                    Process Donation
                </Button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest pt-2">
                    <ShieldCheck size={12} className="text-success" />
                    <span>256-bit SSL Encrypted</span>
                </div>
            </div>
        </SpotlightCard>
    );
};

// --- Main Component ---

const Give: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" />

      {/* Background Globe */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none z-0 mix-blend-screen hidden lg:block">
          <DitherGlobe scale={1.8} />
      </div>

      <Section className="relative z-10 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: The Pitch */}
            <div className="lg:col-span-7 pt-8">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                        <ScrambleText text="NONPROFIT 501(c)(3)" delay={200} />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter text-balance">
                        Fuel the tool that<br/>
                        serves the servants.
                    </h1>
                    
                    <div className="border-l-2 border-white/10 pl-8 mb-16">
                        <p className="text-xl text-gray-300 font-light leading-relaxed max-w-xl text-balance">
                            Your capital builds the digital rails for the next generation of missions. 
                            We operate with zero profit margin to maximize mission velocity.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {PITCH_POINTS.map((item, i) => (
                        <Reveal key={i} delay={300 + (i * 100)}>
                            <PitchItem item={item} index={i} />
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Right Column: The Terminal */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32">
                <Reveal delay={200} className="will-change-transform">
                    <DonationCard />
                </Reveal>
            </div>
        </div>
      </Section>

      {/* FAQ / Technical Details */}
      <Section className="bg-white/[0.02]">
        <Reveal>
            <div className="flex items-center gap-2 mb-12">
                <HelpCircle size={16} className="text-white/40" />
                <h2 className="font-mono text-xs text-white uppercase tracking-widest">Financial FAQ</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FAQ_ITEMS.map((item, i) => (
                    <Reveal key={i} delay={i * 50} className="h-full">
                        <FaqItemPanel item={item} />
                    </Reveal>
                ))}
            </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default Give;
