export const PhilosophySection = () => {
  return (
    <section className="min-h-screen bg-dark overflow-hidden flex items-center">
      <div className="w-full px-4 sm:px-5 lg:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Quote */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-8 max-w-4xl">
            <span className="text-light">"Stay on track,</span>
            <span className="text-[#8C8C8C]"> move forward with purpose, and carry others smoothly on the journey."</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Philosophy Text */}
            <div className="flex-1 space-y-6 text-base sm:text-lg">
              <p className="text-[#8C8C8C] leading-relaxed">
                Trains are steady, intentional, and reliable. They don't rush like cars or fly like planes—but they always arrive.
              </p>
              
              <p className="text-light leading-relaxed">
                Similarly, great UI/UX and frontend development isn't about shortcuts—it's about consistency, user-centric flow, and clear direction.
              </p>
            </div>

            {/* Small Video Container */}
            <div className="w-full lg:w-96 h-64 relative rounded-2xl overflow-hidden bg-dark/50">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/FillerVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};