export const PhilosophySection = () => {
  return (
    <section className="hidden h-screen bg-dark overflow-hidden px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6">
      <div className="relative h-[calc(100vh-32px)] sm:h-[calc(100vh-40px)] lg:h-[calc(100vh-48px)] rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Full-screen Video */}
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
      
      {/* Hidden Content (for later use) */}
      <div className="hidden">
        <div className="w-full px-4 sm:px-5 lg:px-6 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Main Quote */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-6 sm:mb-8 max-w-4xl">
              <span className="text-light">&ldquo;Stay on track,</span>
              <span className="text-[#8C8C8C]"> move forward with purpose, and carry others smoothly on the journey.&rdquo;</span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Philosophy Text */}
              <div className="flex-1 space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg">
                <p className="text-[#8C8C8C] leading-relaxed">
                  Trains are steady, intentional, and reliable. They don&apos;t rush like cars or fly like planes—but they always arrive.
                </p>
                
                <p className="text-light leading-relaxed">
                  Similarly, great UI/UX and frontend development isn&apos;t about shortcuts—it&apos;s about consistency, user-centric flow, and clear direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};