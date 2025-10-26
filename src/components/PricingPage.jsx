import React from 'react';
import { CheckCircle } from 'lucide-react';

const Tier = ({ badge, name, price, blurb, features, cta, highlighted }) => (
  <div className={`${highlighted ? 'border-2 border-gray-900' : 'border'} p-6 rounded-2xl bg-white relative`}>
    {badge && <div className="absolute -top-3 right-4 px-2 py-1 text-xs font-semibold bg-yellow-200 text-yellow-900 rounded">{badge}</div>}
    <div className="text-sm font-semibold text-indigo-600">{name}</div>
    <div className="mt-2 text-3xl font-extrabold text-gray-900">{price}</div>
    <p className="mt-2 text-sm text-gray-600">{blurb}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> {f}</li>
      ))}
    </ul>
    <a href="#" className={`mt-6 inline-flex w-full justify-center px-4 py-2 rounded-md font-semibold ${highlighted ? 'bg-gray-900 text-white hover:bg-gray-800' : 'border border-gray-300 text-gray-900 hover:bg-gray-50'}`}>{cta}</a>
  </div>
);

const PricingPage = () => {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Pricing</div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Simple, transparent pricing</h1>
          <p className="mt-4 text-gray-600">Start free. Scale as you grow. Only pay for what you use.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Tier name="Starter" price="Free" blurb="Test the waters with a limited number of calls." cta="Get started" features={["100 calls/month","1 agent","Basic analytics"]} />
          <Tier badge="Most popular" highlighted name="Growth" price="$49/mo" blurb="Everything you need to run production AI voice." cta="Choose Growth" features={["Unlimited agents","Priority routing","Advanced analytics","CRM integrations"]} />
          <Tier name="Enterprise" price="Custom" blurb="High-volume usage, SSO, SLAs, and dedicated support." cta="Contact sales" features={["SSO & SAML","Custom onboarding","Dedicated manager"]} />
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
