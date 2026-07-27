import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function XGrowthStrategyCaseStudy() {
  const tocItems = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "aarrr-funnel", title: "AARRR Funnel Analysis" },
    { id: "key-gaps", title: "Bottlenecks & Gaps" },
    { id: "growth-epics", title: "Proposed Growth Epics" },
    { id: "rice-prioritization", title: "RICE Prioritization" },
    { id: "strategic-roadmap", title: "Strategic Roadmap" },
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
                Growth Product
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Twitter (X) Growth Strategy
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              A deep dive into the AARRR funnel to identify high-leverage growth loops, fix leaky retention, and optimize onboarding.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Role</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Manager</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Focus</p>
                <p className="font-semibold text-gray-900 text-[16px]">Growth & Funnel Opt.</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Skills</p>
                <p className="font-semibold text-gray-900 text-[14px]">AARRR, RICE Scoring</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Read Time</p>
                <p className="font-semibold text-gray-900 text-[16px]">6 min</p>
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
                <strong>The Challenge:</strong> Despite massive cultural relevance and viral content generation, Twitter (X) suffers from a leaky growth funnel. High top-of-funnel acquisition is offset by poor early activation and a "lonely user" problem that degrades long-term retention.
              </p>
              <p>
                <strong>The Objective:</strong> Deeply analyze the end-to-end user journey using the AARRR framework (Acquisition, Activation, Retention, Revenue, Referral) to identify critical drop-offs and prioritize product interventions.
              </p>
              <p>
                <strong>Strategic Impact:</strong> By implementing targeted Epics such as Logged-Out Experience Optimization and Social Graph Bootstrapping, X can systematically repair the most fragile stages of its funnel, turning passive viral traffic into highly engaged daily active users.
              </p>
            </section>

            {/* 2. AARRR Funnel */}
            <section id="aarrr-funnel" className="scroll-mt-32">
              <h2>AARRR Funnel Analysis</h2>
              <p>
                Understanding X requires separating the platform's core mechanics from traditional social networks. X is <em>content-first</em>, not relationship-first, meaning viral reach is a massive strength, but low social stickiness is a continuous vulnerability.
              </p>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-4 font-bold text-gray-900">Stage</th>
                      <th className="py-4 font-bold text-gray-900">User Actions</th>
                      <th className="py-4 font-bold text-gray-900">Key Value Moment</th>
                      <th className="py-4 font-bold text-gray-900">Drop-off Risk</th>
                    </tr>
                  </thead>
                  <tbody className="text-[16px]">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Acquisition</td>
                      <td className="py-4 text-gray-600">Clicks tweet link, browses limited logged-out feed.</td>
                      <td className="py-4 text-gray-600">Exposure to relevant breaking news or viral threads.</td>
                      <td className="py-4 text-gray-600">Aggressive login walls; weak context on landing.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Activation</td>
                      <td className="py-4 text-gray-600">Account signup, selects generic interests, follows users.</td>
                      <td className="py-4 text-gray-600">First personalized feed that feels highly relevant.</td>
                      <td className="py-4 text-gray-600">Poor onboarding resulting in an irrelevant feed.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Retention</td>
                      <td className="py-4 text-gray-600">Daily scrolling, interacting, participating in live events.</td>
                      <td className="py-4 text-gray-600">First social validation (likes/replies) and real-time updates.</td>
                      <td className="py-4 text-gray-600">Feed noise, toxicity, and lack of social graph.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Revenue</td>
                      <td className="py-4 text-gray-600">Views ads, purchases Premium subscriptions.</td>
                      <td className="py-4 text-gray-600">Enhanced visibility, status, and reach.</td>
                      <td className="py-4 text-gray-600">Low perceived value of Premium features.</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-gray-900">Referral</td>
                      <td className="py-4 text-gray-600">Shares tweets externally via WhatsApp, LinkedIn, etc.</td>
                      <td className="py-4 text-gray-600">Sharing high-signal content out-of-network.</td>
                      <td className="py-4 text-gray-600">High external sharing but zero direct invite incentives.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Key Gaps */}
            <section id="key-gaps" className="scroll-mt-32">
              <h2>Cross-Funnel Bottlenecks</h2>
              <div className="space-y-6">
                <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                  <h4 className="font-bold text-red-900 mt-0 mb-2">1. The "Lonely User" Problem (Critical)</h4>
                  <p className="m-0 text-red-800 text-[16px]">Users who complete signup but fail to bootstrap a strong social graph churn rapidly. Without connections, there is no emotional investment or notification loop to drive retention.</p>
                </div>
                <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                  <h4 className="font-bold text-red-900 mt-0 mb-2">2. Broken Viral Conversion Loop (Critical)</h4>
                  <p className="m-0 text-red-800 text-[16px]">X possesses massive external virality, but restrictive login walls and poor logged-out UI prevent this traffic from converting into active signups. It is a massive top-of-funnel leak.</p>
                </div>
                <div className="bg-orange-50/50 border border-orange-100 p-6 rounded-xl">
                  <h4 className="font-bold text-orange-900 mt-0 mb-2">3. Weak First Session Relevance (High)</h4>
                  <p className="m-0 text-orange-800 text-[16px]">If a user selects generic interests during onboarding, the resulting feed lacks depth. If the algorithm fails to deliver an "Aha Moment" within the first session, early churn is almost guaranteed.</p>
                </div>
              </div>
            </section>

            {/* 4. Proposed Growth Epics */}
            <section id="growth-epics" className="scroll-mt-32">
              <h2>Proposed Growth Epics</h2>
              
              <h3>Epic 1: Logged-Out Experience Optimization</h3>
              <p>
                <strong>Goal:</strong> Convert viral top-of-funnel traffic into signed-in users. <br/>
                <strong>Implementation:</strong> Reduce login wall friction. Allow deeper thread viewing without an account, paired with smart, contextual prompts (e.g., "See more like this &rarr; personalize your feed") instead of hard roadblocks.
              </p>

              <h3>Epic 2: Social Graph Bootstrapping</h3>
              <p>
                <strong>Goal:</strong> Eradicate the "Lonely User" problem to lift activation and retention. <br/>
                <strong>Implementation:</strong> Aggressively suggest contacts (via sync) and introduce guided, high-signal follow packs ("Top Startup Founders", "Finance Experts") to ensure users follow at least 10 relevant accounts immediately.
              </p>

              <h3>Epic 3: Smart Onboarding & Personalization Engine</h3>
              <p>
                <strong>Goal:</strong> Guarantee a highly relevant feed within minutes of signup. <br/>
                <strong>Implementation:</strong> Replace static check-box interest selection with real-time preference learning based on first-session dwell time and intent-based prompts ("Who do you want to learn from?").
              </p>

              <h3>Epic 4: First Interaction Accelerator</h3>
              <p>
                <strong>Goal:</strong> Reduce the intimidation of posting to trigger early feedback loops. <br/>
                <strong>Implementation:</strong> Provide guided first interactions such as one-tap reactions, AI-assisted tweet drafting, and contextual reply suggestions.
              </p>
            </section>

            {/* 5. RICE Prioritization */}
            <section id="rice-prioritization" className="scroll-mt-32">
              <h2>RICE Prioritization</h2>
              <p>
                Using the RICE framework <em>(Reach &times; Impact &times; Confidence &divide; Effort)</em>, the epics were scored to determine execution order. 
              </p>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-4 font-bold text-gray-900">Initiative</th>
                      <th className="py-4 font-bold text-gray-900 text-center">Reach</th>
                      <th className="py-4 font-bold text-gray-900 text-center">Impact</th>
                      <th className="py-4 font-bold text-gray-900 text-center">Conf.</th>
                      <th className="py-4 font-bold text-gray-900 text-center">Effort</th>
                      <th className="py-4 font-bold text-blue-700 text-center">Score</th>
                    </tr>
                  </thead>
                  <tbody className="text-[16px]">
                    <tr className="border-b border-gray-100 bg-blue-50/30">
                      <td className="py-3 font-medium text-gray-900">Logged-Out Experience Opt.</td>
                      <td className="py-3 text-center text-gray-600">9</td>
                      <td className="py-3 text-center text-gray-600">2</td>
                      <td className="py-3 text-center text-gray-600">85%</td>
                      <td className="py-3 text-center text-gray-600">2</td>
                      <td className="py-3 text-center font-bold text-blue-700">7.65</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-900">Social Graph Bootstrapping</td>
                      <td className="py-3 text-center text-gray-600">8</td>
                      <td className="py-3 text-center text-gray-600">3</td>
                      <td className="py-3 text-center text-gray-600">85%</td>
                      <td className="py-3 text-center text-gray-600">3</td>
                      <td className="py-3 text-center font-bold text-gray-900">6.80</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-900">Smart Onboarding Engine</td>
                      <td className="py-3 text-center text-gray-600">9</td>
                      <td className="py-3 text-center text-gray-600">3</td>
                      <td className="py-3 text-center text-gray-600">80%</td>
                      <td className="py-3 text-center text-gray-600">4</td>
                      <td className="py-3 text-center font-bold text-gray-900">5.40</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-900">First Interaction Accelerator</td>
                      <td className="py-3 text-center text-gray-600">7</td>
                      <td className="py-3 text-center text-gray-600">2</td>
                      <td className="py-3 text-center text-gray-600">75%</td>
                      <td className="py-3 text-center text-gray-600">2</td>
                      <td className="py-3 text-center font-bold text-gray-900">5.25</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-900">Feed Quality Optimization</td>
                      <td className="py-3 text-center text-gray-600">10</td>
                      <td className="py-3 text-center text-gray-600">3</td>
                      <td className="py-3 text-center text-gray-600">70%</td>
                      <td className="py-3 text-center text-gray-600">5</td>
                      <td className="py-3 text-center font-bold text-gray-900">4.20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Strategic Roadmap */}
            <section id="strategic-roadmap" className="scroll-mt-32">
              <h2>Strategic Roadmap Summary</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm my-8">
                <p className="text-[20px] leading-[1.6] m-0 text-gray-900 font-medium italic">
                  "Better onboarding &rarr; better feed &rarr; more engagement &rarr; more content &rarr; more virality &rarr; more users."
                </p>
              </div>
              <p>
                Based on the RICE scores, the execution strategy rolls out in three phases designed to compound growth:
              </p>
              <ul>
                <li><strong>Phase 1 (Immediate ROI):</strong> Logged-out experience optimization to immediately capture leaking acquisition traffic at low effort.</li>
                <li><strong>Phase 2 (Activation Excellence):</strong> Social Graph Bootstrapping and Smart Onboarding to guarantee Day 1 retention and emotional stickiness.</li>
                <li><strong>Phase 3 (Long-Term Retention):</strong> Heavier ML investments into Feed Quality Optimization and Trust & Safety layers to sustain long-term ecosystem health.</li>
              </ul>
            </section>

          </div>
        </CaseStudyLayout>
      </main>
      <Footer />
    </>
  );
}
