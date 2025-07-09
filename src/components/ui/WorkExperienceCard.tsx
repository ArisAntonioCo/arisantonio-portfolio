interface WorkExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isLast?: boolean;
}

export const WorkExperienceCard = ({ 
  title, 
  company, 
  period, 
  description, 
  skills,
  isLast = false 
}: WorkExperienceCardProps) => {
  return (
    <div className={`flex-1 ${!isLast ? 'border-b border-gray-200' : ''} px-4 sm:px-5 lg:px-6 py-8 sm:py-10 lg:py-12 flex flex-col justify-center`}>
      <div className="max-w-2xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-medium text-black mb-1">{title}</h3>
            <p className="text-lg text-[#666666]">{company}</p>
          </div>
          <span className="text-sm text-[#666666]">{period}</span>
        </div>
        <p className="text-base text-[#666666] leading-relaxed">
          {description}
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-black/5 rounded-full text-sm text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};