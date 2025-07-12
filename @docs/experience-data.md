# Experience Data Structure

Based on the WorkExperienceCard component, each experience entry should follow this structure:

```typescript
{
  title: string;          // Job title
  company: string;        // Company name
  location: string;       // Location (e.g., "San Francisco, CA" or "Remote")
  description?: string;   // Optional job description (currently commented out in component)
  skills: string[];       // Array of skills/technologies used
  timespan: string;       // Duration (e.g., "Jan 2023 - Present")
  workType: string;       // Type of work (e.g., "full-time", "part-time", "contract", "freelance")
  companyLogo?: string;   // Optional path to company logo image
}
```

## Experience Entries

### Experience 1
```json
{
  "title": "Software Developer & UI/UX Designer",
  "company": "Zaigo Labs",
  "location": "New York City, USA",
  "description": "",
  "skills": ["Prompt Engineering", "Agentic Coding", "Frontend Development", "Backend Development", "Meta Ads Manager", "SEO", "User Research", "Copywriting", "Marketing", "Media Generation", "User Interface Design", "User Experience", "AI Automation", "Generative AI", "UI/UX Design"],
  "timespan": "Jun 2025 - Present",
  "workType": "full-time",
  "companyLogo": "/images/companies/company1-logo.png"
}
```

### Experience 2
```json
{
  "title": "Product Development",
  "company": "Calibr8 Systems, Inc.",
  "location": "Metro Manila, PH",
  "description": "",
  "skills": ["User Interface Design", "User Experience", "User Research", "Fullstack Development", "Product Design", "Wireframing", "Prototyping"],
  "timespan": "Feb 2025 - April 2025",
  "workType": "Internship",
  "companyLogo": "/images/companies/company2-logo.png"
}
```

### Experience 3
```json
{
  "title": "Information Technology Student",
  "company": "Silliman University",
  "location": "Dumaguete City, PH",
  "description": " ",
  "skills": ["Software Development", "Capstone", "Game Development", "UI/UX Design", "Networking", "Data Structures"],
  "timespan": "Aug 2021 - April 2025",
  "workType": "Student",
  "companyLogo": "/images/companies/company3-logo.png"
}
```

## Notes:
1. Keep skill names concise and recognizable
2. Use consistent date format for timespan (e.g., "Jan 2023 - Present")
3. workType should be lowercase and can be: full-time, part-time, contract, freelance, or internship
4. Company logos should be placed in `/public/images/companies/` directory
5. Logo images should be square format for best display (the component shows them as 40x40px)
6. The description field is optional and currently commented out in the component
7. Order experiences chronologically with most recent first