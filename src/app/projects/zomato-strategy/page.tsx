import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ZomatoStrategyCaseStudy() {
  const tocItems = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "okrs", title: "CY2026 OKRs & North Star" },
    { id: "initiatives", title: "Strategic Initiatives" },
    { id: "funnel-analysis", title: "Funnel Analysis" },
    { id: "cohort-analysis", title: "Cohort Analysis" },
    { id: "strategic-summary", title: "Strategic Summary" },
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
                Growth & Retention
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Zomato Tier-1 Strategy
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              Optimizing the end-to-end journey to transition Zomato from a transactional platform to a habit-driven daily utility.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Role</p>
                <p className="font-semibold text-gray-900 text-[16px]">Product Manager</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Focus</p>
                <p className="font-semibold text-gray-900 text-[16px]">Engagement & Funnel Opt.</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Skills</p>
                <p className="font-semibold text-gray-900 text-[14px]">Cohort Analysis, OKRs</p>
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
                <strong>Problem:</strong> In highly saturated Tier-1 cities, food delivery platforms struggle to convert occasional, discount-driven users into loyal, high-frequency customers.
              </p>
              <p>
                <strong>Objective:</strong> Improve user engagement and long-term retention by optimizing the end-to-end journey from discovery to delivery.
              </p>
              <p>
                <strong>Approach:</strong> Defined rigorous CY2026 OKRs centered around a specific North Star Metric. Backed these goals with detailed Funnel and Cohort analyses to identify the highest-leverage drop-off points and behavioral gaps.
              </p>
              <p>
                <strong>Strategic Insight:</strong> Zomato's long-term success relies not on acquiring net-new users, but on increasing the frequency of existing users. We must prioritize AI-driven personalization, frictionless checkout, and unshakeable delivery reliability to build habit-forming engagement.
              </p>
            </section>

            {/* 2. OKRs & North Star */}
            <section id="okrs" className="scroll-mt-32">
              <h2>CY2026 OKRs & North Star</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm mb-8">
                <p className="text-[18px] leading-[1.8] m-0 text-gray-700 font-medium">
                  <strong>North Star Metric (NSM):</strong> Monthly Transacting Users (MTU) with ≥ 3 orders per month.
                </p>
                <p className="text-[16px] leading-[1.6] m-0 text-gray-500 mt-4">
                  <em>Rationale:</em> This metric precisely captures both engagement (frequency) and retention (repeat usage), aligning directly with habit formation and long-term unit economics.
                </p>
              </div>

              <h3>Objective</h3>
              <p>Make Zomato the default daily food companion by increasing habitual usage and long-term user retention in Tier-1 cities.</p>

              <h3>Key Results</h3>
              <ul>
                <li><strong>KR1:</strong> Increase average order frequency per active user by 30%.</li>
                <li><strong>KR2:</strong> Improve 30-day retention of new users from ~25% to 40%.</li>
                <li><strong>KR3:</strong> Reduce checkout drop-off rate by 20%.</li>
                <li><strong>KR4:</strong> Increase delivery satisfaction (NPS) by 15%.</li>
              </ul>
            </section>

            {/* 3. Strategic Initiatives */}
            <section id="initiatives" className="scroll-mt-32">
              <h2>Strategic Initiatives</h2>
              
              <h3>Initiative 1: Personalized Discovery Feed</h3>
              <p>
                <strong>Problem:</strong> Users experience discovery fatigue and bounce due to irrelevant listings. <br/>
                <strong>Hypothesis:</strong> AI-driven recommendations based on past behavior will increase Add-to-Cart rates. <br/>
                <strong>Metrics:</strong> Track recommendation CTR (Input) leading to increased Menu Views and Add-to-Cart rates (Output).
              </p>

              <h3>Initiative 2: One-Tap Reorder & Smart Nudges</h3>
              <p>
                <strong>Problem:</strong> High friction for repeat orders reduces habit formation. <br/>
                <strong>Hypothesis:</strong> Surfacing contextual, one-tap reorders via push notifications during meal times will drastically shorten the session-to-order funnel. <br/>
                <strong>Metrics:</strong> Track Reorder suggestion visibility (Input) leading to higher Session-to-Order conversion rates (Output).
              </p>

              <h3>Initiative 3: Smart Pricing Strategy</h3>
              <p>
                <strong>Problem:</strong> Users acquired via heavy discounts churn when those incentives are removed. <br/>
                <strong>Hypothesis:</strong> Shifting to dynamic pricing and emphasizing loyalty benefits will improve unit economics without sacrificing volume. <br/>
                <strong>Metrics:</strong> Track Coupon usage rate (Input) to monitor the rise in the Full-price order ratio and AOV (Output).
              </p>

              <h3>Initiative 4: Predictable Delivery</h3>
              <p>
                <strong>Problem:</strong> Delivery uncertainty reduces trust and suppresses repeat usage. <br/>
                <strong>Hypothesis:</strong> Improving ETA accuracy and proactive delay communication will protect user trust. <br/>
                <strong>Metrics:</strong> Track ETA prediction accuracy (Input) leading to a higher On-time delivery rate and reduced complaints (Output).
              </p>
            </section>

            {/* 4. Funnel Analysis */}
            <section id="funnel-analysis" className="scroll-mt-32">
              <h2>Funnel Analysis</h2>
              <p>
                Analyzing the Discovery &rarr; Order &rarr; Delivery funnel reveals two massive high-leverage drop-off points that must be prioritized.
              </p>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-4 font-bold text-gray-900 w-1/4">Funnel Stage</th>
                      <th className="py-4 font-bold text-gray-900 w-1/3">Likely Drop-off Reason</th>
                      <th className="py-4 font-bold text-gray-900">Improvement Hypothesis</th>
                    </tr>
                  </thead>
                  <tbody className="text-[16px]">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">App Open &rarr; Discovery</td>
                      <td className="py-4 text-gray-600">Low intent or overwhelming choices.</td>
                      <td className="py-4 text-gray-600">Introduce personalized "Quick Picks" on the immediate landing screen.</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-red-50/50">
                      <td className="py-4 font-medium text-red-900">Discovery &rarr; Menu View</td>
                      <td className="py-4 text-red-700"><strong>(High Impact)</strong> Irrelevant restaurant listings.</td>
                      <td className="py-4 text-red-700">Improve ranking models using past behavior, real-time location, and cuisine preferences.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Menu View &rarr; Cart</td>
                      <td className="py-4 text-gray-600">High perceived prices or unclear options.</td>
                      <td className="py-4 text-gray-600">Highlight combos, bestsellers, and social proof (ratings, reviews) directly on items.</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-red-50/50">
                      <td className="py-4 font-medium text-red-900">Cart &rarr; Checkout</td>
                      <td className="py-4 text-red-700"><strong>(High Impact)</strong> Hidden costs (delivery fee, taxes, surges).</td>
                      <td className="py-4 text-red-700">Display the full cost breakdown upfront before the user initiates checkout.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">Checkout &rarr; Order Placed</td>
                      <td className="py-4 text-gray-600">Payment friction.</td>
                      <td className="py-4 text-gray-600">Enable one-click payments (UPI autopay, saved cards).</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-gray-900">Order Placed &rarr; Delivered</td>
                      <td className="py-4 text-gray-600">Long or uncertain delivery times.</td>
                      <td className="py-4 text-gray-600">Improve real-time tracking and introduce proactive delay communication.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Cohort Analysis */}
            <section id="cohort-analysis" className="scroll-mt-32">
              <h2>Cohort Analysis</h2>
              
              <h3>Cohort 1: New Users vs. Repeat Users</h3>
              <ul>
                <li><strong>Challenge:</strong> New users frequently drop off after their very first order.</li>
                <li><strong>Root Cause:</strong> Inconsistent first experiences and heavy reliance on discounts rather than intrinsic product value.</li>
                <li><strong>Hypothesis:</strong> Create a highly structured "First 3 Orders Experience". We must artificially prioritize top-rated restaurants and ensure the fastest possible delivery SLAs for a user's first three orders to guarantee a high-quality initial hook.</li>
              </ul>

              <h3>Cohort 2: High-Frequency vs. Low-Frequency Users</h3>
              <ul>
                <li><strong>Challenge:</strong> Low-frequency users fail to develop ordering habits.</li>
                <li><strong>Root Cause:</strong> Decision fatigue during discovery and a lack of external triggers.</li>
                <li><strong>Hypothesis:</strong> Introduce time-based, highly contextual nudges. Surfacing a specific lunch recommendation based on past behavior directly addresses the decision fatigue that prevents an order.</li>
              </ul>

              <h3>Cohort 3: Discount-Driven vs. Full-Price Users</h3>
              <ul>
                <li><strong>Challenge:</strong> Discount-driven users churn the moment incentives are pulled back.</li>
                <li><strong>Root Cause:</strong> Extreme price sensitivity and weak intrinsic value perception of the platform itself.</li>
                <li><strong>Hypothesis:</strong> Shift the value proposition by aggressively scaling the loyalty/membership program. Offer free delivery, exclusive restaurant access, and priority routing to build a moat based on service quality, not just price.</li>
              </ul>
            </section>

            {/* 6. Strategic Summary */}
            <section id="strategic-summary" className="scroll-mt-32">
              <h2>Strategic Summary</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm my-8">
                <p className="text-[20px] leading-[1.6] m-0 text-gray-900 font-medium italic">
                  "The long-term success of Zomato depends not on increasing the net number of users, but on increasing how frequently existing users engage. The ultimate goal is to convert occasional users into habitual users."
                </p>
              </div>
              <p>
                To execute this transition from a transactional platform to a habit-driven daily utility, investment must be heavily prioritized across three core pillars:
              </p>
              <ul>
                <li><strong>AI & ML Infrastructure:</strong> To power hyper-personalized discovery and eliminate decision fatigue.</li>
                <li><strong>Checkout Optimization:</strong> To simplify payments and eradicate hidden-fee bounce rates.</li>
                <li><strong>Logistics & Loyalty:</strong> To ensure delivery efficiency while building a robust membership ecosystem that retains users beyond discounting.</li>
              </ul>
            </section>

          </div>
        </CaseStudyLayout>
      </main>
      <Footer />
    </>
  );
}
