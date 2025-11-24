import React from 'react';
import { Section, Button, DitherGrid, ScrambleText, Container, DitherGlobe } from '../components/UI';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <DitherGrid />
      
      {/* Background Globe Effect for 'Lost in Space' vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0 grayscale scale-150">
         <DitherGlobe scale={1.5} />
      </div>
      
      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-500/30 bg-red-900/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-red-400 mb-8 backdrop-blur-md">
            <AlertTriangle size={12} />
            <ScrambleText text="SIGNAL LOST // ERROR 404" delay={200} />
        </div>

        <h1 className="text-6xl md:text-9xl font-display font-bold text-white mb-6 tracking-tighter">
            Trajectory<br/>Unknown.
        </h1>
        
        <p className="text-xl text-gray-400 font-light max-w-lg mx-auto leading-relaxed mb-12 text-balance">
            The coordinates you requested do not exist in this system. Return to Mission Control immediately.
        </p>

        <Link to="/">
            <Button icon={<Home size={16} />}>Return Home</Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;