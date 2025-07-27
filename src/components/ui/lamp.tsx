"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      {/* Header (Above Line) */}
      <motion.h1
        initial={{ opacity: 0.5, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl text-center"
      >
        Hi! I'm Arvin Milan
      </motion.h1>

{/* Cyan Line with Glow Below */}
<div className="relative w-full flex justify-center items-center mt-[1rem] mb-4">
  {/* Cyan line animation */}
  <motion.div
    initial={{ width: "15rem" }}
    whileInView={{ width: "30rem" }}
    transition={{
      delay: 0.4,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="h-0.5 bg-cyan-400 z-10"
    style={{ width: "30rem" }}
  />

  {/* Glow strictly below the line */}
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 h-24 w-96 rounded-full bg-cyan-400/30 blur-2xl z-0" />
</div>


{/* Profile Image with Glow Behind */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.6, duration: 0.6 }}
  className="relative flex justify-center items-center mb-4"
>
  {/* Glowing aura behind profile */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 md:h-72 md:w-72 rounded-full bg-cyan-400/40 blur-3xl z-0" />

  {/* Profile image in front */}
  <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-cyan-400">
    <img
      src="/pic.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>


      {/* Subheader / Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto text-center"
      >
        I'm a former web developer turned data analyst, passionate about transforming data into meaningful solutions. With a strong technical foundation and a drive to grow, I'm on a path toward building scalable data systems as a future data engineer.
      </motion.p>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 px-5",
        className
      )}
    >
      {/* Background Lamp Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-50 flex flex-col items-center w-full">
        {children}
      </div>
    </div>
  );
};
