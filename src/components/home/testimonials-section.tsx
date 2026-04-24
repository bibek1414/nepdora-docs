"use client";

import React from "react";

const testimonials = [
  {
    name: "shadcn",
    role: "Creator of Shadcn UI",
    content:
      "Major shoutout to @nepdora for making fumadocs, a gorgeous documentation framework that composes beautifully into the App Router.",
    avatar: "SC",
  },
  {
    name: "Anthony Shew",
    role: "Turbo DX at Vercel",
    content: "nepdora is the best Next.js docs framework",
    avatar: "AS",
  },
  {
    name: "Aiden Bai",
    role: "Creator of Million.js",
    content:
      "I'd have no shot building @arktypeio docs that looked half this good without it 😍",
    avatar: "AB",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by awesome teams and developers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-muted/50 border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-semibold mr-3 text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
