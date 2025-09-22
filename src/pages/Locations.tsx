import Section from '../components/Section'


export default function Locations() {
return (
<Section>
<h1 className="section-title mb-6">Locations</h1>


<div className="grid md:grid-cols-2 gap-6">
<div className="card p-6">
<h2 className="font-semibold text-xl">Greenwich Village</h2>
<p className="text-neutral-700">123 MacDougal St, New York, NY 10012</p>
<p className="text-neutral-600 mt-2">Sun–Thu: 12pm–10pm · Fri–Sat: 12pm–11pm</p>
<img src="/shop-1.jpg" alt="shop" className="rounded-xl mt-4" />
</div>
<div className="card p-6">
<h2 className="font-semibold text-xl">Williamsburg (Pop‑Up)</h2>
<p className="text-neutral-700">85 N 3rd St, Brooklyn, NY 11249</p>
<p className="text-neutral-600 mt-2">Fri–Sun: 1pm–8pm</p>
</div>
</div>
</Section>
)
}