const steps = [
  {
    number: "01",
    title: "Register & Verify",
    description: "Create your profile as a developer or tax buyer. We verify credentials and eligibility before any matching begins.",
  },
  {
    number: "02",
    title: "Match",
    description: "Developers list ITC projects with key details. Qualified buyers browse and express interest in matching opportunities.",
  },
  {
    number: "03",
    title: "Due Diligence",
    description: "We guide both parties through documentation, legal review, and compliance checks. Our team handles the complexity.",
  },
  {
    number: "04",
    title: "Close",
    description: "Transfer agreement executed. Credits delivered. Funds transferred. Clean, compliant, and complete.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1F3D] mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A structured, four-step process that takes you from introduction to close—with expert support at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-black text-emerald-100 mb-4">{step.number}</div>
              <h3 className="text-lg font-bold text-[#0F1F3D] mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
