// ─────────────────────────────────────────────────────────────
// Hola Gato – all site text lives here.
// Change copy in this file, not in the page files.
// Search for "TODO" to find what still needs your input (prices).
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'sv';

// ── Services ─────────────────────────────────────────────────
// Written as the questions clients actually ask. `id` is the anchor on the services page,
// e.g. /services#contracts. Order = order on the home page and services page.
export const services = {
	en: [
		{
			id: 'ongoing-advice',
			number: '01',
			title: '“We don’t have a lawyer, but we need one”',
			text: 'Ongoing advice for companies without in-house counsel. Contracts, GDPR, policies and questions from management, from a lawyer who knows your business.',
			tags: ['Ongoing advice', 'Contracts', 'Policies'],
			forWhom: 'Companies that need ongoing legal support, but not a full-time lawyer. For example when the business grows or new legal requirements come in.',
			youGet: [
				'A senior lawyer who gets to know your business',
				'Quick answers without asking for a quote every time',
				'A fixed number of hours at a fixed price',
			],
			format: 'Subscription',
		},
		{
			id: 'extra-hands',
			number: '02',
			title: '“I need an extra pair of hands”',
			text: 'Sole in-house lawyer with more matters than hours? I step in as extra capacity and help you make legal tech and AI work in practice.',
			tags: ['Extra capacity', 'Legal tech', 'Legal ops'],
			forWhom: 'In-house lawyers and small legal teams with more work than time.',
			youGet: [
				'A colleague who can pick up matters straight away, without a long onboarding',
				'Help choosing, setting up and actually using legal tech and AI tools',
				'Playbooks and workflows that save time even when I’m not there',
			],
			format: 'Subscription or hour bank',
		},
		{
			id: 'contracts',
			number: '03',
			title: '“What does this contract actually mean?”',
			text: 'How should it be read, can it be renegotiated, what do you reply to the other side? A clear answer and a suggested next step.',
			tags: ['Contract review', 'Negotiation'],
			forWhom: 'Companies with a contract on the table, or one already signed that’s causing friction.',
			youGet: [
				'A walk-through of what the contract actually means for you',
				'What can be renegotiated and what can’t',
				'A suggested reply to the other side',
			],
			format: 'Hour bank or hourly rate, or a subscription for recurring questions',
		},
		{
			id: 'build-right',
			number: '04',
			title: '“How do we build this right from the start?”',
			text: 'You’re building an app, a system or an AI service. I join the build, help you make the right calls and act as the bridge between tech and legal, so you don’t have to redo it.',
			tags: ['Privacy by design', 'AI', 'Product'],
			forWhom: 'Product and development teams building something that handles data or uses AI.',
			youGet: [
				'Legal questions caught while they’re still cheap to fix',
				'The right calls on data, vendors and the AI Act',
				'A lawyer who talks tech with developers and law with management',
			],
			format: 'Project or subscription',
		},
		{
			id: 'compliance',
			number: '05',
			title: '“Are we getting GDPR and the AI Act right?”',
			text: 'A review against GDPR and the AI Act, policies people can follow, and AI governance that doesn’t slow you down.',
			tags: ['GDPR', 'AI Act', 'AI governance'],
			forWhom: 'Companies that want to know where they stand, ahead of a customer, an audit or a launch.',
			youGet: [
				'A clear picture of where you stand and what to fix first',
				'Policies written so people actually follow them',
				'AI governance with clear rules and no unnecessary bureaucracy',
			],
			format: 'Project or subscription',
		},
		{
			id: 'capital',
			number: '06',
			title: '“We’re raising capital”',
			text: 'Prepare for due diligence, build a data room that holds up and an investment case investors understand. I have led two funding rounds end to end.',
			tags: ['Due diligence', 'Capital', 'Governance'],
			forWhom: 'Owners and management teams ahead of a funding round or another major deal.',
			youGet: [
				'A plan for what needs to be in place, and in what order',
				'A data room that holds up when the investor’s lawyers review it',
				'Support negotiating the agreements, such as the shareholders’ agreement',
			],
			format: 'Project or subscription',
		},
		{
			id: 'training',
			number: '07',
			title: '“Our team needs to get it”',
			text: 'Tailored in-house training and workshops for your team, on site or online. On AI governance, law and data protection: what it is, how to do it and what to watch out for. Explained so people understand and can act the next day.',
			tags: ['In-house training', 'Workshops', 'AI governance'],
			forWhom: 'Leadership teams and teams that need knowledge they can use, not just a briefing.',
			youGet: [
				'Content tailored to your industry and your questions',
				'Concrete examples and exercises, not just theory',
				'Formats from one hour to a full day',
			],
			format: 'Tailored training, from SEK 15,000',
		},
	],
	sv: [
		{
			id: 'ongoing-advice',
			number: '01',
			title: '”Vi har ingen jurist, men behöver en”',
			text: 'Löpande rådgivning för bolag utan egen bolagsjurist. Avtal, GDPR, policyer och frågor från ledningen, med en jurist som känner er verksamhet.',
			tags: ['Löpande rådgivning', 'Avtal', 'Policyer'],
			forWhom: 'Bolag som behöver juridiskt stöd löpande, men inte en heltidsanställd jurist. Till exempel när verksamheten växer eller nya lagkrav kommer.',
			youGet: [
				'En senior jurist som lär känna er verksamhet',
				'Snabba svar utan att begära offert varje gång',
				'Ett fast antal timmar till ett fast pris',
			],
			format: 'Prenumeration',
		},
		{
			id: 'extra-hands',
			number: '02',
			title: '”Jag behöver extra händer”',
			text: 'Ensam bolagsjurist med fler ärenden än timmar? Jag kliver in som extra resurs och hjälper er få legal tech och AI att fungera i vardagen.',
			tags: ['Extra kapacitet', 'Legal tech', 'Legal ops'],
			forWhom: 'Bolagsjurister och små juristteam som har mer att göra än tid till.',
			youGet: [
				'En kollega som kan ta ärenden direkt, utan lång inskolning',
				'Hjälp att välja, sätta upp och få legal tech och AI-verktyg använda',
				'Playbooks och arbetsflöden som sparar tid även när jag inte är där',
			],
			format: 'Prenumeration eller timbank',
		},
		{
			id: 'contracts',
			number: '03',
			title: '”Vad betyder det här avtalet?”',
			text: 'Hur ska avtalet tolkas, går det att förhandla om och vad svarar ni motparten? Ett tydligt svar och ett förslag på nästa steg.',
			tags: ['Avtalsgranskning', 'Förhandling'],
			forWhom: 'Bolag som har ett avtal på bordet, eller ett som redan är påskrivet och skaver.',
			youGet: [
				'En genomgång av vad avtalet faktiskt betyder för er',
				'Vad som går att förhandla om och vad som inte gör det',
				'Ett förslag på vad ni svarar motparten',
			],
			format: 'Timbank eller timpris, eller prenumeration vid återkommande frågor',
		},
		{
			id: 'build-right',
			number: '04',
			title: '”Hur bygger vi det här rätt från start?”',
			text: 'Ni utvecklar en app, ett system eller en AI-tjänst. Jag är med i bygget, hjälper er välja rätt och är bryggan mellan tech och juridik, så att ni slipper göra om.',
			tags: ['Privacy by design', 'AI', 'Produkt'],
			forWhom: 'Produkt- och utvecklingsteam som bygger något som hanterar data eller använder AI.',
			youGet: [
				'Juridiska frågor fångade medan de är billiga att lösa',
				'Rätt val kring data, leverantörer och AI-förordningen',
				'En jurist som pratar teknik med utvecklarna och juridik med ledningen',
			],
			format: 'Projekt eller prenumeration',
		},
		{
			id: 'compliance',
			number: '05',
			title: '”Gör vi rätt med GDPR och AI Act?”',
			text: 'Granskning mot GDPR och AI-förordningen, policyer som går att följa och AI governance som inte bromsar er.',
			tags: ['GDPR', 'AI Act', 'AI governance'],
			forWhom: 'Bolag som vill veta var de står, inför en kund, en revision eller en lansering.',
			youGet: [
				'En tydlig bild av var ni står och vad som är viktigast att åtgärda',
				'Policyer skrivna så att folk faktiskt följer dem',
				'AI governance med tydliga ramar, utan onödig byråkrati',
			],
			format: 'Projekt eller prenumeration',
		},
		{
			id: 'capital',
			number: '06',
			title: '”Vi ska ta in kapital”',
			text: 'Förbered due diligence, bygg ett datarum som håller och ett investeringscase som investerare förstår. Jag har drivit två investeringsrundor från start till mål.',
			tags: ['Due diligence', 'Kapital', 'Bolagsstyrning'],
			forWhom: 'Ägare och ledningar inför en investeringsrunda eller en annan större affär.',
			youGet: [
				'En plan för vad som ska fram, och i vilken ordning',
				'Ett datarum som håller när investerarens jurister granskar',
				'Stöd i förhandlingen av avtalen, till exempel aktieägaravtal',
			],
			format: 'Projekt eller prenumeration',
		},
		{
			id: 'training',
			number: '07',
			title: '”Vårt team behöver förstå”',
			text: 'Skräddarsydda utbildningar och workshops för ert team, hos er eller digitalt. Om AI governance, juridik och dataskydd: vad det är, hur man gör och vad man ska tänka på. Förklarat så att folk förstår och kan agera dagen efter.',
			tags: ['Intern utbildning', 'Workshops', 'AI governance'],
			forWhom: 'Ledningsgrupper och team som behöver kunskap de kan använda, inte bara en genomgång.',
			youGet: [
				'Innehåll anpassat efter er bransch och era frågor',
				'Konkreta exempel och övningar, inte bara teori',
				'Upplägg från en timme till en heldag',
			],
			format: 'Skräddarsydd utbildning, från 15 000 kr',
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
			title: 'In-house training',
			text: 'Tailored training and workshops for your team on AI governance, law and data protection. Adapted to your industry and your questions.',
			price: 'From SEK 15,000',
			priceNote: 'for 60–90 minutes, including preparation and material.',
			note: 'The price depends on format, number of participants and how much the material is tailored. Half day or full day? I put together a price based on the format. Email me for a quote.',
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
			['First call', 'a first 30-minute call is free. We talk about what you need and how I can help. Advice after that is billed.'],
			['Response time', 'I normally reply the same or the next working day. If I am ill or on planned leave, I will let you know and make sure you can still use your hours.'],
			['Hourly advice', 'need help with a single question? Advice without a subscription or hour bank is SEK 3,000 per hour, invoiced monthly in arrears.'],
			['Invoicing', 'subscriptions are invoiced monthly in advance. The hour bank is invoiced in advance.'],
			['Payment', 'within 15 days of the invoice date.'],
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
			title: 'Interna utbildningar',
			text: 'Skräddarsydda utbildningar och workshops för ert team om AI governance, juridik och dataskydd. Anpassade efter er bransch och era frågor.',
			price: 'Från 15 000 kr',
			priceNote: 'för 60–90 minuter, inklusive förberedelse och material.',
			note: 'Priset beror på upplägg, antal deltagare och hur mycket materialet anpassas. Halvdag eller heldag? Då tar jag fram ett pris utifrån upplägget. Mejla mig så får du en offert.',
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
			['Första samtalet', 'ett första samtal på 30 minuter är kostnadsfritt. Vi pratar om vad du behöver och hur jag kan hjälpa till. Rådgivning därefter debiteras.'],
			['Svarstid', 'jag svarar normalt samma eller nästa arbetsdag. Vid sjukdom eller planerad ledighet hör jag av mig och ser till att du kan använda dina timmar.'],
			['Timrådgivning', 'behöver du hjälp med en enstaka fråga? Rådgivning utan prenumeration eller timbank kostar 3 000 kr per timme och faktureras i efterskott en gång per månad.'],
			['Fakturering', 'prenumeration faktureras månadsvis i förskott. Timbank faktureras i förskott.'],
			['Betalning', 'inom 15 dagar från fakturadatum.'],
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
