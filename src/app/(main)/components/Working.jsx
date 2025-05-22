"use client";

import React from 'react';
import { CheckCircle, Mic, PenSquare, Users } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const steps = [
  {
    icon: PenSquare,
    title: 'Set Job Requirements',
    description: 'Define the job position and required skills to create a custom interview experience.',
  },
  {
    icon: CheckCircle,
    title: 'Generate Questions',
    description: 'Hiresense uses Gemini AI to create tailored questions that assess specific job competencies.',
  },
  {
    icon: Mic,
    title: 'Conduct Voice Interviews',
    description: 'Candidates participate in interactive voice interviews powered by Vapi AI technology.',
  },
  {
    icon: Users,
    title: 'Analyze Responses',
    description: 'Get detailed insights and candidate comparisons with secure transcription and summarization.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hiresense simplifies the interview process with an AI-powered platform that saves time and improves hiring quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center text-center p-6 rounded-lg bg-card border"
              )}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
