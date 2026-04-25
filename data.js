// ── HOH STUDIO — MASTER DATA ─────────────────────────────────────────────

const HOH = {

  founder: {
    name: 'Dorian Davis',
    title: 'Founder & Creative Director',
    initials: 'DD',
    tagline: 'Live In Full Color'
  },

  ea: {
    id: 'ea',
    icon: '🗝️',
    iconBg: '#F5F0E8',
    name: 'The Executive Assistant',
    shortName: 'Exec Assistant',
    role: 'Personal Operations',
    status: 'scheduled',
    statusLabel: 'Scheduled',
    chief: null,
    desc: 'Serves Dorian — not the brand. Runs the weekly review, manages context switching across all three engines, tracks the CPA timeline, and makes sure the human running the operation never drops a ball.',
    what: 'The only agent whose job is Dorian Davis, not Hooked on Hue. Holds the full picture across WETA, consulting, and HoH simultaneously. When everything is on fire, this agent tells you what to drop.',
    capabilities: [
      'Weekly review — prods Sunday evening, formats Obsidian note, checks all three engine goals',
      'Context briefs — when you open HoH, it tells you exactly where you left off',
      'CPA study tracker — monitors exam timeline, flags when study hours fall short',
      'Consulting pipeline — Ryan deliverables, new client conversations, what\'s due',
      'Decision queue — surfaces things you said "I\'ll think about that" to at the right moment',
      'Personal communications — emails to partners, collaboration responses, anything to Dorian'
    ]
  },

  chiefs: [
    {
      id: 'chief-content',
      icon: '✦',
      iconBg: '#1A1A18',
      iconColor: '#C5973E',
      name: 'Chief of Content',
      title: 'Senior Agent · Content Studio',
      initials: 'CC',
      status: 'scheduled',
      statusLabel: 'Scheduled',
      desc: 'Owns the full editorial operation. Coordinates all content agents, sets quality standards, manages the content calendar, and delivers Dorian a single weekly brief.',
      what: 'The editorial director of HoH. Doesn\'t write — orchestrates. Makes sure the Voice Keeper, Multiplier, Coach, and Visual Director are working in concert toward the same publishing goals. Runs the content engine so Dorian can focus on the ideas.',
      capabilities: [
        'Weekly consolidated content brief to Dorian',
        'Coordinates all 6 content department agents',
        'Sets and enforces brand voice quality standards',
        'Manages the 4-week sprint calendar',
        'Escalates creative decisions that require Dorian\'s input',
        'Measures content output against 100-post goal'
      ],
      color: '#2A3D32'
    },
    {
      id: 'chief-growth',
      icon: '◈',
      iconBg: '#1A1A18',
      iconColor: '#C5973E',
      name: 'Chief of Growth & Revenue',
      title: 'Senior Agent · Growth & Revenue',
      initials: 'CGR',
      status: 'scheduled',
      statusLabel: 'Scheduled',
      desc: 'Synthesizes all growth and revenue intelligence into one strategic view. Connects audience-building to monetization — the two must work in concert.',
      what: 'Asks the question Dorian should always be asking: are we converting our growth into revenue, and is our revenue strategy growing our audience? The connective tissue between the Growth Strategist\'s audience work and the Offer Architect\'s revenue strategy.',
      capabilities: [
        'Monthly revenue-to-growth synthesis report',
        'Coordinates 6 growth and revenue agents',
        'Monitors traffic milestone progress (50K sessions)',
        'Flags when revenue strategy and audience strategy diverge',
        'Surfaces partnership opportunities to Dorian',
        'Manages the monetization sequencing roadmap'
      ],
      color: '#8B4513'
    },
    {
      id: 'chief-creative',
      icon: '◉',
      iconBg: '#1A1A18',
      iconColor: '#C5973E',
      name: 'Chief of Creative Intelligence',
      title: 'Senior Agent · Creative Intelligence',
      initials: 'CCI',
      status: 'demand',
      statusLabel: 'On Demand',
      desc: 'Owns the brand\'s creative vision, learning infrastructure, and Dorian\'s personal positioning. Always thinking 6 months ahead.',
      what: 'The agent that makes sure HoH never stops growing as a brand — not just as a content operation. Oversees where the brand is going philosophically, what Dorian is learning, and what Vivid Hue is becoming as a separate business.',
      capabilities: [
        'Quarterly brand direction review',
        'Coordinates 6 creative intelligence agents',
        'Maintains HoH brand philosophy integrity',
        'Tracks Dorian\'s personal brand positioning',
        'Vivid Hue business development oversight',
        'Flags when brand decisions need Dorian\'s attention'
      ],
      color: '#4A3728'
    }
  ],

  departments: [
    {
      id: 'content-studio',
      name: 'Content Studio',
      chief: 'chief-content',
      color: '#2A3D32',
      agents: [
        {
          id: 'voice-keeper',
          icon: '✍️', iconBg: '#FDF6E3',
          name: 'The Voice Keeper',
          shortName: 'Voice Keeper',
          role: 'Brand Voice & Editorial',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Writes in HoH\'s distinctive voice — declarative, lyrical, warm. Every draft carries the brand\'s signature three-beat structure.',
          what: 'The guardian of everything HoH sounds like. The most-used agent in the studio. Every blog post, newsletter, and caption passes through this voice.',
          capabilities: ['Blog post drafting across all 5 categories', 'Hue & Human newsletter letters', 'Instagram, Pinterest & TikTok captions', 'Partnership pitch copy', 'SEO meta descriptions in brand voice'],
          project: 'HoH Brand & Content'
        },
        {
          id: 'storytelling-coach',
          icon: '📖', iconBg: '#FFF5F0',
          name: 'The Storytelling Coach',
          shortName: 'Story Coach',
          role: 'Craft & Editorial Development',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Pushes every draft further. Essay structure, narrative arc, the difference between a good post and an unforgettable one.',
          what: 'HoH\'s internal editor. Works at the level of ideas and structure — not copy editing. Finds the strongest sentence in any piece and asks: why isn\'t this the opening line?',
          capabilities: ['Essay structure and narrative arc review', 'Opening and closing line refinement', 'Voice calibration by content category', 'Long-form content development', 'Pitch and treatment writing'],
          project: 'HoH Storytelling Coach'
        },
        {
          id: 'content-multiplier',
          icon: '⚡', iconBg: '#FFFBF0',
          name: 'The Content Multiplier',
          shortName: 'Multiplier',
          role: 'Content Repurposing',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Takes one finished HoH post and produces the full platform suite — Instagram, Pinterest, newsletter section, TikTok hook, X thread.',
          what: 'Triggered every time a post publishes. You create once and show up everywhere. Eliminates the reformatting tax that consumes hours every week.',
          capabilities: ['Instagram carousel outline (7 slides)', 'Pinterest pin description + keyword tags', 'Newsletter section extract', 'TikTok hook + script outline', 'X/Twitter thread (5 posts)', 'YouTube description if applicable'],
          project: 'HoH Brand & Content'
        },
        {
          id: 'visual-director',
          icon: '🎨', iconBg: '#F0F4FF',
          name: 'The Visual Content Director',
          shortName: 'Visual Director',
          role: 'Visual Production',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Produces the visual layer — Pinterest graphics, Instagram carousel layouts, blog header concepts, Canva templates. Distinct from Design Studio\'s conceptual work.',
          what: 'The Design Studio thinks. This agent produces. Every post needs visual assets — this agent specs them, briefs them, and ensures they look unmistakably like HoH.',
          capabilities: ['Pinterest graphic specifications', 'Instagram carousel layout direction', 'Blog header image concepts', 'Canva template briefs', 'Color-forward visual direction per post', 'Brand consistency audits across platforms'],
          project: 'HoH Design Studio'
        },
        {
          id: 'video-producer',
          icon: '🎬', iconBg: '#FFF0F5',
          name: 'The Video & Audio Producer',
          shortName: 'Video Producer',
          role: 'Video & Audio Content',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Scripts YouTube videos and TikToks, structures The Build episodes, writes show notes. Thinks in moving images.',
          what: 'The agent that unlocks video as a growth channel. Translates HoH\'s written voice into visual storytelling — without losing what makes the brand distinctive.',
          capabilities: ['YouTube video scripts', 'TikTok scripts and hooks', 'The Build episode structure', 'Video show notes and descriptions', 'Talking head content direction', 'Color Crush visual exploration scripts'],
          project: 'HoH Brand & Content'
        },
        {
          id: 'seo-auditor',
          icon: '🔍', iconBg: '#F0FFF4',
          name: 'The SEO Auditor',
          shortName: 'SEO Auditor',
          role: 'SEO Optimization',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'Monthly backward look at published posts. Identifies internal linking gaps, keyword cannibalization, and posts close to ranking that need a push.',
          what: 'The Growth Strategist looks forward. This agent looks backward. At 100 posts, retroactive SEO is where significant traffic gains live — this agent finds them.',
          capabilities: ['Monthly post performance review', 'Internal linking gap identification', 'Keyword cannibalization detection', 'Near-ranking post prioritization', 'Meta description refresh recommendations', 'Content cluster integrity check'],
          project: 'HoH Sales & Marketing'
        }
      ]
    },
    {
      id: 'growth-revenue',
      name: 'Growth & Revenue',
      chief: 'chief-growth',
      color: '#8B4513',
      agents: [
        {
          id: 'growth-strategist',
          icon: '📈', iconBg: '#FDF8EE',
          name: 'The Growth Strategist',
          shortName: 'Growth Strategist',
          role: 'SEO, Audience & Reach',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Audience growth, SEO strategy, funnels, and email list building. Triggered on publish and at audience milestones.',
          what: 'Thinks purely in discovery, reach, and conversion. Activated at every publish event and when growth campaigns are planned. The forward-looking counterpart to the SEO Auditor.',
          capabilities: ['Keyword research and on-page SEO', 'Pinterest SEO and pin strategy', 'Email list growth planning', 'Content cluster architecture', 'Audience milestone tracking', 'Platform algorithm intelligence'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'partnerships-manager',
          icon: '🤝', iconBg: '#FFF8F0',
          name: 'The Brand Partnerships Manager',
          shortName: 'Partnerships',
          role: 'Brand Partnerships',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Fires when an inbound inquiry arrives or outbound pitch is ready. Evaluates fit, drafts pitch materials, manages rate card conversations.',
          what: 'Every brand inquiry gets evaluated against the HoH integrity test before Dorian sees it. Pitch-ready materials when the answer is yes. A polished decline when it isn\'t.',
          capabilities: ['Brand fit evaluation against HoH standards', 'Outbound pitch deck drafting', 'Rate card development and negotiation prep', 'Sponsored content brief creation', 'FTC disclosure language', 'Partnership pipeline tracking'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'email-nurture',
          icon: '📧', iconBg: '#F0F8FF',
          name: 'The Email & Nurture Specialist',
          shortName: 'Email & Nurture',
          role: 'Email & Subscriber Journeys',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Thinks in sequences and journeys. Welcome series, re-engagement flows, product launch nurture. Triggered by subscriber events.',
          what: 'Nobody is managing the reader relationship after they subscribe — this agent fixes that. Designs the journey from first subscribe to loyal reader to paying customer.',
          capabilities: ['Welcome sequence (5-email series)', 'Re-engagement campaigns', 'Product launch nurture flows', 'Newsletter segmentation strategy', 'Subject line testing', 'Subscriber milestone celebrations'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'offer-architect',
          icon: '💡', iconBg: '#F3F0FA',
          name: 'The Offer Architect',
          shortName: 'Offer Architect',
          role: 'Products & Revenue Design',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Designs the revenue structure — digital products, affiliate strategy, Substack paid tier, and what 10x scale looks like.',
          what: 'Triggered at traffic milestones, product ideation moments, and inbound opportunities. Every offer must pass the brand integrity test: "Would I feature this for free?"',
          capabilities: ['Digital product development', 'Affiliate platform strategy (LTK, Amazon, ShareASale)', 'Substack paid tier architecture', 'Revenue milestone sequencing', 'Gumroad product setup briefs', 'Sponsorship rate card design'],
          project: 'HoH Offer Architect'
        },
        {
          id: 'revenue-tracker',
          icon: '📊', iconBg: '#F0FFF8',
          name: 'The Revenue Tracker',
          shortName: 'Revenue Tracker',
          role: 'Financial Intelligence',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'Monthly report: affiliate income by platform, ad revenue, sponsorship, digital product sales. Tracks against the 12-month monetization roadmap.',
          what: 'Closes the loop between strategy and reality. Tells Dorian exactly where HoH stands against $1K/month and $5K/month targets — and which channels are performing vs. which need attention.',
          capabilities: ['Monthly revenue report by channel', 'Monetization milestone tracking ($1K, $5K, $10K)', 'Affiliate performance by platform', 'Ad network RPM tracking', 'Sponsorship pipeline value', 'Revenue vs. goal variance analysis'],
          project: 'HoH Offer Architect'
        },
        {
          id: 'reader-experience',
          icon: '💬', iconBg: '#FFF0FB',
          name: 'The Reader Experience Manager',
          shortName: 'Reader Experience',
          role: 'Community & Reader Relations',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'Monitors engagement signals, surfaces reader questions as future content ideas, manages the "In Full Color With" candidate pipeline.',
          what: 'Makes readers feel seen. Tracks which posts get comments, what DMs come in, what questions keep appearing — and turns that signal into content strategy and community building.',
          capabilities: ['Weekly engagement signal report', 'Reader question → content idea pipeline', '"In Full Color With" candidate sourcing', 'Comment and DM response drafts', 'Community health monitoring', 'Loyalty and retention insights'],
          project: 'HoH Sales & Marketing'
        }
      ]
    },
    {
      id: 'creative-intelligence',
      name: 'Creative Intelligence',
      chief: 'chief-creative',
      color: '#4A3728',
      agents: [
        {
          id: 'creative-director',
          icon: '🧭', iconBg: '#F0F7F4',
          name: 'The Creative Director',
          shortName: 'Creative Director',
          role: 'Brand Strategy & Vision',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Holds the big picture. Brand direction, positioning, and the long-term architecture of what HoH is becoming.',
          what: 'The thinking partner for decisions that shape HoH\'s identity. Stress-tests ideas against the brand\'s core philosophy. Has a view and holds it.',
          capabilities: ['Brand positioning and evolution', 'Creative direction for major decisions', 'Partnership alignment reviews', 'Content pillar strategy', 'Brand integrity stress-testing', 'Quarterly brand direction reviews'],
          project: 'HoH Creative CEO'
        },
        {
          id: 'design-studio',
          icon: '🎨', iconBg: '#F0F7F0',
          name: 'The Design Studio',
          shortName: 'Design Studio',
          role: 'Color & Spatial Design',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Color palette direction, mood boards, spatial concepts, and the visual intelligence behind HoH and Vivid Hue.',
          what: 'The conceptual design layer. Every color recommendation comes with cultural context, psychological effect, and light behavior reasoning — not just "this looks nice."',
          capabilities: ['Color palette development with full rationale', 'Mood board concept and direction', 'Vivid Hue client project support', 'Entertaining and tablescape concepts', 'Material and finish direction', 'Seasonal color direction'],
          project: 'HoH Design Studio'
        },
        {
          id: 'intelligence-analyst',
          icon: '🔭', iconBg: '#F5F0FF',
          name: 'The Intelligence Analyst',
          shortName: 'Intel Analyst',
          role: 'Market & Trend Intelligence',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'Weekly report: what performed best, trending topics in design/color/lifestyle, what aligned creators are doing that HoH should know about.',
          what: 'The data layer that makes everything else smarter. Monitors the landscape so Dorian isn\'t operating blind. Surfaces opportunities before they\'re obvious.',
          capabilities: ['Weekly performance digest across platforms', 'Trending topic identification in design/color/lifestyle', 'Competitor and peer creator monitoring', 'Seasonal opportunity flagging', 'Viral content pattern analysis', 'Platform algorithm change alerts'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'private-tutor',
          icon: '🎓', iconBg: '#F5F5F0',
          name: 'The Private Tutor',
          shortName: 'Private Tutor',
          role: 'Learning & Skill Building',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'The learning engine behind the brand. Whatever skill HoH needs next gets studied here — connected always to real application.',
          what: 'Every concept is connected to a real HoH application. When a skill is complex, delivers the 3-step "enough to start" version first, then goes deeper.',
          capabilities: ['SEO strategy and keyword research', 'Pinterest and platform algorithm mastery', 'Photography and visual content styling', 'Color theory and design fundamentals', 'Creator economy and monetization literacy', 'WordPress and site performance'],
          project: 'HoH Private Tutor'
        },
        {
          id: 'personal-brand',
          icon: '✦', iconBg: '#FFF8F5',
          name: 'The Personal Brand Manager',
          shortName: 'Personal Brand',
          role: 'Dorian Davis Positioning',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Manages Dorian\'s distinct personal presence — speaker bio, LinkedIn, podcast pitches, and the human behind HoH.',
          what: 'HoH is the brand. Dorian is the person. This agent makes sure people know who he is — separately from the blog. Critical for speaking, Vivid Hue clients, and consulting credibility.',
          capabilities: ['Speaker bio and media kit', 'LinkedIn presence and thought leadership', 'Podcast guest pitch materials', 'Personal website / about page copy', '"In Full Color With" host positioning', 'Press and media inquiry responses'],
          project: 'HoH Creative CEO'
        },
        {
          id: 'vivid-hue',
          icon: '🏛️', iconBg: '#F0F5FF',
          name: 'The Vivid Hue Studio Manager',
          shortName: 'Vivid Hue',
          role: 'Design Services Operations',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Manages Vivid Hue client operations — intake, project briefs, deliverable templates, pricing. Triggered when a consultation inquiry comes in.',
          what: 'Keeps Vivid Hue running like a real studio, not a side thought. Every client inquiry gets a professional intake process. Every project gets a proper brief. Dorian shows up as a designer, not a blogger.',
          capabilities: ['Client intake and qualification', 'Project brief templates', 'Color consultation deliverable packages', 'Pricing and proposal drafts', 'Client communication templates', 'Vivid Hue portfolio and positioning'],
          project: 'HoH Design Studio'
        }
      ]
    }
  ],

  thirdShift: [
    { time: '12:03 AM', agent: 'Intelligence Analyst', dept: 'CREATIVE INTEL', task: 'Scanned Pinterest, design blogs, and 12 lifestyle newsletters', output: 'Weekly trend brief — 3 emerging color stories worth covering', saved: '2.5h', value: '$312' },
    { time: '12:45 AM', agent: 'SEO Auditor', dept: 'CONTENT STUDIO', task: 'Audited 34 published posts for internal linking gaps', output: '7 posts flagged with specific internal link recommendations', saved: '3h', value: '$375' },
    { time: '1:20 AM', agent: 'Revenue Tracker', dept: 'GROWTH & REVENUE', task: 'Pulled affiliate, ad, and sponsorship data for the month', output: 'Monthly revenue report — $847 vs. $1K target, 3 channels analyzed', saved: '2h', value: '$250' },
    { time: '2:00 AM', agent: 'Reader Experience Manager', dept: 'GROWTH & REVENUE', task: 'Monitored comments, DMs, and engagement signals across platforms', output: 'Weekly reader report — 4 questions surfaced as content ideas', saved: '1.5h', value: '$188' },
    { time: '3:15 AM', agent: 'Content Multiplier', dept: 'CONTENT STUDIO', task: 'Processed 2 published posts into full platform suites', output: '14 platform assets ready — Pinterest pins, IG carousels, X threads', saved: '4h', value: '$500' },
    { time: '5:30 AM', agent: 'Executive Assistant', dept: 'EXECUTIVE', task: 'Prepared weekly review brief and context summary for Dorian', output: 'Sunday review note ready in Obsidian — goals, priorities, next week plan', saved: '1h', value: '$125' }
  ],

  dataFlows: [
    {
      id: 'post-published',
      title: 'A Post Goes Live',
      subtitle: 'Watch one piece of content become a full-studio operation.',
      steps: [
        { agent: 'Voice Keeper', action: 'Publishes the post in HoH\'s voice', output: 'Live blog post on hookedonhue.com' },
        { agent: 'Content Multiplier', action: 'Triggered — processes the post into platform assets', output: '14 platform assets: pins, carousels, threads, newsletter section' },
        { agent: 'Growth Strategist', action: 'Triggered — optimizes SEO and schedules distribution', output: 'Pinterest pins live, SEO confirmed, post in email queue' },
        { agent: 'Visual Content Director', action: 'Specs and queues visual assets for each platform', output: 'Branded graphics for Instagram carousel and Pinterest' },
        { agent: 'Intelligence Analyst', action: 'Adds post to performance monitoring queue', output: 'Post tracked — performance report in 7 days' }
      ]
    },
    {
      id: 'partnership-inquiry',
      title: 'A Brand Reaches Out',
      subtitle: 'From cold inquiry to partnership decision — fully managed.',
      steps: [
        { agent: 'Brand Partnerships Manager', action: 'Receives and evaluates inquiry against HoH brand fit standards', output: 'Fit assessment: pass or decline with reasoning' },
        { agent: 'Creative Director', action: 'Reviews brand alignment against HoH philosophy', output: 'Brand integrity verdict — proceed or protect the brand' },
        { agent: 'Offer Architect', action: 'Structures the deal — rate card, deliverables, terms', output: 'Partnership proposal with pricing and scope' },
        { agent: 'Voice Keeper', action: 'Writes the sponsored content in HoH\'s authentic voice', output: 'FTC-disclosed post that reads like editorial, not advertising' },
        { agent: 'Revenue Tracker', action: 'Logs the deal and updates monthly revenue report', output: 'Revenue milestone progress updated' }
      ]
    },
    {
      id: 'dorian-weekly',
      title: 'Sunday Night — Dorian\'s Week Starts',
      subtitle: 'The executive layer prepares everything before Monday.',
      steps: [
        { agent: 'Executive Assistant', action: 'Runs the weekly review — goals, CPA hours, consulting pipeline', output: 'Obsidian weekly review note fully populated' },
        { agent: 'Chief of Content', action: 'Delivers this week\'s content brief — what to write, when, which category', output: 'Week\'s content plan: 2 posts, 1 newsletter, priorities ranked' },
        { agent: 'Chief of Growth & Revenue', action: 'Delivers growth and revenue status — where things stand against targets', output: 'One-paragraph revenue and audience update with next action' },
        { agent: 'Chief of Creative Intelligence', action: 'Delivers brand intelligence — trends, opportunities, creative direction', output: 'What the brand should be thinking about this week' },
        { agent: 'Executive Assistant', action: 'Synthesizes all three briefs into Dorian\'s Monday morning brief', output: 'Single Obsidian note: this week\'s priorities, context, and first action' }
      ]
    }
  ]

};
