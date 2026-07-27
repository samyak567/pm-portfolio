import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SpotifyDaylistCaseStudy() {
  const tocItems = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "product-context", title: "Product Context" },
    { id: "problem-statement", title: "Problem Statement" },
    { id: "jtbd", title: "Jobs To Be Done" },
    { id: "first-principles", title: "First Principles" },
    { id: "key-insight", title: "Key Insight" },
    { id: "opportunity", title: "Opportunity" },
    { id: "proposed-solution", title: "Proposed Solution" },
    { id: "mvp", title: "MVP Scope" },
    { id: "metrics", title: "Success Metrics" },
    { id: "trade-offs", title: "Trade-offs" },
    { id: "risks", title: "Risks" },
    { id: "reflection", title: "Reflection" },
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
                Data Product
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Spotify Daylist Analysis
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              Bridging the trust gap in hyper-personalized, dynamic music recommendations.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Role</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Manager</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Focus</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Strategy</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Skills</p>
                <p className="font-semibold text-gray-900 text-[14px]">JTBD, Analytics, UX Research</p>
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
            
            {/* 1. Executive Summary */}
            <section id="executive-summary" className="scroll-mt-32">
              <h2>Executive Summary</h2>
              <p>
                <strong>Product:</strong> Spotify Daylist, a dynamic playlist adapting to the user's daily listening context.
              </p>
              <p>
                <strong>Problem:</strong> Despite high personalization, Daylist suffers from low repeat adoption. Users hesitate to play it because its constant shifting creates unpredictability, leading them to fall back on safer, familiar choices like Liked Songs or Daily Mixes.
              </p>
              <p>
                <strong>Opportunity:</strong> To shift Daylist from an unpredictable experiment to a trusted daily habit by minimizing the emotional risk of pressing play.
              </p>
              <p>
                <strong>Proposed Improvement:</strong> "Daylist Preview", a lightweight feature that surfaces a short, readable summary of the current playlist's vibe and tempo before the user hits play.
              </p>
              <p>
                <strong>Business Impact:</strong> Expected to drive increased daily opens, improve retention for the feature, and reduce session abandonment by bridging the trust gap in hyper-personalized recommendations.
              </p>
            </section>

            {/* 2. Product Context */}
            <section id="product-context" className="scroll-mt-32">
              <h2>Product Context</h2>
              <p>
                Spotify Daylist is a highly dynamic, time-sensitive playlist that updates automatically throughout the day based on a user's behavior, listening history, and the time of day. 
              </p>
              <p>
                Spotify introduced Daylist to capture micro-moments. Rather than relying on a static "Workout" or "Chill" playlist, Daylist aims to fluidly match the user's exact situational needs as they shift from morning commutes to deep work, and eventually to evening relaxation.
              </p>
              <p>
                The core user problem it attempts to solve is the reduction of cognitive effort. Users want the right music for their current context without having to search or curate it themselves. Increasing Daylist adoption matters significantly for Spotify—it deepens the habitual loop, increases daily session frequency, and solidifies Spotify's position as an ambient, context-aware companion rather than just a music library.
              </p>
            </section>

            {/* 3. Problem Statement */}
            <section id="problem-statement" className="scroll-mt-32">
              <h2>Problem Statement</h2>
              <p>
                Daylist adoption and repeat usage remain remarkably low. Despite the algorithm's sophisticated personalization, users continually revert to Liked Songs, Manual Search, Daily Mix, and familiar static playlists.
              </p>
              <p>
                The problem is rooted in unpredictability. Because Daylist frequently changes its name, vibe, and track selection, users never know exactly what they are going to get. In habitual moments—like starting the workday or winding down—users prioritize predictable outcomes. Pressing play on a constantly changing entity feels like an emotional risk, pushing users back toward safer, guaranteed alternatives.
              </p>
            </section>

            {/* 4. Jobs To Be Done Analysis */}
            <section id="jtbd" className="scroll-mt-32">
              <h2>Jobs To Be Done Analysis</h2>
              <p>
                Users do not open Spotify looking for a playlist; they open it to solve a moment-specific problem. The overarching functional job is to reduce the cognitive effort of choosing music, while the emotional job is to perfectly match situational needs.
              </p>
              
              <h3>Morning (Getting Started)</h3>
              <p><strong>Job:</strong> Help me start my day without thinking.</p>
              <ul>
                <li><strong>Functional:</strong> One tap and it works. Music that is familiar and energizing.</li>
                <li><strong>Emotional:</strong> Mornings are full of decisions; music should feel like a push in the right direction. A sense of control.</li>
                <li><strong>When Daylist works:</strong> It feels like a reliable morning routine rather than a random experiment.</li>
              </ul>

              <h3>Work Hours (Focus Mode)</h3>
              <p><strong>Job:</strong> Help me stay focused.</p>
              <ul>
                <li><strong>Functional:</strong> Music that fades into the background. No sudden vocals or energy spikes.</li>
                <li><strong>Emotional:</strong> Feeling calm and in flow. Absolute trust that the music won't distract.</li>
                <li><strong>When Daylist works:</strong> It sounds consistent every workday, eliminating the need to "check" if it's safe to play.</li>
              </ul>

              <h3>Evening (Unwinding)</h3>
              <p><strong>Job:</strong> Help me unwind after work.</p>
              <ul>
                <li><strong>Functional:</strong> Softer music with a clear drop in energy. No jarring transitions.</li>
                <li><strong>Emotional:</strong> Comfort over novelty. A smooth transition into personal time.</li>
                <li><strong>When Daylist works:</strong> It acts as a reliable signal that work is done and the environment is emotionally safe.</li>
              </ul>

              <h3>Late Night (Relaxing or Sleeping)</h3>
              <p><strong>Job:</strong> Help me relax without interruptions.</p>
              <ul>
                <li><strong>Functional:</strong> Calm, predictable, almost invisible flow of music.</li>
                <li><strong>Emotional:</strong> Mental quiet. Trust that nothing unexpected will disturb the calm.</li>
                <li><strong>When Daylist works:</strong> It never surprises the user, proving reliable enough for nightly use.</li>
              </ul>
            </section>

            {/* 5. First Principles Analysis */}
            <section id="first-principles" className="scroll-mt-32">
              <h2>First Principles Analysis</h2>
              <p>
                Breaking down the core mechanics of how users interact with Spotify reveals why Daylist struggles.
              </p>
              <ul>
                <li><strong>Why users open Spotify:</strong> Music is rarely the main task. Users are waking up, working, or cooking. They want music to support their primary activity with zero friction. If a playlist requires them to evaluate or fix the music choice, it adds friction to a moment that demands ease.</li>
                <li><strong>The cost of a bad recommendation:</strong> A wrong track isn't just a skip—it's emotionally disruptive. It feels like a mismatch that breaks flow. Behaviorally, this broken trust makes users cautious, prompting them to retreat to familiar playlists next time.</li>
                <li><strong>The flaw in Daylist's assumptions:</strong> Daylist assumes time of day dictates musical preference. However, time is only one variable. Context (what they are doing) and emotion (how they feel) matter more. Relying purely on time makes Daylist feel technically correct but emotionally disconnected.</li>
                <li><strong>Why habits aren't forming:</strong> Habits require predictable outcomes. With Daylist, the trigger (time of day) is static, but the outcome (vibe, tracks) is volatile. This volatility creates hesitation, which is the enemy of habit formation.</li>
              </ul>
            </section>

            {/* 6. Key Insight */}
            <section id="key-insight" className="scroll-mt-32">
              <h2>Key Insight</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm my-8">
                <p className="text-[20px] leading-[1.6] m-0 text-gray-900 font-medium italic">
                  "Daylist isn’t failing because it’s a bad idea. It’s struggling because it asks users to take a small emotional risk every time they press play—and most people don’t want to take that risk multiple times a day."
                </p>
              </div>
              <p>
                Trust and predictability matter far more than novelty during everyday habitual moments. People open Spotify to avoid thinking, not to make choices.
              </p>
            </section>

            {/* 7. Opportunity */}
            <section id="opportunity" className="scroll-mt-32">
              <h2>Opportunity</h2>
              <p>
                Solving the Daylist adoption problem is fundamentally about repairing user confidence. 
              </p>
              <p>
                When a platform pushes heavy personalization, it must be matched with high predictability. If users can trust what is about to play, they will form habits around it. The opportunity lies in removing the "mystery" of the dynamic playlist, transforming it from a gamble into a reliable tool that supports the user's daily transitions seamlessly.
              </p>
            </section>

            {/* 8. Proposed Solution */}
            <section id="proposed-solution" className="scroll-mt-32">
              <h2>Proposed Solution: Daylist Preview</h2>
              <p>
                To eliminate hesitation, I propose <strong>Daylist Preview</strong>. 
              </p>
              <p>
                <strong>How it works:</strong> Before playing, the Daylist UI surfaces a short, glanceable summary of the current iteration. For example, it might display tags like <em>"calm, instrumental, familiar artists"</em> or <em>"upbeat, high energy, vocal-heavy."</em>
              </p>
              <p>
                <strong>Why it solves the problem:</strong> It allows users to quickly judge if the Daylist fits their current mood without the risk of pressing play and being disrupted by a jarring track. It directly addresses the trust gap.
              </p>
              <p>
                <strong>User & Business Value:</strong> For users, it reduces decision friction and uncertainty, making it "safer" to try the playlist. For Spotify, this naturally integrates into the existing UI and recommendations engine, driving higher repeat usage without overhauling the underlying algorithm.
              </p>
            </section>

            {/* 9. MVP */}
            <section id="mvp" className="scroll-mt-32">
              <h2>MVP Scope</h2>
              <h3>Included</h3>
              <ul>
                <li>Generation of 3-4 descriptive metadata tags (vibe, tempo, familiarity) based on the current track mix.</li>
                <li>Surfacing these tags clearly on the Daylist cover and header before playback.</li>
              </ul>
              
              <h3>Out of Scope</h3>
              <ul>
                <li>Audio preview snippets (adds too much friction and technical load for an MVP).</li>
                <li>Manual controls to tweak the Daylist parameters.</li>
              </ul>

              <h3>Future Enhancements</h3>
              <ul>
                <li>Context-aware prompts (e.g., "Are you still working?") to adjust the Daylist dynamically based on user feedback.</li>
                <li>Swipeable alternative Daylists for the same time block to offer controlled choices.</li>
              </ul>
            </section>

            {/* 10. Success Metrics */}
            <section id="metrics" className="scroll-mt-32">
              <h2>Proposed Success Metrics</h2>
              <p>To evaluate the effectiveness of Daylist Preview, we should track the following product metrics:</p>
              
              <ul>
                <li><strong>North Star Metric:</strong> Daylist Daily Opens (Frequency of engagement per user, per day).</li>
                <li><strong>Supporting Metrics:</strong>
                  <ul>
                    <li><strong>Repeat Usage:</strong> Percentage of users who play Daylist more than once in a 24-hour period.</li>
                    <li><strong>Session Duration:</strong> Average time spent listening to Daylist before abandoning or skipping.</li>
                    <li><strong>Playlist Completion / Skip Rate:</strong> Tracking if users are staying in the flow or frequently skipping tracks.</li>
                    <li><strong>Playlist Save Rate:</strong> Rate at which users save a specific iteration of their Daylist.</li>
                    <li><strong>User Retention:</strong> Long-term retention of Daylist as a feature within the user's weekly routine.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* 11. Trade-offs */}
            <section id="trade-offs" className="scroll-mt-32">
              <h2>Trade-offs & Alternatives</h2>
              <p>
                <strong>Alternative 1: Lock the Daylist.</strong> We could stop the playlist from updating so frequently. 
                <br/><em>Why it wasn't chosen:</em> This fundamentally breaks the core value proposition of a dynamic, time-shifting product.
              </p>
              <p>
                <strong>Alternative 2: Provide multiple Daylist options.</strong> Offer users three different variations for their current time block.
                <br/><em>Why it wasn't chosen:</em> This introduces the paradox of choice. Users open Spotify to avoid thinking; asking them to evaluate three different playlists increases cognitive load.
              </p>
              <p>
                <strong>Why the proposed solution is preferred:</strong> Daylist Preview requires zero clicks. It provides just enough information to establish trust without adding interaction friction, preserving the "one-tap" ideal while mitigating emotional risk.
              </p>
            </section>

            {/* 12. Risks */}
            <section id="risks" className="scroll-mt-32">
              <h2>Risks</h2>
              <ul>
                <li><strong>User Adoption:</strong> Users who have already churned from Daylist due to past bad experiences may ignore the UI update entirely.</li>
                <li><strong>Over-personalization:</strong> If the preview tags are too generic (e.g., "Good vibes"), they fail to build trust. If they are too specific, they might alienate the user.</li>
                <li><strong>Technical Complexity:</strong> Ensuring the LLM or tagging system accurately and instantly summarizes a dynamic tracklist with high reliability.</li>
                <li><strong>Experimentation Risks:</strong> Increasing Daylist usage could cannibalize engagement from Daily Mixes or Discover Weekly, requiring careful monitoring of ecosystem-level metrics.</li>
              </ul>
            </section>

            {/* 13. Reflection */}
            <section id="reflection" className="scroll-mt-32">
              <h2>Reflection</h2>
              <p>
                This analysis reinforced that in product management, personalization is not just a data problem—it is a trust problem. The most sophisticated algorithm will fail if the user feels emotionally vulnerable or uncertain about the outcome of pressing play.
              </p>
              <p>
                Moving forward, this hypothesis could be efficiently validated through a targeted A/B test comparing the standard Daylist cover against the new Preview-enabled cover. If successful, it proves that providing context is just as important as providing the right content.
              </p>
            </section>

          </div>
        </CaseStudyLayout>
      </main>
      <Footer />
    </>
  );
}
