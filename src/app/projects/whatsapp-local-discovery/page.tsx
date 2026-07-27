import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WhatsAppLocalDiscoveryCaseStudy() {
  const tocItems = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "product-context", title: "Product Context" },
    { id: "problem-statement", title: "Problem Statement" },
    { id: "market-research", title: "Market Research" },
    { id: "user-research", title: "User Research" },
    { id: "key-insights", title: "Key Insights" },
    { id: "product-opportunity", title: "Product Opportunity" },
    { id: "strategic-recommendation", title: "Strategic Recommendation" },
    { id: "proposed-concepts", title: "Proposed Concepts" },
    { id: "success-metrics", title: "Success Metrics" },
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
                Growth Product
              </span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1.5">
                🟢 Complete
              </span>
            </div>

            <h1 className="font-heading text-[48px] md:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              WhatsApp Local Discovery
            </h1>
            <h2 className="text-[22px] md:text-[24px] font-medium text-gray-500 leading-snug mb-12 max-w-[60ch]">
              People don't need another marketplace. They need a better memory for community trust.
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
                <p className="font-semibold text-gray-900 text-[14px]">Market Research, User Interviews</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Read Time</p>
                <p className="font-semibold text-gray-900 text-[16px]">4 min</p>
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
                <strong>Business Context:</strong> WhatsApp has organically become the default coordination tool for residential societies across India, serving as an informal discovery layer for local services.
              </p>
              <p>
                <strong>Opportunity:</strong> To capture and structure this hyper-local intent without diluting WhatsApp's core messaging value proposition.
              </p>
              <p>
                <strong>Research Approach:</strong> A mixed-methods study evaluating market dynamics, competitor paradigms, and in-depth user interviews across distinct demographic segments.
              </p>
              <p>
                <strong>Core Insight:</strong> Users trust named neighbor endorsements far more than anonymous platform ratings. They do not want another transactional marketplace; they want a structured memory of community trust.
              </p>
              <p>
                <strong>Strategic Recommendation:</strong> WhatsApp must build community-level infrastructure (tagging, pinning, endorsements) rather than marketplace infrastructure (booking, payments, algorithmic ranking).
              </p>
            </section>

            {/* 2. Product Context */}
            <section id="product-context" className="scroll-mt-32">
              <h2>Product Context</h2>
              <p>
                WhatsApp is uniquely positioned in India as the foundational communication layer for urban and semi-urban households. Hyper-local discovery—finding plumbers, electricians, or tutors—already happens within WhatsApp groups. Users rely on neighbors for peer-to-peer recommendations because proximity implies accountability.
              </p>
              <p>
                This behavior matters strategically because it represents an enormous, high-frequency, trust-based interaction loop that organized marketplaces (like Urban Company or Justdial) struggle to penetrate organically. WhatsApp already owns the social graph and the coordination layer; it only lacks the structural memory to make this coordination efficient.
              </p>
            </section>

            {/* 3. Problem Statement */}
            <section id="problem-statement" className="scroll-mt-32">
              <h2>Problem Statement</h2>
              <p>
                The current workflow for discovering a local service on WhatsApp is highly inefficient. A user needs a plumber, posts a query to their residential group, and waits for a neighbor to reply with a contact card.
              </p>
              <p>This informal process creates distinct pain points:</p>
              <ul>
                <li><strong>Repeated Questions:</strong> Users ask for the same vendor contacts month after month because they do not scroll or search chat histories.</li>
                <li><strong>Lost Recommendations:</strong> Valuable, high-trust vendor details disappear rapidly into the chat feed.</li>
                <li><strong>Trust Fragmentation:</strong> It is difficult to gauge how many people actually vouch for a specific vendor.</li>
                <li><strong>Admin Burden:</strong> Group administrators are forced into the role of manual knowledge managers, constantly re-sharing PDF lists of approved vendors.</li>
              </ul>
              <p>
                Despite these frictions, the behavior persists because the trust generated by a known neighbor vastly outweighs the operational friction of the group chat.
              </p>
            </section>

            {/* 4. Market Research */}
            <section id="market-research" className="scroll-mt-32">
              <h2>Market Research</h2>
              <p>
                India’s home services economy exceeds $20B annually, with the vast majority remaining informal. The target market includes 50M–70M active residential households averaging 3–6 service requests per year. This represents massive coordination volume.
              </p>
              <h3>Target Users</h3>
              <ul>
                <li><strong>Society Residents:</strong> High demand, relying heavily on neighbor recommendations.</li>
                <li><strong>Working Professionals:</strong> Time-constrained, seeking fast trust validation.</li>
                <li><strong>Semi-Urban Households:</strong> Highest whitespace region where formal platforms have little to no penetration.</li>
                <li><strong>Senior Citizens:</strong> Highly trust-sensitive and resistant to app-based marketplaces.</li>
                <li><strong>RWAs / Admins:</strong> Facing administrative fatigue managing repetitive requests.</li>
              </ul>
              <h3>Competitive Landscape & Trends</h3>
              <p>
                Organized platforms (Urban Company) win on standardized supply but lose on perceived cost. Directories (Justdial, Sulekha) suffer from low trust and outdated listings. Meanwhile, offline channels (kirana stores, notice boards) possess high trust but lack scale. 
              </p>
              <p>
                The overriding behavioral trend is hyper-localization. Trust signaling is shifting from anonymous star ratings to social proximity endorsements. Platform fatigue is also high; users prefer integrated ecosystems over downloading single-purpose service apps.
              </p>
              <h3>Regulatory Considerations</h3>
              <p>
                Structuring vendor data requires adherence to data protection frameworks (DPDP Act), necessitating explicit consent before sharing vendor contacts and strict boundaries to avoid liability for service disputes.
              </p>
            </section>

            {/* 5. User Research */}
            <section id="user-research" className="scroll-mt-32">
              <h2>User Research</h2>
              <p>
                Qualitative interviews revealed significant nuances in how trust and friction are negotiated within communities.
              </p>
              <ul>
                <li>
                  <strong>Trust:</strong> Star ratings cannot compete with proximity. <em>"If Flat 402 says he’s good, that’s enough."</em> Trust increases when the endorser shares a similar living context.
                </li>
                <li>
                  <strong>Discovery:</strong> Asking is easier than searching. <em>"I don’t scroll. I just ask again."</em> Repetition is treated as a feature of social validation, ensuring the recommendation is still current.
                </li>
                <li>
                  <strong>Urgency:</strong> In emergencies, speed amplifies trust reliance. <em>"Leakage means I call whoever responds first."</em> Users bypass price comparisons entirely when urgency hits.
                </li>
                <li>
                  <strong>Community:</strong> Users appreciate the messiness. <em>"It’s messy, but it works."</em> The friction is tolerated because the outcome is perceived as safer.
                </li>
                <li>
                  <strong>Administration:</strong> RWAs experience severe hidden fatigue. <em>"We keep reposting the same electrician number."</em> 
                </li>
                <li>
                  <strong>Platform Expectations:</strong> A strong rejection of commercialization. <em>"If it becomes like an app, I’ll ignore it."</em> Users expect community validation, not background checks.
                </li>
              </ul>
            </section>

            {/* 6. Key Insights */}
            <section id="key-insights" className="scroll-mt-32">
              <h2>Key Insights</h2>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl not-prose shadow-sm my-8">
                <p className="text-[20px] leading-[1.6] m-0 text-gray-900 font-medium italic">
                  Asking is easier than searching. Users prefer social refresh over archive retrieval because recent validation implies current reliability.
                </p>
              </div>
              <ul>
                <li><strong>Trust is Named:</strong> "Verified" means community-used, not platform-checked. Social proximity is the strongest trust signal.</li>
                <li><strong>Friction is a Feature:</strong> The manual effort of asking and replying reinforces community bonds. Total automation would degrade trust.</li>
                <li><strong>Urgency Bypasses Evaluation:</strong> When speed is critical, the first trusted contact wins, nullifying the need for complex ranking algorithms.</li>
                <li><strong>Admins are the Bottleneck:</strong> The system relies on the unpaid labor of group admins who are suffering from repetition fatigue.</li>
              </ul>
            </section>

            {/* 7. Product Opportunity */}
            <section id="product-opportunity" className="scroll-mt-32">
              <h2>Product Opportunity</h2>
              <p>
                WhatsApp has the opportunity to convert chaotic trust signals into structured community memory. 
              </p>
              <p>
                By providing lightweight organizational tools, WhatsApp can make vendor information searchable and reduce admin productivity loss, without stripping away the essential human element of a neighborly recommendation. This deepens platform engagement, increases group stickiness, and cements WhatsApp as the indispensable operating system for Indian communities.
              </p>
            </section>

            {/* 8. Strategic Recommendation */}
            <section id="strategic-recommendation" className="scroll-mt-32">
              <h2>Strategic Recommendation</h2>
              <p>
                WhatsApp must strictly build <strong>community infrastructure, not marketplace infrastructure</strong>.
              </p>
              <p>
                <strong>What WhatsApp should do:</strong> Structure existing recommendations, improve recall, empower group admins, and enable lightweight, peer-to-peer reputation signals.
              </p>
              <p>
                <strong>What WhatsApp should NOT do:</strong> Handle payments, charge commissions, rank vendors algorithmically, or mediate service disputes. Crossing into transactional territory fundamentally alters the risk profile, introduces severe liability, and violates the behavioral alignment of the users.
              </p>
            </section>

            {/* 9. Proposed Concepts */}
            <section id="proposed-concepts" className="scroll-mt-32">
              <h2>Proposed Concepts</h2>
              
              <h3>1. Community-Endorsed Vendor Directory</h3>
              <p>
                <strong>Problem:</strong> High-trust vendor contacts are lost in chat feeds. <br/>
                <strong>Value:</strong> An admin-managed, in-group directory featuring an optional "Used by X members" signal. No algorithmic ranking; purely social validation. <br/>
                <strong>Trade-offs:</strong> Requires active admin maintenance to ensure the list doesn't become outdated.
              </p>

              <h3>2. Structured Service Tags & Threads</h3>
              <p>
                <strong>Problem:</strong> Asking for services clutters the main feed and makes historical searches difficult. <br/>
                <strong>Value:</strong> When a user types "Looking for a plumber", WhatsApp auto-suggests a `#Plumber` tag, grouping responses into an auto-thread. This preserves organic conversation while creating a searchable category. <br/>
                <strong>Trade-offs:</strong> Relies on users adopting the tagging behavior.
              </p>

              <h3>3. Admin Coordination Toolkit</h3>
              <p>
                <strong>Problem:</strong> RWAs face fatigue answering repetitive queries. <br/>
                <strong>Value:</strong> Provides tools for vendor pinning, exporting vendor sheets, and lightweight spam control, positioned purely as a group organization feature. <br/>
                <strong>Trade-offs:</strong> Increases the feature density of WhatsApp groups, which historically pride themselves on simplicity.
              </p>
            </section>

            {/* 10. Success Metrics */}
            <section id="success-metrics" className="scroll-mt-32">
              <h2>Success Metrics (Proposed)</h2>
              <p>To evaluate the impact of these infrastructure features, I propose tracking:</p>
              <ul>
                <li><strong>Search Success Rate:</strong> Frequency of users successfully finding a contact via tags or directories without querying the group.</li>
                <li><strong>Repeated Query Reduction:</strong> Decrease in the volume of identical service requests within a 30-day window.</li>
                <li><strong>Recommendation Reuse:</strong> How often a pinned or directory-listed vendor contact card is forwarded or dialed.</li>
                <li><strong>Admin Time Saved:</strong> Qualitative metric measuring RWA satisfaction and perceived reduction in moderation workload.</li>
                <li><strong>Community Participation:</strong> Percentage of group members actively utilizing the "endorse" or tag functionalities.</li>
              </ul>
            </section>

            {/* 11. Risks */}
            <section id="risks" className="scroll-mt-32">
              <h2>Risks & Mitigation</h2>
              <ul>
                <li><strong>Privacy & Consent:</strong> Storing vendor data requires explicit consent. <em>Mitigation: Ensure vendors must opt-in to be added to a community directory.</em></li>
                <li><strong>Spam:</strong> Vendors may infiltrate groups to exploit a structured directory. <em>Mitigation: Restrict directory additions strictly to group administrators.</em></li>
                <li><strong>Liability:</strong> WhatsApp could be perceived as an intermediary. <em>Mitigation: Maintain clear UX copy stating WhatsApp does not verify or guarantee service quality.</em></li>
                <li><strong>Trust Dilution:</strong> Over-formalization may reduce the authenticity of the recommendation. <em>Mitigation: Keep the core metric as "Used by X members" rather than a 5-star scale.</em></li>
                <li><strong>Platform Philosophy:</strong> Drifting toward a marketplace risks bloating the app. <em>Mitigation: Confine features strictly to group settings, keeping personal messaging untouched.</em></li>
              </ul>
            </section>

            {/* 12. Reflection */}
            <section id="reflection" className="scroll-mt-32">
              <h2>Reflection</h2>
              <p>
                This exploration proved that friction is not always a flaw. In the context of community trust, the manual effort of asking and answering acts as a crucial social filter. 
              </p>
              <p>
                The strategic takeaway is that product managers must resist the urge to over-optimize. Building a marketplace would destroy the very trust that makes WhatsApp valuable for local discovery. Future validation should focus on testing the simplest possible version of a `#tag` system to observe if users adopt structured memory without losing the conversational warmth of the platform.
              </p>
            </section>

          </div>
        </CaseStudyLayout>
      </main>
      <Footer />
    </>
  );
}
