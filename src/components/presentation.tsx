'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Presentation() {
  const profile = {
    name: 'Sahil Mishra',
    role: 'AI & Machine Learning Engineer', // Updated role
    location: 'Narela, Delhi',
    description:
      "Mixing math, logic, and a touch of chaos to create intelligent systems.\nWhen the models work, it’s science. When they don’t, it’s… still science.",
    src: '/profile-sahil.jpg', // Updated to the likely newer image
    fallbackSrc:
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3',
    socials: {
      github: 'https://github.com/sahilmishra108',
      linkedin: 'https://linkedin.com/in/sahilmishra108', // Assumed based on username pattern
      email: 'mailto:contact@sahilmishra.com', // Placeholder or generic
    },
    tags: [
      'Artificial Intelligence',
      'Deep Learning',
      'Next.js',
      'TypeScript',
      'Python',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
        >
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 lg:order-1 order-2">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Available for work
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {profile.name}
              </h1>
              <h2 className="text-xl text-muted-foreground md:text-2xl font-medium">
                {profile.role}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed whitespace-pre-line leading-relaxed">
                {profile.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Link href={profile.socials.github} target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              {/* Optional: Add a 'Contact' button logic or just usage of chat */}
              <Button className="rounded-full px-6" onClick={() => window.location.href = '/chat'}>
                Contact Me <Terminal className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div variants={itemVariants} className="flex justify-center items-center lg:order-2 order-1">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              {/* Background Blobs/Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-2xl dark:from-primary/40 dark:via-primary/20" />

              {/* Image Container with custom shape */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-2 border-border/50 bg-background/50 shadow-2xl backdrop-blur-sm transition-all hover:scale-[1.02] duration-500">
                <Image
                  src={profile.src}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = profile.fallbackSrc;
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Presentation;
