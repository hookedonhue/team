// ── HOH TEAM — MASTER DATA ───────────────────────────────────────────

const HOH = {

  founder: {
    name: 'Dorian Davis',
    title: 'Founder & Creative Director',
    initials: 'DD'
  },

  ea: {
    id: 'ea',
    icon: '🗝️',
    iconBg: '#f0ebe4',
    name: 'The Executive Assistant',
    role: 'Executive Support',
    status: 'scheduled',
    statusLabel: 'Scheduled',
    desc: 'Serves Dorian directly — not the brand. Manages context switching, weekly planning, the decision queue, and personal communications across all active projects.',
    what: 'The only agent whose job is Dorian Davis, not Hooked on Hue. Holds the full picture of everything in motion simultaneously. When everything is on fire, this agent tells you what to drop and what to protect.',
    capabilities: [
      'Weekly review — prods Sunday evening, prepares the week\'s priorities',
      'Context briefs when switching between active projects',
      'Decision queue — surfaces deferred decisions at the right moment',
      'Personal communications drafting',
      'Pipeline tracking across all active engagements',
      'Goal progress monitoring across all life areas'
    ]
  },

  chiefs: [
    {
      id: 'chief-content',
      icon: '✦',
      name: 'Chief of Content',
      title: 'Content Studio',
      initials: 'CC',
      status: 'scheduled',
      statusLabel: 'Scheduled',
      desc: 'Owns the full editorial operation. Coordinates all content agents, sets quality standards, manages the publishing calendar, and delivers Dorian a single weekly brief.',
      what: 'The editorial director of HoH. Doesn\'t write — orchestrates. Makes sure the Voice Keeper, Multiplier, Coach, and Visual Director are working in concert toward the same publishing goals.',
      capabilities: [
        'Weekly consolidated content brief to Dorian',
        'Coordinates all 6 content department agents',
        'Sets and enforces brand voice quality standards',
        'Manages the 4-week sprint calendar',
        'Escalates creative decisions that require Dorian\'s input',
        'Measures output against the 100-post goal'
      ]
    },
    {
      id: 'chief-growth',
      icon: '◈',
      name: 'Chief of Growth & Revenue',
      title: 'Growth & Revenue',
      initials: 'CGR',
      status: 'scheduled',
      statusLabel: 'Scheduled',
      desc: 'Synthesizes all growth and revenue intelligence into one strategic view. Connects audience-building to monetization — the two must work in concert.',
      what: 'Asks the question Dorian should always be asking: are we converting our growth into revenue, and is our revenue strategy growing our audience? The connective tissue between audience work and revenue strategy.',
      capabilities: [
        'Monthly revenue-to-growth synthesis report',
        'Coordinates 6 growth and revenue agents',
        'Monitors traffic milestone progress',
        'Flags when revenue and audience strategy diverge',
        'Surfaces partnership opportunities to Dorian',
        'Manages the monetization sequencing roadmap'
      ]
    },
    {
      id: 'chief-creative',
      icon: '◉',
      name: 'Chief of Creative Intelligence',
      title: 'Creative Intelligence',
      initials: 'CCI',
      status: 'demand',
      statusLabel: 'On Demand',
      desc: 'Owns the brand\'s creative vision, learning infrastructure, and Dorian\'s personal positioning. Always thinking 6 months ahead.',
      what: 'The agent that makes sure HoH never stops growing as a brand. Oversees where the brand is going philosophically, what Dorian is learning, and what Vivid Hue is becoming as a separate business.',
      capabilities: [
        'Quarterly brand direction review',
        'Coordinates 6 creative intelligence agents',
        'Maintains HoH brand philosophy integrity',
        'Tracks Dorian\'s personal brand positioning',
        'Vivid Hue business development oversight',
        'Flags when brand decisions need Dorian\'s attention'
      ]
    }
  ],

  departments: [
    {
      id: 'content-studio',
      name: 'Content Studio',
      chief: 'chief-content',
      agents: [
        {
          id: 'voice-keeper', icon: '✍️', iconBg: '#fdf6e3',
          name: 'The Voice Keeper', role: 'Brand Voice & Editorial',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Writes in HoH\'s distinctive voice — declarative, lyrical, warm. Every draft carries the brand\'s signature three-beat structure.',
          what: 'The guardian of everything HoH sounds like. The most-used agent in the operation. Every blog post, newsletter, and caption passes through this voice.',
          capabilities: ['Blog post drafting across all 5 categories', 'Hue & Human newsletter letters', 'Instagram, Pinterest & TikTok captions', 'Partnership pitch copy', 'SEO meta descriptions in brand voice'],
          project: 'HoH Brand & Content'
        },
        {
          id: 'storytelling-coach', icon: '📖', iconBg: '#fff5f0',
          name: 'The Storytelling Coach', role: 'Craft & Editorial Development',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Pushes every draft further. Essay structure, narrative arc, the difference between a good post and an unforgettable one.',
          what: 'HoH\'s internal editor. Works at the level of ideas and structure — not copy editing. Finds the strongest sentence in any piece and asks: why isn\'t this the opening line?',
          capabilities: ['Essay structure and narrative arc review', 'Opening and closing line refinement', 'Voice calibration by content category', 'Long-form content development', 'Pitch and treatment writing'],
          project: 'HoH Storytelling Coach'
        },
        {
          id: 'content-multiplier', icon: '⚡', iconBg: '#fffbf0',
          name: 'The Content Multiplier', role: 'Content Repurposing',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Takes one finished HoH post and produces the full platform suite — Instagram, Pinterest, newsletter section, TikTok hook, X thread.',
          what: 'Triggered every time a post publishes. You create once and show up everywhere. Eliminates the reformatting work that consumes hours every week.',
          capabilities: ['Instagram carousel outline (7 slides)', 'Pinterest pin description + keyword tags', 'Newsletter section extract', 'TikTok hook + script outline', 'X/Twitter thread (5 posts)', 'YouTube description if applicable'],
          project: 'HoH Brand & Content'
        },
        {
          id: 'visual-director', icon: '🎨', iconBg: '#f0f4ff',
          name: 'The Visual Content Director', role: 'Visual Production',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Produces the visual layer — Pinterest graphics, Instagram carousel layouts, blog header concepts, Canva templates.',
          what: 'The Design Studio thinks. This agent produces. Every post needs visual assets — this agent specs them, briefs them, and ensures they look unmistakably like HoH.',
          capabilities: ['Pinterest graphic specifications', 'Instagram carousel layout direction', 'Blog header image concepts', 'Canva template briefs', 'Color-forward visual direction per post', 'Brand consistency audits'],
          project: 'HoH Design Studio'
        },
        {
          id: 'video-producer', icon: '🎬', iconBg: '#fff0f5',
          name: 'The Video & Audio Producer', role: 'Video & Audio Content',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Scripts YouTube videos and TikToks, structures The Build episodes, writes show notes. Thinks in moving images.',
          what: 'The agent that unlocks video as a growth channel. Translates HoH\'s written voice into visual storytelling — without losing what makes the brand distinctive.',
          capabilities: ['YouTube video scripts', 'TikTok scripts and hooks', 'The Build episode structure', 'Video show notes and descriptions', 'Talking head content direction', 'Color Crush visual exploration scripts'],
          project: 'HoH Brand & Content'
        },
        {
          id: 'seo-auditor', icon: '🔍', iconBg: '#f0fff4',
          name: 'The SEO Auditor', role: 'SEO Optimization',
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
      agents: [
        {
          id: 'growth-strategist', icon: '📈', iconBg: '#fdf8ee',
          name: 'The Growth Strategist', role: 'SEO, Audience & Reach',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Audience growth, SEO strategy, funnels, and email list building. Triggered on publish and at audience milestones.',
          what: 'Thinks purely in discovery, reach, and conversion. Activated at every publish event and when growth campaigns are planned.',
          capabilities: ['Keyword research and on-page SEO', 'Pinterest SEO and pin strategy', 'Email list growth planning', 'Content cluster architecture', 'Audience milestone tracking', 'Platform algorithm intelligence'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'partnerships-manager', icon: '🤝', iconBg: '#fff8f0',
          name: 'The Brand Partnerships Manager', role: 'Brand Partnerships',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Fires when an inbound inquiry arrives or outbound pitch is ready. Evaluates fit, drafts pitch materials, manages rate card conversations.',
          what: 'Every brand inquiry gets evaluated against the HoH integrity test before Dorian sees it. Pitch-ready materials when the answer is yes.',
          capabilities: ['Brand fit evaluation', 'Outbound pitch deck drafting', 'Rate card development', 'Sponsored content brief creation', 'FTC disclosure language', 'Partnership pipeline tracking'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'email-nurture', icon: '📧', iconBg: '#f0f8ff',
          name: 'The Email & Nurture Specialist', role: 'Email & Subscriber Journeys',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Thinks in sequences and journeys. Welcome series, re-engagement flows, product launch nurture. Triggered by subscriber events.',
          what: 'Designs the journey from first subscribe to loyal reader to paying customer. Nobody manages the reader relationship after they subscribe — this agent fixes that.',
          capabilities: ['Welcome sequence (5-email series)', 'Re-engagement campaigns', 'Product launch nurture flows', 'Newsletter segmentation strategy', 'Subject line testing', 'Subscriber milestone celebrations'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'offer-architect', icon: '💡', iconBg: '#f3f0fa',
          name: 'The Offer Architect', role: 'Products & Revenue Design',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Designs the revenue structure — digital products, affiliate strategy, Substack paid tier, and what 10x scale looks like.',
          what: 'Triggered at traffic milestones, product ideation moments, and inbound opportunities. Every offer must pass the brand integrity test: "Would I feature this for free?"',
          capabilities: ['Digital product development', 'Affiliate platform strategy', 'Substack paid tier architecture', 'Revenue milestone sequencing', 'Gumroad product setup briefs', 'Sponsorship rate card design'],
          project: 'HoH Offer Architect'
        },
        {
          id: 'revenue-tracker', icon: '📊', iconBg: '#f0fff8',
          name: 'The Revenue Tracker', role: 'Financial Intelligence',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'Monthly report: affiliate income by platform, ad revenue, sponsorship, digital product sales. Tracks against the 12-month monetization roadmap.',
          what: 'Closes the loop between strategy and reality. Tells Dorian exactly where HoH stands against revenue targets — and which channels are performing vs. which need attention.',
          capabilities: ['Monthly revenue report by channel', 'Monetization milestone tracking', 'Affiliate performance by platform', 'Ad network RPM tracking', 'Sponsorship pipeline value', 'Revenue vs. goal variance analysis'],
          project: 'HoH Offer Architect'
        },
        {
          id: 'reader-experience', icon: '💬', iconBg: '#fff0fb',
          name: 'The Reader Experience Manager', role: 'Community & Reader Relations',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'Monitors engagement signals, surfaces reader questions as future content ideas, manages the "In Full Color With" candidate pipeline.',
          what: 'Makes readers feel seen. Tracks which posts get comments, what questions keep appearing — and turns that signal into content strategy and community building.',
          capabilities: ['Weekly engagement signal report', 'Reader question → content idea pipeline', '"In Full Color With" candidate sourcing', 'Comment and DM response drafts', 'Community health monitoring', 'Loyalty and retention insights'],
          project: 'HoH Sales & Marketing'
        }
      ]
    },
    {
      id: 'creative-intelligence',
      name: 'Creative Intelligence',
      chief: 'chief-creative',
      agents: [
        {
          id: 'creative-director', icon: '🧭', iconBg: '#f0f7f4',
          name: 'The Creative Director', role: 'Brand Strategy & Vision',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Holds the big picture. Brand direction, positioning, and the long-term architecture of what HoH is becoming.',
          what: 'The thinking partner for decisions that shape HoH\'s identity. Stress-tests ideas against the brand\'s core philosophy. Has a view and holds it.',
          capabilities: ['Brand positioning and evolution', 'Creative direction for major decisions', 'Partnership alignment reviews', 'Content pillar strategy', 'Brand integrity stress-testing', 'Quarterly brand direction reviews'],
          project: 'HoH Creative CEO'
        },
        {
          id: 'design-studio', icon: '🎨', iconBg: '#f0f7f0',
          name: 'The Design Studio', role: 'Color & Spatial Design',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Color palette direction, mood boards, spatial concepts, and the visual intelligence behind HoH and Vivid Hue.',
          what: 'The conceptual design layer. Every color recommendation comes with cultural context, psychological effect, and light behavior reasoning.',
          capabilities: ['Color palette development with full rationale', 'Mood board concept and direction', 'Vivid Hue client project support', 'Entertaining and tablescape concepts', 'Material and finish direction', 'Seasonal color direction'],
          project: 'HoH Design Studio'
        },
        {
          id: 'intelligence-analyst', icon: '🔭', iconBg: '#f5f0ff',
          name: 'The Intelligence Analyst', role: 'Market & Trend Intelligence',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'Weekly report: what performed best, trending topics in design/color/lifestyle, what aligned creators are doing that HoH should know about.',
          what: 'The data layer that makes everything else smarter. Monitors the landscape so Dorian isn\'t operating blind. Surfaces opportunities before they\'re obvious.',
          capabilities: ['Weekly performance digest across platforms', 'Trending topic identification', 'Competitor and peer creator monitoring', 'Seasonal opportunity flagging', 'Viral content pattern analysis', 'Platform algorithm change alerts'],
          project: 'HoH Sales & Marketing'
        },
        {
          id: 'private-tutor', icon: '🎓', iconBg: '#f5f5f0',
          name: 'The Private Tutor', role: 'Learning & Skill Building',
          status: 'scheduled', statusLabel: 'Scheduled',
          desc: 'The learning engine behind the brand. Whatever skill HoH needs next gets studied here — connected always to real application.',
          what: 'Every concept is connected to a real HoH application. When a skill is complex, delivers the 3-step "enough to start" version first, then goes deeper.',
          capabilities: ['SEO strategy and keyword research', 'Pinterest and platform algorithm mastery', 'Photography and visual content styling', 'Color theory and design fundamentals', 'Creator economy and monetization literacy', 'WordPress and site performance'],
          project: 'HoH Private Tutor'
        },
        {
          id: 'personal-brand', icon: '✦', iconBg: '#fff8f5',
          name: 'The Personal Brand Manager', role: 'Dorian Davis Positioning',
          status: 'demand', statusLabel: 'On Demand',
          desc: 'Manages Dorian\'s distinct personal presence — speaker bio, LinkedIn, podcast pitches, and the human behind HoH.',
          what: 'HoH is the brand. Dorian is the person. This agent makes sure people know who he is — separately from the blog. Critical for speaking, Vivid Hue clients, and consulting credibility.',
          capabilities: ['Speaker bio and media kit', 'LinkedIn presence and thought leadership', 'Podcast guest pitch materials', 'Personal website / about page copy', '"In Full Color With" host positioning', 'Press and media inquiry responses'],
          project: 'HoH Creative CEO'
        },
        {
          id: 'vivid-hue', icon: '🏛️', iconBg: '#f0f5ff',
          name: 'The Vivid Hue Studio Manager', role: 'Design Services Operations',
          status: 'trigger', statusLabel: 'Trigger',
          desc: 'Manages Vivid Hue client operations — intake, project briefs, deliverable templates, pricing. Triggered when a consultation inquiry comes in.',
          what: 'Keeps Vivid Hue running like a real design practice, not a side thought. Every client inquiry gets a professional intake process. Dorian shows up as a designer, not a blogger.',
          capabilities: ['Client intake and qualification', 'Project brief templates', 'Color consultation deliverable packages', 'Pricing and proposal drafts', 'Client communication templates', 'Vivid Hue portfolio and positioning'],
          project: 'HoH Design Studio'
        }
      ]
    }
  ],

  thirdShift: [
    { time: '12:03 AM', agent: 'Intelligence Analyst', dept: 'CREATIVE INTEL', task: 'Scanned Pinterest, design blogs, and 12 lifestyle newsletters', output: 'Weekly trend brief — 3 emerging color stories worth covering', saved: '2.5h', value: '$312' },
    { time: '12:45 AM', agent: 'SEO Auditor', dept: 'CONTENT STUDIO', task: 'Audited 34 published posts for internal linking gaps', output: '7 posts flagged with specific internal link recommendations', saved: '3h', value: '$375' },
    { time: '1:20 AM', agent: 'Revenue Tracker', dept: 'GROWTH & REVENUE', task: 'Pulled affiliate, ad, and sponsorship data for the month', output: 'Monthly revenue report — channels analyzed, gaps identified', saved: '2h', value: '$250' },
    { time: '2:00 AM', agent: 'Reader Experience Manager', dept: 'GROWTH & REVENUE', task: 'Monitored comments, DMs, and engagement signals across platforms', output: 'Weekly reader report — 4 questions surfaced as content ideas', saved: '1.5h', value: '$188' },
    { time: '3:15 AM', agent: 'Content Multiplier', dept: 'CONTENT STUDIO', task: 'Processed 2 published posts into full platform suites', output: '14 platform assets ready — Pinterest pins, IG carousels, X threads', saved: '4h', value: '$500' },
    { time: '5:30 AM', agent: 'Executive Assistant', dept: 'EXECUTIVE', task: 'Prepared weekly review brief and context summary', output: 'Sunday review note ready — goals, priorities, next week plan', saved: '1h', value: '$125' }
  ],

  dataFlows: [
    {
      id: 'post-published',
      title: 'A Post Goes Live',
      subtitle: 'Watch one piece of content become a full-team operation.',
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
      title: 'Sunday Night — The Week Starts',
      subtitle: 'The executive layer prepares everything before Monday.',
      steps: [
        { agent: 'Executive Assistant', action: 'Runs the weekly review — goals, priorities, pipeline', output: 'Weekly review note fully populated and ready' },
        { agent: 'Chief of Content', action: 'Delivers this week\'s content brief — what to write, when, which category', output: 'Week\'s content plan: 2 posts, 1 newsletter, priorities ranked' },
        { agent: 'Chief of Growth & Revenue', action: 'Delivers growth and revenue status — where things stand against targets', output: 'One-paragraph revenue and audience update with next action' },
        { agent: 'Chief of Creative Intelligence', action: 'Delivers brand intelligence — trends, opportunities, creative direction', output: 'What the brand should be thinking about this week' },
        { agent: 'Executive Assistant', action: 'Synthesizes all three briefs into Dorian\'s Monday morning brief', output: 'Single note: this week\'s priorities, context, and first action' }
      ]
    }
  ]
};
