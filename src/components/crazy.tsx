'use client';

import React from 'react';
import { Bot, Sparkles, Zap } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const Crazy = () => {
  return (
    <div className="mx-auto w-full max-w-sm dark:bg-zinc-900">
      <BackgroundGradient className="rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 text-white rounded-full bg-black dark:bg-white dark:text-black flex items-center justify-center">
            <Bot size={24} />
          </div>
          <span className="text-base sm:text-lg text-black mt-1 mb-1 dark:text-neutral-200 font-bold">
            The Origin Story
          </span>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This isn't just a website. It started as a challenge:
          <i className="font-semibold text-neutral-800 dark:text-neutral-200"> "Can a portfolio speak for itself?"</i>
        </p>

        <div className="my-6">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            Trained on my real experiences
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-500" />
            Powered by Gemini 1.5 Flash
          </p>
        </div>

        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Ask it anything </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Beta
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
};

export default Crazy;