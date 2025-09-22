import Hero from '../components/Hero'
import Section from '../components/Section'
import FlavorGrid from '../components/FlavorGrid'
import Button from '../components/Button'


export default function Home() {
return (
<>
<Hero />
<Section>
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="section-title">This Week’s Flavors</h2>
<p className="section-subtitle">Small menu, rotating weekly — get them before they’re gone.</p>
</div>
<Button onClick={() => (location.href = '/flavors')}>View All</Button>
</div>
<FlavorGrid />
</Section>
<Section>
<div className="card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
<img src="/ice-cream-logo.svg" className="w-24 h-24" alt="logo" />
<div className="flex-1">
<h3 className="text-2xl font-semibold mb-1">Made Fresh Daily</h3>
<p className="text-neutral-600">We churn in small batches using Hudson Valley dairy and NYC bakeries for mix‑ins. No gums, no shortcuts.</p>
</div>
<Button onClick={() => (location.href = '/about')}>Learn More</Button>
</div>
</Section>
</>
)
}