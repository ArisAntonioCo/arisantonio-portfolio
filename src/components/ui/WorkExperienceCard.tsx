interface WorkExperienceCardProps {
  title: string;
  company: string;
  location: string;
  skills: string[];
  timespan: string;
  workType: string;
  companyLogo?: string;
  isLast?: boolean;
}

export const WorkExperienceCard = ({ 
  title, 
  company,
  location,
  skills,
  timespan,
  workType,
  companyLogo,
  isLast = false 
}: WorkExperienceCardProps) => {
  return (
    <div className={`${!isLast ? 'border-b border-gray-200' : ''} px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 flex flex-col justify-between min-h-[50%]`}>
      {/* Top Section */}
      <div>
        {/* Title and Timespan */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-normal text-black" style={{ fontFamily: 'NeuePixelGrotesk, monospace' }}>{title}</h3>
          <span className="px-3 py-1 bg-black text-white text-xs rounded-lg flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {timespan}
          </span>
        </div>
        
        {/* Skills */}
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 bg-black/5 rounded-lg text-xs text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-end justify-between mt-6">
        {/* Company and Location */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex-shrink-0">
            {companyLogo && (
              <img src={companyLogo} alt={company} className="w-full h-full object-cover rounded-lg" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-black">{company}</p>
            <p className="text-xs text-[#666666]">{location}</p>
          </div>
        </div>
        
        {/* Work Type */}
        <span className="text-xs text-[#666666] capitalize">{workType}</span>
      </div>
    </div>
  );
};