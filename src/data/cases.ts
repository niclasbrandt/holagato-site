// Case studies – English only (the Swedish site links here).
// featuredCases: the two big cards, also shown on the home page.
// caseGroups + moreCaseGroups: all other cases, grouped by theme.

export type CaseItem = { badge: string; title: string; teaser: string; tags: string[]; full: string };

export const featuredCases = [
	{
		badge: 'Completed',
		title: 'Part of the build, not the after-the-fact reviewer',
		teaser: 'A GDPR-compliant AI tool, launched on schedule – by joining the build early instead of reviewing it after the fact.',
		tags: ['AI', 'GDPR', 'Product'],
		full: 'A large corporate group had built an AI tool for internal GDPR pseudonymization of images. Brought in during development itself, as a running sounding board – not a post-launch review. Ran a risk assessment alongside the dev team, and reviewed exactly what metadata the service actually needed, stripping out anything kept “just in case” that risked employees’ privacy. Result: a genuinely useful tool that saved time and money, was GDPR-compliant, and protected employee privacy – with no delay to launch.',
	},
	{
		badge: 'Completed',
		title: 'From bottleneck to sales engine',
		teaser: 'A measurably shorter sales cycle – built on new contract templates, clear decision rights, and an ISO 27001 certification in four months.',
		tags: ['Legal ops', 'SaaS', 'ISO 27001'],
		full: 'Contracts were drafted from scratch every time, and large customers’ security and procurement reviews were dragging out the sales cycle. Built a SaaS-standardized contract structure and a decision-rights framework giving sales reps freedom inside clear limits, with built-in thresholds for when a deal needed to escalate to a manager. Designed the templates and user rights structure to be intuitive both for in-house CLM users and for the counterparty receiving the draft. Rolled out and trained the team on legal tech tools, built a HubSpot-based sales playbook for one source of truth on numbers, and co-led the company’s ISO 27001 certification in about four months, building on governance work already in place. Result: fewer negotiation rounds, shorter time from verbal yes to signature, less friction in security reviews, and a measurably shorter sales cycle. The framework was still running largely unchanged years after she moved on.',
	},
];

export const caseGroups = [
	{
		heading: 'AI & transformation',
		cases: [
			{
				badge: 'Completed',
				title: 'Buying and implementing the right legal tech',
				teaser: 'Shorter sales cycles and a tool the whole company actually uses – not just what the vendor’s demo promised.',
				tags: ['CLM', 'Procurement', 'Legal ops'],
				full: 'Many lawyers are bad at buying systems – they take what a vendor recommends without knowing what the organization actually needs. Has procured CLM systems multiple times: mapping actual needs, listing must-haves versus nice-to-haves, streamlining existing processes, negotiating hidden costs out of the deal, leading migrations, and building playbooks herself for both legal and sales. Usability always comes before feature count. Result: shorter sales cycles and the ability to actually verify that playbooks and guides are being used correctly.',
			},
			{
				badge: 'Completed',
				title: 'Lawyers, vibe-coding for the first time',
				teaser: '20 lawyers walked away having built the tool they had been missing in their own workflow – not just sat through another training.',
				tags: ['Legal tech', 'AI', 'Workshop'],
				full: 'Organized and ran an internal hackathon evening for about 20 lawyers who’d never vibe-coded before. The premise: vibe coding is going to become a normal way of working for lawyers, not just developers. Participants built whatever they wanted, and mostly built tools they’d been missing in their day-to-day. Strong feedback, and an evening that sparked more thinking than expected.',
			},
			{
				badge: 'Completed',
				title: 'From pitch to mandate',
				teaser: 'Turned a pitch into a fully-funded venture – a new AI-native legal service line, built and run from scratch after winning board sign-off.',
				tags: ['Strategy', 'Innovation', 'Leadership'],
				full: 'A legal services group had the expertise but no clear initiative to develop next-generation AI-driven legal services. Spotted the opportunity, developed it into a concrete proposal, and pitched it to the group board. Got the mandate, built the organization and ways of working, led pilot collaborations with clients, and set up partnerships with legal tech vendors. Result: launched as an independent innovation venture within the group, with a new AI-native, fixed-fee delivery model.',
			},
		],
	},
	{
		heading: 'Leadership & change',
		cases: [
			{
				badge: 'Completed',
				title: 'Turning around a team without a leader',
				teaser: 'Output and customer satisfaction held steady with a smaller team – after stepping in to lead a group that had neither a leader nor a plan.',
				tags: ['Interim leadership', 'Operations'],
				full: 'A team had no leader and was underperforming – no one internal was ready to step up. Took the role herself, introduced productization as an operating model to get processes and cost under control, and slimmed the team while holding production levels. Result: six months in, both output and customer satisfaction held steady with a smaller team. It was messy for everyone involved – but it worked. Leadership isn’t a title, it’s rolling up your sleeves.',
			},
			{
				badge: 'Completed',
				title: 'The operational backbone of a scale-up',
				teaser: 'Two funding rounds closed in time and with more balanced terms – despite being the smaller party at the table.',
				tags: ['Fundraising', 'Governance', 'Equity'],
				full: 'A fast-growing AI company needed someone to hold together fundraising, board governance and employee equity without slowing the business down. Project-led two investment rounds end to end – coordinating outside counsel, managing legal budget, keeping the data room current, and negotiating every agreement (SPA, SHA and more) alongside the CEO and interim CFO. Sat as board secretary with a standing seat in every meeting, often serving as a real-time “handbrake” or guide when discussions needed it. Ran the company’s entire qualified employee stock option program. Result: no delays in either funding round traced back to her work. Terms came out more balanced despite being the smaller party in negotiations.',
			},
			{
				badge: 'Completed',
				title: 'Speaking for leaders & industry',
				teaser: 'Helped executives and industry leaders turn AI uncertainty into a plan they could actually act on – as a recurring guest lecturer and speaker.',
				tags: ['Linnaeus University', 'Business Region Gothenburg', 'IUC Syd'],
				full: 'Teaches the ELSI (Ethical, Legal and Social Implications of AI) module within the University of Gothenburg’s “AI for leaders” course, in collaboration with Fondia Legal Services. Also a regular speaker for Business Region Gothenburg’s “AI Know” series and IUC Syd’s AI governance sessions for manufacturing leaders and technicians, run jointly with Effectit.',
			},
		],
	},
];

