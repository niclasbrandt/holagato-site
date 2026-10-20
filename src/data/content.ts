// ─────────────────────────────────────────────────────────────
// Hola Gato – all site text lives here.
// Change copy in this file, not in the page files.
// Search for "TODO" to find what still needs your input (prices).
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'sv';

// ── Services ─────────────────────────────────────────────────
// `id` is the anchor on the services page, e.g. /services#ai-leadership
export const services = {
	en: [
		{
			id: 'ai-leadership',
			number: '01',
			title: 'AI transformation for leadership teams',
			text: 'From “we should do something with AI” to a team that actually works differently – strategy, the right use cases, AI governance that doesn’t slow you down and the change management that makes it stick.',
			tags: ['AI strategy', 'AI governance', 'Change management'],
			forWhom: 'Leadership teams that know AI matters but don’t yet have a plan they trust.',
			youGet: [
				'A short list of use cases worth doing first – and the ones to skip',
				'AI governance that doesn’t slow you down – clear rules for data, people and the AI Act from day one',
				'Hands-on setup and training so the team actually changes how it works',
			],
			format: 'Workshop, project or ongoing support',
		},
		{
			id: 'ai-legal',
			number: '02',
			title: 'AI in the legal & compliance team',
			text: 'Lawyers who use Copilot, Claude or Harvey because it helps, not because IT rolled it out – workflows, playbooks and training built by someone who has done the legal work herself.',
			tags: ['Legal ops', 'Playbooks', 'Training'],
			forWhom: 'In-house legal and compliance teams, and law firms, that want AI to save real time.',
			youGet: [
				'Mapped workflows and the tools that fit them',
				'Negotiation playbooks built on your actual positions',
				'Training built around your own documents, not generic demos',
			],
			format: 'Fixed-scope project',
		},
		{
			id: 'fractional',
			number: '03',
			title: 'Fractional legal & compliance lead',
			text: 'A senior extra pair of hands, a few recurring hours every week. GDPR and AI Act work that gets implemented, not just written down.',
			tags: ['GDPR', 'AI Act', 'Policies', 'Vendor deals'],
			forWhom: 'Growing companies without in-house counsel, or lean legal teams that need capacity.',
			youGet: [
				'A named senior lawyer in your team, on a fixed rhythm',
				'GDPR and AI Act work that gets implemented',
				'Contracts, policies and vendor deals handled along the way',
			],
			format: 'Monthly subscription',
		},
		{
			id: 'turning-points',
			number: '04',
			title: 'Clear decisions at turning points',
			text: 'Raising capital, changing owners, launching something new? I help owners and boards see what’s true, what’s at stake and what to test first – before it’s hard to undo.',
			tags: ['Strategy', 'Capital', 'Governance'],
			forWhom: 'Owners and boards facing a decision that is hard to reverse.',
			youGet: [
				'A clear picture of what’s true, what’s at stake and what to test first',
				'Legal, governance and deal structure handled as one',
				'Someone who has sat at the board table and the negotiating table',
			],
			format: 'Project',
		},
		{
			id: 'speaking',
			number: '05',
			title: 'Speaking & workshops',
			text: 'Teams that actually understand AI, privacy and legal risk – not just sit through a training on it. Delivered everywhere from boardrooms to hackathons.',
			tags: ['Workshops', 'Keynotes', 'Training'],
			forWhom: 'Event organizers, leadership teams and organizations that want people to act, not just listen.',
			youGet: [
				'A talk or workshop tailored to your audience',
				'Practical takeaways people can use the next day',
				'Formats from 45-minute keynotes to full-day hackathons',
			],
			format: 'Keynote, workshop or training',
		},
	],
	sv: [
		{
			id: 'ai-leadership',
			number: '01',
			title: 'AI-omställning för ledningsgrupper',
			text: 'Från ”vi borde göra något med AI” till ett team som faktiskt jobbar annorlunda – strategi, rätt användningsfall, AI-styrning som inte bromsar er och förändringsledningen som gör att det håller.',
			tags: ['AI-strategi', 'AI-styrning', 'Förändringsledning'],
			forWhom: 'Ledningsgrupper som vet att AI spelar roll men saknar en plan de litar på.',
			youGet: [
				'En kort lista med användningsfall värda att börja med – och vilka ni kan skippa',
				'AI-styrning som inte bromsar er – tydliga ramar för data, människor och AI-förordningen från dag ett',
				'Praktisk uppsättning och utbildning så att arbetssättet faktiskt ändras',
			],
			format: 'Workshop, projekt eller löpande stöd',
		},
		{
			id: 'ai-legal',
			number: '02',
			title: 'AI i jurist- och complianceteamet',
			text: 'Jurister som använder Copilot, Claude eller Harvey för att det hjälper, inte för att IT rullade ut det – arbetsflöden, playbooks och utbildning byggda av någon som själv gjort det juridiska jobbet.',
			tags: ['Legal ops', 'Playbooks', 'Utbildning'],
			forWhom: 'Interna jurist- och complianceteam, och advokatbyråer, som vill att AI ska spara verklig tid.',
			youGet: [
				'Kartlagda arbetsflöden och verktyg som passar dem',
				'Förhandlingsplaybooks byggda på era faktiska ståndpunkter',
				'Utbildning med era egna dokument, inte generiska demos',
			],
			format: 'Projekt med fast omfattning',
		},
		{
			id: 'fractional',
			number: '03',
			title: 'Inhyrd jurist och compliance-ansvarig',
			text: 'En senior extra resurs, några återkommande timmar varje vecka. GDPR- och AI Act-arbete som blir genomfört, inte bara nedskrivet.',
			tags: ['GDPR', 'AI-förordningen', 'Policyer', 'Leverantörsavtal'],
			forWhom: 'Växande bolag utan intern jurist, eller små juristteam som behöver kapacitet.',
			youGet: [
				'En namngiven senior jurist i ert team, i en fast rytm',
				'GDPR- och AI Act-arbete som faktiskt genomförs',
				'Avtal, policyer och leverantörsfrågor löpande',
			],
			format: 'Prenumeration',
		},
		{
			id: 'turning-points',
			number: '04',
			title: 'Tydliga beslut i vägskäl',
			text: 'Ska ni ta in kapital, byta ägare eller lansera något nytt? Jag hjälper ägare och styrelser att se vad som stämmer, vad som står på spel och vad ni ska testa först – innan det blir svårt att backa.',
			tags: ['Strategi', 'Kapital', 'Bolagsstyrning'],
			forWhom: 'Ägare och styrelser inför beslut som är svåra att ändra.',
			youGet: [
				'En tydlig bild av läget, riskerna och vad ni bör testa först',
				'Juridik, styrning och affärsstruktur samlat',
				'Någon som suttit både vid styrelsebordet och förhandlingsbordet',
			],
			format: 'Projekt',
		},
		{
			id: 'speaking',
			number: '05',
			title: 'Föreläsningar & workshops',
			text: 'Team som faktiskt förstår AI, dataskydd och juridisk risk – inte bara har suttit av en utbildning. Från styrelserum till hackathons.',
			tags: ['Workshops', 'Föreläsningar', 'Utbildning'],
			forWhom: 'Arrangörer, ledningsgrupper och organisationer som vill att folk ska agera, inte bara lyssna.',
			youGet: [
				'En föreläsning eller workshop anpassad efter publiken',
				'Konkreta lärdomar som går att använda dagen efter',
				'Allt från 45 minuters keynote till heldagshackathon',
			],
			format: 'Föreläsning, workshop eller utbildning',
		},
	],
};

