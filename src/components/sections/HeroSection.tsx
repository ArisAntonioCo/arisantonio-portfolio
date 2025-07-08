export const HeroSection = () => {
  return (
    <section className="flex-1 bg-dark overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 gap-4 sm:gap-5 lg:gap-6">
        {/* Video Container */}
        <div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-dark/50 min-h-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          >
            <source src="/videos/HeroVideo.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Bottom Content */}
        <div className="shrink-0 flex justify-between items-stretch gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* CTA */}
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-light hover:text-accent transition-colors mb-4"
            >
              <span className="text-sm">Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            {/* Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-4">
              <span className="text-light">Aris Antonio</span>
              <span className="text-[#8C8C8C] whitespace-nowrap"> brings ideas to life</span>
              <br/>
              <span className="text-[#8C8C8C] whitespace-nowrap">through code and intuitive design</span>
            </h1>
            
            {/* Social Links */}
            <div className="flex gap-3 items-center">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8C8C8C] hover:text-light transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8C8C8C] hover:text-light transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C8C8C] hover:text-light transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Video Container */}
          <div className="hidden lg:block flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-dark/50">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/FillerVideo1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};