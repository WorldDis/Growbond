import Link from 'next/link';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/it-support', 'IT Support'],
  ['/networking', 'Networking'],
  ['/cctv', 'CCTV'],
  ['/hardware', 'Hardware'],
  ['/digital-services', 'Digital'],
  ['/amc', 'AMC'],
  ['/quote', 'Quote'],
  ['/contact', 'Contact'],
  ['/faq', 'FAQ'],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-cyan-400 text-xl">GROWBOND</Link>
        <nav className="hidden md:flex gap-4 text-sm text-slate-200">
          {links.map(([h,l]) => <Link key={h} href={h} className="hover:text-cyan-400">{l}</Link>)}
        </nav>
        <Link href="/contact" className="md:hidden text-cyan-400 text-sm">Contact</Link>
      </div>
    </header>
  );
}
