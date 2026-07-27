import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Check, Minus, CheckCircle, TrendingUp, Lightbulb, Compass, Zap, User, Video, AlertTriangle } from "lucide-react";

import { LoomEmbed } from "@/components/shared/mdx/LoomEmbed";
import { ZoomableImage } from "@/components/shared/mdx/ZoomableImage";
import { ResourceCard } from "@/components/shared/mdx/ResourceCard";
import { DecisionCard } from "@/components/shared/mdx/DecisionCard";
import { FigmaEmbed } from "@/components/shared/mdx/FigmaEmbed";

export default function YouTubeCapsulesCaseStudy() {
  const tocItems = [
    { id: "overview", title: "Executive Summary" },
    { id: "context", title: "Business Context" },
    { id: "problem", title: "Problem Statement" },
    { id: "research", title: "User Research" },
    { id: "journey", title: "User Journey" },
    { id: "competition", title: "Competitive Analysis" },
    { id: "solution", title: "Solution" },
    { id: "prototype", title: "Prototype" },
    { id: "demo", title: "Demo" },
    { id: "decisions", title: "Product Decisions" },
    { id: "impact", title: "Metrics & Impact" },
    { id: "reflection", title: "Reflection" },
    { id: "resources", title: "Resources Library" },
  ];

  return (
    <>
      <Header />
      {/* Remove dark mode invert constraints on the case study background so grays render accurately */}
      <main className="flex-1 bg-white pt-24 text-gray-700">
        {/* HERO SECTION */}
        <Section className="pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700">
                Consumer Product Strategy
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              YouTube Capsules
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              Bridging Shorts and Long-form Viewing through AI-powered Mid-form Experiences
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Role</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Manager</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Duration</p>
                <p className="font-semibold text-gray-900 text-[16px]">8 Weeks</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Skills</p>
                <p className="font-semibold text-gray-900 text-[14px]">Product Strategy, User Research, AI, UX Design</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Read Time</p>
                <p className="font-semibold text-gray-900 text-[16px]">10 min</p>
              </div>
            </div>
          </div>
        </Section>

        {/* CASE STUDY CONTENT */}
        <CaseStudyLayout sidebar={<TableOfContents items={tocItems} />}>
          <div className="prose prose-gray max-w-[70ch] space-y-16 prose-p:text-[18px] prose-p:leading-[1.8] prose-p:text-gray-700 prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-[32px] prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-[22px] prose-h3:mt-10 prose-h3:mb-4 prose-li:text-[18px] prose-li:leading-[1.8] prose-li:text-gray-700 prose-a:text-gray-900 prose-a:font-semibold prose-a:underline-offset-4 prose-blockquote:border-gray-200 prose-blockquote:text-gray-600 prose-blockquote:font-normal prose-blockquote:not-italic pb-24">
            
            <section id="overview" className="scroll-mt-32">
              <h2>Executive Summary</h2>
              <p>An overview of the structural depth gap within the YouTube ecosystem and how Capsules bridge discovery to intentional learning.</p>
              
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose mt-8 shadow-sm">
                <p className="text-[18px] leading-[1.8] m-0 text-gray-700 font-medium">
                  Millions of mobile-first Gen Z users rely on YouTube Shorts for discovery, but struggle to transition into long-form educational or informational content. This gap exists because the behavioral leap from a 60-second passive scroll to a 20-minute intentional viewing session requires too much upfront commitment, focus, and time.
                  <br/><br/>
                  <strong>YouTube Capsules</strong> solves this friction. It is a new 3-7 minute interactive mid-form format, automatically generated from existing long-form videos using AI. Capsules provide a structured "progressive depth" layer—offering chapters, summaries, and key takeaways that allow users to preview value before committing.
                  <br/><br/>
                  By bridging discovery and depth, Capsules are projected to increase long-form watch time by 25%, improve creator monetization through higher-quality viewing sessions, and establish a highly defensible moat for YouTube in the progressive learning space.
                </p>
              </div>
            </section>

            <section id="context" className="scroll-mt-32">
              <h2>Business Context</h2>
              <p>The digital content landscape is currently bifurcated. On one end, platforms like TikTok and YouTube Shorts dominate fast discovery and dopamine-driven passive engagement. On the other, traditional YouTube, Netflix, and Coursera own high-intent, deep learning and storytelling.</p>
              <p>As the creator ecosystem has adapted, Short-form content has exploded in popularity, especially among Hindi-first Tier 2/3 Gen Z users in India who rely on low-cost Android phones and fragmented attention windows. However, this has created a critical structural problem: <strong>the decline of intentional long-form consumption.</strong></p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 not-prose">
                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h4 className="font-bold text-[16px] text-gray-900 mb-3 flex items-center gap-2"><User className="w-4 h-4 text-gray-500"/> For Users</h4>
                  <p className="text-[15px] leading-[1.6] text-gray-500">They experience curiosity without commitment. They discover topics in Shorts but remain trapped in endless scrolling loops.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h4 className="font-bold text-[16px] text-gray-900 mb-3 flex items-center gap-2"><Video className="w-4 h-4 text-gray-500"/> For Creators</h4>
                  <p className="text-[15px] leading-[1.6] text-gray-500">Shorts maximize reach, but long-form maximizes learning and monetization. Creators struggle to build funnels that convert passive scrollers.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h4 className="font-bold text-[16px] text-gray-900 mb-3 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-gray-500"/> For YouTube</h4>
                  <p className="text-[15px] leading-[1.6] text-gray-500">The business model heavily depends on long-form ads. A failure to bridge this gap risks long-term premium ad inventory.</p>
                </div>
              </div>
            </section>

            <section id="problem" className="scroll-mt-32">
              <h2>Problem Statement</h2>
              <p>Understanding the transition barriers preventing users from moving deeper into the product ecosystem.</p>
              
              <p>Users are not rejecting in-depth content—they are rejecting <strong>uncertainty and high commitment</strong>. When discovering a topic via Shorts, the transition into a 20-minute video feels too demanding.</p>
              
              <p>The core barriers are twofold:</p>
              <ul>
                <li><strong>Commitment Friction:</strong> Requiring time, focus, and mobile data without guaranteed value.</li>
                <li><strong>Accessibility Friction:</strong> Long videos feel inefficient, slow-paced, and hard to navigate for mobile users.</li>
              </ul>
              
              <div className="flex flex-col gap-6 my-10 not-prose">
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
                  <div className="text-[48px] font-heading font-bold text-gray-900 leading-none">69%</div>
                  <div className="text-gray-700 text-[18px] leading-[1.6]">
                    <strong>Want progressive transitions.</strong><br/>
                    <span className="text-gray-500">of surveyed Gen Z users indicated that short summaries would actively encourage them to watch more long-form content.</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
                  <div className="text-[48px] font-heading font-bold text-gray-900 leading-none">61%</div>
                  <div className="text-gray-700 text-[18px] leading-[1.6]">
                    <strong>Trapped in the scroll.</strong><br/>
                    <span className="text-gray-500">consume Shorts daily, vastly outpacing daily long-form viewing, validating the dominance of the passive scroll trap.</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="research" className="scroll-mt-32">
              <h2>User Research</h2>
              <p>An overview of the methodology and key findings that shaped the product direction.</p>
              <p>To validate these assumptions, a targeted viewer experience survey was conducted. The objective was to understand consumption patterns, identify transition frictions, and measure the demand for progressive content formats.</p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
                <h4 className="text-[13px] font-bold uppercase tracking-widest text-gray-500 mb-4">Research Parameters</h4>
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-0">
                  <div className="m-0">
                    <dt className="text-[14px] text-gray-500 mb-1">Methodology</dt>
                    <dd className="font-semibold text-[16px] text-gray-900 m-0">Quantitative Survey</dd>
                  </div>
                  <div className="m-0">
                    <dt className="text-[14px] text-gray-500 mb-1">Participants</dt>
                    <dd className="font-semibold text-[16px] text-gray-900 m-0">N=15 (18-24 yrs)</dd>
                  </div>
                  <div className="m-0">
                    <dt className="text-[14px] text-gray-500 mb-1">Geography</dt>
                    <dd className="font-semibold text-[16px] text-gray-900 m-0">Tier 2/3 India</dd>
                  </div>
                </dl>
              </div>
              
              <h3>Key Findings & Pain Points</h3>
              <p>The research surfaced three critical friction moments preventing deeper engagement:</p>
              <ul>
                <li><strong>The Commitment Gap:</strong> 26.6% of users cited explicit time constraints as the primary barrier to long-form content.</li>
                <li><strong>The Passive Scroll Trap:</strong> Shorts keep users scrolling, not progressing. The platform lacks a mechanism to pause and explore deeper context efficiently.</li>
                <li><strong>Long-form Inefficiency:</strong> Even with intentional viewing, users struggle with identifying relevant sections, slow pacing, and a fear of wasting time.</li>
              </ul>

              <blockquote className="my-10 text-[24px] leading-[1.6] text-gray-900 border-l-4 border-gray-300 pl-6 italic">
                "I'm interested, but not 20 minutes interested."
              </blockquote>
            </section>

            <section id="journey" className="scroll-mt-32">
              <h2>User Journey</h2>
              <p>Mapping the ideal path from initial discovery to deep, intentional learning.</p>
              <p>The proposed experience creates a seamless, guided funnel. By breaking down the barrier to entry, users are stepped through a progressive narrative.</p>
              
              <ZoomableImage 
                src="/documents/youtube_capsules/YoutubeCapsules_UserFlows.png" 
                alt="YouTube Capsules User Journey Flow"
                title="End-to-End Viewer Journey"
                caption="Mapping the transition from Shorts to Long-form. Click to expand."
              />
              
              <h3>The Progressive Depth Walkthrough</h3>
              <div className="space-y-8 mt-10">
                <div className="pl-6 border-l-[3px] border-gray-900 relative">
                  <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-[7.5px] top-2"></div>
                  <h4 className="text-[20px] font-bold mb-2 mt-0">1. Discovery & Curiosity</h4>
                  <p className="text-gray-500 text-[16px] m-0">A user watches an engaging Short about "Interview Tips." Their curiosity is sparked, but a full podcast feels daunting. YouTube seamlessly surfaces a recommendation: "Watch 5-min Capsule."</p>
                </div>
                <div className="pl-6 border-l-[3px] border-gray-900 relative">
                  <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-[7.5px] top-2"></div>
                  <h4 className="text-[20px] font-bold mb-2 mt-0">2. The Interactive Capsule</h4>
                  <p className="text-gray-500 text-[16px] m-0">The user enters a fast-paced, 3-7 minute mid-form video. The UI provides AI-generated smart chapters, key takeaways, and interactive polls to keep them actively engaged rather than passively scrolling.</p>
                </div>
                <div className="pl-6 border-l-[3px] border-gray-900 relative">
                  <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-[7.5px] top-2"></div>
                  <h4 className="text-[20px] font-bold mb-2 mt-0">3. Long-form Transition</h4>
                  <p className="text-gray-500 text-[16px] m-0">Upon completing the Capsule, context and confidence are established. A clear CTA prompts them to "Continue Full Video" for deep-dive examples.</p>
                </div>
                <div className="pl-6 border-l-[3px] border-transparent relative">
                  <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-[7.5px] top-2"></div>
                  <h4 className="text-[20px] font-bold mb-2 mt-0">4. Creator Feedback Loop</h4>
                  <p className="text-gray-500 text-[16px] m-0">The user converts to a high-retention viewer. The creator sees uplift in funnel analytics and monetization, incentivizing further Capsule generation.</p>
                </div>
              </div>
            </section>

            <section id="competition" className="scroll-mt-32">
              <h2>Competitive Analysis</h2>
              <p>Evaluating the market gap and identifying the whitespace for mid-form engagement.</p>
              <p>No major platform currently owns "progressive depth consumption." The digital landscape is highly polarized between high-engagement discovery and high-intent depth.</p>
              
              <div className="overflow-hidden my-12 border border-gray-200 rounded-2xl shadow-sm not-prose">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-[13px] font-bold uppercase tracking-widest text-gray-500">Platform</th>
                      <th className="px-6 py-4 text-[13px] font-bold uppercase tracking-widest text-gray-500">Progressive Depth</th>
                      <th className="px-6 py-4 text-[13px] font-bold uppercase tracking-widest text-gray-500 hidden md:table-cell">Why It Doesn't Solve the Problem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-gray-900">YouTube Shorts</td>
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 text-gray-400 font-medium text-[14px]">
                          <Minus className="w-4 h-4" /> None
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[14px] text-gray-500 leading-relaxed hidden md:table-cell">Users discover topics but rarely move into long-form intentionally. Endless scroll.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-gray-900">TikTok / Reels</td>
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 text-gray-400 font-medium text-[14px]">
                          <Minus className="w-4 h-4" /> None
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[14px] text-gray-500 leading-relaxed hidden md:table-cell">Optimizes for retention loops and infinite entertainment, lacking educational depth ecosystems.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-gray-900">Netflix / Spotify</td>
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 text-yellow-600 font-medium text-[14px]">
                          <Check className="w-4 h-4" /> Partial
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[14px] text-gray-500 leading-relaxed hidden md:table-cell">Intentional, progressive viewing but not designed for casual, creator-led discovery.</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-6 py-5 font-bold text-white flex items-center gap-2"><Zap className="w-4 h-4"/> YouTube Capsules</td>
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 text-green-400 font-bold text-[14px]">
                          <CheckCircle className="w-4 h-4" /> Yes
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[14px] text-gray-300 leading-relaxed hidden md:table-cell">Creates a structured progression layer bridging low-intent discovery and high-intent depth.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>While competitors can replicate UI features, they cannot easily replicate YouTube's integrated ecosystem: <strong>Discovery → Depth → Monetization</strong>. <em>Progressive Depth</em> acts as a powerful strategic differentiator and defensive moat.</p>
            </section>

            <section id="solution" className="scroll-mt-32">
              <h2>Solution: A New Format Layer</h2>
              <p>Defining the core mechanics of YouTube Capsules and how they execute on the product vision.</p>
              
              <h3>What are Capsules?</h3>
              <p>YouTube Capsules are a purpose-built 3-7 minute interactive video format designed specifically to sit between Shorts and Long-form content.</p>

              <h3>How They Work</h3>
              <p>Capsules operate natively on mobile, primarily targeting Tier 2/3 Android users. The UI is built for low-friction consumption, featuring:</p>
              <ul>
                <li><strong>Smart Chapters:</strong> Jump directly to what matters.</li>
                <li><strong>Summary Cards:</strong> Key takeaways displayed on-screen.</li>
                <li><strong>Continuity:</strong> Seamless "Resume Later" states across devices.</li>
              </ul>

              <h3>Why AI is the Engine</h3>
              <p>To prevent massive creator burnout, Capsules are generated using AI-assisted production. Creators upload standard long-form videos, and YouTube's LLMs automatically suggest capsule cuts, chapter markers, and interactive hooks. The creator simply reviews, edits, and publishes—drastically lowering the barrier to entry.</p>

              <h3>Bridging the Gap</h3>
              <p>Capsules respect the fragmented, mobile-first lifestyle of Gen Z users. By lowering the upfront commitment barrier, they enable intentional learning and transform passing curiosity into high-quality engagement.</p>
            </section>

            <section id="prototype" className="scroll-mt-32">
              <h2>Prototype & UX Design</h2>
              <p>Visualizing the interface. The design prioritizes simplicity and usability on low-end Android devices while maintaining a premium feel.</p>
              
              <div className="my-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm text-center">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Interactive Prototype</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Experience the Capsule Player UI firsthand. This interactive prototype demonstrates the Smart Chapters, Summary Cards, and Interactive Polls overlaying the video.</p>
                <a 
                  href="https://youtube-capsules.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 px-8 py-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  View Live Prototype ↗
                </a>
              </div>
              

            </section>

            <section id="demo" className="scroll-mt-32">
              <h2>Demo</h2>
              <p>A functional walkthrough of the user transition from a Short, into a Capsule, and finally into a Long-form video.</p>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm my-8 bg-gray-50 flex items-center justify-center">
                <iframe 
                  src="https://drive.google.com/file/d/1ybXW9yJzjhBdH4NEhH_E3SIau1X0OGKB/preview" 
                  className="absolute top-0 left-0 w-full h-full" 
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            <section id="decisions" className="scroll-mt-32">
              <h2>Product Decisions</h2>
              <p>Key architectural and product strategy trade-offs made during the development phase.</p>
              
              <DecisionCard 
                decision="Capsules are strictly limited to 3-7 minutes."
                reason="Survey data showed that users consider anything beyond 8 minutes to require 'intentional commitment,' effectively placing it in the long-form category."
                tradeoff="Limits the depth of complex topics like coding tutorials or deep historical analyses."
                outcome="Ensures the format remains a low-friction transition layer rather than cannibalizing long-form watch time."
              />
              <DecisionCard 
                decision="AI-assisted generation is the primary creator workflow."
                reason="Creators already suffer from format fatigue (Longs, Shorts, Posts, Lives). Forcing them to manually edit a 5th format would severely stunt adoption."
                tradeoff="Initial AI generation may occasionally miss the nuanced emotional peaks of a video."
                outcome="Rapid ecosystem scaling by allowing 1-click generation from existing content libraries."
              />
              <DecisionCard 
                decision="Inclusion of Interactive Checkpoints (Polls/Quizzes)."
                reason="Passive scrolling causes attention drop-off. Interactive elements force users to engage actively, shifting their mindset from entertainment to learning."
                tradeoff="Adds slight UI complexity on smaller, low-resolution screens."
                outcome="Higher retention rates through the 5-minute mark and improved information recall."
              />
            </section>

            <section id="impact" className="scroll-mt-32">
              <h2>Metrics & Expected Impact</h2>
              <p>How success is measured and tracked across the funnel.</p>
              
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl not-prose mb-10 text-white shadow-lg">
                <h3 className="text-[13px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2"><Compass className="w-4 h-4"/> North Star Metric</h3>
                <div className="text-[36px] font-heading font-bold mb-3">Capsule-to-Long-form Conversion Rate</div>
                <p className="text-gray-300 text-[16px] leading-[1.6] max-w-[60ch]">The percentage of users who watch full videos after consuming capsules. This directly validates if Capsules are functioning as a transition layer rather than a substitute.</p>
              </div>

              <h3>Supporting Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-8">
                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors">
                  <h4 className="font-bold text-gray-900 text-[18px]">Capsule Completion Rate</h4>
                  <div className="text-[13px] font-bold uppercase tracking-widest text-gray-500 mt-2 mb-3">Target: &gt;70%</div>
                  <p className="text-[15px] text-gray-600 leading-[1.6]">Measures engagement quality and pacing.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors">
                  <h4 className="font-bold text-gray-900 text-[18px]">Long-form Watch Time Lift</h4>
                  <div className="text-[13px] font-bold uppercase tracking-widest text-gray-500 mt-2 mb-3">Target: +25%</div>
                  <p className="text-[15px] text-gray-600 leading-[1.6]">Measures actual depth progression vs baseline.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors">
                  <h4 className="font-bold text-gray-900 text-[18px]">Viewer Retention (7 Day)</h4>
                  <div className="text-[13px] font-bold uppercase tracking-widest text-gray-500 mt-2 mb-3">Target: +15%</div>
                  <p className="text-[15px] text-gray-600 leading-[1.6]">Measures habit formation for educational discovery.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors">
                  <h4 className="font-bold text-gray-900 text-[18px]">Creator Adoption Rate</h4>
                  <div className="text-[13px] font-bold uppercase tracking-widest text-gray-500 mt-2 mb-3">Target: 30%</div>
                  <p className="text-[15px] text-gray-600 leading-[1.6]">Measures ecosystem growth among eligible creators.</p>
                </div>
              </div>
            </section>

            <section id="reflection" className="scroll-mt-32">
              <h2>Reflection</h2>
              <p>Looking back on the strategic process and areas for future iteration.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mt-10 mb-8">
                <div className="bg-green-50 border border-green-100 p-8 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold mb-3 text-green-900">What Went Well</h3>
                  <p className="text-green-800 text-[15px] leading-[1.7]">Identifying the core behavioral gap. The survey clearly validated that the problem wasn't a lack of interest in deep topics, but rather a lack of a structured, low-friction entry point.</p>
                </div>
                <div className="bg-amber-50 border border-amber-100 p-8 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    <AlertTriangle className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold mb-3 text-amber-900">Key Learnings</h3>
                  <p className="text-amber-800 text-[15px] leading-[1.7]">I initially considered "Audio Companion Mode" as a strong feature for low-bandwidth areas, but the RICE framework revealed it had lower impact compared to visual interactive capsules.</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold mb-3 text-blue-900">Future Iterations</h3>
                  <p className="text-blue-800 text-[15px] leading-[1.7]">If I had 3 more months, I would build an adaptive "Continue Learning" feed. With current advancements in multimodal LLMs, we could dynamically stitch together 5-minute capsules from completely different creators.</p>
                </div>
              </div>
            </section>

            <section id="resources" className="scroll-mt-32 pb-12">
              <h2>Resources Library</h2>
              <p>Downloadable assets and raw data related to the YouTube Capsules project.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
                <ResourceCard 
                  title="Capstone Report"
                  description="Complete 15-page research-backed product strategy and implementation plan."
                  type="PDF"
                  size="2.4 MB"
                  href="/documents/youtube_capsules/YoutubeCapsules_Capstone.pdf"
                />
                <ResourceCard 
                  title="Competitor Analysis"
                  description="Strategic matrix analyzing Shorts, Reels, TikTok, Netflix, and Duolingo."
                  type="PDF"
                  size="1.2 MB"
                  href="/documents/youtube_capsules/YoutubeCapsules_CompetitorAnalysis.pdf"
                />
                <ResourceCard 
                  title="Viewer Experience Survey"
                  description="Raw survey charts and data highlighting Gen Z consumption friction."
                  type="PDF"
                  size="800 KB"
                  href="/documents/youtube_capsules/YoutubeCapsules_SurveyResults.pdf"
                />
                <ResourceCard 
                  title="User Journey Flow"
                  description="Detailed journey mapping the transition from Shorts to Long-form content."
                  type="Image"
                  size="1.5 MB"
                  href="/documents/youtube_capsules/YoutubeCapsules_UserFlows.png"
                />
              </div>
            </section>
          </div>
        </CaseStudyLayout>

        {/* RELATED PROJECTS */}
        <Section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-gray-900 mb-12">More Selected Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              />
              <div className="opacity-50 grayscale pointer-events-none relative">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
                  <span className="px-5 py-2 bg-gray-900 border border-gray-800 rounded-full text-[12px] font-bold uppercase tracking-widest text-white shadow-xl">Currently Viewing</span>
                </div>
                <ProjectCard 
                  title="YouTube Capsules"
                  category="AI Product"
                  status="In Progress"
                  readingTime="6 min"
                  tags={["LLMs", "Pipeline", "Content"]}
                  description="Designed an 8–12 min creator-designated format to close the curiosity gap between Shorts and long-form content — backed by surveys, interviews, and RICE prioritisation."
                  problem="Viewers struggle to retain key insights from long-form educational content on YouTube."
                  solution="A processing pipeline extracting video transcripts and using LLMs to generate concise, readable knowledge capsules."
                  outcome="Improved content digestion time and validated demand for bite-sized learning."
                  href="#"
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