// ── Who I work with ─────────────────────────────────────────
export const audiences = {
	en: [
		{ number: '01', title: 'Leadership teams ready to start', text: 'You know AI matters. You don’t yet have a plan – or a way to roll it out without putting data, trust or people at risk.' },
		{ number: '02', title: 'Lean legal teams', text: 'One or two lawyers, a growing company and a to-do list that keeps growing. You need capacity and judgment, not another memo.' },
		{ number: '03', title: 'Owners at a turning point', text: 'Capital, a new business line, a new direction. Big decisions, hard to undo.' },
	],
	sv: [
		{ number: '01', title: 'Ledningsgrupper redo att börja', text: 'Ni vet att AI spelar roll. Ni har ännu ingen plan – eller ett sätt att rulla ut det utan att riskera data, förtroende eller människor.' },
		{ number: '02', title: 'Små juristteam', text: 'En eller två jurister, ett växande bolag och en att göra-lista som bara växer. Ni behöver kapacitet och omdöme, inte ännu ett PM.' },
		{ number: '03', title: 'Ägare i ett vägskäl', text: 'Kapital, ett nytt affärsben, en ny riktning. Stora beslut som är svåra att ändra.' },
	],
};

// ── How I work ──────────────────────────────────────────────
export const principles = {
	en: [
		['Plain language', 'Advice should make the next move obvious. No legal fog, no twenty-page answer to a two-line question.'],
		['Close to the work', 'I plug into your team, learn how you actually work and solve the problem with the people doing it.'],
		['Right-sized risk', 'Not every risk is a red light. I help you see what matters, decide confidently and keep moving.'],
		['Fluent in tech', 'I understand the technical side well enough to sit inside the build process, not just review it afterward. I build workflows – from straightforward automation to AI-native processes, with a human checkpoint at the milestones where it actually matters.'],
	],
	sv: [
		['Klarspråk', 'Rådgivning ska göra nästa steg självklart. Ingen juridisk dimma, inget tjugosidigt svar på en tvåradersfråga.'],
		['Nära arbetet', 'Jag kopplar in mig i ert team, lär mig hur ni faktiskt jobbar och löser problemet tillsammans med dem som gör jobbet.'],
		['Lagom risk', 'Alla risker är inte rött ljus. Jag hjälper er se vad som spelar roll, besluta tryggt och fortsätta framåt.'],
		['Teknikvan', 'Jag förstår tekniken tillräckligt för att vara med i utvecklingen, inte bara granska i efterhand. Jag bygger arbetsflöden – från enkel automation till AI-native processer, med en mänsklig kontrollpunkt där det faktiskt spelar roll.'],
	],
};

