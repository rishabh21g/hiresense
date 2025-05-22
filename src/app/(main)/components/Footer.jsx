import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const socialLinks = [
    {
      href: 'mailto:25f1002822@ds.study.iitm.ac.in',
      icon: <FaEnvelope className="w-5 h-5" />,
      label: 'Email',
    },
    {
      href: 'https://github.com/rishabh21g',
      icon: <FaGithub className="w-5 h-5" />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/rishabh19g',
      icon: <FaLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
    },
    {
      href: 'https://x.com/rishabh21g',
      icon: <FaTwitter className="w-5 h-5" />,
      label: 'Twitter',
    },
    {
      href: 'https://www.instagram.com/rishabh21g_',
      icon: <FaInstagram className="w-5 h-5" />,
      label: 'Instagram',
    },
  ];

  return (
    <footer className="relative pt-20 pb-12 text-center bg-muted/40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-primary/30 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-primary mb-4">
          Let’s Connect with the Developer of Hiresense
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Built by Rishabh Gupta. Reach out for collaboration, opportunities, or just to say hi!
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          {socialLinks.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
            >
              {icon}
              <span className="text-sm sm:text-base">{label}</span>
            </Link>
          ))}
        </div>

        <Separator className="my-6 max-w-3xl mx-auto" />

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hiresense. Made by Rishabh Gupta.
        </p>
      </div>
    </footer>
  );
}
