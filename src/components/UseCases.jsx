import React from 'react';
import { Briefcase, Users, Headphones, Calendar, TrendingUp, HeartHandshake, CheckCircle } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mr-2 mb-2">{children}</span>
);

const Card = ({ icon: Icon, title, desc, points }) => (
  <div className="p-6 rounded-xl border bg-white/80 backdrop-blur hover:shadow-md transition-shadow">
    <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-700 grid place-items-center mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {points.map((p) => (
        <li key={p} className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} />{p}</li>
      ))}
    </ul>
  </div>
);

const UseCases = () => {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Use cases</div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Purpose-built AI voice for every team</h1>
          <p className="mt-4 text-gray-600">Launch agents that qualify, support, and retain — all with real-time analytics and integrations.</p>
          <div className="mt-6">
            <Pill>Lead gen</Pill>
            <Pill>Support</Pill>
            <Pill>Collections</Pill>
            <Pill>NPS/CSAT</Pill>
            <Pill>Appointment</Pill>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={Users} title="Lead Qualification" desc="Call new leads in seconds, capture intent, and route hot prospects." points={["Instant callbacks","CRM enrichment","Scheduling"]} />
          <Card icon={Headphones} title="Customer Support" desc="Deflect tickets with natural answers, escalate when needed." points={["Smart FAQ","Ticket creation","Warm transfer"]} />
          <Card icon={Calendar} title="Appointment Booking" desc="Automate reminders and rescheduling across time zones." points={["Two-way SMS","Calendar sync","No-show recovery"]} />
          <Card icon={TrendingUp} title="Payment & Collections" desc="Drive on-time payments with respectful follow-ups." points={["Smart retries","WhatsApp links","Outcome tracking"]} />
          <Card icon={HeartHandshake} title="Retention & NPS" desc="Run post-interaction surveys that actually get answers." points={["CSAT/NPS","Sentiment","At-risk alerts"]} />
          <Card icon={Briefcase} title="Operations" desc="Verify addresses, confirm orders, and capture logistics updates." points={["IVR replacement","Language routing","Bulk campaigns"]} />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
