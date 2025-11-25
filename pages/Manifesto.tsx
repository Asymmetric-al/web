
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { 
    Reveal, 
    GridPattern, 
    ScrambleText, 
    Container, 
    DitherGlobe 
} from '../components/UI';

// --- Types ---

interface ChapterHeaderProps {
    readonly label: string;
    readonly title: React.ReactNode;
    readonly align?: 'left' | 'right';
    readonly className?: string;
}

interface ProseProps {
    readonly children: React.ReactNode;
    readonly className?: string;
}

// --- Sub-Components ---

const ChapterHeader = memo(({ 
    label, 
    title, 
    align = 'right', 
    className = '' 
}: ChapterHeaderProps) => (
    <div className={`md:text-${align} ${className}`}>
        <span className="font-mono text-[10px] text-success uppercase tracking-widest block mb-3">
            {label}
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
            {title}
        </h2>
    </div>
));

ChapterHeader.displayName = 'ChapterHeader';

const Prose = memo(({ children, className = '' }: ProseProps) => (
    <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
        {children}
    </div>
));

Prose.displayName = 'Prose';

const ProseParagraph = memo(({ children }: { readonly children: React.ReactNode }) => (
    <p className="text-gray-400 font-light leading-relaxed text-lg md:text-xl mb-6 last:mb-0 text-pretty">
        {children}
    </p>
));

ProseParagraph.displayName = 'ProseParagraph';

// --- Main Component ---

const Manifesto: React.FC = () => {
    return (
        <article className="pt-32 min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
            <GridPattern className="opacity-20 fixed inset-0 z-0" />

            {/* Background Globe */}
            <div className="fixed top-1/2 right-0 -translate-x-1/2 translate-x-1/2 opacity-10 pointer-events-none z-0 mix-blend-screen" aria-hidden="true">
                <DitherGlobe scale={2} />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <header className="max-w-6xl mb-24 md:mb-32 mt-8 md:mt-12">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-8 border-l border-white/20 pl-6">
                            <ScrambleText text="THE PHILOSOPHY" className="font-mono text-xs text-muted uppercase tracking-widest" delay={200} />
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold text-white tracking-tighter leading-[0.85] md:leading-[0.8]">
                            Small Inputs.<br />
                            Exponential<br />
                            Outputs.
                        </h1>
                    </Reveal>
                </header>

                {/* Chapter 01 */}
                <section className="mb-24 md:mb-32">
                    <Reveal className="will-change-transform">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                            <div className="md:sticky md:top-32">
                                <ChapterHeader label="01 // The Origin" title="Bad tools are a stewardship issue." />
                            </div>
                            <Prose>
                                <ProseParagraph>
                                    We started with a simple conviction: place excellent technology in the hands of frontline workers.
                                </ProseParagraph>
                                <ProseParagraph>
                                    The biggest gap wasn't on the field; it was the crushing administrative load behind the scenes. Sending agencies and their missionaries were wrestling with spreadsheets instead of serving people. Donors were navigating broken systems.
                                </ProseParagraph>
                                <ProseParagraph>
                                    We realized that friction in the back office translates directly to lost ministry on the front lines. Asymmetric.al is the outgrowth of that need.
                                </ProseParagraph>
                            </Prose>
                        </div>
                    </Reveal>
                </section>

                {/* Chapter 02 */}
                <section className="mb-24 md:mb-32">
                    <Reveal className="will-change-transform">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                            <div className="md:order-last md:sticky md:top-32">
                                <ChapterHeader label="02 // The Paradigm" title="The Upside Down Kingdom." align="left" />
                            </div>
                            <Prose className="md:order-first">
                                <ProseParagraph>
                                    We operate on a logic of asymmetry: simple faithfulness that produces mountain-moving outcomes. This mirrors the Kingdom principle found in Matthew 20:26.
                                </ProseParagraph>
                                <ProseParagraph>
                                    Consider the mustard seed—how God multiplies the smallest unit into the largest capacity. Or David and Goliath—disproportionate impact through faith and precision.
                                </ProseParagraph>
                                <ProseParagraph>
                                    We build tools where a small action (a clean code commit, a simplified checkout, an automated receipt) multiplies into thousands of saved hours for the Kingdom.
                                </ProseParagraph>
                            </Prose>
                        </div>
                    </Reveal>
                </section>

                {/* Chapter 03 */}
                <section className="mb-24 md:mb-32">
                    <Reveal className="will-change-transform">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                            <div className="md:sticky md:top-32">
                                <ChapterHeader label="03 // The Design Philosophy" title="Precision through Hyper-Focus." />
                            </div>
                            <Prose>
                                <ProseParagraph>
                                    We apply an asymmetrical principle to product design: minimizing inputs to maximize outputs. This governs every decision we make, from our architecture to our interface.
                                </ProseParagraph>
                                <ProseParagraph>
                                    Because we are hyper-focused solely on sending agencies, we can build specific workflows that generic software misses. Whether it is a donor updating a card or a mobilizer tracking a candidate, we engineer for the fewest possible actions.
                                </ProseParagraph>
                                <ProseParagraph>
                                    Your time is the most valuable resource in the Great Commission. By removing administrative friction, we protect your capacity to fund ministry, support missionaries, and advance the Gospel.
                                </ProseParagraph>
                            </Prose>
                        </div>
                    </Reveal>
                </section>

                {/* Chapter 04 */}
                <section className="mb-24 md:mb-32">
                    <Reveal className="will-change-transform">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <div className="md:order-last md:sticky md:top-32">
                                <ChapterHeader label="04 // The Staffing Model" title={<>By Missionaries,<br />For Missionaries.</>} align="left" />
                            </div>
                            <div className="md:order-first">
                                <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group">
                                    {/* Decorative Corners */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-white/20" aria-hidden="true"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-white/20" aria-hidden="true"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-white/20" aria-hidden="true"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-white/20" aria-hidden="true"></div>

                                    <p className="text-gray-300 mb-8 leading-relaxed text-lg md:text-xl">
                                        Our core staff raise support just like the missionaries we serve. We do this because the work <em>is</em> ministry.
                                        We also retain paid development staff to ensure professional delivery.
                                    </p>
                                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest border-t border-white/10 pt-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                                        Covering Nonprofit: Global Fellowship Inc. (501c3)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* Chapter 05 */}
                <section>
                    <Reveal className="will-change-transform">
                        <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-24 pb-24">
                            <span className="font-mono text-xs text-success uppercase tracking-widest block mb-8">05 // Our Posture</span>
                            <p className="text-2xl md:text-4xl font-display font-medium text-white leading-tight mb-12 text-balance">
                                We operate with open hands. We do not lock you in. We acknowledge limits. We build open source to ensure missions organizations remain in full control of their tools.
                            </p>

                            <div className="mb-16">
                                <Link to="/faith" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 group">
                                    Read our Statement of Faith <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="inline-flex flex-col items-center border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
                                <div className="mb-4 opacity-50">
                                    <CheckCircle2 size={24} className="text-white" />
                                </div>
                                <p className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2">
                                    Signed
                                </p>
                                <span className="text-xl font-display font-bold text-white tracking-tight">
                                    The Asymmetric.al Maintainers
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </section>

            </Container>
        </article>
    );
};

export default Manifesto;
