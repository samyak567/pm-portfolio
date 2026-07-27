import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EdTechRecommendationsCaseStudy() {
  const tocItems = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "personas", title: "User Personas" },
    { id: "requirements", title: "Requirements Matrix" },
    { id: "system-design", title: "System Architecture" },
    { id: "trade-offs", title: "Engineering Trade-offs" },
    { id: "roadmap", title: "Future Roadmap" },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white pt-24 text-gray-700">
        {/* HERO SECTION */}
        <Section className="pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700">
                System Design
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              EdTech Recommendation Engine
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              Designing a high-performance, personalized learning discovery system for a global education platform.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Role</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Manager</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Focus</p>
                <p className="font-semibold text-gray-900 text-[16px]">Architecture & ML</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Skills</p>
                <p className="font-semibold text-gray-900 text-[14px]">System Design, PRD</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Read Time</p>
                <p className="font-semibold text-gray-900 text-[16px]">7 min</p>
              </div>
            </div>
          </div>
        </Section>

        {/* CASE STUDY CONTENT */}
        <CaseStudyLayout sidebar={<TableOfContents items={tocItems} />}>
          <div className="prose prose-gray max-w-[70ch] space-y-16 prose-p:text-[18px] prose-p:leading-[1.8] prose-p:text-gray-700 prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-[32px] prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-[22px] prose-h3:mt-10 prose-h3:mb-4 prose-li:text-[18px] prose-li:leading-[1.8] prose-li:text-gray-700 prose-a:text-gray-900 prose-a:font-semibold prose-a:underline-offset-4 prose-blockquote:border-gray-200 prose-blockquote:text-gray-600 prose-blockquote:font-normal prose-blockquote:not-italic pb-24">
            
            {/* 1. Executive Summary */}
            <section id="executive-summary" className="scroll-mt-32">
              <h2>Executive Summary</h2>
              <p>
                <strong>The Challenge:</strong> A leading online education platform struggled with content discovery. Users were overwhelmed by the vast course catalog, leading to stagnant engagement and high drop-off rates before course completion.
              </p>
              <p>
                <strong>The Goal:</strong> Design a highly scalable, personalized recommendation system to help users discover relevant courses based on their interests, skill levels, and career aspirations.
              </p>
              <p>
                <strong>Business Objectives:</strong>
              </p>
              <ul>
                <li>Increase user engagement by 25%.</li>
                <li>Improve course completion rates by 30%.</li>
                <li>Enhance overall user satisfaction scores by 20%.</li>
              </ul>
            </section>

            {/* 2. User Personas */}
            <section id="personas" className="scroll-mt-32">
              <h2>User Personas</h2>
              
              <h3>1. Learners (Primary)</h3>
              <p>
                Learners seek relevance. They want course recommendations that match their specific skill level (to avoid boredom or overwhelm) and align directly with their career goals. They also require adaptive recommendations that evolve with their progress, complete with nudges to finish what they start.
              </p>

              <h3>2. Instructors & Creators</h3>
              <p>
                Instructors need audience targeting. They want tools to accurately tag their courses with metadata (skills, difficulty, outcomes) so the algorithm surfaces their content to the right learners. They also require performance insights to understand drop-offs and optimize their teaching structure.
              </p>

              <h3>3. Platform Admins</h3>
              <p>
                Admins require control and visibility. They need to configure recommendation weights (e.g., trending vs. highly personalized), monitor system performance (CTR, latency), filter out low-quality content, and run rigorous A/B tests to identify winning algorithms.
              </p>
            </section>

            {/* 3. Requirements Matrix */}
            <section id="requirements" className="scroll-mt-32">
              <h2>Requirements Matrix</h2>
              
              <h3>Key Functional Requirements</h3>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-4 font-bold text-gray-900 w-1/4">User</th>
                      <th className="py-4 font-bold text-gray-900 w-2/3">Feature Description</th>
                      <th className="py-4 font-bold text-gray-900">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="text-[16px]">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Learner</td>
                      <td className="py-4 text-gray-600"><strong>Dynamic Updates:</strong> Continuously update recommendations based on real-time progress and interactions.</td>
                      <td className="py-4 text-gray-900">High</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Learner</td>
                      <td className="py-4 text-gray-600"><strong>Learning Paths:</strong> Generate structured course sequences aligned with specific career goals.</td>
                      <td className="py-4 text-gray-900">High</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Instructor</td>
                      <td className="py-4 text-gray-600"><strong>Metadata Management:</strong> Tagging system for skills, domain, and outcomes to feed the algorithm.</td>
                      <td className="py-4 text-gray-900">High</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Admin</td>
                      <td className="py-4 text-gray-600"><strong>Engine Configuration:</strong> Dashboard to tweak rules, algorithmic weights, and ranking logic.</td>
                      <td className="py-4 text-gray-900">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Non-Functional Requirements</h3>
              <ul>
                <li><strong>Performance:</strong> The recommendation API must respond within &lt;200ms (p95). Real-time inference should complete under 100ms.</li>
                <li><strong>Scalability:</strong> Horizontal scaling to support millions of concurrent users via microservices and Kafka event streaming.</li>
                <li><strong>Availability:</strong> 99.9%+ uptime SLA with graceful degradation (falling back to cached "popular" courses if the ML layer fails).</li>
                <li><strong>Compliance & Privacy:</strong> Strict GDPR/DPDP adherence, incorporating "Explainability" (e.g., <em>"Recommended because you viewed..."</em>).</li>
              </ul>
            </section>

            {/* 4. System Architecture */}
            <section id="system-design" className="scroll-mt-32">
              <h2>System Architecture</h2>
              <p>
                To handle immense scale and real-time computation, the system was designed with a decoupled, modular architecture.
              </p>

              <h3>1. Data Collection & Processing</h3>
              <p>
                An <strong>Event Tracker</strong> captures real-time behavioral data (clicks, completion %, time spent) and streams it via Kafka. This feeds into a dual-pipeline: streaming for immediate session-based updates, and batch processing for deeper user clustering and model retraining.
              </p>

              <h3>2. The Recommendation Engine (3-Layer Model)</h3>
              <ul>
                <li><strong>Candidate Generation (Recall Phase):</strong> Fetches a subset of ~500 relevant courses from millions using Collaborative Filtering, Content-Based matching, and trending heuristics.</li>
                <li><strong>Ranking Layer:</strong> A Machine Learning model (e.g., XGBoost) scores the candidates based on user preferences, skill-level match, and historical completion probability.</li>
                <li><strong>Filtering Layer:</strong> A business-logic layer that aggressively removes previously completed courses, low-rated content, and irrelevant difficulty levels before serving to the UI.</li>
              </ul>
            </section>

            {/* 5. Engineering Trade-offs */}
            <section id="trade-offs" className="scroll-mt-32">
              <h2>Engineering Trade-offs</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm mb-8">
                <p className="text-[20px] leading-[1.6] m-0 text-gray-900 font-medium italic">
                  Deep Personalization vs. Fast Performance (Latency)
                </p>
              </div>
              <p>
                Highly contextual ML models require massive feature processing, pushing latency up. However, if recommendations take &gt;500ms to load, UX breaks and users abandon the page.
              </p>
              <p>
                <strong>The Product Decision:</strong> Prioritize Performance first, then progressively layer Personalization. A slow system is a visible failure. A slightly less personalized system is highly recoverable.
              </p>
              <ul>
                <li><strong>Phase 1 (MVP):</strong> Utilize rule-based logic and aggressive Redis caching. Precompute recommendations overnight to ensure &lt;200ms latency.</li>
                <li><strong>Phase 2 (Scale):</strong> Introduce real-time ML ranking on top of precomputed candidate sets.</li>
                <li><strong>Phase 3 (Advanced):</strong> Implement context-aware online inference via specialized Feature Stores.</li>
              </ul>
            </section>

            {/* 6. Roadmap */}
            <section id="roadmap" className="scroll-mt-32">
              <h2>Future Roadmap</h2>
              <p>
                To sustain the 25% engagement growth, the system must continuously evolve. The future roadmap includes:
              </p>
              <ul>
                <li><strong>Social & Collaborative Signals:</strong> Introducing peer-group recommendations (<em>"Learners in your cohort are taking..."</em>) to leverage social proof.</li>
                <li><strong>Goal-Based AI Assistants:</strong> Dynamic learning roadmaps that auto-adjust course sequences based on real-time quiz performance (e.g., <em>"Become a PM in 3 months"</em>).</li>
                <li><strong>Instructor Optimization Loop:</strong> Predictive analytics identifying exact drop-off timestamps within a video, allowing instructors to actively patch curriculum gaps.</li>
                <li><strong>Cross-Platform Integration:</strong> Connecting the recommendation engine to external job boards (like LinkedIn) to surface courses mapping directly to active market demand.</li>
              </ul>
            </section>

          </div>
        </CaseStudyLayout>
      </main>
      <Footer />
    </>
  );
}
