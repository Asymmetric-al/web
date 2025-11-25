
import React, { ReactNode } from 'react';
import { 
  Zap, 
  Globe, 
  Mail, 
  Database, 
  ShieldCheck, 
  Scale, 
  Activity, 
  FileCheck,
  LucideIcon
} from 'lucide-react';

import { Card, CardContent } from './Shadcn';
import { MotionPreset } from './MotionPreset';
import { RippleBg } from './BentoAssets';
import { DitherGrid, Logo } from './UI';

// --- Types ---

interface StandardCardProps {
  readonly title: string;
  readonly subtitle: ReactNode;
  readonly icon: LucideIcon;
  readonly description: string;
  readonly delay: number;
  readonly className?: string;
}

interface FeatureCardProps {
  readonly title: string;
  readonly pillText: string;
  readonly icon: LucideIcon;
  readonly description: string;
  readonly delay: number;
  readonly backgroundElement?: ReactNode;
  readonly className?: string;
}

// --- Sub-Components ---

const SystemHeaderCard: React.FC = () => (
  <MotionPreset
    fade
    blur
    slide={{ direction: 'down', offset: 15 }}
    delay={0.1}
    transition={{ duration: 0.5 }}
    className='z-1 md:col-span-2 lg:col-span-2'
  >
    <Card className='relative h-full border border-white/20 bg-white/[0.02] overflow-hidden group shadow-2xl'>
      {/* Texture & Watermark */}
      <DitherGrid className="opacity-30" />
      <div className="absolute -right-12 -top-12 opacity-[0.03] transform pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
         <Logo className="size-96 text-white" />
      </div>
      
      <div className='pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-white/[0.02] to-transparent' aria-hidden="true" />

      <CardContent className='relative z-10 flex flex-col h-full p-6 md:p-8 gap-8'>
        <div className="flex justify-between items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-black/50 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest text-white backdrop-blur-xl shadow-lg">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-success rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                  <span className="font-bold">System Capabilities</span>
            </div>
        </div>
        
        <div>
          <h2 className='text-4xl sm:text-5xl md:text-6xl leading-[0.9] font-display font-bold text-white mb-6 tracking-tighter drop-shadow-xl'>
              Infrastructure<br/>
              <span className="text-white/60">as Stewardship.</span>
          </h2>
          <div className="pl-4 md:pl-6 border-l-2 border-primary/50">
              <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed text-balance max-w-lg">
                  We don't look for ways to extract rent from your basic needs. We build the digital rails for high-trust organizations to operate with sovereignty and speed.
              </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </MotionPreset>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  pillText, 
  icon: Icon, 
  description, 
  delay, 
  backgroundElement, 
  className = "" 
}) => (
  <MotionPreset 
      fade 
      blur 
      slide={{ direction: 'down', offset: 15 }} 
      delay={delay} 
      transition={{ duration: 0.5 }} 
      className={className}
  >
    <Card className='h-full overflow-hidden border border-white/10 bg-black hover:border-white/20 transition-all duration-500 group relative'>
      {backgroundElement}
      
      <CardContent className='flex h-full flex-col p-6 md:p-8 relative z-10 gap-6'>
           <div className="flex items-center justify-between">
              <div className="p-2 md:p-3 bg-white/5 rounded-sm border border-white/10 group-hover:border-white/30 group-hover:text-white text-gray-400 transition-all">
                  <Icon className='size-5 md:size-6' />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted bg-white/5 px-3 py-1.5 rounded-sm border border-white/5 group-hover:border-white/20 transition-colors">
                  {pillText}
              </span>
           </div>
           
           <div>
              <h3 className='text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-4'>{title}</h3>
              <p className="text-gray-400 leading-relaxed text-balance font-light text-sm md:text-base">
                  {description}
              </p>
           </div>
      </CardContent>
    </Card>
  </MotionPreset>
);

const StandardCard: React.FC<StandardCardProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  description, 
  delay,
  className = ""
}) => (
  <MotionPreset 
    fade 
    blur 
    slide={{ direction: 'down', offset: 15 }} 
    delay={delay} 
    transition={{ duration: 0.5 }}
    className={className}
  >
    <Card className='h-full border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group'>
      <CardContent className='flex h-full flex-col gap-4 p-5 md:p-6'>
        <div className="flex justify-between items-start">
            <div className="p-2 bg-white/5 w-fit rounded-sm border border-white/10 text-gray-400 group-hover:text-success group-hover:border-success/30 transition-all">
                <Icon className='size-5' />
            </div>
        </div>
        
        <div className="space-y-2">
            <h3 className='text-lg font-display font-bold text-white tracking-tight leading-tight'>{title}</h3>
            <div className="mb-2 text-[9px] font-mono uppercase tracking-widest text-muted/60">
               {subtitle}
            </div>
        </div>
        
        <div className="border-t border-white/5 pt-4">
           <p className="text-[11px] text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
              {description}
           </p>
        </div>
      </CardContent>
    </Card>
  </MotionPreset>
);

