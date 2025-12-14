// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

/* =========================================================
   PROJECT DATABASE
========================================================= */

const PROJECT_CONTENT = [
  /* ===================== 1. AI PORTFOLIO ===================== */
  {
    title: 'AI-Portfolio',
    description:
      'Not a static portfolio — this one talks back. An AI-personal portfolio where an AI avatar answers questions about my skills, projects, and experience in real time. It represents a shift from traditional browsing to interactive conversational discovery.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'OpenAI API',
      'Mistral AI',
      'Node.js',
      'Vercel',
    ],
    date: '2025',
    links: [
      {
        name: 'Live Demo',
        url: 'https://www.sahil.bio',
        icon: ExternalLink,
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/Sahil-s-Portfolio',
        icon: Github,
      },
    ],
    images: [
      { src: '/projects/ai-portfolio-1.png', alt: 'AI portfolio homepage' },
      { src: '/projects/ai-portfolio-2.png', alt: 'AI portfolio chat interface' },
      { src: '/projects/ai-portfolio-3.png', alt: 'AI portfolio features' },
      { src: '/projects/ai-portfolio-4.png', alt: 'AI portfolio details' },
    ],
  },

  /* ===================== 2. e-DRISHTI ===================== */
  {
    title: 'e-Drishti',
    description:
      'AI-powered telemedicine and remote patient monitoring system. Uses live camera feeds and OCR to extract vitals in real time and enables ICU-like monitoring for remote patients. Designed to bridge the gap between rural patients and urban medical expertise.',
    techStack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Socket.io',
      'MySQL',
      'Tesseract OCR',
      'Hugging Face',
      'Qwen-VL',
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/e-Drishti',
        icon: Github,
      },
    ],
    images: [
      { src: '/projects/edrishti-landing.png', alt: 'e-Drishti Landing Page' },
      { src: '/projects/edrishti-dashboard.png', alt: 'ICU Dashboard' },
      { src: '/projects/edrishti-camera.png', alt: 'Live Camera Vitals Analysis' },
      { src: '/projects/edrishti-vitals.png', alt: 'Extracted Vitals History' },
      { src: '/projects/edrishti-charts.png', alt: 'Vitals Trends and Analytics' },
    ],
  },

  /* ===================== 3. SAARTHI ===================== */
  {
    title: 'SAARTHI – AI Career Coach',
    description:
      'AI-powered career assistant that helps job seekers with resume building, interview preparation, and personalized career guidance using Gemini AI. It acts as a personal mentor, analyzing market trends to offer tailored advice.',
    techStack: [
      'React',
      'Next.js',
      'Gemini AI',
      'Prisma ORM',
      'NeonDB',
      'Vercel',
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/saarthi',
        icon: Github,
      },
    ],
    images: [
      { src: '/projects/saarthi-job-tracker.png', alt: 'Job Application Tracker' },
      { src: '/projects/saarthi-resume-builder.png', alt: 'AI Resume Builder' },
      { src: '/projects/saarthi-interview-prep.png', alt: 'Interview Preparation' },
      { src: '/projects/saarthi-industry-insights.png', alt: 'Industry Trends & Insights' },
      { src: '/projects/saarthi-cover-letters.png', alt: 'AI Cover Letter Generator' },
    ],
  },

  /* ===================== 4. FITMATE ===================== */
  {
    title: 'FitMate',
    description:
      'AI-powered fitness companion that provides personalized workout and diet recommendations based on user goals and activity patterns. Includes voice-activated coaching for a hands-free workout experience.',
    techStack: [
      'React',
      'JavaScript',
      'AI APIs',
      'Frontend Architecture',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/fitmate',
        icon: Github,
      },
    ],
    images: [
      { src: '/projects/fitmate-home.png', alt: 'FitMate AI Landing Page' },
      { src: '/projects/fitmate-voice-ready.png', alt: 'Voice Conversation Setup' },
      { src: '/projects/fitmate-voice-chat.png', alt: 'AI Voice Coach Interface' },
    ],
  },

  /* ===================== OTHER PROJECTS ===================== */


  {
    title: 'Brain Tumor Classification',
    description:
      'Deep learning based brain tumor detection system using CNNs for MRI image classification. Achieves high accuracy in distinguishing between gliomas, meningiomas, and pituitary tumors.',
    techStack: [
      'Python',
      'CNN',
      'Deep Learning',
      'Flask',
      'TensorFlow',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/Brain-Tumor-Classification-Using-Deep-Learning',
        icon: Github,
      },
    ],
    images: [
      { src: '/projects/brain-tumor-predict-ui.png', alt: 'Brain Tumor Prediction Interface' },
      { src: '/projects/brain-tumor-result-yes.png', alt: 'Classification Result: Tumor Detected' },
      { src: '/projects/brain-tumor-result-no.png', alt: 'Classification Result: Healthy' },
    ],
  },

  {
    title: 'Diwali Sales Analysis',
    description:
      'Exploratory data analysis project extracting consumer insights and sales trends from Diwali sales datasets. Visualizes purchasing patterns across different demographics and product categories.',
    techStack: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Data Analysis',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/Diwali-Sales-Analysis-using-Python',
        icon: Github,
      },
    ],
    images: [
      { src: '/projects/diwali-sales-state-amount.png', alt: 'Total Sales Amount by State' },
      { src: '/projects/diwali-sales-state-orders.png', alt: 'Total Orders by State' },
      { src: '/projects/diwali-sales-product-amount.png', alt: 'Sales Amount by Product Category' },
      { src: '/projects/diwali-sales-product-count.png', alt: 'Product Category Count' },
      { src: '/projects/diwali-sales-data-head.png', alt: 'Dataset Overview' },
    ],
  },
];

