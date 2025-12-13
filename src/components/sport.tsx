'use client';

import React from 'react';
import Image from 'next/image';

const Sports = () => {
  const images = ['/1%20pic.jpg', '/2%20pic.jpg', '/3%20pic.jpg'];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          🏅 Not Just Tech - I'm Built for the Fast Lane
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          (On Wheels, Tables, and Consoles)
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground text-base">
        <p>
          Before I dove deep into development, I was speeding through life quite
          literally on skates 🛼. I’ve been skating since childhood and even
          made it to the national level. It taught me discipline, balance, and
          how to keep moving forward no matter the bumps (or bruises).
        </p>
        <p>
          My love for sports didn’t stop there. I’ve proudly captained my college
          snooker team 🎱—snooker’s actually my all-time favorite. It's a game
          of precision, patience, and strategy, basically debugging, but with
          more chalk and cooler posture.
        </p>
        <p>
          On the virtual side of things, I was also part of a professional
          esports team 🎮. It’s high-speed, high-pressure, and weirdly similar
          to deploying a complex AI model with zero margin for error.
        </p>
        <p>
          When I’m not leading code or cue sports, you’ll catch me on a bike
          ride 🏍️—it’s my way to chase the thrill and hit pause on the chaos.
          Two wheels, open roads, and some deep thinking time works every time.
        </p>
        <p>
          And just for fun? I enjoy a game of badminton 🏸, a match of football
          ⚽, or a thoughtful round of chess ♟️. Win or lose, it’s all part of
          staying sharp mentally and physically.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={src}
              alt={`Sahil Activity ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;