// ── Pricing ─────────────────────────────────────────────────
// Source: "Tjänster och priser – Hola Gato (v2)" and "Services and pricing – Hola Gato (EN)".
// Projects: add a row to `projects.rows` to show another example project.
export const pricing = {
	en: {
		intro: 'You should know what it costs before we start. That is why I work with fixed prices and clear scopes, and the more hours you commit to, the lower the hourly rate. All prices are in SEK, excluding VAT.',
		subscription: {
			title: 'Ongoing legal support – subscription',
			text: 'For companies that need a lawyer in the business, or whose existing legal team needs support, but not full time. You get a fixed number of hours each month at a fixed price. I get to know your business, and you get quick answers without having to ask for a quote every time.',
			headers: ['Level', 'Hours per month', 'Hourly rate', 'Price per month'],
			rows: [
				['Base', '12 h', 'SEK 2,000', 'SEK 24,000'],
				['Standard', '20 h', 'SEK 1,800', 'SEK 36,000'],
				['Extended', '30 h', 'SEK 1,700', 'SEK 51,000'],
			],
			typical: 'Typical work: contract review and negotiation, GDPR and information security, AI questions and the AI Act, support ahead of due diligence and fundraising, corporate matters and ongoing advice to management.',
			terms: [
				'The subscription runs in 3-month periods and renews automatically.',
				'Notice must be given at least 1 month before the end of the period.',
				'Hours are valid for 3 months from the invoice date. The oldest hours are used first.',
				'Extra hours in a given month are billed at the hourly rate of your level.',
			],
		},
		hourBank: {
			title: 'Hour bank – 10 hours',
			text: 'For when you need help now and then, without an ongoing agreement. You buy 10 hours in advance and use them when you need them.',
			price: 'SEK 22,000 for 10 hours',
			priceNote: '(SEK 2,200 per hour), valid for 3 months from the invoice date.',
			note: 'The hour bank gives you the most flexibility, so the hourly rate is higher than in the subscription. If you want to continue, the hour bank can easily be switched to a subscription.',
		},
		training: {
			title: 'Training and talks',
			text: 'Talks and workshops on AI and law, data protection and information security, tailored to your industry and your questions.',
			price: 'From SEK 15,000',
			priceNote: 'for 60–90 minutes, including preparation and material.',
			note: 'The price depends on format, number of participants and how much the material is tailored. Email me for a quote.',
		},
		projects: {
			title: 'Projects',
			text: 'Defined assignments with a clear goal and a fixed price. You get a quote with scope, timeline and price before we start.',
			headers: ['Example projects', 'Price'],
			rows: [
				['AI policy and risk assessment', 'from SEK 18,000'],
				['AI Act mapping', 'from SEK 22,000'],
			],
			cta: 'Have a project in mind? Email me a short description and I will come back with a proposal and price.',
		},
		goodToKnowTitle: 'Good to know',
		goodToKnow: [
			['Response time', 'I normally reply the same or the next working day. If I am ill or on planned leave, I will let you know and make sure you can still use your hours.'],
			['Invoicing', 'subscriptions are invoiced monthly in advance. The hour bank is invoiced in advance.'],
			['Urgent matters', 'get in touch and we will see what can be done.'],
			['VAT', 'all prices exclude VAT. For business clients in other EU countries with a valid VAT number, no Swedish VAT is charged (reverse charge).'],
			['Terms', 'all engagements follow my general terms, unless we agree otherwise in writing.'],
		],
		termsLink: 'Read my general terms (PDF)',
		emailCta: 'Email me',
	},
	sv: {
		intro: 'Du ska veta vad det kostar innan vi börjar. Därför arbetar jag med fasta priser och tydliga ramar, och ju fler timmar du binder upp, desto lägre blir timpriset. Alla priser är exklusive moms.',
		subscription: {
			title: 'Löpande juridiskt stöd – prenumeration',
			text: 'För dig som behöver en jurist i verksamheten, eller vars befintliga juristavdelning behöver stöttning, men inte på heltid. Du får ett fast antal timmar varje månad till ett fast pris. Jag lär känna er verksamhet, och ni får snabba svar utan att behöva begära offert varje gång.',
			headers: ['Nivå', 'Timmar per månad', 'Timpris', 'Pris per månad'],
			rows: [
				['Bas', '12 h', '2 000 kr', '24 000 kr'],
				['Standard', '20 h', '1 800 kr', '36 000 kr'],
				['Utökad', '30 h', '1 700 kr', '51 000 kr'],
			],
			typical: 'Typiska uppdrag: avtalsgranskning och förhandling, GDPR och informationssäkerhet, AI-frågor och AI Act, stöttning inför due diligence, kapitalanskaffning, bolagsrättsliga frågor och löpande rådgivning till ledning.',
			terms: [
				'Prenumerationen löper i perioder om 3 månader och förnyas automatiskt.',
				'Uppsägning senast 1 månad före periodens slut.',
				'Timmarna gäller i 3 månader från fakturadatum. De äldsta timmarna används först.',
				'Behöver du fler timmar en månad debiteras de till samma timpris som din nivå.',
			],
		},
		hourBank: {
			title: 'Timbank – 10 timmar',
			text: 'För dig som behöver hjälp då och då, utan löpande avtal. Du köper 10 timmar i förväg och använder dem när du behöver.',
			price: '22 000 kr för 10 timmar',
			priceNote: '(2 200 kr per timme), giltiga i 3 månader från fakturadatum.',
			note: 'Timbanken ger störst flexibilitet och har därför ett högre timpris än prenumerationen. Vill du fortsätta kan timbanken enkelt bytas mot en prenumeration.',
		},
		training: {
			title: 'Utbildning och föreläsning',
			text: 'Föreläsningar och workshops om AI och juridik, dataskydd och informationssäkerhet. Anpassade efter er bransch och era frågor.',
			price: 'Från 15 000 kr',
			priceNote: 'för 60–90 minuter, inklusive förberedelse och material.',
			note: 'Priset beror på upplägg, antal deltagare och hur mycket materialet anpassas. Mejla mig så får du en offert.',
		},
		projects: {
			title: 'Projekt',
			text: 'Avgränsade uppdrag med tydligt mål och fast pris. Du får en offert med omfattning, tidplan och pris innan vi börjar.',
			headers: ['Exempel på projekt', 'Pris'],
			rows: [
				['AI-policy och riskbedömning', 'från 18 000 kr'],
				['AI Act-kartläggning', 'från 22 000 kr'],
			],
			cta: 'Har du ett projekt i tankarna? Mejla mig en kort beskrivning så återkommer jag med förslag och pris.',
		},
		goodToKnowTitle: 'Bra att veta',
		goodToKnow: [
			['Svarstid', 'jag svarar normalt samma eller nästa arbetsdag. Vid sjukdom eller planerad ledighet hör jag av mig och ser till att du kan använda dina timmar.'],
			['Fakturering', 'prenumeration faktureras månadsvis i förskott. Timbank faktureras i förskott.'],
			['Brådskande ärenden', 'hör av dig, så ser vi vad som går att lösa.'],
			['Moms', 'alla priser är exklusive moms.'],
			['Villkor', 'alla uppdrag följer mina allmänna villkor, om vi inte skriftligen avtalat något annat.'],
		],
		termsLink: 'Läs mina allmänna villkor (PDF)',
		emailCta: 'Mejla mig',
	},
};

