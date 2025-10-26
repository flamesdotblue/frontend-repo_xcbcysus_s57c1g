import React from 'react';
import { BookOpen, Code, Link as LinkIcon, Server, Shield } from 'lucide-react';

const Section = ({ title, children }) => (
  <div className="p-5 rounded-lg border bg-white">
    <div className="text-sm font-semibold text-indigo-600">{title}</div>
    <div className="mt-2 text-sm text-gray-700">{children}</div>
  </div>
);

const Docs = () => {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-2">
              {['Getting started','Authentication','Webhooks','SDKs','Security'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">{item}</a>
              ))}
            </div>
          </aside>
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"><BookOpen size={16}/> Docs</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Developer documentation</h1>
            <p className="text-gray-600 max-w-2xl">Use our APIs, webhooks and SDKs to create, manage and analyze AI voice agents. Secure by default with scoped API keys.</p>

            <div id="getting-started" className="grid md:grid-cols-2 gap-6">
              <Section title="Getting started">
                Install the SDK and create your first agent. Then connect a number and place your first test call.
              </Section>
              <Section title="Authentication">
                Use API keys with fine-grained scopes. Send as Authorization: Bearer <your_key> over HTTPS.
              </Section>
            </div>

            <div id="webhooks" className="grid md:grid-cols-3 gap-6">
              <Section title="Webhooks">
                Receive events for call.start, transcript.ready and outcome.created. Retry with exponential backoff.
              </Section>
              <Section title="SDKs">
                JS and Python SDKs cover common flows. Use REST for everything else.
              </Section>
              <Section title="Security">
                TLS 1.2+, AES-256 at rest, PII redaction and signed webhook secrets.
              </Section>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg border bg-gray-50 flex items-center gap-3 text-sm text-gray-700"><Code size={16}/> REST API reference</div>
              <div className="p-5 rounded-lg border bg-gray-50 flex items-center gap-3 text-sm text-gray-700"><Server size={16}/> Status & uptime</div>
              <div className="p-5 rounded-lg border bg-gray-50 flex items-center gap-3 text-sm text-gray-700"><Shield size={16}/> Compliance</div>
            </div>

            <div className="p-5 rounded-lg border bg-indigo-50 text-indigo-800 flex items-center gap-3 text-sm">
              <LinkIcon size={16}/> Need something specific? Contact support@aisa-x.ai and we’ll help you integrate fast.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