export const moreCaseGroups = [
	{
		heading: 'Workflows & training',
		cases: [
			{
				badge: 'Completed',
				title: 'Automating the process, keeping the judgment',
				teaser: 'Client meetings that start already prepared – an AI-native framework handles the groundwork, with a human check at the moment it actually matters.',
				tags: ['AI', 'Workflow design', 'Legal ops'],
				full: 'Preparing for a first client conversation usually means manually gathering and structuring information – slow and inconsistent depending on who’s doing it. Designed an AI-native framework (currently in active development; specifics confidential) that automates information-gathering and initial analysis, and helps surface the right questions before a first meeting – with a human checkpoint built in at the point where accuracy and legitimacy actually need verifying. Sits alongside a separate, more traditional automation build for a previous employer that’s still running largely unchanged years later.',
			},
			{
				badge: 'Completed',
				title: 'Speaking for lawyers & compliance professionals',
				teaser: 'Gave legal and compliance teams a clear, actionable read on cross-border data transfer rules – as a recurring masterclass speaker.',
				tags: ['Data transfers', 'GDPR', 'Professional training'],
				full: 'Delivered masterclass sessions on transferring personal data outside the EU (primarily to the US) for a GDPR compliance platform’s customer base of legal and compliance professionals, and for a legal training center audience of practicing lawyers.',
			},
			{
				badge: 'Completed',
				title: 'Negotiating on trust, not just clauses',
				teaser: 'Fewer negotiation rounds and faster signatures from enterprise customers – earned with visual maps and white papers, not legal leverage.',
				tags: ['Negotiation', 'Trust-building'],
				full: 'Large enterprise customers with heavy internal procurement processes routinely dragged negotiations out for weeks, especially around complex topics like data flows, cookies and pixels. Built visual maps and white papers that clearly showed exactly what happened to a customer’s data. Trimmed contract terms down to what actually mattered, and gave clear reasoning for the terms that couldn’t move. Result: fewer negotiation rounds and a shorter path from first meeting to signature.',
			},
		],
	},
	{
		heading: 'Legal & compliance foundation',
		cases: [
			{
				badge: 'Completed',
				title: 'Balance in data processing agreements',
				teaser: 'Balanced terms secured against a much larger counterparty – negotiated from experience on both sides of the DPA table.',
				tags: ['DPA', 'GDPR', 'Negotiation'],
				full: 'Has sat on both the vendor and customer side of DPA negotiations – unusual for a lawyer, who typically only sees one side. A DPA isn’t just paperwork; it’s a guide for who does what if an incident is suspected. In one case, negotiated both a more balanced allocation of responsibility and terms that favored her client, despite representing the smaller company.',
			},
			{
				badge: 'Completed',
				title: 'Incident response',
				teaser: 'Fast, defensible calls on whether an incident needs reporting – made through rapid technical and legal assessment, not guesswork.',
				tags: ['GDPR', 'Incident response'],
				full: 'Good incident response starts long before an incident happens – in policy and internal training. Her role: quickly understand what happened technically, assess whether personal data was exposed, and document it against pre-built templates to determine reporting obligations. Good incident work is a team sport, not a solo job for compliance.',
			},
			{
				badge: 'Completed',
				title: 'Policy & legal design',
				teaser: 'Employee handbooks and policies built to actually be used – not filed away and forgotten.',
				tags: ['Legal design', 'Policy'],
				full: 'Builds policies and employee handbooks with legal design as the guiding principle – readable, accessible, practical dos and don’ts instead of legal paperweights gathering dust. Clear policy is also what makes union negotiations and reorganizations possible – it gives you something concrete to point to.',
			},
			{
				badge: 'Completed',
				title: 'Negotiation, day to day',
				teaser: 'Pragmatic terms against take-it-or-leave-it cloud vendors; union negotiations built on clear policy.',
				tags: ['Vendor negotiation', 'Union relations'],
				full: 'With major cloud vendors, price is rarely negotiable – what matters is knowing exactly what you’re signing, and accounting for the vendor’s own limitations of liability in your downstream terms. Has also led union negotiations and reorganization planning alongside People & Culture leadership – always aiming to build trust rather than force an outcome.',
			},
			{
				badge: 'Example',
				title: 'AI Act risk classification ahead of launch',
				teaser: 'A launch that holds up legally without losing momentum – risk classification and a compliance plan built before a deadline forces a rushed one.',
				tags: ['EU AI Act', 'Risk', 'Compliance'],
				full: 'A company is about to launch an AI-driven product – say, in recruitment or credit scoring – areas often classified as high-risk under the EU AI Act – but has no process for working out which requirements actually apply. Classify the product under the AI Act’s risk tiers, map which obligations are triggered, and build a pragmatic compliance plan that doesn’t stall the launch. Result: a launch that holds up legally without losing momentum.',
			},
		],
	},
];
