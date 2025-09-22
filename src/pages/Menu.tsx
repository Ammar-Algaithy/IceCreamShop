import Section from '../components/Section'


export default function Menu() {
return (
<Section>
<h1 className="section-title mb-2">Menu</h1>
<p className="section-subtitle mb-8">Scoops, pints, sundaes, shakes, and floats.</p>


<div className="grid md:grid-cols-2 gap-6">
<div className="card p-6">
<h2 className="font-semibold text-xl mb-3">Scoops</h2>
<ul className="space-y-2 text-neutral-700">
<li>Single Scoop — $5.50</li>
<li>Double Scoop — $7.50</li>
<li>Kids Scoop — $3.50</li>
</ul>
</div>
<div className="card p-6">
<h2 className="font-semibold text-xl mb-3">Pints</h2>
<ul className="space-y-2 text-neutral-700">
<li>Pint (take‑home) — $11.00</li>
<li>2 for $20 (Fri Only)</li>
</ul>
</div>
<div className="card p-6">
<h2 className="font-semibold text-xl mb-3">Sundaes</h2>
<ul className="space-y-2 text-neutral-700">
<li>Classic Hot Fudge — $8.50</li>
<li>Strawberry Shortcake — $9.00</li>
<li>Brooklyn Blackout — $9.50</li>
</ul>
</div>
<div className="card p-6">
<h2 className="font-semibold text-xl mb-3">Shakes & Floats</h2>
<ul className="space-y-2 text-neutral-700">
<li>Vanilla Bean Shake — $7.50</li>
<li>Chocolate Malt — $8.00</li>
<li>Root Beer Float — $6.50</li>
</ul>
</div>
</div>
</Section>
)
}