// Menu labels, links and recurring short texts for both languages.
import type { Lang } from '../data/content';

export type PageKey = 'home' | 'services' | 'pricing' | 'cases' | 'testimonials' | 'about';

// Where each page lives in each language.
// Case studies only exist in English – the Swedish menu links to them.
export const routes: Record<Lang, Record<PageKey, string>> = {
	en: { home: '/', services: '/services', pricing: '/pricing', cases: '/cases', testimonials: '/testimonials', about: '/about' },
	sv: { home: '/sv', services: '/sv/tjanster', pricing: '/sv/priser', cases: '/cases', testimonials: '/sv/omdomen', about: '/sv/om' },
};

// Pages that have a version in the other language (used by the EN/SV switch and hreflang).
export const hasTranslation: Record<PageKey, boolean> = {
	home: true, services: true, pricing: true, cases: false, testimonials: true, about: true,
};

// General terms and privacy policy are published as PDFs only (in /public/dokument).
// To publish a new version: replace the file with the fixed name below with the new file,
// and also add a copy with the version in the name, e.g. Hola-Gato_Allmanna-villkor_v1.1.pdf.
export const docs = {
	sv: { terms: '/dokument/allmanna-villkor.pdf', privacy: '/dokument/integritetspolicy.pdf' },
	en: { terms: '/dokument/general-terms.pdf', privacy: '/dokument/privacy-policy.pdf' },
};

export const ui = {
	en: {
		nav: [
			{ key: 'services', label: 'Services' },
			{ key: 'pricing', label: 'Pricing' },
			{ key: 'cases', label: 'Case studies' },
			{ key: 'testimonials', label: 'Testimonials' },
			{ key: 'about', label: 'About' },
		],
		cta: 'Let’s talk',
		menu: 'Menu',
		switchLabel: 'På svenska',
		homeAria: 'Hola Gato, back to home',
		tagline: 'Legal strategy & change for curious companies.',
		terms: 'General terms (PDF)',
		privacy: 'Privacy policy (PDF)',
		contact: {
			kicker: '“Is this even allowed?” “Where do we start?” “Who decides?”',
			heading: 'Let’s untangle it.',
			text: 'Tell me where you are, what you’ve tried, or what keeps sliding to the bottom of the to-do list.',
			langNote: 'Svenska? Självklart – skriv på det språk du vill.',
			linkedin: 'Connect on LinkedIn',
			based: 'Based in Sweden · Working everywhere',
		},
	},
	sv: {
		nav: [
			{ key: 'services', label: 'Tjänster' },
			{ key: 'pricing', label: 'Priser' },
			{ key: 'cases', label: 'Uppdrag', note: '(EN)' },
			{ key: 'testimonials', label: 'Omdömen' },
			{ key: 'about', label: 'Om mig' },
		],
		cta: 'Hör av dig',
		menu: 'Meny',
		switchLabel: 'In English',
		homeAria: 'Hola Gato, till startsidan',
		tagline: 'Juridisk strategi och förändring för nyfikna bolag.',
		terms: 'Allmänna villkor (PDF)',
		privacy: 'Integritetspolicy (PDF)',
		contact: {
			kicker: '”Får vi ens göra så här?” ”Var börjar vi?” ”Vem bestämmer?”',
			heading: 'Vi reder ut det.',
			text: 'Berätta var ni står, vad ni har testat eller vad som hela tiden hamnar längst ner på att göra-listan.',
			langNote: 'English? Of course – write in whichever language you like.',
			linkedin: 'Följ mig på LinkedIn',
			based: 'Baserad i Sverige · Jobbar överallt',
		},
	},
} as const;
