import Link from 'next/link';

export const metadata = {
  title: 'Start Your Data Quality Diagnosis',
  description: 'Choose a diagnostic path to identify and address your data quality challenges.',
};

export default function JourneyPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold font-heading mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3">
        Begin Your Diagnostic Journey
      </h1>
      <p className="text-center text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
        Clavis helps you connect tangible business problems to underlying data quality issues.
        Select a journey below to start diagnosing and pave the way for data-driven solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Journey Card: Lifecycle Diagnosis */}
        <Link
          href="/journey/lifecycle" // Placeholder link, will be a specific page later
          className="block p-8 rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-card/70 backdrop-blur-md border border-border data-[spotlight-hover=true]"
          data-spotlight-hover="true"
        >
          <div className="flex items-center justify-center mb-6">
            {/* Placeholder for an icon, e.g., <i className="bi bi-diagram-3-fill text-5xl text-accent-1"></i> */}
            <span className="text-5xl">🔄</span>
          </div>
          <h2 className="text-2xl font-semibold font-heading mb-3 text-center text-primary">
            Diagnose Process Pain
          </h2>
          <p className="text-text-secondary text-center text-sm">
            Identify data quality issues impacting your core business processes (e.g., Order to Cash, Procure to Pay).
          </p>
        </Link>

        {/* Journey Card: KPI Assessment */}
        <Link
          href="/journey/kpi" // Placeholder link
          className="block p-8 rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-card/70 backdrop-blur-md border border-border data-[spotlight-hover=true]"
          data-spotlight-hover="true"
        >
          <div className="flex items-center justify-center mb-6">
            {/* Placeholder for an icon, e.g., <i className="bi bi-graph-up-arrow text-5xl text-accent-2"></i> */}
            <span className="text-5xl">📊</span>
          </div>
          <h2 className="text-2xl font-semibold font-heading mb-3 text-center text-primary">
            Assess KPI Reliability
          </h2>
          <p className="text-text-secondary text-center text-sm">
            Uncover data quality factors affecting the accuracy and trustworthiness of your Key Performance Indicators.
          </p>
        </Link>

        {/* Journey Card: Strategic Initiative / AI Readiness */}
        <Link
          href="/journey/strategy" // Placeholder link
          className="block p-8 rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-card/70 backdrop-blur-md border border-border data-[spotlight-hover=true]"
          data-spotlight-hover="true"
        >
          <div className="flex items-center justify-center mb-6">
            {/* Placeholder for an icon, e.g., <i className="bi bi-lightbulb-fill text-5xl text-accent-3"></i> */}
            <span className="text-5xl">💡</span>
          </div>
          <h2 className="text-2xl font-semibold font-heading mb-3 text-center text-primary">
            Evaluate Strategic Readiness
          </h2>
          <p className="text-text-secondary text-center text-sm">
            Assess data quality prerequisites for strategic initiatives like AI implementation or digital transformation.
          </p>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <Link href="/explore" className="text-accent-blue-light hover:underline">
          Or, explore Data Quality Dimensions & Concepts &rarr;
        </Link>
      </div>
    </div>
  );
}
