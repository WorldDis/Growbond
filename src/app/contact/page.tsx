'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Contact</h1>
      <form onSubmit={(e)=>{e.preventDefault(); setStatus('Thank you! We will reach out soon.');}} className="space-y-4">
        <input required placeholder="Name" className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white" />
        <input required type="email" placeholder="Email" className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white" />
        <input placeholder="Phone" className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white" />
        <textarea required placeholder="Message" className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white" rows={4} />
        <button className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-lg font-semibold">Send</button>
      </form>
      {status && <p className="text-green-400 mt-4">{status}</p>}
      <p className="text-sm text-slate-400 mt-6">Fallback: email info@growbond.in or WhatsApp +91-XXXXXXXXXX.</p>
    </section>
  );
}
