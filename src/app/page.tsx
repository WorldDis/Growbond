export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Reliable IT Services & Digital Solutions</h1>
      <p className="text-slate-300 max-w-2xl mb-8">GROWBOND delivers IT support, networking, CCTV, hardware supply and digital services for homes and businesses in West Bengal.</p>
      <div className="flex gap-4 flex-wrap">
        <a href="/quote" className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400">Request a Quote</a>
        <a href="/contact" className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500/10">Contact Us</a>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {['IT Support','Networking & Security','Hardware Supply','Digital Services','CCTV Solutions','AMC Enquiry'].map(s=>(
          <div key={s} className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-cyan-400 font-semibold mb-2">{s}</h3>
            <p className="text-sm text-slate-300">Professional, affordable and customer-focused.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
