"use client"

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const {user}= useUser()

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0 -z-10 h-full w-full opacity-30 dark:opacity-20">
        <div className="absolute -top-[50%] right-0 h-[1000px] w-[1000px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -bottom-[30%] left-0 h-[800px] w-[800px] rounded-full bg-teal-500/20 blur-[100px]" />
      </div>

      <div 
        className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1 backdrop-blur-sm border-primary/20">
            <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
            <span>Revolutionizing the hiring process</span>
          </Badge>

          <div className="space-y-4 mb-6">
            <h1 className="font-bold tracking-tight text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-teal-500 to-primary">
              Hiresense
            </h1>
            <p className="text-4xl md:text-5xl font-bold">
              Smarter Interviews Start Here
            </p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            Transform your hiring process with AI-powered interviews, real-time voice analysis, and secure data management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link href={user?.email ? "/dashboard" : "/auth"}>
            <Button size="lg" className="gap-2 text-base bg-primary hover:bg-primary/90">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            </Link>
            <Link href={"https://x.com/rishabh21g"}>
            <Button size="lg" variant="outline" className="text-base">
              Book a Demo
            </Button>
            </Link>
          </div>

          <div className="mt-16 md:mt-24 w-full max-w-4xl relative">
            
            <div className="rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hiresense AI Interview Platform Dashboard" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}