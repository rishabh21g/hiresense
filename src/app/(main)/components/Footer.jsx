import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="relative pt-16 pb-12 md:pt-24 md:pb-16 text-center overflow-hidden bg-muted/40">
      {/* Background gradient like HeroSection */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background to-background/90" />
      <div className="absolute inset-0 -z-10 h-full w-full opacity-30 dark:opacity-20">
        <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-teal-500 to-primary bg-clip-text text-transparent mb-4">
          Let’s Connect -with our dev of Hiresense
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Built by Rishabh Gupta. Reach out for collaboration, opportunities, or just to say hi!
        </p>

        <div className="flex justify-center gap-6 flex-wrap mb-10 text-muted-foreground">
          <Link href="mailto:25f1002822@ds.study.iitm.ac.in" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
            <FaEnvelope className="w-5 h-5" />
            Email
          </Link>
          <Link href="https://github.com/rishabh21g" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
            <FaGithub className="w-5 h-5" />
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/rishabh19g" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </Link>
          <Link href="https://x.com/rishabh21g" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
            <FaTwitter className="w-5 h-5" />
            Twitter
          </Link>
          <Link href="https://www.instagram.com/rishabh21g_" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
            <FaInstagram className="w-5 h-5" />
            Instagram
          </Link>
        </div>

        <Separator className="my-6 max-w-3xl mx-auto" />

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hiresense. Made  by Rishabh Gupta.
        </p>
      </div>
    </footer>
  );
}