/* =========================================================
   PROJECT CONTENT COMPONENT
========================================================= */

interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find(
    (p) => p.title === project.title
  );

  if (!projectData) return <div>Project not found</div>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="rounded-3xl bg-neutral-50 p-6 md:p-8 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">{projectData.date}</span>
        </div>

        <p className="text-base leading-relaxed md:text-lg text-neutral-700 dark:text-neutral-300">
          {projectData.description}
        </p>

        <div className="mt-8">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {projectData.techStack.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="px-3 py-1 text-sm bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 shadow-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      {projectData.links.length > 0 && (
        <motion.div variants={itemVariants}>
          <Separator className="mb-6 opacity-50" />
          <div className="flex flex-col sm:flex-row gap-4">
            {projectData.links.map((link, i) => {
              const Icon = link.icon || ExternalLink;
              return (
                <Button
                  key={i}
                  asChild
                  variant="outline"
                  className="h-12 justify-between gap-4 rounded-xl border-neutral-200 bg-white/50 px-6 hover:bg-neutral-100 hover:text-black dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:bg-neutral-800 dark:hover:text-white transition-all shadow-sm"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span className="font-medium">{link.name}</span>
                    <Icon className="h-4 w-4 opacity-70" />
                  </a>
                </Button>
              )
            })}
          </div>
        </motion.div>
      )}

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4">
        {projectData.images.map((img, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm transition-all hover:shadow-md"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MAIN EXPORT (ORDERED)
   Note: We re-export the list here used by the carousel.
========================================================= */

export const data = [
  {
    category: 'AI & Portfolio',
    title: 'AI-Portfolio',
    src: '/projects/ai-portfolio-1.png',
    content: <ProjectContent project={{ title: 'AI-Portfolio' }} />,
  },
  {
    category: 'Healthcare AI',
    title: 'e-Drishti',
    src: '/projects/edrishti-landing.png',
    content: <ProjectContent project={{ title: 'e-Drishti' }} />,
  },
  {
    category: 'AI Career Tools',
    title: 'SAARTHI – AI Career Coach',
    src: '/projects/saarthi-job-tracker.png',
    content: <ProjectContent project={{ title: 'SAARTHI – AI Career Coach' }} />,
  },
  {
    category: 'AI & Fitness',
    title: 'FitMate',
    src: '/projects/fitmate-home.png',
    content: <ProjectContent project={{ title: 'FitMate' }} />,
  },

  {
    category: 'Deep Learning',
    title: 'Brain Tumor Classification',
    src: '/projects/brain-tumor-predict-ui.png',
    content: <ProjectContent project={{ title: 'Brain Tumor Classification' }} />,
  },
  {
    category: 'Data Analytics',
    title: 'Diwali Sales Analysis',
    src: '/projects/diwali-sales-state-amount.png',
    content: <ProjectContent project={{ title: 'Diwali Sales Analysis' }} />,
  },
];
