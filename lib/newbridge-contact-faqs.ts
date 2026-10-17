import type { FaqItem } from "./newbridge-seller-faqs";

export const NEWBRIDGE_CONTACT_FAQS: FaqItem[] = [
  {
    q: "What should I expect during a Newbridge buyer consultation?",
    a: "A no-pressure call about your timeline, budget, and whether you are pursuing Richmond American new construction, 89139 resale, or both. Dr. Jan Duffy explains builder registration rules and how seller-paid representation works in Nevada.",
  },
  {
    q: "Do I need to register Dr. Jan before touring Newbridge models?",
    a: "Yes. Most builders require your agent on the first visit or on their registry. Call (702) 222-1964 before you walk into a Richmond American sales office so you keep independent contract review.",
  },
  {
    q: "Do I need a pre-approval before scheduling a showing?",
    a: "Pre-approval is not required for an initial consult, but it strengthens offers on 89139 resales. Dr. Jan Duffy can introduce lenders during your first meeting if you have not started financing.",
  },
  {
    q: "How quickly does Dr. Jan Duffy respond?",
    a: "Calls, texts, and emails are typically answered within two hours between 9am and 6pm daily. For urgent showing requests, text or call (702) 222-1964.",
  },
  {
    q: "Is there a fee for consultations?",
    a: "Initial consultations are free and without obligation for buyers and sellers in Newbridge and Southwest Las Vegas.",
  },
  {
    q: "Can I schedule online instead of calling?",
    a: "Yes. Use the Calendly options on this page for buyer consults, showings, or listing appointments. Mention Newbridge or ZIP 89139 in the notes so the meeting is tailored to your search.",
  },
];

export const GENERIC_CONTACT_FAQS: FaqItem[] = [
  {
    q: "What should I expect during my first consultation?",
    a: "A no-pressure conversation about your goals, timeline, and budget with honest guidance tailored to your situation.",
  },
  {
    q: "Do I need to be pre-approved before scheduling a showing?",
    a: "Pre-approval helps on offers but is not required for an initial consult.",
  },
  {
    q: "How quickly can you respond to inquiries?",
    a: "Typically within two hours during 9am-6pm daily. Call or text (702) 222-1964 for urgent matters.",
  },
  {
    q: "Do you charge for consultations?",
    a: "No. Initial consultations are free and without obligation.",
  },
];

export function contactFaqsForSite(isNewbridge: boolean): FaqItem[] {
  return isNewbridge ? NEWBRIDGE_CONTACT_FAQS : GENERIC_CONTACT_FAQS;
}