// ── Testimonials (English on both language versions) ────────
export const testimonials = [
	{ quote: 'Helena was one of the sharpest, most trusted people on my leadership team at Adway. She thinks like an operator, not just a lawyer – and it shows in work that keeps paying off long after she’s moved on. Any founder lucky enough to work with her should feel the same.', name: 'Adrian McDonald', role: 'CEO @ Epicenter · Former CEO of Adway' },
	{ quote: 'Building Lextopia together was one of the most energizing projects of my time at Fondia. Helena doesn\'t just understand AI and legal tech in theory – she gets in and builds the actual workflows, and brings the rest of the organization along with her. That combination is genuinely rare.', name: 'Emma Ridderstad', role: 'Founder | Advisor | TEDx Speaker · Former MD of Fondia Sweden' },
];

// ── CV timeline (English only) ──────────────────────────────
export const timeline = [
	{ when: 'NOW', title: 'Founder, legal strategy & change', text: 'Hola Gato · Helping organizations get AI, compliance and big decisions off the ground – with the legal calls made along the way.', current: true },
	{ when: '2025–2026', title: 'Head of Operations, Lextopia', text: 'Pitched the concept to Fondia\'s group board, got the mandate, built and ran the venture from scratch.' },
	{ when: '2024–2025', title: 'AI & Tech Lead Sweden, Fondia', text: 'From Senior Legal Counsel to AI & Tech Lead Sweden, then Competence Lead Privacy.' },
	{ when: '2019–2024', title: 'Chief Legal & Compliance Officer, Adway AI', text: 'Seat on both leadership team and board; interim head of Customer Operations; concurrently Head of Legal for sister company Reducero.' },
	{ when: '2018–2019', title: 'Associate, Advokatfirman Morris', text: '' },
	{ when: '2014–2018', title: 'Law clerk, Varberg District Court', text: '' },
	{ when: '2012', title: 'LL.M. (Law degree)', text: 'School of Business, Economics and Law, University of Gothenburg.' },
];
