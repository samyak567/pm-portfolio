import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ExperienceCard } from "@/components/shared/ExperienceCard";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { ArrowRight, Mail, User, MessageSquare, Video, Cpu, CheckSquare, Database, ClipboardList, Hash, ChefHat, Activity, GraduationCap } from "lucide-react";
import Link from "next/link";
import { FaYoutube, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiZomato } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <Section className="pt-24 md:pt-32 pb-16">
          <div className="max-w-4xl">
            <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-secondary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              Technical Product Manager
            </h2>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.15] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
              Designing Data-Driven Products & Intelligent Systems.
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-10 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              Technical Product Manager with 6+ years delivering enterprise financial platforms across global markets. I combine engineering depth with structured product thinking to build products from discovery to launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
              <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto px-8 transition-transform hover:scale-105 active:scale-95")}>View Projects</Link>
              <Link href="/resources/Samyak_Talesra_Resume.pdf" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto px-8 transition-transform hover:scale-105 active:scale-95")} target="_blank" rel="noopener noreferrer">Download Resume</Link>
              <Link href="#journey" className="text-sm font-medium text-secondary-foreground hover:text-foreground transition-all mt-4 sm:mt-0 sm:ml-4 group">
                View Product Journey <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </Section>

        {/* HERO METRICS */}
        <Section className="py-16 md:py-20 border-y border-border bg-surface/30">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col gap-3 md:border-r border-border md:pr-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              <span className="font-heading text-4xl font-bold text-foreground">6+ Years</span>
              <span className="text-sm font-medium text-secondary-foreground leading-snug">Enterprise FinTech<br/>Experience</span>
            </div>
            <div className="flex flex-col gap-3 md:border-r border-border md:pr-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
              <span className="font-heading text-4xl font-bold text-foreground">25%</span>
              <span className="text-sm font-medium text-secondary-foreground leading-snug">Reduction in<br/>Operational Rework</span>
            </div>
            <div className="flex flex-col gap-3 md:border-r border-border md:pr-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              <span className="font-heading text-4xl font-bold text-foreground">20%</span>
              <span className="text-sm font-medium text-secondary-foreground leading-snug">Faster Delivery<br/>Cycles</span>
            </div>
            <div className="flex flex-col gap-3 md:border-r border-border md:pr-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              <span className="font-heading text-4xl font-bold text-foreground">Global</span>
              <span className="text-sm font-medium text-secondary-foreground leading-snug">Regulatory Product<br/>Delivery</span>
            </div>
            <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both">
              <span className="font-heading text-4xl font-bold text-foreground">AI</span>
              <span className="text-sm font-medium text-secondary-foreground leading-snug">Building AI-powered<br/>SaaS Products</span>
            </div>
          </div>
        </Section>

        <Section id="projects" className="bg-surface/30 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Selected Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="YouTube New Format Capsules"
                category="AI Product"
                status="Complete"
                readingTime="6 min"
                tags={["JTBD", "RICE", "GTM"]}
                description="Airtribe PM Capstone — Designed a new 8–12 min viewer format to bridge the gap between Shorts and long-form for India's Tier 2/3 Gen Z audience. This project is grounded in primary research, including a 22-person survey and 11 creator interviews, and tied to a phased GTM strategy and monetisation model using RICE prioritisation."
                problem="Viewers struggle to retain key insights from long-form educational content on YouTube."
                solution="A processing pipeline extracting video transcripts and using LLMs to generate concise, readable knowledge capsules."
                outcome="Improved content digestion time and validated demand for bite-sized learning."
                href="/projects/youtube-capsules"
                prototypeUrl="https://youtube-capsules.lovable.app/"
                colorScheme="rose"
                fullWidth={true}
                icon={<FaYoutube />}
              />
              <ProjectCard 
                title="Spotify Daylist Analysis"
                category="Data Product"
                status="Complete"
                readingTime="5 min"
                tags={["API Integration", "Data Vis", "Analytics"]}
                description="Hooked into the Spotify API to build a dynamic dashboard tracking mood shifts, genre changes, and tempo trends based on Daylist updates."
                problem="Users lack deep, personalized analytics about shifting daily music listening habits beyond the annual wrapped."
                solution="An analytical dashboard hooking into the Spotify API to track and visualize mood and genre shifts based on Daylist updates."
                outcome="Delivered an engaging data visualization tool surfacing actionable insights."
                href="/projects/spotify-daylist"
                colorScheme="emerald"
                icon={<FaSpotify />}
              />
              <ProjectCard 
                title="WhatsApp Local Discovery"
                category="Growth"
                status="Complete"
                readingTime="4 min"
                tags={["Conversational AI", "Discovery", "Local"]}
                description="An interactive WhatsApp bot enabling users to discover local events and businesses through natural language queries, bypassing expensive ad networks."
                problem="Local businesses face friction reaching customers organically without expensive social media ad networks."
                solution="An interactive WhatsApp bot enabling users to discover local events and businesses through natural language queries."
                outcome="Demonstrated a seamless conversation-to-discovery funnel within a messaging ecosystem."
                href="/projects/whatsapp-local-discovery"
                colorScheme="blue"
                icon={<FaWhatsapp />}
              />
              <ProjectCard 
                title="Kitchen Cue"
                category="Growth"
                status="Complete"
                readingTime="5 min"
                tags={["Prototyping", "UX Testing", "Lovable"]}
                description="Designed and prototyped a smart meal planning tool targeting decision fatigue and food waste, validating core flows via rapid usability testing."
                problem="Busy individuals struggle with consistent meal planning due to time constraints, dietary needs, and poor pantry utilization."
                solution="A smart meal planning app that personalizes suggestions based on available time, dietary needs, and existing pantry ingredients."
                outcome="Validated core flows via user testing, successfully reducing meal planning friction and food waste."
                href="/projects/kitchen-cue"
                prototypeUrl="https://kitchen-cue-app.lovable.app/"
                colorScheme="amber"
                icon={<ChefHat />}
              />
              <ProjectCard 
                title="VitaFit Engagement"
                category="Retention Strategy"
                status="Complete"
                readingTime="6 min"
                tags={["Gamification", "PRD", "Community"]}
                description="PRD for a 4-feature engagement system tackling the 80% 30-day drop-off problem through instructor matching, gamification, and social accountability loops."
                problem="Users were abandoning their fitness routines due to declining motivation and a lack of social connection with instructors."
                solution="Introduced a Gamification & Rewards System alongside synchronous Community 'Watch Parties' to boost emotional connection."
                outcome="Created comprehensive product requirements focused on driving habit formation and repeat sessions."
                href="/projects/vitafit"
                colorScheme="purple"
                icon={<Activity />}
              />
              <ProjectCard 
                title="Zomato Growth Strategy"
                category="Growth Product"
                status="Complete"
                readingTime="6 min"
                tags={["AARRR", "Retention", "OKRs"]}
                description="Conducted comprehensive funnel and cohort analysis to define CY2026 OKRs focused on increasing habitual usage and long-term retention in Tier-1 cities."
                problem="Zomato needs to improve user engagement and retention by optimizing the discovery-to-delivery journey in highly saturated Tier-1 markets."
                solution="Proposed localized discovery features, gamified loyalty milestones, and AI-driven predictive ordering to reduce cognitive load."
                outcome="Established a clear North Star Metric (MTU with ≥3 orders) and defined specific product initiatives to drive habituation."
                href="/projects/zomato-engagement"
                colorScheme="rose"
                icon={<SiZomato />}
              />
              <ProjectCard 
                title="Twitter X AARRR Analysis"
                category="Growth Product"
                status="Complete"
                readingTime="8 min"
                tags={["Funnel", "Strategy", "Prioritisation"]}
                description="Deep dive into the X platform's AARRR funnel, identifying critical friction points in activation and proposing RICE-prioritised epics to bridge the gap."
                problem="High top-of-funnel acquisition via viral content fails to translate into sustainable daily active users due to a steep learning curve and feed irrelevance."
                solution="Designed product epics including a 'Topic-First Onboarding', 'Quality Filter Toggle', and 'Creator-Led Discovery Loops' to improve initial feed personalization."
                outcome="Mapped the complete user journey and identified the 'Aha!' moment needed to convert passive scrollers into engaged participants."
                href="/projects/twitter-growth"
                colorScheme="teal"
                icon={<FaXTwitter />}
              />
              <ProjectCard 
                title="EdTech Recommendation Engine"
                category="System Design"
                status="Complete"
                readingTime="7 min"
                tags={["Architecture", "ML", "PRD"]}
                description="AI-powered recommendation system designed for 3 personas — solving cold-start, choice paralysis, and content quality trade-offs through privacy-first personalization."
                problem="Users were overwhelmed by vast course catalogs, leading to stagnant engagement and high drop-off rates before completion."
                solution="Designed a scalable 3-layer machine learning recommendation engine architecture mapping user skills to career outcomes."
                outcome="Created a comprehensive product requirement document projecting a 30% increase in course completion."
                href="/projects/edtech-recommendations"
                colorScheme="indigo"
                icon={<GraduationCap />}
              />
            </div>
          </div>
        </Section>

        {/* ACTIONPILOT - FLAGSHIP */}
        <Section id="featured" className="py-24 md:py-32 border-y border-border bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-bold tracking-widest uppercase text-foreground mb-8">
                  <span className="text-lg">🚀</span> Building in Public
                </div>
                
                <h3 className="font-heading text-5xl md:text-6xl font-bold mb-6 tracking-tight">ActionPilot</h3>
                <p className="text-2xl text-primary font-medium mb-8">AI Meeting-to-Action Hub</p>
                
                <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-12">
                  Building an AI Meeting-to-Execution Platform that transforms meetings into actionable work through AI-powered task extraction, CRM updates and workflow automation.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div>
                    <div className="flex justify-between text-sm font-bold tracking-widest uppercase mb-2">
                      <span className="text-foreground">Discovery</span>
                      <span className="text-secondary-foreground">100%</span>
                    </div>
                    <div className="font-mono text-sm tracking-widest text-primary">██████████</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold tracking-widest uppercase mb-2">
                      <span className="text-foreground">Research</span>
                      <span className="text-secondary-foreground">70%</span>
                    </div>
                    <div className="font-mono text-sm tracking-widest text-primary">███████<span className="text-border">░░░</span></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold tracking-widest uppercase mb-2">
                      <span className="text-foreground">PRD</span>
                      <span className="text-secondary-foreground">30%</span>
                    </div>
                    <div className="font-mono text-sm tracking-widest text-primary">███<span className="text-border">░░░░░░░</span></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold tracking-widest uppercase mb-2">
                      <span className="text-foreground">Development</span>
                      <span className="text-secondary-foreground">0%</span>
                    </div>
                    <div className="font-mono text-sm tracking-widest text-border">░░░░░░░░░░</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link href="/projects/actionpilot" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto px-8 transition-transform hover:scale-105 active:scale-95")}>View Progress</Link>
                  <Link href="#vision" className="text-sm font-medium text-secondary-foreground hover:text-foreground transition-all w-full sm:w-auto text-center sm:text-left group">
                    Read Vision <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* WIREFRAME MOCKUP */}
              <div className="w-full lg:w-1/2">
                <div className="bg-surface/30 border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center gap-6">
                  <div className="w-full max-w-xs bg-background border border-border rounded-xl p-4 flex items-center justify-between shadow-sm">
                    <span className="font-medium tracking-wide">Client Meeting</span>
                    <Video className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  
                  <div className="h-6 w-px bg-border"></div>
                  
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="h-6 w-px bg-border"></div>

                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:border-primary/50 transition-colors cursor-default">
                      <CheckSquare className="w-5 h-5 text-secondary-foreground" />
                      <span className="text-sm font-medium tracking-wide">Extract Tasks</span>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:border-primary/50 transition-colors cursor-default">
                      <Database className="w-5 h-5 text-secondary-foreground" />
                      <span className="text-sm font-medium tracking-wide">Update CRM</span>
                    </div>
                  </div>

                  <div className="h-6 w-px bg-border"></div>

                  <div className="w-full flex justify-center gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                        <Mail className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground">Email</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground">Jira</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                        <Hash className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground">Slack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" className="bg-surface/30 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16">Experience</h2>
            <div className="flex flex-col">
              <ExperienceCard 
                company="Wolters Kluwer" 
                role="Senior Business Systems Analyst" 
                duration="Apr 2024 – Present" 
                metrics={[
                  "25% Reduction in Operational Rework",
                  "20% Faster Delivery",
                  "Global Product Expansion",
                  "Cross-functional Leadership"
                ]}
                highlights={[
                  "Led product strategy for regulatory reporting platforms across international markets.",
                  "Enabled Hong Kong market expansion.",
                  "Collaborated with global stakeholders and engineering teams to define requirements."
                ]}
              />
              <ExperienceCard 
                company="TIAA" 
                role="Software Developer" 
                duration="Sep 2019 – Apr 2024" 
                metrics={[
                  "Built enterprise systems for 7 business units",
                  "30% Reduction in manual effort",
                  "20% Platform efficiency improvement"
                ]}
                highlights={[
                  "Built enterprise financial systems supporting 7 business units.",
                  "Worked closely with product teams on requirements and feature prioritization."
                ]}
              />
            </div>
          </div>
        </Section>

        {/* PRODUCT JOURNEY */}
        <Section id="journey" className="bg-background border-y border-border py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16">Product Journey</h2>
            <div className="flex flex-col space-y-0 pl-4 md:pl-8">
              {[
                { title: "Software Developer", year: "2019", desc: "Core backend engineering & systems." },
                { title: "Enterprise Systems", year: "2021", desc: "Scaling platforms for 7 business units." },
                { title: "Business Systems Analyst", year: "2024", desc: "Bridging engineering and business needs." },
                { title: "Product Strategy", year: "2024", desc: "Defining vision for regulatory reporting." },
                { title: "Global Rollouts", year: "2025", desc: "Hong Kong market expansion." },
                { title: "AI Products", year: "2026", desc: "Prototyping generative AI features." },
                { title: "ActionPilot", year: "Present", desc: "Building an AI-native SaaS platform." },
                { title: "Technical Product Manager", year: "Future", desc: "Where engineering meets customer obsession." }
              ].map((step, index, array) => (
                <div key={step.title} className="relative pb-12 group">
                  {index !== array.length - 1 && (
                    <div className="absolute left-[7px] top-4 bottom-0 w-px bg-border group-hover:bg-primary/50 transition-colors duration-500"></div>
                  )}
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-background bg-border group-hover:bg-primary shadow-sm z-10 transition-all duration-300 group-hover:scale-125"></div>
                  <div className="pl-12 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <div className="text-xl md:text-2xl font-heading font-semibold text-foreground/80 group-hover:text-foreground transition-colors pt-1">
                      {step.title}
                    </div>
                    <div className="text-sm font-bold tracking-widest uppercase text-secondary-foreground group-hover:text-primary transition-colors">
                      {step.year}
                    </div>
                  </div>
                  <div className="pl-12 mt-2 text-secondary-foreground text-lg">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* PRODUCT THINKING */}
        <Section id="writing" className="bg-background border-y border-border py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Product Thinking</h2>
            <div className="flex flex-col border-t border-border/50">
              <ArticleCard 
                title="WhatsApp Status Product Analysis"
                category="Product Teardown"
                readingTime="5 min read"
                date="Oct 2025"
                href="#article-1"
              />
              <ArticleCard 
                title="Spotify Daylist Case Study"
                category="Growth Strategy"
                readingTime="8 min read"
                date="Aug 2025"
                href="#article-2"
              />
              <ArticleCard 
                title="Airtribe Product Management Learnings"
                category="Education"
                readingTime="10 min read"
                date="Jan 2025"
                href="#article-3"
              />
              <ArticleCard 
                title="Building ActionPilot in Public"
                category="Build Log"
                readingTime="4 min read"
                date="Current"
                href="#article-4"
              />
            </div>
            <div className="mt-10">
              <Link href="#writing" className="text-sm font-bold tracking-widest uppercase text-primary hover:text-foreground transition-colors inline-flex items-center gap-2 group">
                Read all articles <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="bg-surface/30 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight tracking-tight">
              Let's build products that customers love and businesses value.
            </h2>
            <p className="text-secondary-foreground text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Open to Technical Product Management opportunities, AI product collaborations and enterprise SaaS innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:samyak567@gmail.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "default" }), "gap-2 px-8 transition-transform hover:scale-105 active:scale-95")}>
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href="https://www.linkedin.com/in/samyaktalesra/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2 bg-background px-8 transition-transform hover:scale-105 active:scale-95")}>
                <User className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://wa.me/917772003060" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2 bg-background px-8 transition-transform hover:scale-105 active:scale-95")}>
                <MessageSquare className="h-4 w-4" /> WhatsApp
              </a>
              <a href="/resources/Samyak_Talesra_Resume.pdf" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2 bg-background px-8 transition-transform hover:scale-105 active:scale-95")}>
                Resume
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
