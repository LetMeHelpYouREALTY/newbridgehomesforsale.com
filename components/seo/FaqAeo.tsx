type Faq = { question: string; answer: string };

export default function FaqAeo({
  title = "Frequently asked questions",
  faqs,
}: {
  title?: string;
  faqs: Faq[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="mb-16 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-slate-200 bg-white p-5"
          >
            <summary className="cursor-pointer list-none font-semibold text-slate-900">
              <h3 className="inline text-lg font-semibold">{faq.question}</h3>
            </summary>
            <p className="mt-3 text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
