import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function KitchenCueCaseStudy() {
  const tocItems = [
    { id: "overview", title: "Problem Statement" },
    { id: "audience", title: "Target Audience" },
    { id: "problems", title: "Key Problems to Solve" },
    { id: "flows", title: "Core User Flows" },
    { id: "testing", title: "Usability Testing" },
    { id: "refinement", title: "Prototype Refinement" },
    { id: "learnings", title: "Key Learnings" },
    { id: "prototype", title: "Live Prototype" },
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
                Functional Prototype
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Kitchen Cue
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              A smart meal planning prototype addressing decision fatigue, dietary personalization, and pantry utilization.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Role</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Manager</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Focus</p>
                <p className="font-semibold text-gray-900 text-[16px]">Prototyping & UX Testing</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Tools</p>
                <p className="font-semibold text-gray-900 text-[14px]">Lovable, Rapid Prototyping</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Read Time</p>
                <p className="font-semibold text-gray-900 text-[16px]">5 min</p>
              </div>
            </div>
          </div>
        </Section>

        {/* CASE STUDY CONTENT */}
        <CaseStudyLayout sidebar={<TableOfContents items={tocItems} />}>
          <div className="prose prose-gray max-w-[70ch] space-y-16 prose-p:text-[18px] prose-p:leading-[1.8] prose-p:text-gray-700 prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-[32px] prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-[22px] prose-h3:mt-10 prose-h3:mb-4 prose-li:text-[18px] prose-li:leading-[1.8] prose-li:text-gray-700 prose-a:text-gray-900 prose-a:font-semibold prose-a:underline-offset-4 prose-blockquote:border-gray-200 prose-blockquote:text-gray-600 prose-blockquote:font-normal prose-blockquote:not-italic pb-24">
            
            {/* 1. Problem Statement */}
            <section id="overview" className="scroll-mt-32">
              <h2>Problem Statement</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm mb-8">
                <p className="text-[18px] leading-[1.8] m-0 text-gray-700 font-medium">
                  Busy individuals struggle to consistently plan their weekly meals because the process is time-consuming, mentally draining, and rarely personalized to their available cooking time, dietary needs, or existing pantry inventory.
                </p>
              </div>
              <p>
                As a result, users experience daily decision stress, generate unnecessary food waste, and fall into inconsistent, often unhealthy eating habits. Kitchen Cue was developed as a functional prototype to test a smarter, faster way to organize weekly meals.
              </p>
            </section>

            {/* 2. Target Audience */}
            <section id="audience" className="scroll-mt-32">
              <h2>Target Audience</h2>
              <p>
                The primary users are <strong>busy working professionals and young families (ages 25–40)</strong> who want to cook at home but struggle to maintain consistent meal planning due to limited time, unpredictable schedules, and decision fatigue.
              </p>
              <p>Behavioral traits of this segment include:</p>
              <ul>
                <li>Severe time constraints during weekdays.</li>
                <li>Desire for healthier or specific dietary meals.</li>
                <li>Frequent food waste due to lack of planning.</li>
                <li>Preference for simple, repeatable routines.</li>
                <li>Currently using fragmented tools (e.g., Apple Notes, scattered recipes, separate grocery apps).</li>
              </ul>
            </section>

            {/* 3. Key Problems to Solve */}
            <section id="problems" className="scroll-mt-32">
              <h2>Key Problems to Solve</h2>
              
              <h3>1. Decision Fatigue</h3>
              <p>
                Users spend a disproportionate amount of time simply deciding what to cook, especially after a long workday. This friction often leads to stress or the fallback behavior of ordering delivery.
              </p>
              
              <h3>2. Lack of Personalization</h3>
              <p>
                Most existing meal planners serve as static recipe repositories. They fail to adapt to constraints like <em>"how much time the user actually has tonight"</em> or strict dietary preferences, rendering the generated plans unrealistic.
              </p>
              
              <h3>3. Poor Pantry Utilization</h3>
              <p>
                Without a system connecting inventory to recipes, users forget what ingredients they already own. This disconnect directly causes duplicate grocery purchases and significant food waste.
              </p>
            </section>

            {/* 4. Core User Flows */}
            <section id="flows" className="scroll-mt-32">
              <h2>Core User Flows</h2>
              <p>
                The prototype was architected around a streamlined end-to-end journey: <strong>User feels overwhelmed &rarr; Opens app &rarr; Generates plan in minutes &rarr; Adjusts easily &rarr; Shops efficiently &rarr; Cooks with less stress.</strong>
              </p>

              <h3>Flow 1: Personalization Journey (Onboarding)</h3>
              <p><strong>Goal:</strong> Capture necessary constraints so all downstream recommendations are highly relevant.</p>
              <ul>
                <li>User selects dietary preferences (e.g., vegan, high protein).</li>
                <li>User sets realistic cooking time limits (e.g., 15 / 30 / 60 mins).</li>
                <li>User defines primary goals (save time, eat healthy, reduce waste).</li>
                <li><em>Outcome:</em> A personalized dashboard ready to generate tailored plans.</li>
              </ul>

              <h3>Flow 2: Core Journey (Generate Weekly Plan)</h3>
              <p><strong>Goal:</strong> Instantly create a full weekly meal plan, eliminating the cold-start problem.</p>
              <ul>
                <li>User selects the scope (weekdays vs. full week, specific meals like dinner only).</li>
                <li>System generates contextual meal suggestions.</li>
                <li>User reviews the calendar, seamlessly swapping out any unappealing meals.</li>
                <li><em>Outcome:</em> A complete weekly meal plan created in under 5 minutes.</li>
              </ul>

              <h3>Flow 3: Pantry-Based Suggestions</h3>
              <p><strong>Goal:</strong> Maximize existing ingredients to prevent food waste.</p>
              <ul>
                <li>User views their logged pantry inventory.</li>
                <li>User clicks "Cook with what I have".</li>
                <li>System surfaces recipes ranked by <em>Ingredient Match Percentage</em>.</li>
                <li><em>Outcome:</em> Faster decision-making heavily anchored in waste reduction.</li>
              </ul>

              <h3>Flow 4: Adaptability (Edit & Adjust)</h3>
              <p><strong>Goal:</strong> Allow flexibility as schedules inevitably change.</p>
              <ul>
                <li>User can click any meal slot to swap, remove, or manually add a new suggestion.</li>
                <li>Drag-and-drop functionality allows moving meals across days.</li>
                <li><em>Outcome:</em> The plan remains realistic and survives schedule disruptions.</li>
              </ul>

              <h3>Flow 5: Generate Grocery List</h3>
              <p><strong>Goal:</strong> Simplify the downstream shopping experience.</p>
              <ul>
                <li>System cross-references the weekly plan with the pantry inventory.</li>
                <li>Outputs a categorized list of only the missing ingredients.</li>
                <li><em>Outcome:</em> Efficient shopping trips with minimal duplicate purchases.</li>
              </ul>
            </section>

            {/* 5. Usability Testing */}
            <section id="testing" className="scroll-mt-32">
              <h2>Usability Testing & Feedback</h2>
              <p>
                To validate the concepts, I conducted rapid usability testing with three participants representing the target audience (two busy professionals, one health-conscious home cook). They were tasked with completing onboarding, generating a plan, and exploring pantry suggestions.
              </p>

              <h3>What Worked Well</h3>
              <ul>
                <li><strong>Clean Interface:</strong> The minimal clutter was highly praised. <em>"It feels very straightforward and not overwhelming."</em></li>
                <li><strong>Pantry Utility:</strong> Users strongly validated the pantry feature, recognizing it as a direct solution to food waste.</li>
                <li><strong>Intuitive Calendar:</strong> The weekly planner layout was instantly understood without a learning curve.</li>
                <li><strong>Delightful Details:</strong> The "match percentage" on recipes felt smart, and stats like "time saved" provided strong motivational hooks.</li>
              </ul>

              <h3>Areas of Friction</h3>
              <ul>
                <li><strong>Action Hierarchy:</strong> The primary CTA to "Plan My Week" did not visually stand out, causing initial hesitation.</li>
                <li><strong>System Feedback:</strong> Users expected visual confirmation during the automated plan generation process and felt uncertain if the system was working.</li>
                <li><strong>Information Density:</strong> Recipe cards lacked immediate decision-making data (e.g., difficulty level, calories), slowing down the swap process.</li>
              </ul>
            </section>

            {/* 6. Prototype Refinement */}
            <section id="refinement" className="scroll-mt-32">
              <h2>Prototype Refinement</h2>
              <p>
                Based on the testing feedback, I implemented a major revision focused on <strong>Action Hierarchy and System Feedback</strong> within the core planning flow.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-6">
                <h4 className="font-bold text-gray-900 mt-0 mb-3">Key Changes Implemented:</h4>
                <ul className="m-0 space-y-2">
                  <li>Increased scale and contrast of the primary "Plan My Week" button.</li>
                  <li>Added helper microcopy explaining the button's function.</li>
                  <li>Introduced a loading animation during the algorithmic plan generation.</li>
                  <li>Added a clear success confirmation state upon plan creation.</li>
                </ul>
              </div>
              <p>
                <strong>Impact:</strong> These UI refinements drastically reduced uncertainty. Subsequent testing showed users understood their next steps much faster and exhibited higher confidence when interacting with the automated features.
              </p>
            </section>

            {/* 7. Key Learnings */}
            <section id="learnings" className="scroll-mt-32">
              <h2>Key Learnings</h2>
              <ul>
                <li><strong>Hierarchy is Critical:</strong> A clean UI is useless if the primary action isn't glaringly obvious to a first-time user.</li>
                <li><strong>Feedback Builds Trust:</strong> During automated or algorithmic processes, system feedback (loading states, confirmations) is essential to maintain user trust.</li>
                <li><strong>Micro-details Matter:</strong> Small additions, like surfacing decision info on a recipe card, significantly impact the perceived usability of the entire flow.</li>
              </ul>
            </section>

            {/* 8. Live Prototype */}
            <section id="prototype" className="scroll-mt-32">
              <h2>Live Prototype</h2>
              <p>
                The functional prototype for Kitchen Cue was built using Lovable. You can interact with the live build below.
              </p>
              <div className="mt-8 mb-12">
                <a 
                  href="https://kitchen-cue-app.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg", variant: "default" }), "gap-2 px-8")}
                >
                  <ExternalLink className="w-4 h-4" /> Open Kitchen Cue Prototype
                </a>
              </div>
              
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm relative group">
                <iframe 
                  src="https://kitchen-cue-app.lovable.app/" 
                  className="w-full h-full border-0"
                  title="Kitchen Cue Prototype"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </section>

          </div>
        </CaseStudyLayout>
      </main>
      <Footer />
    </>
  );
}
