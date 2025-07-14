"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

const CaseStudiesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.section 
      className="w-full" 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1.5">
        {caseStudies.slice(0, 4).map((caseStudy, index) => (
          <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`}>
            <motion.div
              className="block relative overflow-hidden group cursor-pointer bg-container rounded-xl aspect-video"
              variants={itemVariants}
            >
              {/* Background - Container color fallback, image or video */}
              {caseStudy.thumbnail && caseStudy.thumbnail.endsWith('.mp4') ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={caseStudy.thumbnail} type="video/mp4" />
                </video>
              ) : (
                <div
                  className={`absolute inset-0 transition-transform duration-300 group-hover:scale-105 bg-cover bg-center ${!caseStudy.thumbnail ? 'bg-container' : ''}`}
                  style={caseStudy.thumbnail ? { backgroundImage: `url(${caseStudy.thumbnail})` } : {}}
                />
              )}
              
              {/* Dark overlay for video/image backgrounds */}
              {caseStudy.thumbnail && (
                <div className="absolute inset-0 bg-black/40" />
              )}
              
              {/* Case Study Header */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-3 py-2 sm:px-5 sm:py-3">
                <div className="flex items-center gap-3">
                  <h3
                    className={`font-normal text-xs ${caseStudy.thumbnail ? "text-white" : "text-foreground"}`}
                  >
                    {caseStudy.name}
                  </h3>
                  <span
                    className={`font-normal text-xs ${caseStudy.thumbnail ? "text-white" : "text-foreground"} opacity-60`}
                  >
                    {caseStudy.category}
                  </span>
                </div>
                <span
                  className={`font-normal text-xs ${caseStudy.thumbnail ? "text-white" : "text-foreground"}`}
                >
                  {String(4 - index).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CaseStudiesSection;