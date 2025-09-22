import Section from '../components/Section'
import FlavorGrid from '../components/FlavorGrid'


export default function Flavors() {
return (
<Section>
<h1 className="section-title mb-2">Flavors</h1>
<p className="section-subtitle mb-8">Core favorites and rotating seasonal specials.</p>
<FlavorGrid />
</Section>
)
}