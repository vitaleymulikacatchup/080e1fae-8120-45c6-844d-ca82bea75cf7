"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Briefcase, Clock, Code, Dribbble, Github, Linkedin, Mail, Monitor, Palette, Server, Smartphone, TrendingUp, Twitter, User, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Afeef"
          button={{
            text: "Contact",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Full Stack Developer & UI Designer"
          description="I create beautiful, functional web applications with modern technologies. Specializing in React, Next.js, and user-centered design principles."
          tag="Afeef Uddin"
          tagIcon={Code}
          imageSrc="https://images.pexels.com/photos/5483155/pexels-photo-5483155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Afeef Uddin - Full Stack Developer"
          imagePosition="right"
          buttons={[
            {
              text: "View My Work",
              href: "projects"
            },
            {
              text: "Get In Touch",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Me"
          description="Passionate developer with expertise in modern web technologies and user experience design. I love creating digital solutions that make a difference."
          tag="Who I Am"
          tagIcon={User}
          imageSrc="https://images.pexels.com/photos/16129703/pexels-photo-16129703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Developer workspace"
          imagePosition="left"
          bulletPoints={[
            {
              title: "Frontend Expertise",
              description: "React, Next.js, TypeScript, Tailwind CSS",
              icon: Monitor
            },
            {
              title: "Backend Development",
              description: "Node.js, Express, PostgreSQL, MongoDB",
              icon: Server
            },
            {
              title: "UI/UX Design",
              description: "Figma, Adobe Creative Suite, Design Systems",
              icon: Palette
            },
            {
              title: "Mobile Development",
              description: "React Native, Flutter, Progressive Web Apps",
              icon: Smartphone
            }
          ]}
        />
      </div>

      <div id="projects" data-section="projects">
        <FeatureCardOne
          title="Featured Projects"
          description="A showcase of my recent work in web development and design"
          tag="Portfolio"
          tagIcon={Briefcase}
          features={[
            {
              title: "E-Commerce Platform",
              description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory management and responsive design.",
              imageSrc: "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "E-commerce platform interface",
              button: {
                text: "View Project",
                href: "https://github.com/afeefuddin"
              }
            },
            {
              title: "Task Management App",
              description: "React Native mobile app with cross-platform compatibility. Includes offline sync, push notifications, and team collaboration features.",
              imageSrc: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Task management mobile app",
              button: {
                text: "View Project",
                href: "https://github.com/afeefuddin"
              }
            },
            {
              title: "Portfolio Website",
              description: "Modern portfolio website built with Next.js and Framer Motion. Features smooth animations and optimized performance.",
              imageSrc: "https://images.pexels.com/photos/5598/tablet-galaxy-white-blog.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portfolio website design",
              button: {
                text: "View Project",
                href: "https://github.com/afeefuddin"
              }
            }
          ]}
        />
      </div>

      <div id="skills" data-section="skills">
        <MetricCardThree
          title="Skills & Expertise"
          description="Technical proficiencies and experience metrics"
          tag="Stats"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Code,
              title: "Projects",
              value: "50+"
            },
            {
              id: "2",
              icon: Users,
              title: "Clients",
              value: "25+"
            },
            {
              id: "3",
              icon: Clock,
              title: "Experience",
              value: "3 Years"
            },
            {
              id: "4",
              icon: Award,
              title: "Technologies",
              value: "15+"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TeamCardThree
          title="Collaborations"
          description="Some of the amazing people I've worked with"
          tag="Network"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Product Manager",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Design Lead",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen",
              socialLinks: [
                {
                  icon: Dribbble,
                  url: "https://dribbble.com"
                }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Tech Startup Founder",
              imageSrc: "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "4",
              name: "David Kim",
              role: "CTO",
              imageSrc: "https://images.pexels.com/photos/6896321/pexels-photo-6896321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Let's Connect"
          tagIcon={Mail}
          title="Ready to start your project?"
          description="I'm always interested in new opportunities and collaborations. Let's discuss how we can work together to bring your ideas to life."
          inputPlaceholder="Your email address"
          buttonText="Get In Touch"
          termsText="I'll get back to you within 24 hours. No spam, just genuine conversation."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Work",
              items: [
                {
                  label: "Projects",
                  href: "projects"
                },
                {
                  label: "Case Studies",
                  href: "case-studies"
                },
                {
                  label: "Process",
                  href: "process"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Bio",
                  href: "about"
                },
                {
                  label: "Skills",
                  href: "skills"
                },
                {
                  label: "Experience",
                  href: "experience"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/afeefuddin"
                },
                {
                  label: "GitHub",
                  href: "https://github.com/afeefuddin"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Afeef Uddin"
        />
      </div>
    </ThemeProvider>
  );
}