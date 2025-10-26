import React from 'react';
import { Plug, Webhook, Database, Workflow, CheckCircle } from 'lucide-react';

const StackItem = ({ name }) => (
  <div className="h-14 rounded-lg border bg-white text-gray-800 grid place-items-center text-sm font-semibold">
    {name}
  </div>
);

const IntegrationsPage = () => {
  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-8 flex-col lg:flex-row">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium">
              <Plug size={16} /> Integrations
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Works with your stack</h1>
            <p className="mt-4 text-gray-600">Connect CRMs, helpdesks, telephony, and data warehouses. Use webhooks and APIs to fit any workflow.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {['One-click OAuth for popular tools','Inbound & outbound webhooks','Secure API with keys & scopes','Event streams for analytics'].map((f)=>(
                <li key={f} className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> {f}</li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-[520px] p-6 rounded-2xl border bg-white">
            <div className="text-sm font-semibold text-indigo-600 flex items-center gap-2"><Workflow size={16}/> Popular integrations</div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Salesforce','HubSpot','Zendesk','Freshdesk','Zapier','Make','Twilio','MessageBird','Slack'].map((n)=> (
                <StackItem key={n} name={n} />
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-600 flex items-center gap-2"><Database size={16}/> Export to BigQuery, Snowflake & Redshift</div>
            <div className="mt-2 text-sm text-gray-600 flex items-center gap-2"><Webhook size={16}/> Webhooks for call events and outcomes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsPage;
