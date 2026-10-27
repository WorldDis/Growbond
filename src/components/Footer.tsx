import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-cyan-400 font-bold mb-2">GROWBOND</h3>
          <p className="text-sm">IT Services, Networking, Technical Support, Hardware Supply and Digital Solutions.</p>
          <p className="text-sm mt-2">Jamuria, Paschim Bardhaman, West Bengal, India</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            {['/about','/it-support','/networking','/cctv','/hardware','/digital-services','/contact','/faq','/privacy','/terms'].map(p=><li key={p}><Link href={p} className="hover:text-cyan-400">{p.slice(1)}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
          <p className="text-sm">Email: info@growbond.in</p>
          <p className="text-sm">WhatsApp: +91-XXXXXXXXXX</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 border-t border-slate-800">
        © 2026 GROWBOND. All rights reserved.
      </div>
    </footer>
  );
}
