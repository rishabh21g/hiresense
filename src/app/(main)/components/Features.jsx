"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, ShieldCheck, Mic2, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: BrainCircuit,
    title: 'AI-Generated Questions',
    description: 'Create job-specific interview questions automatically using Gemini AI technology.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Mic2,
    title: 'Voice Interviews',
    description: 'Conduct real-time voice interviews with natural language processing via Vapi AI.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Data Storage',
    description: 'Protect interview data with enterprise-grade security and Supabase encryption.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    description: 'Compare candidates with quantitative metrics and AI-powered insights.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hiresense combines cutting-edge AI technology with user-friendly interfaces to transform your hiring process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={cn(
                "border hover:shadow-md hover:border-primary/20 transition-all",
                // Removed opacity-0 and translate-y-8 classes for static display
              )}
            >
              <CardHeader>
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.bgColor)}>
                  <feature.icon className={cn("w-6 h-6", feature.color)} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
