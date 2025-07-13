"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { COLORS, SPACING, RADII, TYPOGRAPHY } from "@/lib/constants/design-tokens";

const ProjectsSection = () => {
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
      style={{ marginTop: "6px" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1.5">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.id}
            className="block relative overflow-hidden group cursor-pointer"
            style={{
              backgroundColor: COLORS.container,
              borderRadius: RADII.xl,
              aspectRatio: "16 / 9",
            }}
            variants={itemVariants}
          >
            {/* Background - White fallback, image or video */}
            {project.image && project.image.endsWith('.mp4') ? (
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={project.image} type="video/mp4" />
              </video>
            ) : (
              <div
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: project.image ? undefined : "#FFFFFF",
                  backgroundImage: project.image ? `url(${project.image})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            
            {/* Dark overlay for video/image backgrounds */}
            {project.image && (
              <div className="absolute inset-0 bg-black/40" />
            )}
            
            {/* Project Header */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-3 py-2 sm:px-5 sm:py-3">
              <div className="flex items-center gap-3">
                <h3
                  className="font-normal"
                  style={{
                    fontSize: "12px",
                    color: project.image ? "#FFFFFF" : COLORS.foreground,
                  }}
                >
                  {project.name}
                </h3>
                <span
                  className="font-normal"
                  style={{
                    fontSize: "12px",
                    color: project.image ? "#FFFFFF" : COLORS.foreground,
                    opacity: 0.6,
                  }}
                >
                  {project.category}
                </span>
              </div>
              <span
                className="font-normal"
                style={{
                  fontSize: "12px",
                  color: project.image ? "#FFFFFF" : COLORS.foreground,
                }}
              >
                {String(4 - index).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;