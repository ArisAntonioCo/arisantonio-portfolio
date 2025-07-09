"use client";

import StackIcon from 'tech-stack-icons';
import { memo, useEffect, useRef, useState } from 'react';

// Memoize the tech badge component to prevent unnecessary re-renders
const TechBadge = memo(({ tech }: { tech: { name: string; iconName: string; label: string } }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
      <div className="w-4 h-4">
        <StackIcon name={tech.iconName} />
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <div className="flex flex-wrap gap-2">
          {isVisible && techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 20}ms`,
                animationFillMode: 'both'
              }}
            >
              <TechBadge tech={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};