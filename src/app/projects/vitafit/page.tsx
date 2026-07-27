import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VitaFitCaseStudy() {
  const tocItems = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "problem-statement", title: "Problem Statement" },
    { id: "target-audience", title: "Target Audience" },
    { id: "proposed-solution", title: "Proposed Features" },
    { id: "core-flows", title: "Core Flows & Wireframes" },
    { id: "success-metrics", title: "Success Metrics" },
    { id: "rollout-plan", title: "Rollout Plan" },
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
                Retention Strategy
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              VitaFit Momentum
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              Transforming a transactional workout library into a behavior-driven fitness community.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Role</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Manager</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Focus</p>
                <p className="font-semibold text-gray-900 text-[16px]">Engagement & Retention</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Skills</p>
                <p className="font-semibold text-gray-900 text-[14px]">PRD, Wireframing, Gamification</p>
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
                <strong>Product Context:</strong> VitaFit is a leading health and fitness platform specializing in on-demand exercise sessions (yoga, zumba, etc.).
              </p>
              <p>
                <strong>Opportunity:</strong> Transition VitaFit from a passive content consumption platform into an active, behavior-driven ecosystem by embedding social accountability and gamification.
              </p>
              <p>
                <strong>Proposed Solution:</strong> <em>VitaFit Momentum</em>, a dual-feature engagement system introducing a personalized Gamification & Rewards track and collaborative Community Challenges.
              </p>
              <p>
                <strong>Strategic Impact:</strong> Expected to drive a 20% increase in repeat usage and a 15% improvement in Week-4 retention by generating higher emotional stickiness and instructor-user bonding.
              </p>
            </section>

            {/* 2. Problem Statement */}
            <section id="problem-statement" className="scroll-mt-32">
              <h2>Problem Statement</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm mb-8">
                <p className="text-[18px] leading-[1.8] m-0 text-gray-700 font-medium">
                  VitaFit is experiencing declining repeat usage and retention because users treat workouts as optional, transactional activities rather than habit-forming commitments.
                </p>
              </div>
              <p>
                This drop in user motivation is compounded by a lack of personal connection with instructors and a completely solo user experience. 
              </p>
              
              <h3>Data & Behavioral Signals</h3>
              <ul>
                <li><strong>Quantitative Drop-off:</strong> A sharp decline in session frequency post-Week 2 onboarding, resulting in a high MAU but a deteriorating WAU/DAU ratio.</li>
                <li><strong>Missing Accountability:</strong> Industry benchmarks indicate that social accountability increases workout adherence by 30–40%. VitaFit's current solo-consumption model entirely misses this retention lever.</li>
                <li><strong>Lack of Progress Visibility:</strong> Internal analytics reveal motivation declines correlate directly with the absence of visible progression. Conversely, users who complete ≥3 sessions/week retain 2–3× longer.</li>
              </ul>
            </section>

            {/* 3. Target Audience */}
            <section id="target-audience" className="scroll-mt-32">
              <h2>Target Audience</h2>
              <p>
                <strong>Primary Segment: Working Professionals (Age 22–40)</strong><br/>
                They have busy schedules, highly fluctuating motivation levels, and prefer guided accountability to maintain flexible but structured fitness routines.
              </p>
              <p>
                <strong>Secondary Segment: Home-Workout Enthusiasts</strong><br/>
                Gen Z and millennial users who lack the social interaction of a physical gym and are highly motivated by competition, social proof, and achievements.
              </p>
            </section>

            {/* 4. Proposed Features */}
            <section id="proposed-solution" className="scroll-mt-32">
              <h2>Proposed Features: VitaFit Momentum</h2>
              <p>
                To reverse retention decay, we must transition users through a specific behavioral flywheel: <strong>Motivation &rarr; Action &rarr; Reward &rarr; Habit Loop.</strong>
              </p>

              <h3>1. Gamification & Rewards System</h3>
              <p>
                A personalized progression track designed to reward consistency and instructor interaction.
              </p>
              <ul>
                <li><strong>FitPoints Economy:</strong> Earned for completing sessions, maintaining daily/weekly streaks, trying new workout modalities, and engaging with instructors.</li>
                <li><strong>Gamified Elements:</strong> XP levels (Beginner &rarr; Pro Athlete), achievement badges, and a persistent progress dashboard.</li>
                <li><strong>Reward Unlocks:</strong> Points convert to tangible value—premium sessions, instructor shoutouts, discount coupons, or avatar upgrades.</li>
              </ul>

              <h3>2. Community Challenges</h3>
              <p>
                Social fitness experiences where users participate in group-based events, competing collaboratively.
              </p>
              <ul>
                <li><strong>Formats:</strong> 7-Day Yoga Reset, 10K Steps Daily Challenge, Zumba Burn League.</li>
                <li><strong>Social Mechanics:</strong> Global and friend-based leaderboards, team challenges, and community chat rooms.</li>
                <li><strong>Community Layer:</strong> Deepens the instructor relationship by allowing users to follow instructors, join their specific fitness groups, and receive personalized encouragement nudges.</li>
              </ul>
            </section>

            {/* 5. Core Flows & Wireframes */}
            <section id="core-flows" className="scroll-mt-32">
              <h2>Core Flows & Visualizing UX</h2>
              <p>
                The features are designed to integrate seamlessly into existing user touchpoints, injecting engagement triggers at high-leverage moments.
              </p>

              <h3>The Entry Point: Home Dashboard</h3>
              <p>
                Immediately upon opening the app, the user is presented with their current <strong>Streak</strong> and a <strong>Weekly Goal Progress Ring</strong> (e.g., 3/5 sessions). 
                <br/><em>Retention Trigger:</em> Streak visibility and goal tension create an immediate psychological drive to complete a session and avoid losing progress.
              </p>

              <h3>The Dopamine Loop: Post-Workout Celebration</h3>
              <p>
                Upon finishing a workout, a high-fidelity reward screen triggers. It displays FitPoints earned, streak extensions, and unlocked badges (e.g., "Consistency Starter").
                <br/><em>Retention Trigger:</em> Immediate positive reinforcement combined with a suggested CTA for the next day's challenge builds the habit loop.
              </p>

              <h3>The Accountability Loop: Active Challenge Dashboard</h3>
              <p>
                When participating in a "7-Day Yoga Reset", the UI shifts to display the user's live rank, peer comparisons, and motivational messages directly from the instructor.
                <br/><em>Retention Trigger:</em> Fear of falling down the leaderboard and social commitment to the team enforce daily return rates.
              </p>
            </section>

            {/* 6. Success Metrics */}
            <section id="success-metrics" className="scroll-mt-32">
              <h2>Success Metrics</h2>
              <p>
                These features are explicitly designed to move the needle on long-term engagement. Evaluation metrics include:
              </p>
              <ul>
                <li><strong>Primary Metrics:</strong>
                  <ul>
                    <li>Week 4 Retention Rate (&uarr;)</li>
                    <li>Sessions per user per week (&uarr;)</li>
                    <li>Repeat workout rate (&uarr;)</li>
                    <li>Challenge participation rate</li>
                  </ul>
                </li>
                <li><strong>Secondary Metrics:</strong>
                  <ul>
                    <li>DAU/MAU ratio improvement</li>
                    <li>Instructor follow interactions</li>
                    <li>Streak continuation rate</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* 7. Rollout Plan */}
            <section id="rollout-plan" className="scroll-mt-32">
              <h2>Implementation & Rollout Plan</h2>
              <p>
                To mitigate risk and measure incremental lift, the launch will be phased:
              </p>
              <ul>
                <li>
                  <strong>Phase 1: MVP Validation (Gamification Lite)</strong><br/>
                  Introduce streaks, points, and limited badges. A/B test against a control group to isolate the impact on session frequency.
                </li>
                <li>
                  <strong>Phase 2: Community Pilot</strong><br/>
                  Launch challenges with a curated set of instructors for a small cohort (10–15% of users). Measure the lift in participation and retention against the Phase 1 group.
                </li>
                <li>
                  <strong>Phase 3: Full Ecosystem Rollout</strong><br/>
                  Deploy the full rewards marketplace, team challenges, social sharing capabilities, and comprehensive instructor communities globally.
                </li>
              </ul>
            </section>

          </div>
        </CaseStudyLayout>
      </main>
      <Footer />
    </>
  );
}
