export const TechnicalStackSection = () => {
  return (
    <section className="min-h-screen bg-dark overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col px-4 sm:px-5 lg:px-6 pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-5 lg:pb-6 gap-4 sm:gap-5 lg:gap-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-8">
          <h2 className="text-sm font-normal">
            <span className="text-[#8C8C8C]">Technical Stack</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-white max-w-2xl text-right">
            A comprehensive overview of the technologies, frameworks, and tools I leverage to build <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>modern</span>, <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>scalable</span>, and <span style={{ fontFamily: 'NeuePixelGrotesk, monospace', fontWeight: 300 }}>performant applications</span>.
          </p>
        </div>
      </div>
    </section>
  );
};