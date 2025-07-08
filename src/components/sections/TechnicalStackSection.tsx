"use client";

import dynamic from 'next/dynamic';
import { memo, Suspense, useEffect, useRef, useState } from 'react';

// Dynamically import StackIcon to reduce initial bundle size
const StackIcon = dynamic(() => import('tech-stack-icons'), {
  loading: () => <div className="w-4 h-4 bg-white/10 rounded animate-pulse" />,
  ssr: false
});

// Memoize the tech badge component to prevent unnecessary re-renders
const TechBadge = memo(({ tech }: { tech: { name: string; iconName: string; label: string } }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
    >
      <div className="w-4 h-4">
        {isVisible ? (
          <Suspense fallback={<div className="w-4 h-4 bg-white/10 rounded animate-pulse" />}>
            <StackIcon name={tech.iconName} />
          </Suspense>
        ) : (
          <div className="w-4 h-4 bg-white/10 rounded animate-pulse" />
        )}
      </div>
      <span className="text-xs text-white font-normal">{tech.label}</span>
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

export const TechnicalStackSection = () => {
  return (
    <section className="min-h-screen bg-dark overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col px-4 sm:px-5 lg:px-6 pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-5 lg:pb-6 gap-4 sm:gap-5 lg:gap-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-8">
          <h2 className="text-sm font-normal">
            <span className="text-[#8C8C8C]">Technical Stack</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-white max-w-2xl text-right">
            A comprehensive overview of the technologies, frameworks, and tools I leverage to build <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>modern</span>, <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>scalable</span>, and <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>performant applications</span>.
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};