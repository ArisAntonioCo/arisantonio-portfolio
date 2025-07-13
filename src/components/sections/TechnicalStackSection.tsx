"use client";

import dynamic from 'next/dynamic';
import { memo, useEffect, useRef, useState } from 'react';

// Lazy load the StackIcon component
const StackIcon = dynamic(() => import('tech-stack-icons'), {
  loading: () => <div className="w-4 h-4 bg-white/10 rounded animate-pulse" />,
  ssr: false // Disable server-side rendering for icons
});

// Memoize the tech badge component to prevent unnecessary re-renders
const TechBadge = memo(({ tech }: { tech: { name: string; iconName: string; label: string } }) => {
  return (
    <div 
      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200 ease-out transform-gpu hover:scale-[1.02] active:scale-[0.98]"
      style={{ 
        willChange: 'transform, background-color',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      <div className="w-4 h-4 flex-shrink-0">
        <StackIcon name={tech.iconName} />
      </div>
      <span className="text-xs text-white font-normal whitespace-nowrap">{tech.label}</span>
    </div>
  );
});

TechBadge.displayName = 'TechBadge';

const techStack = [
  { name: 'Adobe Illustrator', iconName: 'ai', label: 'Adobe Illustrator' },
  { name: 'Figma', iconName: 'figma', label: 'Figma' },
  { name: 'AI Studio', iconName: 'aistudio', label: 'AI Studio' },
  { name: 'MySQL', iconName: 'mysql', label: 'MySQL' },
  { name: 'Anthropic', iconName: 'anthropic', label: 'Anthropic' },
  { name: 'Bash', iconName: 'bash', label: 'Bash' },
  { name: 'Tailwind CSS', iconName: 'tailwindcss', label: 'Tailwind CSS' },
  { name: 'Claude', iconName: 'claude', label: 'Claude' },
  { name: 'Cline', iconName: 'vscode', label: 'Cline' },
  { name: 'Postman', iconName: 'postman', label: 'Postman' },
  { name: 'GitHub Copilot', iconName: 'copilotgithub', label: 'GitHub Copilot' },
  { name: 'CSS3', iconName: 'css3', label: 'CSS3' },
  { name: 'HTML5', iconName: 'html5', label: 'HTML5' },
  { name: 'Gemini', iconName: 'gemini', label: 'Gemini' },
  { name: 'Git', iconName: 'git', label: 'Git' },
  { name: 'GitHub', iconName: 'github', label: 'GitHub' },
  { name: 'Java', iconName: 'java', label: 'Java' },
  { name: 'JavaScript', iconName: 'js', label: 'JavaScript' },
  { name: 'TypeScript', iconName: 'typescript', label: 'TypeScript' },
  { name: 'Laravel', iconName: 'laravel', label: 'Laravel' },
  { name: 'MongoDB', iconName: 'mongodb', label: 'MongoDB' },
  { name: 'n8n', iconName: 'n8n', label: 'n8n' },
  { name: 'Make', iconName: 'make', label: 'Make' },
  { name: 'Zapier', iconName: 'zapier', label: 'Zapier' },
  { name: 'Next.js', iconName: 'nextjs2', label: 'Next.js' },
  { name: 'Notion', iconName: 'notion', label: 'Notion' },
  { name: 'Slack', iconName: 'slack', label: 'Slack' },
  { name: 'OpenAI', iconName: 'openai', label: 'OpenAI' },
  { name: 'Perplexity', iconName: 'perplexity', label: 'Perplexity' },
  { name: 'PostgreSQL', iconName: 'postgresql', label: 'PostgreSQL' },
  { name: 'Supabase', iconName: 'supabase', label: 'Supabase' },
  { name: 'React', iconName: 'react', label: 'React' },
  { name: 'Redux', iconName: 'redux', label: 'Redux' },
  { name: 'Replit', iconName: 'replit', label: 'Replit' },
  { name: 'Resend', iconName: 'resend', label: 'Resend' },
  { name: 'shadcn/ui', iconName: 'shadcnui', label: 'shadcn/ui' },
  { name: 'Vercel', iconName: 'vercel', label: 'Vercel' },
  { name: 'v0', iconName: 'v0', label: 'v0' }
];

const BATCH_SIZE = 8; // Render 8 icons at a time
const INITIAL_BATCH = 16; // Show more icons initially for better UX

export const TechnicalStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start with initial batch immediately
          requestAnimationFrame(() => {
            setVisibleCount(INITIAL_BATCH);
            setIsInitialized(true);
          });
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '200px' // Start loading when section is 200px away from viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Progressive rendering effect with requestAnimationFrame
  useEffect(() => {
    if (isInitialized && visibleCount < techStack.length) {
      let rafId: number;
      const timer = setTimeout(() => {
        rafId = requestAnimationFrame(() => {
          setVisibleCount(prev => Math.min(prev + BATCH_SIZE, techStack.length));
        });
      }, 60); // Even faster for super smooth experience
      
      return () => {
        clearTimeout(timer);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }
  }, [isInitialized, visibleCount]);

  return (
    <section className="bg-dark overflow-hidden">
      <div ref={sectionRef} className="px-3 sm:px-4 lg:px-5 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8">
          <h2 className="text-sm font-normal flex-shrink-0">
            <span className="text-[#8C8C8C]">Technology Stack</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-white sm:max-w-2xl sm:text-right">
            A comprehensive overview of the technologies, frameworks, and tools I leverage to build <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>modern</span>, <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>scalable</span>, and <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>performant applications</span>.
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2" style={{ contain: 'layout style paint' }}>
          {techStack.slice(0, visibleCount).map((tech, index) => (
            <div
              key={tech.name}
              className="animate-fade-in opacity-0"
              style={{
                animationDelay: `${(index % BATCH_SIZE) * 25}ms`,
                animationFillMode: 'forwards',
                animationDuration: '400ms',
                willChange: 'opacity, transform'
              }}
            >
              <TechBadge tech={tech} />
            </div>
          ))}
          
          {/* Show skeleton loaders for remaining items */}
          {isVisible && visibleCount < techStack.length && (
            <>
              {Array(Math.min(BATCH_SIZE, techStack.length - visibleCount))
                .fill(0)
                .map((_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg animate-pulse"
                  >
                    <div className="w-4 h-4 bg-white/10 rounded" />
                    <div className="w-20 h-3 bg-white/10 rounded" />
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};