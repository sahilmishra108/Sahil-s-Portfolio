// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

/* =========================================================
   PROJECT DATABASE
========================================================= */

const PROJECT_CONTENT = [
  /* ===================== 1. AI PORTFOLIO ===================== */
  {
    title: 'AI-Portfolio',
    description:
      'Not a static portfolio — this one talks back. An AI-personal portfolio where an AI avatar answers questions about my skills, projects, and experience in real time.',
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
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/Sahil-s-Portfolio',
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
      'AI-powered telemedicine and remote patient monitoring system. Uses live camera feeds and OCR to extract vitals in real time and enables ICU-like monitoring for remote patients.',
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
      'AI-powered career assistant that helps job seekers with resume building, interview preparation, and personalized career guidance using Gemini AI.',
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
      'AI-powered fitness companion that provides personalized workout and diet recommendations based on user goals and activity patterns.',
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
      'Deep learning based brain tumor detection system using CNNs for MRI image classification.',
    techStack: [
      'Python',
      'CNN',
      'Deep Learning',
      'Flask',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/Brain-Tumor-Classification-Using-Deep-Learning',
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
      'Exploratory data analysis project extracting consumer insights and sales trends from Diwali sales datasets.',
    techStack: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Data Analysis',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/sahilmishra108/Diwali-Sales-Analysis-using-Python',
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

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <span className="text-sm text-neutral-500">{projectData.date}</span>

        <p className="mt-4 text-base leading-relaxed">
          {projectData.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {projectData.techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-neutral-200 px-3 py-1 text-sm dark:bg-neutral-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {projectData.links.length > 0 && (
        <div>
          <Separator />
          <div className="mt-4 space-y-2">
            {projectData.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className="flex items-center justify-between rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4" />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {projectData.images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={675}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   MAIN EXPORT (ORDERED)
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