// --- Main Component ---

const InfrastructureBento: React.FC = () => {
  return (
    <section className='bg-black py-12 md:py-20 text-white relative overflow-hidden'>
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className='mx-auto grid max-w-7xl gap-3 md:gap-4 px-4 sm:px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-8 relative z-10 auto-rows-fr'>
        
        {/* --- ROW 1 (Header & Sovereign Web) --- */}

        {/* Card 1: Main Header (Span 2) */}
        <SystemHeaderCard />

        {/* Card 2: Sovereign Web Architecture (Span 2) */}
        <FeatureCard 
          title="Sovereign Web Architecture"
          pillText="Next.js / Headless WP"
          icon={Globe}
          description="Break free from the 'Vendor Trap.' Proprietary site builders lure you in with templates but hold you hostage with expensive change orders. We deploy Headless WordPress coupled with Next.js—industry-standard, portable, and owned entirely by you. Stop paying thousands for simple site updates or feeling stuck with a mediocre template. Own your code, own your content, and escape the cycle of rent-seeking dependencies."
          delay={0.2}
          className="md:col-span-2 lg:col-span-2"
          backgroundElement={
            <RippleBg className='pointer-events-none absolute right-0 top-0 size-[300px] md:size-[400px] text-white/5 select-none opacity-10' />
          }
        />

        {/* --- ROW 2 (Functional Pillars - 4 Columns on LG, 2x2 on MD) --- */}

        {/* Card 3: Native Missionary Dashboards */}
        <StandardCard 
          title="Native Missionary Dashboards"
          subtitle="Real-time / Unified"
          icon={Database}
          description="Eliminate the 'Fragmentation Tax.' Third-party fundraising overlays add unnecessary cost, sync errors, and administrative burden. Asymmetric.al provides a unified Mission Control where finance and fundraising live in the same database. Give your workers real-time clarity without the extra fees or complexity."
          delay={0.3}
        />

        {/* Card 4: Enterprise Orchestration */}
        <StandardCard 
          title="Enterprise Orchestration"
          subtitle="Event-Driven / Zapier"
          icon={Zap}
          description="We don't rely on fragile, hacked-together scripts. Our backend emits high-fidelity events directly to Zapier, the industry leader in automation. Whether it's triggering a welcome sequence or alerting a director, you can build complex workflows in minutes without writing code."
          delay={0.4}
        />

        {/* Card 5: Fortress Identity */}
        <StandardCard 
          title="Fortress Identity"
          subtitle="Keycloak SSO"
          icon={ShieldCheck}
          description="Security isn't an add-on; it's the foundation. We deploy Keycloak—the gold standard in identity management—to protect your people. Enforce Multi-Factor Authentication (MFA) globally and revoke access instantly across all apps."
          delay={0.5}
        />

        {/* Card 6: Zero-Touch Balance */}
        <StandardCard 
          title="Zero-Touch Balance"
          subtitle="Auto-Reconciliation"
          icon={Scale}
          description="Stop wrestling with spreadsheets at month-end. Our engine listens to webhooks from the banking layer, automatically matching Stripe payouts to individual ledger entries. Real-time solvency without the manual toil."
          delay={0.6}
        />

        {/* --- ROW 3 (Comms, Transp, Trust) --- */}

         {/* Card 7: Radical Transparency (Pos 1 on LG, Pos 1 on MD) */}
         <StandardCard 
          title="Radical Transparency"
          subtitle="OpenTelemetry / Open Source"
          icon={Activity}
          description="You can't steward what you can't see. We instrument the stack with OpenTelemetry for operational visibility. Beyond that, we are Open Source. Anyone can audit our code, and we encourage skilled developers to contribute to this open project for Christian missions."
          delay={0.7}
        />

        {/* Card 8: High-Fidelity Communications (SPAN 2 on LG. SPAN 2 on MD but ordered last) */}
        <FeatureCard 
          title="High-Fidelity Communications"
          pillText="Unlayer / PDF Generation"
          icon={Mail}
          description="Every touchpoint is a reflection of your stewardship. From a simple password reset email to a complex End-of-Year Tax Statement printable PDF, we utilize best-in-class tooling (Unlayer) to ensure pixel-perfect branding. No more ugly, generated receipts. Deliver modern, responsive emails and beautiful PDF documents that build trust with your partners and missionaries."
          delay={0.8}
          className="md:col-span-2 lg:col-span-2 md:order-last lg:order-none"
          backgroundElement={<DitherGrid className="opacity-10" />}
        />

        {/* Card 9: Audit-Grade Trust (Pos 3 on LG, Pos 2 on MD) */}
        <StandardCard 
          title="Audit-Grade Trust"
          subtitle={
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
               <span>Immutable Logs</span>
            </div>
          }
          icon={FileCheck}
          description="Integrity is non-negotiable. We maintain a tamper-evident audit log of every critical system action. Who changed that designation? When was that content published? The answer is always one click away."
          delay={0.9}
        />

      </div>
    </section>
  )
}

export default InfrastructureBento;
