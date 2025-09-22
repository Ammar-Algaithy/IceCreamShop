import Section from './Section'


export default function Footer() {
return (
<footer className="mt-20 border-t border-neutral-200/60 bg-white">
<Section className="py-10">
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
<div>
<h3 className="font-semibold mb-3">Sweet Borough Creamery</h3>
<p className="text-neutral-600">Small‑batch ice cream handmade in NYC. Seasonal flavors inspired by the five boroughs.</p>
</div>
<div>
<h3 className="font-semibold mb-3">Visit Us</h3>
<p>123 MacDougal St<br/>New York, NY 10012</p>
<p className="mt-2">Daily: 12pm – 10pm</p>
</div>
<div>
<h3 className="font-semibold mb-3">Links</h3>
<ul className="space-y-2 text-neutral-700">
<li><a href="/menu">Menu</a></li>
<li><a href="/flavors">Flavors</a></li>
<li><a href="/locations">Locations</a></li>
<li><a href="/about">About</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-3">Contact</h3>
<p>hello@sweetborough.com<br/>(212) 555‑0199</p>
<p className="text-neutral-500 mt-2">© {new Date().getFullYear()} Sweet Borough LLC</p>
</div>
</div>
</Section>
</footer>
)
}