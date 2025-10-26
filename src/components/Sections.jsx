import React from 'react';
import { Shield, Globe, Bot, PhoneCall, CheckCircle, Star, Users, Lock, Database, Plug, BarChart3, MessageSquare } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-xl border bg-white/80 backdrop-blur hover:shadow-md transition-shadow">
    <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-700 grid place-items-center mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{desc}</p>
  </div>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-600 mt-0.5" size={18} /> <span>{children}</span></li>
);

const Sections = () => {
  return (
    <>
      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Everything you need to launch AI voice agents</h2>
            <p className="mt-4 text-gray-600">Purpose-built for sales, support and operations teams who need delightful, scalable conversations.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Bot} title="Human-like Speech" desc="Ultra-natural voices with real-time turn taking and emotion." />
            <FeatureCard icon={PhoneCall} title="Inbound & Outbound" desc="Answer calls, dial leads, schedule callbacks and more." />
            <FeatureCard icon={Globe} title="Multilingual" desc="Serve customers in 15+ languages with locale-aware flows." />
            <FeatureCard icon={Shield} title="Enterprise-grade" desc="Secure, compliant and reliable with audit-ready logs." />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold text-gray-900">How it works</h2>
              <p className="mt-4 text-gray-600">Launch in minutes. No code required.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
              {[
                { title: '1. Pick a template', desc: 'Choose from ready-made playbooks for sales, support and reminders.' },
                { title: '2. Customize flow', desc: 'Edit prompts, knowledge, CRM fields and actions that fit your business.' },
                { title: '3. Go live', desc: 'Connect your number and start handling calls 24/7 with real-time analytics.' },
              ].map((step, i) => (
                <div key={i} className="p-6 rounded-xl border bg-white">
                  <div className="text-sm font-semibold text-indigo-600">Step {i + 1}</div>
                  <div className="mt-2 text-lg font-semibold text-gray-900">{step.title}</div>
                  <div className="mt-2 text-sm text-gray-600">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Ready-to-use templates</h2>
            <p className="mt-4 text-gray-600">Start faster with proven conversational playbooks.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Lead Qualification', points: ['Capture intent', 'Schedule callbacks', 'CRM sync'] },
              { icon: MessageSquare, title: 'Customer Support', points: ['Answer FAQs', 'Ticketing', 'Escalations'] },
              { icon: BarChart3, title: 'Payment Reminders', points: ['Smart retries', 'WhatsApp follow-up', 'Outcome tracking'] },
            ].map(({ icon, title, points }, i) => (
              <div key={i} className="p-6 rounded-xl border bg-white">
                <div className="h-10 w-10 rounded-lg bg-fuchsia-600/10 text-fuchsia-700 grid place-items-center mb-4">
                  {React.createElement(icon, { size: 20 })}
                </div>
                <div className="text-lg font-semibold text-gray-900">{title}</div>
                <ul className="mt-3 space-y-2">
                  {points.map((p) => (
                    <Bullet key={p}>{p}</Bullet>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Works with your stack</h3>
              <p className="text-sm text-gray-600 mt-1">Plug-and-play integrations and webhooks.</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Plug size={18} /> Easy setup
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Salesforce', 'HubSpot', 'Zendesk', 'Zapier', 'Twilio', 'Slack'].map((name) => (
              <div key={name} className="h-12 rounded-md border bg-white text-gray-700 grid place-items-center text-sm font-semibold">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-gray-600">Start free. Scale as you grow. Only pay for what you use.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white">
              <div className="text-sm font-semibold text-indigo-600">Starter</div>
              <div className="mt-2 text-3xl font-extrabold text-gray-900">Free</div>
              <p className="mt-2 text-sm text-gray-600">Test the waters with a limited number of calls.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {['100 calls/month', '1 agent', 'Basic analytics'].map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> {f}</li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800">Get started</a>
            </div>
            <div className="p-6 rounded-2xl border-2 border-gray-900 bg-white relative">
              <div className="absolute -top-3 right-4 px-2 py-1 text-xs font-semibold bg-yellow-200 text-yellow-900 rounded">Most popular</div>
              <div className="text-sm font-semibold text-indigo-600">Growth</div>
              <div className="mt-2 text-3xl font-extrabold text-gray-900">$49<span className="text-base font-medium text-gray-500">/mo</span></div>
              <p className="mt-2 text-sm text-gray-600">Everything you need to run production AI voice.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {['Unlimited agents', 'Priority routing', 'Advanced analytics', 'CRM integrations'].map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> {f}</li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800">Choose Growth</a>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <div className="text-sm font-semibold text-indigo-600">Enterprise</div>
              <div className="mt-2 text-3xl font-extrabold text-gray-900">Custom</div>
              <p className="mt-2 text-sm text-gray-600">High-volume usage, SSO, SLAs, and dedicated support.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {['SSO & SAML', 'Custom onboarding', 'Dedicated manager'].map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> {f}</li>
                ))}
              </ul>
              <a href="mailto:info@aisa-x.ai" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-md border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50">Contact sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Loved by teams</h2>
            <p className="mt-4 text-gray-600">Real results from real conversations.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { quote: 'We recovered 32% more leads in the first month.', author: 'Priya, Growth @ FinServe' },
              { quote: 'Support CSAT went up while wait times dropped to seconds.', author: 'Rahul, CX @ RetailCo' },
              { quote: 'Integration took an afternoon. Calls went live next day.', author: 'Anita, Ops @ HealthPlus' },
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-xl border bg-white">
                <div className="flex items-start gap-3">
                  <MessageSquare className="text-indigo-600 mt-0.5" size={18} />
                  <div>
                    <div className="text-gray-900 font-medium">“{t.quote}”</div>
                    <div className="mt-2 text-sm text-gray-600">{t.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Security & Compliance</h3>
              <p className="mt-3 text-gray-600">Enterprise-ready from day one.</p>
              <ul className="mt-6 space-y-3">
                <Bullet><strong className="text-gray-900">Encryption</strong> in transit and at rest <Lock className="inline text-gray-500 ml-1" size={16} /></Bullet>
                <Bullet><strong className="text-gray-900">PII redaction</strong> and granular access controls <Shield className="inline text-gray-500 ml-1" size={16} /></Bullet>
                <Bullet><strong className="text-gray-900">Audit logs</strong> and exportable transcripts <Database className="inline text-gray-500 ml-1" size={16} /></Bullet>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50">
              <div className="text-sm font-semibold text-indigo-600">Analytics</div>
              <div className="mt-2 text-3xl font-extrabold text-gray-900">Understand every call</div>
              <p className="mt-3 text-sm text-gray-600">Track intents, outcomes, CSAT, and conversions with powerful filters.</p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'Avg. Handle', value: '2m 14s' },
                  { label: 'CSAT', value: '4.7/5' },
                  { label: 'Conversion', value: '18%' },
                ].map((m) => (
                  <div key={m.label} className="p-4 rounded-lg bg-white border">
                    <div className="text-xl font-bold text-gray-900">{m.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-fuchsia-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl sm:text-4xl font-extrabold">Put AI voice to work for you</h3>
          <p className="mt-3 text-white/80">Launch a production-ready agent in minutes, not months.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-semibold hover:bg-gray-100">Get started</a>
            <a href="mailto:support@aisa-x.ai" className="inline-flex items-center justify-center px-5 py-3 rounded-md ring-1 ring-white/70 text-white font-semibold hover:bg-white/10">Talk to sales</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-gray-600">Answers to common questions about AI voice agents and billing.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { q: 'Can x-voice handle complex conversations?', a: 'Yes. Our agents do real-time intent detection, memory, and can branch into smart flows based on context.' },
              { q: 'Does it integrate with my CRM?', a: 'Absolutely. Connect popular CRMs and webhooks to sync leads, tickets and outcomes automatically.' },
              { q: 'Is my data secure?', a: 'We use encryption in transit and at rest, with strict access controls and audit logging.' },
              { q: 'Which languages are supported?', a: 'We support 15+ languages including English, Hindi, Tamil and more.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border">
                <div className="flex items-start gap-3">
                  <Star className="text-indigo-600 mt-1" size={18} />
                  <div>
                    <div className="font-semibold text-gray-900">{item.q}</div>
                    <div className="mt-2 text-sm text-gray-600">{item.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
